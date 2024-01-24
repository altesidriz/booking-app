import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyToken.js';


const router = express.Router();

router.get("/checkauth", verifyToken, (req,res,next)=>{
    res.send("Hello user you are loged in")
})

//Update
router.put('/:id', updateUser);
//Delete
router.delete('/:id', deleteUser);
//Get a User
router.get('/:id', getUser);
//Get All
router.get('/', getAllUsers);

export default router;