import type { Request, Response } from "express";
import * as authService from "../../services/auth/auth";

export async function registerController(req: Request, res: Response) {
    try {
        const { name, email, cpf, password } = req.body;
        const user = await authService.register(name, email, cpf, password);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
}

export async function loginController(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        res.json(result);
    } catch (err) {
        res.status(401).json({ error: (err as Error).message });
    }
}
