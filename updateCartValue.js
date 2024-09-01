//ye file sirf cart value update kr rhy hai, bas aik fucntion hai jo argument le rha hai 

const cartValue = document.querySelector('#cartValue');


export const updateCartValue = (cartProducts) => {

    
    
    console.log("CART VALUE IS " + cartValue);

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));



  
   console.log("cart product length is " + cartProducts.length);
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`);


};

