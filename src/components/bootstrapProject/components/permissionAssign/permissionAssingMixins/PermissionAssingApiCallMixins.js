
import BoostrapBackEndRoute from "@/components/bootstrapProject/routes/BoostrapBackEndRoute";
import axios from "axios";

export default {
    methods: {
        async onSubmit(value) {
            const response = await axios.post(BoostrapBackEndRoute.boostrapRolePermission.role_permission_save, value).catch(error => {
                (this.toastMessage = 'Role Not Assign Permission'), (this.toastVariant = 'error'), console.log(error);
            });
            if (response?.data) {
                this.toastMessage = 'Role Assign Permission Successfuly';
                this.toastVariant = 'success';
            }
        },
        async getRoles() {
            const response = await axios
                .get(BoostrapBackEndRoute.roles.role_get)
                .catch(error => console.error('Search Error:', error));
            this.users = response?.data ?? [];
        },
        async getPermissions() {
            const response = await axios
                .get(BoostrapBackEndRoute.permissions.permissions_get)
                .catch(error => console.error('Search Error:', error));
            this.dataBasePermission = response?.data ?? [];
        }
    },
    mounted() {
        this.getRoles();
        this.getPermissions();
    }
}