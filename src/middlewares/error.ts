import type { Request, Response, NextFunction } from "express";

// Captura erros não tratados e retorna uma resposta padronizada
export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err.stack);
  res.status(500).json({ error: "Erro interno do servidor" });
}
