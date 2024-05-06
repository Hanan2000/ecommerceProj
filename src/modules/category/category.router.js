import {Router} from "express";
const router= Router();
import * as Controller from './category.controller.js';
import fileUpload ,{fileType} from './../../utls/multer.js';

router.post('/',fileUpload(fileType.image).single('image'),Controller.create);



export default router;