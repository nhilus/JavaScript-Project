/*

import Rating from "./rating";

const HomeScreen = {
    render : async () => {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics",{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok){
            return `<div> Error getting data </div>`;
        }

        const products = await response.json();
        const rating = Rating;
        
        return `
        <ul class="products">
            ${products.map((product) =>{
                return `
                <li>
                    <div class="product">
                        <a href="/#/product/${product.id}" style="width:100%; text-align:center">
                            <img src="${product.image}" alt="${product.title}"/>
                        </a>
                        <div class="card-text-container">
                            <div class="product-title">
                                <a href="/#/product/">
                                    ${product.title}
                                </a>
                            </div>
                            <div class="product-category">
                                ${product.category}
                            </div>
                            <div class="product-price">
                                ${product.price}€
                            </div>
                            <div class="components-container">
                                ${rating.render()}
                                <div class="add-to-cart-btn">
                                    <button class="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            `}).join('\n')}
        </ul>
        `
    }
}

export default HomeScreen;

*/

//import Rating from "../components/rating.js";
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
   

})

fetch("https://fakestoreapi.com/products/category/electronics?limit=10")
    .then(res =>res.json)
    .then(data=> {
        products = data.map(product => {
            let myImage = new Image(100, 200);
            myImage.src = product.image;
            document.body.appendChild(myImage);
            const card = productCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            header = document.appendChild(myImage);
            body.textContent = product.name, product.price,rating.render();
            productCardContainer.append(card)
            return {name: product.name, 
                    image: product.image, 
                    price: product.price,
                    rating: rating.render(), 
                    element: card}
        });
    });*/
