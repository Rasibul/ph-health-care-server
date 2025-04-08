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

export const adminController = {
    getAllAdmins,
};