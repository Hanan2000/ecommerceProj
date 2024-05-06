import {Router} from "express";
const router= Router();
import * as Controller from './category.controller.js';
import fileUpload ,{fileType} from './../../utls/multer.js';

router.post('/',fileUpload(fileType.image).single('image'),Controller.create);
router.get('/',Controller.getAll);
router.get('/active',Controller.getActive);
router.get('/:id',Controller.getDetails);
router.patch('/:id',fileUpload(fileType.image).single('image'),Controller.update);
router.delete('/:id',Controller.destroy);


export default router;