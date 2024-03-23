import { TryCatch } from "../middlewares/error.js";
export const newOrder = TryCatch(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "new order"
    });
});
