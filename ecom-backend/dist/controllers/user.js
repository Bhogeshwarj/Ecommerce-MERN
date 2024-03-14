import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        return next(new Error("my error"));
        const { name, email, photo, gender, role, _id, dob } = req.body;
        //creating user
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob: new Date(dob),
        });
        return res.status(201).json({
            message: `User created successfully , welcome ${user.name}`,
            success: true
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error,
            success: false
        });
    }
};
