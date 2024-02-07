import * as Yup from 'yup';

// const atLeastOneItem = (arr) => {
//     return arr && arr.length > 0;
// };
export const BootstrapUserVaildation = Yup.object().shape({
    name: Yup.string().required('name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('password is required'),
    // permissions: Yup.array().test('atLeastOneItem', 'At least one Permission is required', atLeastOneItem)
});
