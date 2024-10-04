import express from "express";
// import giftData from "../data/gifts.js";
import GiftsController from '../controllers/gifts.js';

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).send(GiftsController.getGifts());
// });
router.get('/', GiftsController.getGifts)


router.get('/:giftId', GiftsController.getGiftById);

export default router;
