import * as Yup from 'yup';

export const BillingValidation = Yup.object().shape({
    card_number: Yup.string().required('card number is required'),
    card_name: Yup.string().required('card name is required'),
    card_expiry: Yup.string().required('card expiry is required'),
    card_cvv: Yup.string().required('card cvv is required'),
});
