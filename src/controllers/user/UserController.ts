import type { Request, Response } from "express";
import { prisma } from "../../db/prisma";


export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error, message: "Failed to fetch all the users" })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    try {
        await prisma.user.delete({
            where: { id: parseInt(id) }
        });

        res.json({ message: `User of id: ${id} deleted successfully` })
    } catch (error) {
        res.status(400).json({ error: error, Message: `User of Id: ${id} not founded to be deleted` })
    }

}

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params as { id: string };
    const { name, email, cpf, hashPassword } = req.body;

    try {
        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {
                name, email,
                cpf, hashPassword
            }

        })
        res.json({ data: user, messsage: "Updated the user successfully" })

    } catch (error) {
        res.json({ error: error, message: "Failed to update the user" });
    }

}

export const getUserById = async (req: Request, res: Response) => {

    const { id } = req.params as { id: string };

    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) }
        })
        res.json({ data: user, message: "User returned successfully" })

    } catch (error) {
        res.json({ error: error, message: `Failed to fetch user of id: ${id} ` })
    }

}
