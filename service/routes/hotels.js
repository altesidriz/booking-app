import express from 'express';
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getAllHotels,
    getAllHotelsByCity,
    getAllHotelsByPrice,
    getHotel,
    updateHotel
} from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Create
router.post('/', verifyAdmin, createHotel);
//Update
router.put('/:id', verifyAdmin, updateHotel);
//Delete
router.delete('/:id', verifyAdmin, deleteHotel);
//Get a hotel
router.get('/find/:id', getHotel);
//Get All
router.get('/', getAllHotels);

router.get('/cities', getAllHotelsByCity);

router.get('/price', getAllHotelsByPrice);

router.get('/countByCity', countByCity);

router.get('/countByType', countByType);

export default router;