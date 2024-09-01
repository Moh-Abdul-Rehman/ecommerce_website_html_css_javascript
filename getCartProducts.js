import { updateCartValue } from "./updateCartValue";


export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProducts");

    if (!cartProducts) {
        return [];
    }

    cartProducts = JSON.parse(cartProducts);
    console.log(cartProducts);

    // Update the cart button value
    updateCartValue(cartProducts);
    console.log("local storage product: " + cartProducts);

     //bas ye cart ke products ko return kr rhy hai
    return cartProducts;
};