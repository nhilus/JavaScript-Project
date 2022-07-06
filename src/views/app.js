
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
        `<div class="products">
                <div>
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
                            <div class="product-price">
                                ${product.price}€
                            </div>
                            <div class="components-container">
                                ${ratingHtml}
                                <div class="add-to-cart-btn" id="add-to-cart">
                                    <button class="btn btn-primary">Add to cart</button>
                                </div>
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


let cart = [];

function addToCart(id) {

    if(cart.some((item) => item.id === id)) {
        alert("Product already added to cart");
    } else {
        const item = cart.find((product) => product.id === id);
        cart.push({
            ...item,
            numberOfUnits : 1
    });
    }
    console.log(cart);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

document.getElementById ("add-to-cart").addEventListener ("onclick", addToCart());