import { Router } from "express";
import { registerController, loginController } from "../controllers/auth/auth";

const router = Router();

// Rotas públicas de autenticação
router.post("/register", registerController);
router.post("/login", loginController);

export default router;
