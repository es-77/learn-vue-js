import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('password is required').min(6).max(10),
});
