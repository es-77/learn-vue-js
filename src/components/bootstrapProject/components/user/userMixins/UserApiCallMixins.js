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

    },
    mounted() {
        this.getUsers();
    }
}