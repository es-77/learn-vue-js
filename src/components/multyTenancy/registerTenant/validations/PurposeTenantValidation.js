import * as Yup from 'yup';

export const PurposeTenantValidation = Yup.object().shape({
    purpose: Yup.string().required('purpose is required'),
});
