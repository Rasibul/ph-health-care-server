const createAdmin = async (data: any) => {
    console.log({ data });
    return {
        message: 'Admin created successfully',

    };
}

export const userService = {
    createAdmin,
};