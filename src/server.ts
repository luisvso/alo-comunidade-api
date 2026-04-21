import express from "express";
import { env } from "./config/env";
import { errorMiddleware } from "./middlewares/error";
import authRoutes  from "./routes/auth";

const app = express();

app.use(express.json());

// Rotas
app.use("/auth", authRoutes);

// Middleware
app.use(errorMiddleware);

app.listen(env.port, () => {
  console.log(`Servidor rodando na porta ${env.port}`);
});
