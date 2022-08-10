import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useFormik, Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import {Select, MenuItem, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { validationSchema } from '../../validators/Step1_TitleSchema';

const Step1 = ({handleNext}) => {
  const navigate = useNavigate();
  // const location = useLocation();
  // debugger
  const initialValues = {
      country: '',
      number: '',
      name: '',
 
    validationSchema: validationSchema,
    onSubmit: (formValues) => {
      
    },
  };

  const [ form, setForm ] = useState(initialValues);

  const onSubmit = (formValues) => {
    const {onSubmit, validationSchema, ...restData} = formValues;
    localStorage.setItem("RegisterUser", JSON.stringify(restData));
    
    navigate({
      pathname: '',
      search: '?step=2',
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
        <Grid item xs={12} container direction="row">
          <Grid item md={2} ></Grid>
          <Grid item md={8}>
            <div className=''>
              {/* <h4 className='form_title'><span className='content'>Title of the Form </span> <span className='border'></span></h4> */}
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
                      <h4 className='form_title'><span className='content'>Title of the Form </span> <span className='border'></span></h4>
                        <div className='form-group'>
                          <label>Country</label>
                          <Select
                            fullWidth
                            variant="outlined"
                              value={formik.values.country || ""}
                              displayEmpty
                              onChange={formik.handleChange}
                              error={formik.touched.country && Boolean(formik.errors.country)}
                              helperText={formik.touched.country && formik.errors.country}
                              name="country"
                            >
                              <MenuItem value="">Select Country</MenuItem>
                              <MenuItem value={"India"}>India</MenuItem>
                              <MenuItem value={"USA"}>USA</MenuItem>
                              <MenuItem value={"UK"}>UK</MenuItem>
                              <MenuItem value={"Canada"}>Canada</MenuItem>
                          </Select>
                        </div>
                        <div className='form-group'>
                          <label>Number</label>
                          <TextField
                            fullWidth
                            variant="outlined"
                            name="number"
                            value={formik.values.number || ""}
                            onChange={formik.handleChange}
                            error={formik.touched.number && Boolean(formik.errors.number)}
                            helperText={formik.touched.number && formik.errors.number}
                          />
                        </div>
                        <div className='form-group'>
                          <label>Name</label>
                          <TextField
                            fullWidth
                            variant="outlined"
                            name="name"
                            value={formik.values.name || ""}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                          />
                        </div>
                      </div>
                      <div className='prev_next_btn'>
                        {/* <Button variant="contained" type="button" className='prev_btn hidden' >Previous</Button> */}
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

export default Step1
