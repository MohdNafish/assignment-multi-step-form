import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import done from '../../assets/image/done.png'

const Completed = () => {

  return (
    <>
      <div className='main_sec'>
        <Container maxWidth="lg">
          <Grid item xs={12} container justifyContent="center">
              <Grid item md={12} className="text-center">
                  <Box component="h1" className='form_heading mb-0'>Done Yeah</Box>
                  <Box component="p" className='mt-0 form_sub_heading'>You're done here!</Box>
              </Grid>
            <Grid container item md={3} ></Grid>
            <Grid container item md={6}>
              <div className='thanks_inner text-center w-100'>
                  <img src={done} className="mailimg" />
              </div>
            </Grid>
            <Grid container item md={3} ></Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Completed
