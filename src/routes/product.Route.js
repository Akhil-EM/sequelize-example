const router = require("express").Router();

const productController = require("../controllers/product.controller");


router.post("/",productController.addProduct);
router.get("/",productController.getProducts);
router.get("/:id",productController.getProduct);
router.put(":/id",productController.updateProduct);
router.get("/published/products",productController.getPublishedProducts);
router.delete("/:id",productController.deleteProduct);


module.exports = router;