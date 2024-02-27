import BoostrapBackEndRoute from "@/components/bootstrapProject/routes/BoostrapBackEndRoute";
import axios from "axios";

export default {
    methods: {
        async getRoleWithPermissions() {
            const response = await axios
                .get(`${BoostrapBackEndRoute.boostrapRolePermission.role_permission_get}/${this.$route.params.id}`)
                .catch(error => console.error('Search Error:', error));
            let data = response?.data ?? [];
            console.log('data', data);
            this.rolePermission = data;
        },

    },
    mounted() {
        this.getRoleWithPermissions();
    }
}