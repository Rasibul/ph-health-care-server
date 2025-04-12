import catchAsync from "../../../utilities/catchAsync";
import { adminService } from "./admin.service";

const getAllAdmins = catchAsync(async (req, res) => {
    const result = await adminService.getAllAdmins(req.query);
    res.status(200).json({
        success: true,
        message: 'Admins retrieved successfully',
        data: result,
    });
});

const getAdminById = catchAsync(async (req, res) => {
    const result = await adminService.getAdminById(req.params.id);
    res.status(200).json({
        success: true,
        message: 'Admin retrieved successfully',
        data: result,
    });
});

const updateAdminById = catchAsync(async (req, res) => {
    const result = await adminService.updateAdminById(req.params.id, req.body);
    res.status(200).json({
        success: true,
        message: 'Admin updated successfully',
        data: result,
    });
});

export const adminController = {
    getAllAdmins,
    getAdminById,
    updateAdminById,

};