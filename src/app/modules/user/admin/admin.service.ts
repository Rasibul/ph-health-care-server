
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAdmins = async (params: any) => {
    const searchTerm = params.searchTerm || null;
    const admins = await prisma.admin.findMany({
        where: searchTerm ? {
            OR: [
                {
                    name: {
                        contains: params.searchTerm,
                        mode: 'insensitive',
                    }
                },
                {
                    email: {
                        contains: params.searchTerm,
                        mode: 'insensitive',
                    }
                }
            ]
        }
            : undefined
    });
    return admins;
}

export const adminService = {
    getAllAdmins,
};