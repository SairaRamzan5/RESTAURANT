
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";
export const updateReservation = async (req, res, next) => {
    const { id } = req.params;
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill the full reservation form!", 400));
    }

    try {
        const reservation = await Reservation.findByIdAndUpdate(id, { firstName, lastName, email, phone, date, time }, { new: true, runValidators: true });

        if (!reservation) {
            return next(new ErrorHandler("Reservation not found!", 404));
        }

        res.status(200).json({
            success: true,
            message: "Reservation updated successfully!",
            reservation,
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(' , '), 400));
        }
        return next(error);
    }
};
