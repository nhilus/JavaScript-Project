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

