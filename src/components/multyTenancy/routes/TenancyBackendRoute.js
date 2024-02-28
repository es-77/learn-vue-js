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
        tenantPath: {
            path: tenantPath,
        },
    };
}

export default TenancyBackEndRoute();
