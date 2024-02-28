import axios from "axios";
import TenancyBackendRoute from "../../routes/TenancyBackendRoute";

export default {
    methods: {
        async sendData(tenantName, data) {
            try {
                const response = await axios.post(`${TenancyBackendRoute.tenantPath.path}/${tenantName}/${TenancyBackendRoute.tenantLogin.login}`, data);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
};
