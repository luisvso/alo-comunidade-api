import jwt from "jsonwebtoken";
import { env } from "../config/env";

// Gera um token JWT com o payload fornecido, válido por 7 dias por padrão
export function signToken(payload: object, expiresIn = "7d"): string {
  return jwt.sign(payload, env.jwtSecret, { expiresIn } as jwt.SignOptions);
}

export function verifyToken(token: string) {
  return jwt.verify(token, env.jwtSecret);
}
