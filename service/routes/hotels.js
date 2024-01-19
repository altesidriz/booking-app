import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotelController.js';

const router = express.Router();

//Create
router.post('/', createHotel);
//Update
router.put('/:id', updateHotel);
//Delete
router.delete('/:id',deleteHotel);
//Get a hotel
router.get('/:id', getHotel);
//Get All
router.get('/', getAllHotels);
export default router;