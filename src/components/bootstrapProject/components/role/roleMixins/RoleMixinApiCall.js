import BackEndApiRoutes from "@/components/projectSetup/BackEndApiRoutes";
import axios from "axios";

export default {
    methods: {
        async getRoles() {
            const response = await axios
                .get(BackEndApiRoutes.roles.role_get)
                .catch(error => console.error('Search Error:', error));
            this.roles = response?.data ?? [];
        },
        async handleDelete(id) {
            const response = await axios
                .delete(`${BackEndApiRoutes.roles.role_delete}/${id}`)
                .catch(error => console.error('Search Error:', error));
            if (response?.data) {
                this.getRoles()
            }
        }
    },
    mounted() {
        this.getRoles();
    }
}