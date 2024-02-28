import * as Yup from 'yup';

export const resetPasswordValidation = Yup.object().shape({
    email: Yup.string().email().required('email is required')
});
