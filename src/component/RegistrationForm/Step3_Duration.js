import React, { useState, useEffect } from 'react';
import { useFormik, Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import {Select, MenuItem, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { validationSchema } from '../../validators/Step3_DurationSchema';
import { useLocation, useNavigate } from 'react-router-dom';
import addWeeks from "date-fns/addWeeks";
import valid from "card-validator";
// import { DateRangePicker, DateRangeDelimiter, LocalizationProvider} from "@material-ui/pickers";
// import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
// import 'rsuite/dist/styles/rsuite-default.css';
import { DateRangePicker } from 'rsuite';
import ReactDOM from 'react-dom';


const Step3 = ({handleNext, handleBack}) => {

  const navigate = useNavigate();

  const initialValues = {
    duration: '',

  validationSchema: validationSchema,
  onSubmit: (formValues) => {

  },
};

const backStep = formValues => {
  navigate({
    pathname: '',
    search: 'step=2',
  })
  handleBack()
}

const [ form, setForm ] = useState(initialValues);

const onSubmit = (formValues) => {
  const {onSubmit, validationSchema, ...restData} = formValues;
  localStorage.setItem("RegisterUser", JSON.stringify(restData));
  navigate({
    pathname: '',
    search: "step=4",
  });
  handleNext()
}

useEffect(() => {
  const getFormData = JSON.parse(localStorage.getItem("RegisterUser"))
  if(getFormData) {
    setForm(
      {...form, 
        ...getFormData
      }
    )
  }
},[])

// const [selectedDate, handleDateChange] = React.useState([null, null]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid item xs={12} container justifyContent="center" direction="row">
          <Grid item md={2} ></Grid>
          <Grid item md={8}>
            <div className='form_inner'>
              <Formik
                initialValues={form}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize={true}
              >
                {formik => (
              <Form>
              <div className='form_inner'>
                <div className='form_inputs'>
                  <h4 className='form_title'><span className='content'>Select the Duration </span> <span className='border'></span></h4>
                  <div className='form-group'>
                    <Select
                      fullWidth
                      variant="outlined"
                        value={formik.values.duration}
                        displayEmpty
                        onChange={formik.handleChange}
                        error={formik.touched.duration && Boolean(formik.errors.duration)}
                        helperText={formik.touched.duration && formik.errors.duration}
                        name="duration"
                      >
                        <MenuItem value="">Select Duration</MenuItem>
                        <MenuItem value={"Daily"}>Daily</MenuItem>
                        <MenuItem value={"Weekly"}>Weekly</MenuItem>
                        <MenuItem value={"Monthly"}>Monthly</MenuItem>
                    </Select>
                    <p>Please select one from these to check your cycle of the recurence.</p>
                    <p>Question ?</p>
                  </div>
                  <div className='form-group'>
                    <label>Select Date Range</label>
                    <div>
                    <DateRangePicker size="lg"  initialSettings={{ startDate: '01/01/1920', endDate: '01/15/2022' }}>  <input type="text" className="form-control" /></DateRangePicker>
                    </div>
                  </div>
                </div>
                <div className='prev_next_btn'>
                  <Button variant="contained" type="button" onClick={backStep} className='prev_btn' >Previous</Button>
                  <Button variant="contained" type="submit" className='next_btn' >Continue</Button>
                </div>
                </div>
              </Form>
              )}
              </Formik>
            </div>
          </Grid>
          <Grid item md={2} ></Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Step3
