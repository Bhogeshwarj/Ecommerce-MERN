import express from 'express';
import {newUser,getAllUsers,getUser,deleteUser} from '../controllers/user.js'
const app = express.Router();
import { adminOnly } from '../middlewares/auth.js';

// route - /api/v1/user/new

app.post("/new",newUser);


// route - /api/v1/user/all

app.get("/all",adminOnly,getAllUsers);



// route - /api/v1/user/dynamicID

app.get("/:id",adminOnly,getUser);

// route - /api/v1/user/dynamic

app.delete("/:id",adminOnly, deleteUser);


export default app;
