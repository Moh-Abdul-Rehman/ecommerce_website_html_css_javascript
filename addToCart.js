import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";


getCartProductFromLS();



export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    
    let price = currentProdElem.querySelector(".productPrice").innerText;


    console.log(quantity, price);
       price = price.replace("Rs", "");

       let existingProd = arrLocalStorageProduct.find((currProd) => currProd.id === id);

       if(existingProd && quantity > 1)
      { 
        quantity = Number(existingProd.quantity) + Number(quantity); 

        price = Number(price * quantity);
      

        let updatedCart = { id, quantity, price};

         updatedCart = arrLocalStorageProduct.map((curProd) => {
         return curProd.id === id ? updatedCart : curProd;
        });

        console.log(updatedCart);

        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
       }



       if (existingProd) {

          
        return false;
      }


       price = Number(price * quantity);
       console.log(price)
       quantity = Number(quantity);


       //let updateCart = {id, quantity, price};
       arrLocalStorageProduct.push({id, quantity, price});
       localStorage.setItem("cartProducts", JSON.stringify(arrLocalStorageProduct));
      

       console.log(arrLocalStorageProduct);
       updateCartValue(arrLocalStorageProduct);

};