import express from 'express';
import { createUser, getUsersFromDb } from './user.controller';
const router = express.Router();

router.post('/create-user', createUser)
router.get('/', getUsersFromDb);
export default router ;