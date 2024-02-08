import BackEndApiRoutes from "@/components/projectSetup/BackEndApiRoutes";
import axios from "axios";

export default {
    methods: {
        async getUser() {
            const response = await axios
                .get(`${BackEndApiRoutes.users.user_get}/${this.$route.params.id}`)
                .catch(error => console.error('Search Error:', error));
            this.user = response?.data ?? [];
        },

    },
    mounted() {
        this.getUser();
    }
}