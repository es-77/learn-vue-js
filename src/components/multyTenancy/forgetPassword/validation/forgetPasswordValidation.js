import * as Yup from 'yup';

export const forgetPasswordValidation = Yup.object().shape({
    email: Yup.string().email().required('email is required')
});
