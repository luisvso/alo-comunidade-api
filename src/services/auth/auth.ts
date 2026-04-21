import { prisma } from "../../db/prisma";
import { hashPassword, comparePassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";

export async function register(name: string, email: string, password: string) {
  const existing = await prisma.user.findUnique({ where: { email } });

  // Retorna erro se o e-mail já estiver cadastrado
  if (existing) {
    throw new Error("E-mail já cadastrado");
  }

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({
    data: { name, email, hashPassword: hashed },
    select: { id: true, name: true, email: true, createdAt: true },
  });

  return user;
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await comparePassword(password, user.hashPassword))) {
    throw new Error("Credenciais inválidas");
  }

  const token = signToken({ id: user.id, email: user.email });
  return { token };
}
