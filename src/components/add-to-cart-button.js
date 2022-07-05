

let productList = [];

window.addEventListener("DOMContentLoaded", () => {
  let sendToCart;
  let url = window.location.search;
  const urlParams = new URLSearchParams(url);
  const id = urlParams.get("id");

  apiCall(id)
    .then((response) => {
      return response;
    })
    .then((object) => {
      sendToCart = document.querySelector("button");
      /**********add to cart ***********/
      sendToCart.addEventListener("click", function () {
        let newProduct = new product(
          object.image,
          object.id,
          object.title,
          object.price,
          object.rating,
          object.quantity = 1,
          
        );
        let oldQuantity = 0;
        let newQuantity;
        let replaceProduct;
        let cartContent = localStorage.getItem("shoppingCart");

        if (!cartContent) {
          pushNewProduct(newProduct, productList);
        } else {
          ProductList = JSON.parse(cartContent);
          for (let i = 0; i < productList.length; i++) {
            if (
              typeof productList[i].id === undefined ||
              productList[i].id === null
            ) {
              continue;
            } else if (productList[i].id === object.id) {
              oldQuantity = productList[i].quantity;
              productList[i].quantity + 1;
            } else {
              continue;
            }
          }
          if (oldQuantity === 0) {
            pushNewProduct(newProduct, productList);
          } else {
            newQuantity =
              parseInt(oldQuantity) + parseInt(object.quantity);
            replaceProduct= new article(
              object.id,
              object.title,
              object.price,
              newQuantity
            );
            articlesList.push(replaceProduct);
            localStorage.removeItem("shoppingCart");
            localStorage.setItem("shoppingCart", JSON.stringify(productList));
          }
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

async function apiCall(element) {
  const api = await fetch(
    "https://fakestoreapi.com/products/category/electronics?limit=10" + element
  );
  const response = api.json();
  return response;
}



/*********** Article constructor *********/
class product {
    constructor(id, title, price, quantity, rating) {
        (this.id = id),
        (this.name = title),
        (this.price = price),
        (this.quantity = quantity);
        (this.rating = rating);
        (this.quantity) = quantity;
    }
  }
  
  function pushNewProduct(arr, myListOfProducts) {
    myListOfProducts.push(arr);
    localStorage.setItem("shoppingCart", JSON.stringify(myListOfProducts));
  }



  let button ={
    render:() =>{
        return `
        <div>
            <button class="button" data-button>Add to cart</button>
        </div>
        `
    }
}




  
export {apiCall, button};
  