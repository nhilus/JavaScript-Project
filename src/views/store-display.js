import Rating from "../components/rating";

const productCardTemplate = document.querySelector("[data-product-template");
const productCardContainer = document.querySelector("[data-products-card-container]");
const searchInput = document.querySelector("[data-search]");
const url = ('https://fakestoreapi.com/products/category/electronics?limit=10');
let products = [];
const ratingHtml = Rating.render();


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

        let productImage = new Image(150, 200);
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
    })()
