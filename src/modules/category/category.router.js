import {Router} from "express";
const router= Router();
import * as Controller from './category.controller.js';
import fileUpload ,{fileType} from './../../utls/multer.js';
import subcategoryRouter from '../subcategory/subcategory.router.js';
import {auth,roles} from './../../Middleware/auth.js';
import { endpoints } from "./category.role.js";


router.use('/:id/subcagtegory',subcategoryRouter);

router.post('/',auth(endpoints.create),fileUpload(fileType.image).single('image'),Controller.create);
router.get('/',auth(endpoints.get),Controller.getAll);
router.get('/active',auth(endpoints.active),Controller.getActive);
router.get('/:id',auth(endpoints.get),Controller.getDetails);
router.patch('/:id',auth(endpoints.create),fileUpload(fileType.image).single('image'),Controller.update);
router.delete('/:id',auth(endpoints.delete),Controller.destroy);


export default router;