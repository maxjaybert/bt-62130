import { resolve } from "node:path";

export default {
  server: {
    port: "8080" /* elijo el puerto */,
  },
  css: {
    deveSourcemap: true,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        alta: resolve("views/alta.html"),
        carrito: resolve("views/carrito.html"),
        contacto: resolve("views/contacto.html"),
        nosotros: resolve("views/nosotros.html"),
        incio: resolve("index.html"),
      },
    },
  },
};
