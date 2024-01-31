import * as Yup from 'yup';

export const RoleValidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
});
