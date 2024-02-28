// In SignupTenantApiCall.js
import axios from "axios";
import TenancyBackendRoute from "../../routes/TenancyBackendRoute";

export default {
    methods: {
        async sendData(data) {
            try {
                const response = await axios.post(TenancyBackendRoute.tenantRegister.signup, data);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;  // Re-throw to handle errors in the component
            }
        }
    }
};
