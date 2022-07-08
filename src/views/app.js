
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
                    <div class="product">
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
                                    <button class="btn btn-primary" id="(${product.id})">Add to cart</button>
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



let cartId = "cart";
let localAdapter = {
    saveCart: function (object) {
        let stringified = JSON.stringify(object);
        localStorage.setItem(cartId, stringified);
        return true;
    },
};

let storage = localAdapter;
let helpers = {
    itemData: function (object) {
        let item = {
            id: object.id,
            title: object.title,
            price: object.price,
        };
        return item;
    },
};


let cart = {
    items: [],
    addItem: function (item) {
        if (this.containsItem(item.id) === false) {
            this.items.push({
                id: item.id,
                title: item.title,
                price: item.price,
            });
            storage.saveCart(this.items);
        }
    },
};

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByClassName('add-to-cart-btn');
    let productlist = JSON.parse(localStorage.getItem("productDetails"));
    
    console.log(productlist);
    for(let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        console.log(button);
        button.addEventListener('click', function (event) {  
            for(let j = 0; j < productlist.length; j++) {
            if(button.id === productlist[j].id) {
                console.log('hi')
            }}});
        }
    });
  
    
    //  [].forEach.call(cards, function (product) {
    //      product.addEventListener('click', function (e) {
    //         let item = helpers.itemData(product);
    //         cart.addItem(item);
    //     });
    // });

