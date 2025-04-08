
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAdmins = async () => {
    const admins = await prisma.admin.findMany();
    return admins;
}

export const adminService = {
    getAllAdmins,
};