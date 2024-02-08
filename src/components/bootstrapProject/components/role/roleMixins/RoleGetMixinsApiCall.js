import BackEndApiRoutes from "@/components/projectSetup/BackEndApiRoutes";
import axios from "axios";

export default {
    methods: {
        async getRole() {
            const response = await axios
                .get(`${BackEndApiRoutes.roles.role_get}/${this.$route.params.id}`)
                .catch(error => console.error('Search Error:', error));
            this.role = response?.data ?? [];
        },

    },
    mounted() {
        this.getRole();
    }
}