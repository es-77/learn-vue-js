import * as Yup from 'yup';

export const RegistorValidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('password is required').min(6).max(10),
    phone: Yup.string().required('Phone is required').min(10).max(20),
});
