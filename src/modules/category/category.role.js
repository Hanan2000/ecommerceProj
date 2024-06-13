import {roles} from './../../Middleware/auth.js';
import { create } from './category.controller.js';

export const endpoints={
  create:[roles.Admin],
  get:[roles.Admin,roles.User],
  active:[roles.User],
  delete:[roles.Admin]
}