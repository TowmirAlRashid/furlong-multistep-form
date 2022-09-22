
import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'
import RadioAndSliderComp from './RadioAndSliderComp';

const Planning = ({
  planningChecked,
  setPlanningChecked,
  planningRadioClicked,
  setPlanningRadioClicked,
  planning1stSliderValue,
  setPlanning1stSliderValue,
  planning2ndSliderValue,
  setPlanning2ndSliderValue,
}) => {

  const planning1stSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setPlanning1stSliderValue(newValue);
    }
  };

  const planning2ndSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setPlanning2ndSliderValue(newValue);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        m: '20px 0'
      }}
    >
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Planning</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>

        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={planningChecked} />} 
              label="Hazardous Materials"
              onClick={(e) => setPlanningChecked(!planningChecked)}
            />

            {
              planningChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Hazardous Material</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <Typography fontWeight='bold' sx={{ mb: '1.5rem'}}>What are the hazards and risks?</Typography>

                    <RadioAndSliderComp
                      titleNormal='Presence of hazardous material - Lead and / or Asbestos :'
                      titleRed='Is it a risk at this site?'
                      radioGetter={planningRadioClicked}
                      radioSetter={setPlanningRadioClicked}
                      trueCheck={planningChecked}
                      radioBotQ=''
                      radioBotText = ''
                      slider1Title='Inherent Risk Rating - (Presence of hazardous material - Lead and / or Asbestos)'
                      name1='planning inherent risk taking lead/asbestos'
                      firstSliderValue={planning1stSliderValue}
                      firstSliderHandleChange={planning1stSliderHandleChange}
                      betweenQ='How will the hazards and risk be controlled?'
                      betweenText='Review site hazardous materials register, follow internal safe work processes and practices for working with or surrounding these materials'
                      slider2Title='Residual Risk Rating - (Presence of Hazardous materials)'
                      name2='planning residual risk taking Hazardous materials'
                      secondSliderValue={planning2ndSliderValue}
                      secondSliderHandleChange={planning2ndSliderHandleChange}
                    />
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

export default Planning