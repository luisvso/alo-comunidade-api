import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { errorMiddleware } from "./middlewares/error";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user.ts"
import postRoutes from "./routes/posts";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);

// Middleware
app.use(errorMiddleware);

app.listen(env.port, () => {
    console.log(`Servidor rodando na porta ${env.port}`);
});
