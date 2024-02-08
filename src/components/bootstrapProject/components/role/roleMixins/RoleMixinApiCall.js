import BackEndApiRoutes from "@/components/projectSetup/BackEndApiRoutes";
import axios from "axios";

export default {
    methods: {
        async getRoles() {
            const response = await axios
                .get(BackEndApiRoutes.roles.role_get)
                .catch(error => console.error('Search Error:', error));
            this.roles = response?.data ?? [];
        }
    },
    mounted() {
        this.getRoles();
    }
}