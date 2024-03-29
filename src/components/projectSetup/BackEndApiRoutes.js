function BackEndApiRoutes() {
    const baseUrl = process.env.VUE_APP_API_URL;

    const home = `${baseUrl}`;

    return {
        home,
        auth: {
            login: `${home}/auth/login`,
            forgot: `${home}/auth/forgot`,
            newPassword: `${home}/auth/newPassword`,
            logout: `${home}/auth/logout`,
            user: `${home}/auth/user`,
        },
        users: {
            user_get: `${home}/users`,
            user_save: `${home}/users`,
            user_delete: `${home}/users`,
        },
        roles: {
            role_get: `${home}/roles`,
            role_save: `${home}/roles`,
            role_delete: `${home}/roles`,
        },
        userRole: {
            user_role_get: `${home}/user_role`,
            user_role_save: `${home}/user_role`,
        },
        rolePermissions: {
            role_permission_get: `${home}/role_permission`,
            role_permission_save: `${home}/role_permission`,
        },
        permissions: {
            permissions_get: `${home}/permission`,
            permissions_save: `${home}/permission`,
        },
        userPermission: {
            user_permission_get: `${home}/user_permission`,
            user_permission_save: `${home}/user_permission`,
        }
    };
}

export default BackEndApiRoutes();
