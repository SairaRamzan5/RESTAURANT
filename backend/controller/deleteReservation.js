import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const deleteReservation = async (req, res, next) => {
    const { id } = req.params;

    try {
        const reservation = await Reservation.findByIdAndDelete(id);

        if (!reservation) {
            return next(new ErrorHandler("Reservation not found!", 404));
        }

        res.status(200).json({
            success: true,
            message: "Reservation deleted successfully!",
        });

    } catch (error) {
        return next(error);
    }
};
