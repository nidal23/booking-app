import express from 'express'
import { createHotel, updateHotel, deleteHotel, getHotel, getAllHotel, countByCity, countByType } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Create

router.post('/',verifyAdmin, createHotel)
//Update

router.put('/:id',verifyAdmin, updateHotel)
//Delete

router.delete('/:id',verifyAdmin, deleteHotel)
//GEt

router.get('/find/:id', getHotel)

//Get all
router.get('/', getAllHotel)

router.get('/countByCity', countByCity)
router.get('/countByType', countByType)

export default router