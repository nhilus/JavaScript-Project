/*import Rating from "../components/rating.js";
/*async function StoreData(){
    const response = await fetch("https://fakestoreapi.com/products/category/electronics?limit=10")
    const storeProducts = await response.json();
    storeProducts.forEach(product => localStorage.setItem('storeProducts', JSON.stringify(product)));
    // console.log("async await: ", storeProducts);
};

StoreData();



console.log("async await: ", storeProducts);

*/
/*
const productCardTemplate = document.querySelector("[data-product-tempate")
const productCardContainer = document.querySelector("[data-products-card-container]");
searchInput = document.querySelector("[data-search]");

let products = [];
let rating = Rating;

searchInput.addEventListener("input", (e)=>{ 
    const value = e.target.value;
    products.

})

fetch("https://fakestoreapi.com/products/category/electronics?limit=10")
    .then(res =>res.json)
    .then(data=> {
        product = data.map(product => {
            const card = productCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            header.textContent = product.image;
            body.textContent = product.name, product.price,rating.render();
            productCardContainer.append(card)
            return {name: product.name, 
                    image: product.image, 
                    price: product.price,
                    rating: rating.render(), 
                    element: card}
        });
    })*/