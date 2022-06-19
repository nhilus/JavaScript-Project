

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

        /*
        return `
        <ul class="products">
            ${products
                .map(
                    (product) =>`
                <div class="row">
                    <div class="col-4">
                        <img src="${product.image}">
                        <h4>${product.name}</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>${product.price}</p>
                    </div>
            `).join('\n')}
        </ul>`*/
    }
}

export default HomeScreen;

