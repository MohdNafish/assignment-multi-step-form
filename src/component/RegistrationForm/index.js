import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Step1 from './Step1_Title';
import Step2 from './Step2_Contact';
import Step3 from './Step3_Duration';
import Step4 from './Step4_Prefer';
import Step5 from './Step5_Complete';
import { Box } from '@material-ui/core';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Title', 'Contact', 'Duration', 'Prefer', 'Completed'];
}

export default function RegistrationForm() {

  const { search } = useLocation();
  const queryStep = new URLSearchParams(search).get('step')

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();


  useEffect(() => {
    if(queryStep) {
      setActiveStep(+queryStep)
    }
  },[]) 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 1:
        return (
        (<Step1 handleNext={handleNext} />)
      )
      case 2:
        return (

        <Step2 handleNext={handleNext} handleBack={handleBack} />
      )
      case 3:
        return (
        <Step3 handleNext={handleNext} handleBack={handleBack} />
      )
      case 4:
        return (
        <Step4 handleNext={handleNext} handleBack={handleBack} />
      )
      case 5:
        return (
        <Step5 handleNext={handleNext} handleBack={handleBack} />
      )
      default:
        return "Thank You"
    }
  }

  return (
    <>
    <div className={classes.root} style={{textAlign: "center"}}>
      <Container maxWidth="lg">
          <Grid container xs={12} justifyContent="center" direction="row">
            <Grid item md={12}>
              <Box component="h1" className='form_heading mb-0'>Registration Form</Box>
              <Box component="p" className='mt-0 form_sub_heading'>This is Example Registration Form</Box>
            </Grid>
            <Grid md={2} ></Grid>
            <Grid md={8}>
              <Stepper activeStep={activeStep - 1} alternativeLabel>
                  {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            </Grid>
            <Grid  item md={2}></Grid>
          </Grid>
      </Container>
    </div>
    </>
  );
}
