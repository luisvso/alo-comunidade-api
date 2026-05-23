import { parse } from "node:path";
import { prisma } from "../../db/prisma";

export async function getUsers() {

    const users = await prisma.user.findMany();

    return users;
}

export async function deleteUser(id: string) {

    await prisma.user.delete({
        where: { id: parseInt(id) }
    });

}

export async function updateUser(id: string, name: string, email: string, cpf: string, hashPassword: string) {

    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
            name, email,
            cpf, hashPassword
        },
        select: { id: true, name: true, email: true, createdAt: true }

    })

    return user;
}

export async function getUserById(id: string) {

    const parsedId = parseInt(id);

    if (Number.isNaN(parsedId)) {
        throw new Error("Invalid user id");
    }

    const user = await prisma.user.findUnique({
        where: { id: parsedId }
    });

    return user;

}
