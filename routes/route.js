import express from 'express';
import { userSignup } from '../controller/userControler.js';
import { getProducts } from '../controller/productController.js';

const router = express.Router();

router.post('/signup', userSignup);

router.get('/products', getProducts);

export default router;