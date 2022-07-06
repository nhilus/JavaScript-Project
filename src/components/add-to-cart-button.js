
/*
let productList = [];

window.addEventListener("DOMContentLoaded", () => {
  let sendToCart;

      sendToCart = document.querySelector("button");

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
    });
*/
/*********** Article constructor *********/

/*
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
localStorage.setItem("shoppingCart", JSON.stringify(cart));
};

*/


  
export {button};
