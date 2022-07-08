
import { Rating } from "../components/rating";


const productsEl = document.querySelector(".products");
const url = ('https://fakestoreapi.com/products/category/electronics?limit=10');
let products = [];
const ratingHtml = Rating.render();


async function getData(){
    const response = await fetch(url);
    const data =  await response.json();
    data.forEach(product => {
        products.push(product);
    })
    localStorage.setItem("productDetails", JSON.stringify(products));
};

console.log(products);

function renderProducts() {
    const productcards = JSON.parse(localStorage.getItem("productDetails"));
    productcards.forEach((product) => {
        productsEl.innerHTML +=
        `<div class="products" id="productCards">
                <div class="product" id="productCard">
                    <a href="/#/product/${product.id}" style="width:100%; text-align:center">
                        <img id="image" src="${product.image}" alt="${product.title}"/>
                    </a>
                    <div class="card-text-container">
                        <div class="product-title">
                            <a href="/#/product/">
                                ${product.title}
                            </a>
                        </div>
                        <div class="product-price">
                            ${product.price}€
                        </div>
                        <div class="components-container">
                            ${ratingHtml}
                            <div class="add-to-cart-btn" id="add-to-cart">
                                <button class="btn btn-primary addtocart" id="(${product.id})">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
})};

(async () =>{
    await getData();
})()

renderProducts();

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e)=>{ 
    const value = e.target.value.toLowerCase();
    console.log(value)
    products.forEach(product => {
        const isVisible = product.name?.toLowerCase().includes(value);
        if(!isVisible){
            let searchedCard =  document.getElementById("productCards")
            searchedCard.style.display = "none";
            console.log(searchedCard)
            }
    });
});



let cartId = "cart";
let cartFunctions = {
    saveCart: function (object) {
        let stringified = JSON.stringify(object);
        localStorage.setItem(cartId, stringified);
        return true;
    },
};




let cart = [];

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByClassName('addtocart');
    let productlist = JSON.parse(localStorage.getItem("productDetails"));
    
    console.log(productlist);
    for(let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        console.log(button);
        button.addEventListener('click', function (event) { 
            console.log(button.id); 
            for(let j = 0; j < productlist.length; j++) {
            if(button.id === productlist[j].id) {
                cart.push(productlist[j]);
                console.log()
            }}});
        }
    });
  
    
    //  [].forEach.call(cards, function (product) {
    //      product.addEventListener('click', function (e) {
    //         let item = helpers.itemData(product);
    //         cart.addItem(item);
    //     });
    // });

