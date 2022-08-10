import React, { useState, useEffect } from 'react';
import { useFormik, Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import {Select, MenuItem, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { validationSchema } from '../../validators/Step5_CompleteSchema';
import { useNavigate, useLocation } from 'react-router-dom';

const Step5 = ({handleNext, handleBack}) => {
  const navigate = useNavigate();

  const initialValues = {
    info_name: '',
    info_email: '',
    info_password: '',

  validationSchema: validationSchema,
  onSubmit: (values) => {
    
  },
};

  const backStep = values => {
    navigate({
      pathname: '',
      search: 'step=4'
    });
    handleBack()
  }

  const [ form, setForm ] = useState(initialValues);

  const onSubmit = (formValues) => {
    const {onSubmit, validationSchema, ...restData} = formValues;
    localStorage.setItem("RegisterUser", JSON.stringify(restData));
    handleNext()

    navigate('/thankyou');
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
            <div className='form_inner' style={{textAlign: "left"}}>
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
                  <label>Name</label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="info_name"
                    value={formik.values.info_name}
                    onChange={formik.handleChange}
                    error={formik.touched.info_name && Boolean(formik.errors.info_name)}
                    helperText={formik.touched.info_name && formik.errors.info_name}
                  />
                </div>
                <div className='form-group'>
                  <label>Email Address</label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="info_email"
                    value={formik.values.info_email}
                    onChange={formik.handleChange}
                    error={formik.touched.info_email && Boolean(formik.errors.info_email)}
                    helperText={formik.touched.info_email && formik.errors.info_email}
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="info_password"
                    type="password"
                    value={formik.values.info_password}
                    onChange={formik.handleChange}
                    error={formik.touched.info_password && Boolean(formik.errors.info_password)}
                    helperText={formik.touched.info_password && formik.errors.info_password}
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

export default Step5
