import express from "express";
import { sendReservation } from "../controller/reservation.js";
import { deleteReservation } from "../controller/deleteReservation.js";
import { updateReservation } from "../controller/updateReservation.js";


const router = express.Router();

router.post("/send", sendReservation );
router.delete("/delete", deleteReservation);
router.put("/update", updateReservation);


export default router;


