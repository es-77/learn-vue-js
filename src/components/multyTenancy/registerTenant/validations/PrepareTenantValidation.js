import * as Yup from 'yup';

export const PrepareTenantValidation = Yup.object().shape({
    purpose: Yup.string().nonNullable(),
});
