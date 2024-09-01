import { getCartProductFromLS } from "./getCartProducts";

 export const updateCartproductTotal = () => {
    debugger;

    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let LocalCartProducts = getCartProductFromLS();

    let initialValue = 0;
    let totalProductPrice = LocalCartProducts.reduce((accum, curElem) => {

        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, 0);

    //console.log("totalproductprice", totalProductPrice);


    productSubTotal.textContent = `RS${totalProductPrice}`;
    productFinalTotal.textContent = `Rs${totalProductPrice + 50}`;




 };