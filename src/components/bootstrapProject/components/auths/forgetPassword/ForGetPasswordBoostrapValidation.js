import * as Yup from 'yup';

export const ForGetPasswordBoostrapValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required')
});
