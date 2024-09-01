import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), 
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        signup: resolve(__dirname, "signup.html"),
        signin: resolve(__dirname, "signin.html"),


      },
    },
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '/public/pictures',  // Source folder you want to copy
          dest: 'assets/Pictures'  // Destination folder in dist
        }
      ]
    })
  ]
});