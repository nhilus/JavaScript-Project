/*import HomeScreen from "../components/home-screen.js";


const router= async () => {
    const main = document.getElementById("main-container");
    main.innerHTML = await HomeScreen.render();

};

window.addEventListener("load", router);
*/

import Rating from "../components/rating";


const productCardTemplate = document.querySelector("[data-product-template")
const productCardContainer = document.querySelector("[data-products-card-container]");
const searchInput = document.querySelector("[data-search]");



let products = []

const ratingHtml = Rating.render()

searchInput.addEventListener("input", (e)=>{ 
    const value = e.target.value.toLowerCase();
    products.forEach(product => {
        const isVisible = 
        product.name.toLowerCase().includes(value) || 
        product.category.toLowerCase().includes(value);
        product.element.classList.toggle("hide", !isVisible);
   })

})

fetch("https://fakestoreapi.com/products/category/electronics?limit=10")
    .then(res =>res.json())
    .then(data => {
        products = data.map(product => {

            const card = productCardTemplate.content.cloneNode(true).children[0];
            const image = card.querySelector("[data-image]");
            const body = card.querySelector("[data-body]");
            const rating = card.querySelector("[data-rating]");

            let productImage = new Image(150, 200);
            productImage.src = product.image;
            image.appendChild(productImage);


            body.textContent = [product.title,
                                product.category,
                                product.price,
                                ]

            rating.insertAdjacentHTML("beforebegin",
                ratingHtml);                

            productCardContainer.append(card);

            return {title: product.title,
                    category: product.category, 
                    image: product.image, 
                    price: product.price,
                    element: card}
        })
    })
