import * as yup from 'yup';

export const validationSchema = yup.object({
  card_name: yup
  .string('Enter your name')
  .min(3, 'Name is too Short!')
  .max(30, 'Name is too Long!')
  .required('Name is required'),
  card_number: yup
  .string('Please Enter your Card number')
  .required('Card Number is required')
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Card Number not valid"
  )
  .min(19, "Card Number must be 16 character"),
  expiry: yup
  .string('Please Enter your Card expiry')
  .required('Please Enter your Card expiry')
  .typeError('Not a valid expiration date. Example: MM/YY')
  .max(5, 'Not a valid expiration date. Example: MM/YY')
  .matches(
    /([0-9]{2})\/([0-9]{2})/,
    'Not a valid expiration date. Example: MM/YY'
  ),
  cvv: yup
  .string('Please Enter your CVV/CVC')
  .required('CVV/CVC code is required')
  .min(3, "CVV number minimum 3 character required")
  .max(4, "CVV number maximum 4 character required"),
  promo_code: yup
  .string('Please Enter Promo Code')
  .required('Promo code is required'),
});