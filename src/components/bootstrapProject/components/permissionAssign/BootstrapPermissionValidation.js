import * as Yup from 'yup';

const atLeastOneItem = (arr) => {
    return arr && arr.length > 0;
};
export const BootstrapPermissionValidation = Yup.object().shape({
    role_id: Yup.string().required('Role is required'),
    permissions: Yup.array().test('atLeastOneItem', 'At least one Permission is required', atLeastOneItem)
});
