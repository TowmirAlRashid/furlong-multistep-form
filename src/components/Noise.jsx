import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'
import RadioAndSliderComp from './RadioAndSliderComp'

const Noise = ({ 
  noiseChecked,
  setNoiseChecked,
  noiseRadioClicked,
  setNoiseRadioClicked,
  noise1stSliderValue,
  setNoise1stSliderValue,
  noise2ndSliderValue,
  setNoise2ndSliderValue
}) => {
  const noise1stSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setNoise1stSliderValue(newValue);
    }
  };

  const noise2ndSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setNoise2ndSliderValue(newValue);
    }
  };

  return (
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Noise</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>

        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={noiseChecked} />} 
              label="Plant and Equipment"
              onClick={(e) => setNoiseChecked(!noiseChecked)}
            />

            {
              noiseChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Plant and Equipment</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Exposure to noise - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={noiseRadioClicked}
                      radioSetter={setNoiseRadioClicked}
                      trueCheck={noiseChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Use of hearing protection when operating noisy plant and equipment - inline with manufacturers recommendations .'
                      slider1Title='Inherent Risk Rating'
                      name1='noise inherent risk taking'
                      firstSliderValue={noise1stSliderValue}
                      firstSliderHandleChange={noise1stSliderHandleChange}
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='noise residual risk taking'
                      secondSliderValue={noise2ndSliderValue}
                      secondSliderHandleChange={noise2ndSliderHandleChange}
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

export default Noise