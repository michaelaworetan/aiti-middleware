import { Router } from "express";
import { addProductToCart, createUser, deleteUser, getUsers, signIn, UpdateUser } from "../controllers/User";

const router = Router();

//  Get Users Routes
router.get("/", getUsers)

// Create Users Routes
router.post("/", createUser)

// Update Users Routes
router.post("/updateUser", UpdateUser)

// Delete Users Routes
router.delete("/deleteUser", deleteUser)

// Sign-in users ROutes
router.post("/signin", signIn)

// add products to cart Routes
router.post("/addToCart/:id", addProductToCart)

export default router;