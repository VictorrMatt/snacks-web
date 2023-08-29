class Products {
  /*  This method takes a products object as input and constructs the HTML structure for displaying the products and their categories. It generates two main parts: the list of categories and the list of products within those categories. It returns a concatenated HTML string representing the structured content.  */
  estructureHtmlFromProductsData(products) {
    let categoriesList = `<div id="categories-list"><ul><li id="TUDO" class="category active" onclick="showAllProductsInDisplay()"><p>TUDO</p></li>`;
    let categories = `<div id="products-list">`;
    for (const category in products) {
      categoriesList += `<li id="${category}" class="category" onclick="otherCategoriesGetOff()"><p>${category}</p></li>`;
      categories += `<ul id="${category}">`;
      for (const product of products[category]) {
        categories += `
          <li class="product">
            <img src="${product[3]}" alt="${product[0]}">
            <div class="product-texts">
              <div class="product-name-value">
                <h3 class="product-name">${product[0]}</h3>
                <p class="product-value">${product[2]}</p>
              </div>  
              <p class="product-category">${product[1]}</p>
            </div>
          </li>
        `;
      }
      categories += `</ul>`;
    }
    categories += `</main>`;
    categoriesList += `</ul></div>`;

    return `<main id="products-content" class="visible"><div><h2 class="section-title">Cardapio</h2></div>${categoriesList.concat(
      categories
    )}<footer>
    <div class="image-credits">image by:&nbsp;<span class="author"><a href="https://unsplash.com/pt-br/@sofiameli" target="_blank">Irina</a></span></div>
    <div class="footer-social-icons">
    <div class="whatsapp">
      <a href="https://wa.me/5587991523388" target="_blank">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.77042 11.6756C8.93706 10.3577 10.6499 8.56645 12.0092 8.76521L12.007 8.76304C13.3299 9.01443 14.3771 11.2913 14.9676 12.3151C15.386 13.0579 15.1143 13.8106 14.7241 14.1281C14.1976 14.5525 13.3744 15.1379 13.5471 15.7258C13.8542 16.7708 17.5 20.4167 19.2932 21.4531C19.9719 21.8454 20.4641 20.8107 20.8844 20.2806C21.1897 19.8729 21.943 19.6292 22.6841 20.0317C23.791 20.6763 24.8337 21.4254 25.7979 22.2688C26.2795 22.6713 26.3925 23.2661 26.0588 23.8948C25.4711 25.0021 23.7713 26.4623 22.5374 26.1656C20.3823 25.6474 11.6667 22.2688 8.86715 12.4804C8.70971 12.0174 8.74935 11.8423 8.77042 11.6756Z"
            fill="white"
            fill-opacity="0.7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5 33.5417C15.7156 33.5417 14.7283 33.3502 13.125 32.8125L10.0544 34.3478C8.11505 35.3175 5.83331 33.9073 5.83331 31.739V28.4375C2.69287 25.5092 1.45831 22.1327 1.45831 17.5C1.45831 8.64044 8.64041 1.45834 17.5 1.45834C26.3595 1.45834 33.5416 8.64044 33.5416 17.5C33.5416 26.3595 26.3595 33.5417 17.5 33.5417ZM8.74998 27.1692L7.82241 26.3043C5.3825 24.0293 4.37498 21.4858 4.37498 17.5C4.37498 10.2513 10.2512 4.37501 17.5 4.37501C24.7488 4.37501 30.625 10.2513 30.625 17.5C30.625 24.7488 24.7488 30.625 17.5 30.625C16.0625 30.625 15.3883 30.4952 14.0524 30.0472L12.904 29.6621L8.74998 31.739V27.1692Z"
            fill="white"
            fill-opacity="0.7"
          />
        </svg>
      </a>
    </div>
    <div class="instagram">
      <a href="https://www.instagram.com/sampetiscaria/" target="_blank">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_28_163)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2719 0.214776C7.4231 0.343314 4.95392 1.03981 2.96011 3.0252C0.959341 5.02102 0.271497 7.49998 0.14264 10.3191C0.0625387 12.0787 -0.40585 25.372 0.952378 28.8582C1.86831 31.2101 3.67227 33.0184 6.04569 33.9373C7.15316 34.3681 8.41739 34.6597 10.2719 34.7448C25.7783 35.4466 31.5264 35.0645 33.9503 28.8582C34.3804 27.7535 34.6764 26.4903 34.7583 24.6404C35.467 9.09424 34.6434 5.72451 31.9409 3.0252C29.7973 0.886946 27.2759 -0.568611 10.2719 0.214776ZM10.4146 31.6182C8.71687 31.5418 7.79572 31.2589 7.18104 31.0209C5.63475 30.4199 4.47329 29.2633 3.87602 27.726C2.84168 25.0771 3.18473 12.4959 3.27702 10.4601C3.36757 8.46605 3.77155 6.64359 5.17854 5.23663C6.91985 3.49961 9.16961 2.64832 24.488 3.33965C26.487 3.42997 28.3137 3.83313 29.7241 5.23663C31.4655 6.97362 32.3291 9.2407 31.6257 24.5003C31.549 26.1939 31.2652 27.1128 31.0267 27.726C29.4508 31.7645 25.8253 32.3252 10.4146 31.6182ZM24.6569 8.20684C24.6569 9.35675 25.592 10.2918 26.7465 10.2918C27.901 10.2918 28.8378 9.35675 28.8378 8.20684C28.8378 7.05695 27.901 6.12274 26.7465 6.12274C25.592 6.12274 24.6569 7.05695 24.6569 8.20684ZM8.50967 17.4789C8.50967 22.4051 12.513 26.399 17.4513 26.399C22.3897 26.399 26.393 22.4051 26.393 17.4789C26.393 12.5528 22.3897 8.56146 17.4513 8.56146C12.513 8.56146 8.50967 12.5528 8.50967 17.4789ZM11.6475 17.4789C11.6475 14.2829 14.2456 11.6898 17.4513 11.6898C20.6571 11.6898 23.2552 14.2829 23.2552 17.4789C23.2552 20.6768 20.6571 23.2707 17.4513 23.2707C14.2456 23.2707 11.6475 20.6768 11.6475 17.4789Z"
              fill="white"
              fill-opacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_28_163">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  </div></main>`;
  }
}

module.exports = new Products();
