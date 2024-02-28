import * as Yup from 'yup';

export const PackageSelectionValidation = Yup.object().shape({
    package_id: Yup.string().required('purpose is required'),
});
