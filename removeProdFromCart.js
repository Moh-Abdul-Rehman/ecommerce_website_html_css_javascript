import products from "./api/products.json";

import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {

 // debugger;
  
  
  let cartProducts = getCartProductFromLS();


 
  console.log('Before removal:', cartProducts);

  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  console.log('After removal:', cartProducts);

  
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    showToast("delete", id);
  } else {
    console.warn(`Element with ID 'card${id}' not found.`);
  }

  updateCartValue(cartProducts);

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(key, localStorage.getItem(key));


}


};


