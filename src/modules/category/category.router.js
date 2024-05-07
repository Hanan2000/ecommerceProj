import {Router} from "express";
const router= Router();
import * as Controller from './category.controller.js';
import fileUpload ,{fileType} from './../../utls/multer.js';
import {auth} from './../../Middleware/auth.js'

router.post('/',auth(),fileUpload(fileType.image).single('image'),Controller.create);
router.get('/',Controller.getAll);
router.get('/active',Controller.getActive);
router.get('/:id',Controller.getDetails);
router.patch('/:id',auth(),fileUpload(fileType.image).single('image'),Controller.update);
router.delete('/:id',auth(),Controller.destroy);


export default router;