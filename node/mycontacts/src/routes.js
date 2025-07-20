const { Router } = require("express");

const ContactController = require("./app/controllers/ContactController");
const CategoryContoller = require("./app/controllers/CategoryController");

const router = Router();

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);

router.get("/categories", CategoryContoller.index);
router.get("/categories/:id", CategoryContoller.show);
router.post("/categories", CategoryContoller.store);
router.put("/categories/:id", CategoryContoller.update);
router.delete("/categories/:id", CategoryContoller.delete);

module.exports = router;
