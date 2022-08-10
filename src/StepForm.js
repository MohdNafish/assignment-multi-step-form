import * as Yup from "yup";
import {
  FormikStepper,
  FormikStep,
  InputField,
  CheckBoxField,
  RadioField,
  SelectField,
  FormikHelpers,
} from "formik-stepper";
import { IoAdd, IoBalloonSharp } from "react-icons/io5";
import { TextField } from "@material-ui/core";
import Step3 from "./component/FormStep/Step3";
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const validationSchema = Yup.object().shape({
  country: Yup.string().required("The Country field is required"),
  number: Yup.string().required("The Number field is required"),
  name: Yup.string().required("The Name field is required"),
  contact_number: Yup.string().required("Contact Number field is required"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
  password: Yup.string()
    .required("The Password field is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
      `Must Contain 8 Characters, One Uppercase, One Lowercase,
      One Number and one special case Character [@$!%*#?&-_]`
    ),
  privacy: Yup.boolean()
    .isTrue()
    .oneOf([true], "The terms and conditions must be accepted."),
});

export const MultiStepForm = () => {
  const onSubmit = async (
    values: any,
    { setSubmitting }: FormikHelpers<any>
  ) => {
    console.log(values);
  };

  return (
    <>
    <Container maxWidth="lg">
        <Grid container xs={12} justifyContent="center" direction="row">
          <Grid item md={12}>
            <Box component="h1" className='form_heading mb-0 text-center'>Registration Form</Box>
            <Box component="p" className='mt-0 form_sub_heading text-center'>This is Example Registration Form</Box>
          </Grid>
          <Grid md={2} ></Grid>
          <Grid md={8}>
          
          <FormikStepper
          /// Accept all Formik props
            onSubmit={onSubmit} /// onSubmit Function
            initialValues={{
              country: "",
              number: "",
              number: "",
              name: "",
              email: "",
              contact_number: "",
              privacy: false,
            }}
            validationSchema={validationSchema}
            withStepperLine /// false as default and If it is false, it hides stepper line
            nextButton={{ label: "Step" }}
            prevButton={{ label: "Back" }}
            submitButton={{ label: "Done", }}
          >
            {/*  First Step */}
            
            <FormikStep
              label="Profile Info" /// The text label of Step
            >
            <div className="selectField">
              <SelectField
                label="Country"
                name="country"
                placeholder="Country"
                options={[
                  { value: "India", label: "India" },
                  { value: "USA", label: "USA" },
                  { value: "UK", label: "UK" },
                ]}
              />
              </div>
              <InputField name="number" label="Number" />
              <InputField name="name" label="Name" />
              
            </FormikStep>
            
            {/* Second Step */}

            <FormikStep label="Login Info">
              <InputField name="email" label="Email" type="email" />
              <InputField name="contact_number" label="Contact Number" />
            </FormikStep>
            <FormikStep label="fdsfdsf Info">
              <Step3 />
            </FormikStep>
          </FormikStepper>
          </Grid>
          <Grid md={2} ></Grid>
        </Grid>
      </Container>

      
    </>
    
  );
};