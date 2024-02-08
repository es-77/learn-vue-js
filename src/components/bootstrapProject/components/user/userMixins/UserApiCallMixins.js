import BackEndApiRoutes from "@/components/projectSetup/BackEndApiRoutes";
import axios from "axios";

export default {
    methods: {
        async getUsers() {
            const response = await axios
                .get(BackEndApiRoutes.users.user_get)
                .catch(error => console.error('Search Error:', error));
            this.users = response?.data ?? [];
        },
        async handleDelete(id) {
            const response = await axios
                .delete(`${BackEndApiRoutes.users.user_delete}/${id}`)
                .catch(error => console.error('Search Error:', error));
            if (response?.data) {
                this.getUsers()
            }
        }

    },
    mounted() {
        this.getUsers();
    }
}