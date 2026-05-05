import { Router } from "express";
import { getUsers, deleteUser, createUser, updateUser, getUserById } from "../controllers/user/UserController";


const router = Router();

router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.get("/users/:id", getUserById);


export default router;
