import * as yup from 'yup';

export const validationSchema = yup.object({
    duration: yup
      .string('Select Duration')
      .required('Duration is required'),
  });