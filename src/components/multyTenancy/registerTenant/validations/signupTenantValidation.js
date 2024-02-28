import * as Yup from 'yup';

export const signupTenantValidation = Yup.object().shape({
    company_name: Yup.string().required('company name is required'),
    name: Yup.string().required('name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('password is required'),
});
