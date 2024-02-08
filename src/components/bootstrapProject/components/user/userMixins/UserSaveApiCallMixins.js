import BackEndApiRoutes from "@/components/projectSetup/BackEndApiRoutes";
import axios from "axios";

export default {
    methods: {
        async onSubmit(value) {
            const response = await axios.post(BackEndApiRoutes.users.user_save, value).catch(error => {
                (this.toastMessage = 'User not found'), (this.toastVariant = 'error'), console.log(error);
            });
            if (response?.data) {
                this.toastMessage = 'Registor Successfuly';
                this.toastVariant = 'success';
            }
        }
    }
}