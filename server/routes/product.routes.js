const ProductController = require("../controllers/product.controller");

module.exports = app => {
    //put all of your routes here
    app.get("/api/test", ProductController.testResponse);
    app.get("/api/products/findAll", ProductController.findAllProducts);
    app.get("/api/products/findRandom", ProductController.findRandomProduct);
    app.post("/api/products/create", ProductController.createProduct);
    app.get("/api/products/find/:_id", ProductController.findProduct);
    app.delete("/api/products/delete/all", ProductController.deleteAllProducts);
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
    app.patch("/api/products/update/:_id", ProductController.updateProduct);
    
}