import {Router} from "express";
const router= Router();
import * as productController from './product.controller.js';
router.get('/',productController.getall)

export default router;