import * as Yup from 'yup';

export const LoginYupSchema = Yup.object().shape({
    name: Yup.string().required('The name Validate is Required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('password is required').min(6).max(10),
});
