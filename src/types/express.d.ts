import type { JwtPayload } from "jsonwebtoken";

// Adiciona o campo `user` ao objeto Request do Express após autenticação
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & { id: number };
    }
  }
}
