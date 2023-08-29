let productsList = document.querySelectorAll("#products-list ul");
let categoriesList = document.querySelectorAll(".category");

// TOGGLE MOBILE NAV
/* This function toggles the "visible" class on a list of HTML elements, effectively showing or hiding them. The list of targeted elements includes the menu button, close button, main content, navigation list, navigation bar, mobile navigation, logo, image credits in the footer, and a "developed by" section. */
function toggleVisibleClass() {
  let tags = [
    "#menu-button",
    "#close-button",
    "main",
    "nav ul",
    "nav",
    "#nav-main-mobile",
    "#logo",
    "footer .image-credits",
    "#developed-by",
  ];

  for (let each of tags) {
    let element = document.querySelector(each);
    if (element) {
      element.classList.toggle("visible");
    }
  }
}

/* This function adds the "active" class to a specific section based on the currently active main section. It uses a mapping of section IDs to route names to determine which section to mark as active. */
function toggleBetweenSectionsActives() {
  let mainSection = document.querySelector("main");

  let routes = {
    "home-content": "home",
    "products-content": "catalog",
    "gallery-content": "gallery",
    "contact-content": "contact",
  };

  document
    .getElementById(routes[mainSection.getAttribute("id")])
    .classList.add("active");
}

// CATEGORIES
/* When a category is clicked, this function hides products in other categories by modifying their display style to "none". It also calls */
function otherCategoriesGetOff() {
  let categoryClicked = event.target;
  toggleBetweenCategories(categoryClicked);

  let product = event.target.textContent;
  this.turnAllProductsDisplayNone();
  productsList.forEach((each) => {
    if (each.getAttribute("id") == product) {
      each.style.display = "block";
    }
  });
}

/* This function hides all products across all categories by setting their display style to "none". */
function turnAllProductsDisplayNone() {
  productsList.forEach((each) => {
    each.style.display = "none";
  });
}

/* This function displays all products in all categories by modifying their display style to "block". It also calls toggleBetweenCategories(). */
function showAllProductsInDisplay() {
  toggleBetweenCategories(document.getElementById("TUDO"));
  productsList.forEach((each) => {
    each.style.display = "block";
  });
}

/* This function removes the "active" class from all category elements, effectively turning off their highlighting. */
function turnAllCategoriesOff() {
  categoriesList.forEach((each) => {
    each.classList.remove("active");
  });
}

/* This function toggles the "active" class on the clicked category button, highlighting the currently selected category. It turns off the "active" class on other categories. */
function toggleBetweenCategories(currentTag) {
  let categoryButton = undefined;
  if (!currentTag.getAttribute("id")) {
    categoryButton = currentTag.textContent;
  } else {
    categoryButton = currentTag.getAttribute("id");
  }

  turnAllCategoriesOff();
  categoriesList.forEach((each) => {
    if (each.getAttribute("id") == categoryButton) {
      each.classList.add("active");
    }
  });
}

// BACKGROUND
/* This function updates the background image and styles of the body tag based on the active section. It sets a background image, position, size, and a gradient overlay for a visually appealing effect. */
function toggleBackground() {
  let mainTag = document.querySelector("main");
  let bodyTag = document.querySelector("body");

  const bgRoutes = {
    "home-content": "/images/sergey-kotenev-JHWfH8V2INk-unsplash.jpg",
    "products-content": "/images/irina-2Q8bo_6lu1Y-unsplash.jpg",
    "gallery-content": "/images/darya-tryfanava-UCNaGWn4EfU-unsplash.jpg",
    "contact-content": "/images/freestocks-mw6Onwg4frY-unsplash.jpg",
  };

  bodyTag.style.backgroundImage = `url(${
    bgRoutes[mainTag.getAttribute("id")]
  })`;
  bodyTag.style.backgroundPosition = "center";
  bodyTag.style.backgroundSize = "cover";
  bodyTag.style.backgroundRepeat = "no-repeat";
  bodyTag.style.backdropFilter = "blur(3px)";
  bodyTag.style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${
    bgRoutes[mainTag.getAttribute("id")]
  })`;
}

// EXECUTE
/* The last two lines of code call toggleBackground() and toggleBetweenSectionsActives() functions, presumably to set the initial background and active section based on the main content section ID. */
toggleBackground();
toggleBetweenSectionsActives();
