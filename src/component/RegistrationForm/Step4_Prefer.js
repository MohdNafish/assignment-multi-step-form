import React, { useState, useEffect } from 'react';
import { useFormik, Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import {Select, MenuItem, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { validationSchema } from '../../validators/Step4_PreferSchema';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMask } from 'react-mask-field';
import { MaskField } from 'react-mask-field';

function CardNumberField({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="____ ____ ____ ____" replacement="_" {...otherProps} />;
}
function ExpiryField({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="__ __" replacement="_" {...otherProps} />;
}

const Step4 = ({handleNext, handleBack}) => {

  const navigate = useNavigate();

  const initialValues = {
    card_name: '',
    card_number: '',
    expiry: '',
    cvv: '',
    promo_code: '',

  validationSchema: validationSchema,
  onSubmit: (values) => {
  
  },
};

  const backStep = values => {
    navigate({
      pathname: '',
      search: 'step=3'
    });
    handleBack()
  }

  const [ form, setForm ] = useState(initialValues);

  const onSubmit = (formValues) => {
    const {onSubmit, validationSchema, ...restData} = formValues;
    localStorage.setItem("RegisterUser", JSON.stringify(restData));
    navigate({
      pathname: '',
      search: 'step=5',
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
                <h4 className='form_title'><span className='content'>Method Prefer </span> <span className='border'></span></h4>
           
                <div className='form-group'>
                  <label>Name</label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="card_name"
                    value={formik.values.card_name}
                    onChange={formik.handleChange}
                    error={formik.touched.card_name && Boolean(formik.errors.card_name)}
                    helperText={formik.touched.card_name && formik.errors.card_name}
                  />
                </div>
                <div className='form-group'>
                  <label>Card Number</label>
                  {/* <input ref={ref} /> */}
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="card_number"
                    value={formik.values.card_number}
                    onChange={formik.handleChange}
                    error={formik.touched.card_number && Boolean(formik.errors.card_number)}
                    helperText={formik.touched.card_number && formik.errors.card_number}
                    InputProps={{ inputComponent: CardNumberField }}
                  />
                </div>
                <Grid item container justifyContent="center" spacing={3}>
                  <Grid item md={6}>
                    <div className='form-group'>
                      <label>Expiry</label>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="expiry"
                        value={formik.values.expiry}
                        onChange={formik.handleChange}
                        error={formik.touched.expiry && Boolean(formik.errors.expiry)}
                        helperText={formik.touched.expiry && formik.errors.expiry}
                        InputLabelProps={{ inputComponent: ExpiryField }}
                      />
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className='form-group'>
                      <label>CVV</label>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="cvv"
                        type="password"
                        value={formik.values.cvv}
                        onChange={formik.handleChange}
                        error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                        helperText={formik.touched.cvv && formik.errors.cvv}
                      />
                    </div>
                  </Grid>
                </Grid>
                <p>PROMO?</p>
                <div className='form-group'>
                  <label>Promo Code</label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="promo_code"
                    value={formik.values.promo_code}
                    onChange={formik.handleChange}
                    error={formik.touched.promo_code && Boolean(formik.errors.promo_code)}
                    helperText={formik.touched.promo_code && formik.errors.promo_code}
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

export default Step4
