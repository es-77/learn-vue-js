import * as Yup from 'yup';

export const BootstrapUserVaildation = Yup.object().shape({
    name: Yup.string().required('name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('password is required'),
});
