import * as Yup from 'yup';

// const atLeastOneItem = (arr) => {
//     return arr && arr.length > 0;
// };
export const UserAsignRoleValidation = Yup.object().shape({
    user_id: Yup.string().required('User is required'),
    role_id: Yup.string().required('Role is required'),
    // permissions: Yup.array().test('atLeastOneItem', 'At least one Permission is required', atLeastOneItem)
});
