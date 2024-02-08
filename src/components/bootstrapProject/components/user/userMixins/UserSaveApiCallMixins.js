import BackEndApiRoutes from "@/components/projectSetup/BackEndApiRoutes";
import axios from "axios";

export default {
    methods: {
        handleForm(value) {
            if (this.user && this.user.id !== 0) {
                this.handleUpdate(value);
            } else {
                this.onSubmit(value)
            }
        },
        async onSubmit(value) {
            alert('save')
            const response = await axios.post(BackEndApiRoutes.users.user_save, value).catch(error => {
                (this.toastMessage = 'User not found'), (this.toastVariant = 'error'), console.log(error);
            });
            if (response?.data) {
                this.toastMessage = 'Registor Successfuly';
                this.toastVariant = 'success';
            }
        },

        async handleUpdate(value) {
            alert('update call')
            console.log(value, 'valuevaluevaluevaluevalue')
            const response = await axios.patch(`${BackEndApiRoutes.users.user_save}/${this.user.id}`, value).catch(error => {
                (this.toastMessage = 'User not found'), (this.toastVariant = 'error'), console.log(error);
            });
            if (response?.data) {
                this.toastMessage = 'Registor Successfuly';
                this.toastVariant = 'success';
            }
        },

    }
}