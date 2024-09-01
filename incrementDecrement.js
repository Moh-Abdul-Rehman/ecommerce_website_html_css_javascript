import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProducts";
import { updateCartproductTotal } from "./updateCartproductTotal";
import { updateCartValue } from "./updateCartValue";

export const incrementDecrement = (event, id, stock, price) => {
    debugger;

    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 0;
    let localStoragePrice = 0;

    // Get current cart products from local storage
    let LocalCartProducts = getCartProductFromLS();

    // Find the existing product in the cart
    let existingProd = LocalCartProducts.find((curProd) => curProd.id === id);

    if (existingProd) {
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;

        // Handle increment
        if (event.target.classList.contains("cartIncrement")) {
            if (quantity < stock) {
                quantity += 1;
            }
        }

        // Handle decrement
        if (event.target.classList.contains("cartDecrement") && quantity > 1) {
            quantity -= 1;
        }

        // Update the price based on quantity
        localStoragePrice = price * quantity;

        // Update the cartProducts array
        LocalCartProducts = LocalCartProducts.map((curProd) => 
            curProd.id === id ? { ...curProd, quantity, price: localStoragePrice } : curProd
        );
    } else {
        // Handle case when the product is not in the cart
        if (event.target.classList.contains("cartIncrement")) {
            quantity = 1;
            localStoragePrice = price;
            LocalCartProducts.push({ id, quantity, price: localStoragePrice });
        }
    }

    // Save updated cart products to local storage
    localStorage.setItem("cartProducts", JSON.stringify(LocalCartProducts));

    // Update the UI
    productQuantity.innerText = quantity;
    productPrice.innerText = Number(localStoragePrice.toFixed(2));

    // Update cart value
    updateCartValue(LocalCartProducts);

    // Update the cart product total
    updateCartproductTotal();
};