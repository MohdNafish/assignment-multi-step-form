import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import mailImg from '../../assets/image/mail.png'

const Thanks = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='main_sec'>
        <Container maxWidth="lg">
          <Grid item xs={12} container justifyContent="center">
              <Grid item md={12} className="text-center">
                  <Box component="h1" className='form_heading mb-0'>Done</Box>
                  <Box component="p" className='mt-0 form_sub_heading'>Its Done</Box>
              </Grid>
            <Grid container item md={3} ></Grid>
            <Grid container item md={6}>
              <div className='thanks_inner text-center w-100'>
                  <p>Form is completed ! <span className='text_yellow'>Please find your entry soon.</span></p>
                  <img src={mailImg} className="mailimg" />
                  <p>Thank You!</p>
                  <div className=''>
                      <Button className='yello_btn'>Continue</Button>
                  </div>
                  <div className=''>
                      <Button  onClick={() => navigate(-1)} className='yello_btn'>Go Back</Button>
                  </div>
              </div>
            </Grid>
            <Grid container item md={3} ></Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Thanks
