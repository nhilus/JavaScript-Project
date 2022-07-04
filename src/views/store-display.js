import Rating from "../components/rating";

const productCardTemplate = document.querySelector("[data-product-template");
const productCardContainer = document.querySelector("[data-products-card-container]");
const searchInput = document.querySelector("[data-search]");
const url = ('https://fakestoreapi.com/products/category/electronics?limit=10');
let products = [];
let allbuttons = [];



const ratingHtml = Rating.render();

console.log(allbuttons)
//cart variables
let shoppingCart = [];
let Item = function(id,title, price, count) {
    this.id = id;
    this.name = title;
    this.price = price;
    this.count = count;
};

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

    let productImage = new Image();
    productImage.src = product.image;
    image.appendChild(productImage);

    body.textContent = [product.title,
                        product.price
                        ]
    rating.insertAdjacentHTML("beforebegin", ratingHtml);                
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
})();

// Adding Items to Cart
function addItemToCart(id,title, price, count){
    for (let key in shoppingCart) {
        if (shoppingCart[key].id === id) {
            shoppingCart[key].count += count;
        
            return;
        }
    }

let item = new Item(id, title, price, count);
cart.push(item);
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    console.log(button)
})
console.log(allbuttons)
