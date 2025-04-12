
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

const getAdminById = async (id: string) => {
    const admin = await prisma.admin.findUnique({
        where: {
            id: id,
        },
    });
    return admin;
}

const updateAdminById = async (id: string, data: any) => {
    const admin = await prisma.admin.update({
        where: {
            id: id,
        },
        data: data,
    });
    return admin;
}


export const adminService = {
    getAllAdmins,
    getAdminById,
    updateAdminById,


};