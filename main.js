import './style.css'
import products from  "./api/products.json"
import {showProductContainer} from "./homeProductCards";

//console.log(products);


//document.addEventListener('DOMContentLoaded', function() {
    //if (!localStorage.getItem('firstVisit')) {
      //  document.querySelector('body').classList.add('animate');
      //  localStorage.setItem('firstVisit', true);
    //}
//});

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const body = document.querySelector('body');

    // Apply the preloader only if the URL matches the main page (adjust the URL as needed)
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        body.classList.add('hidden');

        setTimeout(function() {
            preloader.style.opacity = '0';
            body.classList.remove('hidden');
            body.classList.add('visible');
            

            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    } else {
        preloader.style.display = 'none';
        body.classList.add('visible');
    }
});



//Define a function named 'showProductComtainer' that takes an array of products as input

showProductContainer(products);