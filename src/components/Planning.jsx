
import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, styled, Radio, RadioGroup, Slider, Typography } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

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
  const { control } = useFormContext;

  const StyledSlider = styled(Slider)(
    ({ theme }) => `
    height: ${theme.spacing(2)};
  `,
  );

  const calculatevalue = (value) => {
    return value;
  }

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

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 4,
      label: '4',
    },
  ];

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
                    <Typography>Presence of hazardous material - Lead and / or Asbestos :<span style={{color: 'red'}}>Is it a risk at this site?</span></Typography>

                    <RadioGroup
                      row
                      aria-labelledby='hazards and risks'
                      value={planningRadioClicked}
                    >
                      <FormControlLabel 
                        value="yes" 
                        control={<Radio />}
                        label="Yes" 
                        sx={{ mr: '20px'}}
                        onClick={(e) => setPlanningRadioClicked('yes')} />
                      <FormControlLabel 
                        value="no" 
                        control={<Radio />} 
                        label="No"
                        onClick={(e) => setPlanningRadioClicked('no')} />
                    </RadioGroup>

                    {
                      planningChecked && planningRadioClicked === 'yes' && (
                        <Box sx={{ m: '2rem 0 0'}}>
                          <Typography
                            sx={{ mb: '1rem'}}
                          >Inherent Risk Rating - (Presence of hazardous material - Lead and / or Asbestos)</Typography>

                          <Box sx={{width: '60%'}}>
                            <Controller
                              control={control}
                              name='planning inherent risk taking lead/asbestos'
                              render={({ field }) => (
                                <StyledSlider
                                  value={planning1stSliderValue}
                                  min={0}
                                  step={1}
                                  max={4}
                                  scale={calculatevalue}
                                  onChange={planning1stSliderHandleChange}
                                  valueLabelDisplay="auto"
                                  aria-labelledby="non-linear-slider"
                                  key={`slider-${planning1stSliderValue}`}
                                  marks={marks}
                                  {...field}
                                />
                              )}
                            />
                          </Box>

                          <Box>
                            <Typography sx={{
                                fontWeight: 'bold', color: 'rgb(25, 118, 210)'
                              }}>How will the hazards and risk be controlled?</Typography>

                              <Box sx={{
                                m: '1rem 0',
                              }}>
                                <Typography sx={{ mb: '1rem', fontWeight: 'bold' }}>Review site hazardous materials register, follow internal safe work processes and practices for working with or surrounding these materials</Typography>
                              </Box>

                              <Typography
                                sx={{ mb: '1rem'}}
                              >
                                Residual Risk Rating - (Presence of Hazardous materials)
                              </Typography>

                              <Box sx={{width: '60%'}}>
                                <Controller
                                  control={control}
                                  name='planning residual risk taking Hazardous materials'
                                  render={({ field }) => (
                                    <StyledSlider
                                      value={planning2ndSliderValue}
                                      min={0}
                                      step={1}
                                      max={4}
                                      scale={calculatevalue}
                                      onChange={planning2ndSliderHandleChange}
                                      valueLabelDisplay="auto"
                                      aria-labelledby="non-linear-slider"
                                      key={`slider-${planning2ndSliderValue}`}
                                      marks={marks}
                                      {...field}
                                    />
                                  )}
                                />
                              </Box>
                          </Box>
                        </Box>
                      )
                    }
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