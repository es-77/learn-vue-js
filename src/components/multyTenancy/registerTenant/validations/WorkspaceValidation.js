import * as Yup from 'yup';

export const WorkspaceValidation = Yup.object().shape({
    subdomain: Yup.string().required('subdomain is required'),
    user_cap: Yup.string().required('user_cap is required'),
});
