import BackEndApiRoutes from "@/components/projectSetup/BackEndApiRoutes";
import axios from "axios";

export default {
    methods: {
        handleForm(value) {
            if (this.role && this.role.id !== 0) {
                this.handleUpdate(value);
            } else {
                this.onSubmit(value)
            }
        },
        async onSubmit(value) {
            const response = await axios.post(BackEndApiRoutes.roles.role_save, value).catch(error => {
                (this.toastMessage = 'User not found'), (this.toastVariant = 'error'), console.log(error);
            });
            if (response?.data) {
                this.toastMessage = 'Registor Successfuly';
                this.toastVariant = 'success';
            }
        },

        async handleUpdate(value) {
            const response = await axios.patch(`${BackEndApiRoutes.roles.role_save}/${this.role.id}`, value).catch(error => {
                (this.toastMessage = 'User not found'), (this.toastVariant = 'error'), console.log(error);
            });
            if (response?.data) {
                this.toastMessage = 'Registor Successfuly';
                this.toastVariant = 'success';
            }
        },

    }
}