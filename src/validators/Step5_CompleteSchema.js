import * as yup from 'yup';

export const validationSchema = yup.object({
    info_name: yup
    .string('Enter your Name')
    .required('Name is required'),
      info_email: yup
      .string('Enter your email')
      .email('Please Enter valid email address')
      .required('Email is required'),
      info_password: yup
      .string('Enter your Password')
      .required('Password is required'),
  });