import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const EmailVerify = () => {

  return (
    <>
    <div className='main_sec'>
      <Container maxWidth="lg">
        <Grid item xs={12} container justifyContent="center">
            <Grid item md={12} className="text-center">
                <Box component="h1" className='form_heading mb-0'>Enter Email Verification</Box>
                <Box component="p" className='mt-0 form_sub_heading'>Please enter verification</Box>
            </Grid>
          <Grid container item md={4} ></Grid>
          <Grid container item md={4}>
            <div className='thanks_inner text-center w-100'>
                <div className='email_verify'>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="verify"
                    />
                </div>
                <div>
                    <Button className='yello_btn'>Verify</Button>
                </div>
            </div>
          </Grid>
          <Grid container item md={4} ></Grid>
        </Grid>
      </Container>
    </div>
    </>
  )
}

export default EmailVerify
