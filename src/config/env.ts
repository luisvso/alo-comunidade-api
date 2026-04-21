// Valida e exporta as variáveis de ambiente necessárias para a aplicação
const requiredEnvVars = ["DATABASE_URL", "JWT_SECRET"] as const;

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`Variável de ambiente obrigatória não definida: ${key}`);
  }
}

export const env = {
  databaseUrl: process.env["DATABASE_URL"]!,
  jwtSecret: process.env["JWT_SECRET"]!,
  port: Number(process.env["PORT"] ?? 3000),
  nodeEnv: process.env["NODE_ENV"] ?? "development",
};
