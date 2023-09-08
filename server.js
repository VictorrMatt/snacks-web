const express = require("express");
const app = express();
const path = require("path");
const products = require("./public/js/products");
const fs = require("fs").promises;

app.use(express.json());
app.use(express.static(__dirname + "/public"));

const staticProducts = require("./public/products/products.json");
let apiData = null; // Initialize to null since data hasn't been fetched yet

async function fetchApiData() {
  try {
    const response = await fetch(
      "https://snacks-api.onrender.com/v1/snacks/products"
    );
    apiData = await response.json();
    console.log("Produtos recebidos via API.");
  } catch (error) {
    console.error("Erro ao consultar a API:", error);
    apiData = null; // Set to null in case of an error
  }
}

// Fetch data from the API when the server starts
fetchApiData();

async function getPageContentAndStyle(route, stylePath, homeContent = false) {
  const base = await fs.readFile(path.join(__dirname, "index.html"), "utf-8");

  const routes = {
    "/": "/pages/home.html",
    "/catalog": "/pages/catalog.html",
    "/gallery": "/pages/gallery.html",
    "/contact": "/pages/contact.html",
  };

  let content = undefined;
  if (!homeContent) {
    content = await fs.readFile(path.join(__dirname, routes[route]), "utf-8");
  } else {
    content = homeContent;
  }
  const homeStyle = await fs.readFile(path.join(__dirname, stylePath), "utf-8");

  return base
    .replace("{{content}}", content)
    .replace("{{css}}", `<style>${homeStyle}</style>`);
}

app.get("/", async (req, res) => {
  let homeContent = await getPageContentAndStyle(
    "/",
    "/public/sections-css/home.css"
  );
  res.send(homeContent);
});

app.get("/catalog", async (req, res) => {
  // Check if apiData is available, if not, use staticProducts
  const productsData = apiData || staticProducts;

  // Format HTML using the selected data
  const formatedHtml = products.estructureHtmlFromProductsData(productsData);

  let catalogContent = await getPageContentAndStyle(
    "/catalog",
    "/public/sections-css/catalog.css",
    formatedHtml
  );

  res.send(catalogContent);
});

app.get("/gallery", async (req, res) => {
  let galleryContent = await getPageContentAndStyle(
    "/gallery",
    "/public/sections-css/gallery.css"
  );

  res.send(galleryContent);
});

app.get("/contact", async (req, res) => {
  let contactContent = await getPageContentAndStyle(
    "/contact",
    "/public/sections-css/contact.css"
  );

  res.send(contactContent);
});

app.listen(3000);
