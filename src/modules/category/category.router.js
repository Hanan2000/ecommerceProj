import {Router} from "express";
const router= Router();

import * as categoryController from './category.controller.js';

router.get('/',categoryController.getall);

export default router;