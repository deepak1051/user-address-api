import express from 'express';
import { createUserWithAddress } from '../controllers/user.ct.js';

const router = express.Router();

// Create a user with an address
router.post('/register', createUserWithAddress);

export default router;
