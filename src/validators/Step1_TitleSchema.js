import * as yup from 'yup';

export const validationSchema = yup.object({
    country: yup
      .string('Select Country')
      .required('Country is required'),
      number: yup.string()
        .required("Number is required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Number is not valid"
        )
        // .min(10, "Please enter min")
        ,
      name: yup
      .string('Enter your Name')
      .required('Name is required'),
});
  