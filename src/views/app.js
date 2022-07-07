
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
                                    <button class="btn btn-primary" id="btn">Add to cart</button>
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
    getItems: function () {
        return this.items;
    },
    setItems: function (items) {
        this.items = items;
        for (let i = 0; i < this.items.length; i++) {
            let _item = this.items[i];
            this.total += _item.total;
        }
    },
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
    containsItem: function (id) {
        if (this.items === undefined) {
            return false;
        }
        for (let i = 0; i < this.items.length; i++) {
            let _item = this.items[i];
            if (id == _item.id) {
                return true;
            }
        }
        return false;
    },
};

document.addEventListener('DOMContentLoaded', function () {
    let cards = document.querySelectorAll('button');
    console.log(cards),

     [].forEach.call(cards, function (product) {
         product.addEventListener('click', function (e) {
            let item = helpers.itemData(product);
            cart.addItem(item);
        });
    });
});
