import express from 'express';
import { createUser, getUser, getUsersFromDb } from './user.controller';
const router = express.Router();

router.post('/create-user', createUser)
router.get('/', getUsersFromDb);
router.get('/:id', getUser )

export default router ; 