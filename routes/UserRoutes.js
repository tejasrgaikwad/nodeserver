import express from 'express';

import { getUsers, addUsers } from '../controller/UserController.js';

const userRoutes = express.Router();

userRoutes.get('/users', getUsers);
userRoutes.post('/users', addUsers)

export default userRoutes;