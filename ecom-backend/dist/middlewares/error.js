//creating a error middleware
export const errorMiddleware = (err, req, res, next) => {
    return res.status(400).json({
        success: false,
        message: "some error",
    });
};
