function TenancyBackEndRoute() {
    const baseUrl = process.env.VUE_APP_API_URL;

    const home = `${baseUrl}`;
    const tenant = `http://127.0.0.1:8000/api`;
    const tenantPath = `http://127.0.0.1:8000/api/v1`;


    return {
        home,
        tenantRegister: {
            signup: `${tenant}/tenant/signup`,
        },
        tenantLogin: {
            login: `login`,
        },
        tenantPasswordRetset: {
            reset: `reset-password`,
        },
        tenantPasswordForget: {
            forget: `forget-password`,
        },
        tenantAuthorization: {
            getPermission: `permissions`,
            getRoles: `roles`,
        },
        tenantUsers: {
            list: `users`,
            get: `users`,
            create: `users`,
            update: `users`,
            delete: `users`,
        },
        tenantStatuses: {
            get: `statuses`,
        },
        tenantDropdownList: {
            get: `dropdown`,
        },
        tenantPath: {
            path: tenantPath,
        },
    };
}

export default TenancyBackEndRoute();
