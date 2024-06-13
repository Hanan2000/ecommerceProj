import {Router} from "express";
const router= Router();
import * as Controller from './auth.controller.js';

router.post('/register',Controller.register);
router.post('/login',Controller.login);
router.patch('/sendCode',Controller.sendCode);
router.patch('/forgotPassword',Controller.forgotPassword);

export default router;