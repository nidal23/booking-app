import express from 'express'
import { updateUser,deleteUser,getUser,getAllUser } from '../controllers/user.js';
import User from '../models/User.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//Create

// router.get('/test', verifyToken, (req,res,next) =>{
//     res.send('Helloo you;re authenticated')
// })

// router.get('/test/:id', verifyUser, (req,res,next) =>{
//     res.send('User deleted successfully')
// })

// router.get('/testadmin/:id', verifyAdmin, (req,res,next) =>{
//     res.send('you are logged in as admin')
// })


//Update

router.put('/:id',verifyUser, updateUser)
//Delete

router.delete('/:id',verifyUser, deleteUser)
//GEt

router.get('/:id',verifyUser, getUser)
//Get all
router.get('/',verifyAdmin, getAllUser)




export default router