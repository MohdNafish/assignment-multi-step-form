import React from 'react'
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


const Step1 = () => {
  return (
    <>
    {/* <h4>fds</h4> */}
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
              <InputField name="firstName" label="First Name" />
              <InputField name="lastName" label="Last Name" />
              
    </>
  )
}

export default Step1
