
import BoostrapBackEndRoute from "@/components/bootstrapProject/routes/BoostrapBackEndRoute";
import axios from "axios";

export default {
    methods: {
        async getRolePermission() {
            const response = await axios
                .get(BoostrapBackEndRoute.boostrapRolePermission.role_permission_get)
                .catch(error => console.error('Search Error:', error));
            this.rolePermissions = response?.data ?? [];
        },
        async handleDelete(id) {
            const response = await axios
                .delete(`${BoostrapBackEndRoute.boostrapRolePermission.role_permission_delete}/${id}`)
                .catch(error => console.error('Search Error:', error));
            if (response?.data) {
                this.getRolePermission()
            }
        }

    },
    mounted() {
        this.getRolePermission();
    }
}