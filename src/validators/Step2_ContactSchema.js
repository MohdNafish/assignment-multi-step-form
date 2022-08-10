import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup
    .string('Enter your email')
    .email('Please Enter valid email address')
    .required('Email is required'),
    contact: yup.string()
      .required("Contact Number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Number is not valid"
      )
      .min(10, "Contact number must be minimum 10 character"),
});