import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik, Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import {Select, MenuItem, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { validationSchema } from '../../validators/Step2_ContactSchema';

const Step2 = ({handleNext, handleBack}) => {
  const navigate = useNavigate();
  // const { search } = useLocation();
  // const step = new URLSearchParams(search).get('step')

  // debugger
  const initialValues = {
    email: '',
    contact: '',

  validationSchema: validationSchema,
  onSubmit: (formValues) => {

  },
};

  const backStep = formValues => {
    navigate({
      pathname: '',
      search: 'step=1',
    });
    handleBack()
  }

  const [ form, setForm ] = useState(initialValues);

  const onSubmit = (formValues) => {
    const {onSubmit, validationSchema, ...restData} = formValues;
    localStorage.setItem("RegisterUser", JSON.stringify(restData));
    navigate({
      pathname: '',
      search: '?step=3',
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

  return (
    <>
      <Container maxWidth="lg">
        <Grid item xs={12} container justifyContent="center">
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
                      <h4 className='form_title'><span className='content'>Information </span> <span className='border'></span></h4>
             
                <div className='form-group'>
                  <label>Email Address</label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </div>
                <div className='form-group'>
                  <label>Contact</label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="contact"
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    error={formik.touched.contact && Boolean(formik.errors.contact)}
                    helperText={formik.touched.contact && formik.errors.contact}
                  />
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

export default Step2
