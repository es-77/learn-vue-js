import * as Yup from 'yup';

export const BootstrapRoleValidation = Yup.object().shape({
    name: Yup.string().required('name is required')
});
