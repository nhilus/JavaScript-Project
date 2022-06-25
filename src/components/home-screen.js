

const HomeScreen = {
    render : async () => {
        const response = await fetch("https://fakestoreapi.com/products",{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok){
            return `<div> Error getting data </div>`;
        }

        const products = await response.json();
        

        return `
        <ul class="products">
            ${products
                .map(
                    (product) =>`
                <li>
                    <div class="product">
                        <a href="/#/product/${product.id}">
                            <img src="${product.image}" alt="${product.title}"/>
                        </a>
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
                    </div>
                </li>
            `).join('\n')}
        </ul>
        `
    }
}

export default HomeScreen;

