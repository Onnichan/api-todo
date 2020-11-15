import { Router } from 'express';
import { UserController } from '../controller/UserController';

const router = Router();

//get all users
router.get('/', UserController.all);

//get one user
router.get('/:id', UserController.one)

//create new user
router.post('')
