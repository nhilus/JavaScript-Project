
async function StoreData(){
    const response = await fetch("https://fakestoreapi.com/products/category/electronics?limit=10")
    const storeProducts = await response.json();
    storeProducts.forEach(product => localStorage.setItem('storeProducts', JSON.stringify(product)));
    // console.log("async await: ", storeProducts);
};

StoreData();



console.log("async await: ", storeProducts);