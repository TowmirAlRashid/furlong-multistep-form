import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
import React from 'react'
import RadioAndSliderComp from './RadioAndSliderComp';

const Transporting = ({
  transportingTopChecked,
  setTransportingTopChecked,
  transportingMiddleChecked,
  setTransportingMiddleChecked,
  transportingBottomChecked,
  setTransportingBottomChecked,
  transportingTop1stRadioClicked,
  setTransportingTop1stRadioClicked,
  transportingTop2ndRadioClicked,
  setTransportingTop2ndRadioClicked,
  transportingMiddleRadioClicked,
  setTransportingMiddleRadioClicked,
  transportingBottom1stRadioClicked,
  setTransportingBottom1stRadioClicked,
  transportingBottom2ndRadioClicked,
  setTransportingBottom2ndRadioClicked,
  transportTop1st1stSliderValue,
  setTransportTop1st1stSliderValue,
  transportTop1st2ndSliderValue,
  setTransportTop1st2ndSliderValue,
  transportTop2nd1stSliderValue,
  setTransportTop2nd1stSliderValue,
  transportTop2nd2ndSliderValue,
  setTransportTop2nd2ndSliderValue,
  transportMiddle1stSliderValue,
  setTransportMiddle1stSliderValue,
  transportMiddle2ndSliderValue,
  setTransportMiddle2ndSliderValue
}) => {

  const transportTop1st1stSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTransportTop1st1stSliderValue(newValue);
    }
  };

  const transportTop1st2ndSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTransportTop1st2ndSliderValue(newValue);
    }
  };

  const transportTop2nd1stSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTransportTop2nd1stSliderValue(newValue);
    }
  };

  const transportTop2nd2ndSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTransportTop2nd2ndSliderValue(newValue);
    }
  };

  const transportMiddle1stSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTransportMiddle1stSliderValue(newValue);
    }
  };

  const transportMiddle2ndSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTransportMiddle2ndSliderValue(newValue);
    }
  };

  return (
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Transporting Paint & Equipment</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>

        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup sx={{ ml: "1.5rem"}}>
            <FormControlLabel 
              control={<Checkbox checked={transportingTopChecked} />} 
              label="Environmental - incidient/spills"
              onClick={(e) => setTransportingTopChecked(!transportingTopChecked)}
            />

            {
              transportingTopChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Environmental - incidient/spills</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <Typography fontWeight='bold' sx={{ mb: '1.5rem'}}>What are the hazards and risks?</Typography>
                    
                    <RadioAndSliderComp
                      titleNormal='Unsecured hazardous material containers in vehicles -'
                      titleRed='Is it a risk at this site?'
                      radioGetter={transportingTop1stRadioClicked}
                      radioSetter={setTransportingTop1stRadioClicked}
                      trueCheck={transportingTopChecked}
                      radioBotQ=''
                      radioBotText=''
                      slider1Title='Inherent Risks - Unsecured hazardous material container in vehicles'
                      name1='transporting inherent risk unsecured container'
                      firstSliderValue={transportTop1st1stSliderValue}
                      firstSliderHandleChange={transportTop1st1stSliderHandleChange}
                      betweenQ='How will the hazards and risk be controlled?'
                      betweenText='All lids securely fastened and materials securely fastened in vehicles'
                      slider2Title='Residual Risk'
                      name2='transporting unsecured container residual risk'
                      secondSliderValue={transportTop1st2ndSliderValue}
                      secondSliderHandleChange={transportTop1st2ndSliderHandleChange}
                    />

                    <RadioAndSliderComp
                      titleNormal='Waste to Ground -'
                      titleRed='Is it a risk at this site?'
                      radioGetter={transportingTop2ndRadioClicked}
                      radioSetter={setTransportingTop2ndRadioClicked}
                      trueCheck={transportingTopChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Prevent contamination to sewers, drains and waterways and zero waste to ground.'
                      slider1Title='Inherent Risk Rating'
                      name1='transporting inherent risk taking'
                      firstSliderValue={transportTop2nd1stSliderValue}
                      firstSliderHandleChange={transportTop2nd1stSliderHandleChange}
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='transporting residual risk taking'
                      secondSliderValue={transportTop2nd2ndSliderValue}
                      secondSliderHandleChange={transportTop2nd2ndSliderHandleChange}
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={transportingMiddleChecked} />} 
              label="Flying Objects"
              onClick={(e) => setTransportingMiddleChecked(!transportingMiddleChecked)}
            />

            {
              transportingMiddleChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Environmental - incidient/spills</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <Typography fontWeight='bold' sx={{ mb: '1.5rem'}}>What are the hazards and risks?</Typography>

                    <RadioAndSliderComp
                      titleNormal='Flying Objects - Struck by flying object -'
                      titleRed='Is it a risk at this site?'
                      radioGetter={transportingMiddleRadioClicked}
                      radioSetter={setTransportingMiddleRadioClicked}
                      trueCheck={transportingMiddleChecked}
                      radioBotQ='How will the hazards and risks be controlled?'
                      radioBotText='Fixed barrier between driver cabin and storage area of the vehicle'
                      slider1Title='Inherent Risk Rating'
                      name1='transporting inherent risk taking flying objects'
                      firstSliderValue={transportMiddle1stSliderValue}
                      firstSliderHandleChange={transportMiddle1stSliderHandleChange}
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='transporting residual risk taking flying objects'
                      secondSliderValue={transportMiddle2ndSliderValue}
                      secondSliderHandleChange={transportMiddle2ndSliderHandleChange}
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={transportingBottomChecked} />} 
              label="Securing Ladders/planks"
              onClick={(e) => setTransportingBottomChecked(!transportingBottomChecked)}
            />

            {
              transportingBottomChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Securing Ladders/planks</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    
                  </Box>
                </Box>
              )
            }
          </FormGroup>
        </Box>
      </Box>
    </Box>
  )
}

export default Transporting