import {Rating} from "../components/rating";
import {button} from "../components/add-to-cart-button";

const productCardTemplate = document.querySelector("[data-product-template");
const productCardContainer = document.querySelector("[data-products-card-container]");
const searchInput = document.querySelector("[data-search]");
const url = ('https://fakestoreapi.com/products/category/electronics?limit=10');
let products = [];
const ratingHtml = Rating.render();
const buttonHtml = button.render();


// turn into api component


async function getData(){
    const response = await fetch(url);
    const data =  await response.json();
    data.forEach(product => {
        products.push(product);
    })
    localStorage.setItem("productDetails", JSON.stringify(products));
};

console.log(products);

//search bar filter function

searchInput.addEventListener("input", (e)=>{ 
    const value = e.target.value.toLowerCase();
    console.log(value)
    productCards.forEach(product => {
        const isVisible = product.name?.toLowerCase().includes(value);
        product.element.toggle("hide", !isVisible);
    });
});

// turn into card compopnent

function renderProducts() {
    const productcards = JSON.parse(localStorage.getItem("productDetails"));

    productcards.forEach(product => {

    const card = productCardTemplate.content.cloneNode(true).children[0];
    const image = card.querySelector("[data-image]");
    const body = card.querySelector("[data-body]");
    const rating = card.querySelector("[data-rating]");
    const button = card.querySelector("[data-button]");

    let productImage = new Image();
    productImage.src = product.image;
    image.appendChild(productImage);

    body.textContent = [product.title,
                        product.price
                        ]
    rating.insertAdjacentHTML("beforebegin", ratingHtml);
    button.insertAdjacentHTML("beforebegin", buttonHtml);                 
    productCardContainer.append(card);

    return {title: product.title, 
            image: product.image, 
            price: product.price,
            element: card}
    });
};

//anonymous function immediately-invoked

(async () =>{
    await getData();
    renderProducts();
})()

/*
function renderProducts() {
    const productcards = JSON.parse(localStorage.getItem("productDetails"));
    productcards.forEach((product) => {
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
                                <div class="add-to-cart-btn" onclick="addToCart(${product.id})">
                                    <button class="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ).join('\n')}
        </div>
        `;
})};
/*
(async () =>{
    await getData();
    renderProducts();
})()

renderProducts();



function addToCart(id) {
    if(cart.some((item) => item.id === id)) {
        alert('Product already added to cart');
} else {
    const item = cart.find((product) => product.id === id);
    cart.push({
        ...item,
        numberOfUnits : 1
    });
}

};*/