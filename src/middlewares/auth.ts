import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import type { JwtPayload } from "jsonwebtoken";

// Protege rotas privadas
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Token não fornecido" });
    return;
  }

  try {
    const payload = verifyToken(token) as JwtPayload & { id: number };
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: "Token inválido ou expirado" });
  }
}
