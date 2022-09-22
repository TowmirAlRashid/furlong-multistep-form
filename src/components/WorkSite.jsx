import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Slider, styled, Typography } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const WorkSite = ({ 
  topChecked, 
  setTopChecked, 
  topRadioClicked, 
  setTopRadioClicked, 
  topSliderValue, 
  setTopSliderValue,
  top2ndSliderValue,
  setTop2ndSliderValue, 
  bottomChecked, 
  setBottomChecked, 
  bottomRadioClicked, 
  setBottomRadioClicked, 
  bottom1stSliderValue, 
  setBottom1stSliderValue,
  bottom2ndSliderValue,
  setBottom2ndSliderValue
 }) => {
  

  const { control } = useFormContext;

  const calculatevalue = (value) => {
    return value;
  }

  const top1stSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTopSliderValue(newValue);
    }
  };

  const top2ndSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTop2ndSliderValue(newValue);
    }
  };

  const bottom1stSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setBottom1stSliderValue(newValue);
    }
  };

  const bottom2ndSliderHandleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setBottom2ndSliderValue(newValue);
    }
  };

  const StyledSlider = styled(Slider)(
    ({ theme }) => `
    height: ${theme.spacing(2)};
  `,
  );

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
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Typography sx={{
        textAlign:'center',
        fontWeight: 'bold',
        m: '10px 0'
      }}>
        COVID 19 SAFE WORK PLAN
      </Typography>

      <Box mb={4}>
        <strong>Task Name:</strong> <Typography color='red' sx={{ display: 'inline'}}>Attending work site</Typography>
      </Box>

      <Box>
        <FormLabel id='materialsSighted' sx={{ fontWeight: 'bold', color: 'black' }}>Would this Hazardous Element exist on this worksite?</FormLabel>
        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup >
            <FormControlLabel 
              control={<Checkbox checked={topChecked} />} 
              label="Attracting COVID-19 from clients, other workers or surfaces"
              onClick={(e) => setTopChecked(!topChecked)}
            />

            {
              topChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Hazardous Material</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <Typography fontWeight='bold' sx={{ mb: '1.5rem'}}>What are the hazards and risks?</Typography>
                    <Typography>Workers or others catching COVID-19 (could result in serious illness or death).</Typography>

                    <RadioGroup
                      row
                      aria-labelledby='hazards and risks'
                      value={topRadioClicked}
                    >
                      <FormControlLabel 
                        value="yes" 
                        control={<Radio />}
                        label="Yes" 
                        sx={{ mr: '20px'}}
                        onClick={(e) => setTopRadioClicked('yes')} />
                      <FormControlLabel 
                        value="no" 
                        control={<Radio />} 
                        label="No"
                        onClick={(e) => setTopRadioClicked('no')} />
                    </RadioGroup>

                    {
                      topChecked && topRadioClicked === 'yes' && (
                        <Box sx={{ m: '2rem 0 0'}}>
                          <Typography
                            sx={{ mb: '1rem'}}
                          >Inherent Risk Rating - (Workers or others catching COVID-19 (could result in serious illness or death))</Typography>

                          <Box sx={{width: '60%'}}>
                            <Controller
                              control={control}
                              name='worksite inherent risk taking'
                              render={({ field }) => (
                                <StyledSlider
                                  value={topSliderValue}
                                  min={0}
                                  step={1}
                                  max={4}
                                  scale={calculatevalue}
                                  onChange={top1stSliderHandleChange}
                                  valueLabelDisplay="auto"
                                  aria-labelledby="non-linear-slider"
                                  key={`slider-${topSliderValue}`}
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
                                <Typography sx={{ fontSize: '13px', mb: '1rem' }}>Staff and contractors have been briefed on symptoms of COVID-19
                                  and have been told to stay home if they aren’t feeling well. Hygiene</Typography>
                                <ul>
                                  <li>Avoid contact with others (shaking hands, touching faces, hugging, and other intimate contact).</li>
                                  <li>Wearing of disposable nitrile gloves when required on site.</li>
                                  <li>Avoid touching surfaces on client sites without gloves on.</li>
                                  <li>Frequently wash hands with soap and water for at least 20 seconds, or use an alcohol-based hand rub. Particular attention must be taken when using the toilet before preparing and eating food. Alcohol based hand sanitiser is available for all staff and contractors.</li>
                                  <li>Wearing of face mask at all times (as required by prevailing Victorian Health Department regulations). Face masks are made available for all staff and contractors.</li>
                                  <li>Cover your mouth when coughing and sneezing with tissue or a flexed elbow.</li>
                                  <li>Dispose of tissues immediately.</li>
                                  <li>Avoid using client staffrooms / common areas for meal breaks. Prefer in shaded areas outdoors if weather permits or by yourself in vehicle. Social Distancing.</li>
                                  <li>Staff and contractors to work more than 1.5m away from each other, keeping 4sqm distance . Work in different areas on site where able. This includes toolbox meetings and meal breaks.</li>
                                </ul>
                              </Box>

                              <Typography
                                sx={{ mb: '1rem'}}
                              >Residual Risk Rating - (Workers or others catching COVID-19 (could result in serious illness or death))</Typography>

                              <Box sx={{width: '60%'}}>
                                <Controller
                                  control={control}
                                  name='worksite residual risk taking'
                                  render={({ field }) => (
                                    <StyledSlider
                                      value={top2ndSliderValue}
                                      min={0}
                                      step={1}
                                      max={4}
                                      scale={calculatevalue}
                                      onChange={top2ndSliderHandleChange}
                                      valueLabelDisplay="auto"
                                      aria-labelledby="non-linear-slider"
                                      key={`slider-${top2ndSliderValue}`}
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

            <FormControlLabel 
              control={<Checkbox />}  
              label="Alcohol based sanitiser"
              onClick={(e) => setBottomChecked(!bottomChecked)}  
            />

            {
              bottomChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Hazardous Material</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <Typography fontWeight='bold' sx={{ mb: '1.5rem'}}>What are the hazards and risks?</Typography>
                    <Typography>Dermatitis</Typography>

                    <RadioGroup
                      row
                      aria-labelledby='hazards and risks'
                      value={bottomRadioClicked}
                    >
                      <FormControlLabel 
                        value="yes" 
                        control={<Radio />}
                        label="Yes" 
                        sx={{ mr: '20px'}}
                        onClick={(e) => setBottomRadioClicked('yes')} />
                      <FormControlLabel 
                        value="no" 
                        control={<Radio />} 
                        label="No"
                        onClick={(e) => setBottomRadioClicked('no')} />
                    </RadioGroup>

                    {
                      bottomChecked && bottomRadioClicked === 'yes' && (
                        <Box sx={{ m: '2rem 0 0'}}>
                          <Typography
                            sx={{ mb: '1rem'}}
                          >Inherent Risk Rating - (Dermatitis)</Typography>

                          <Box sx={{width: '60%'}}>
                            <Controller
                              control={control}
                              name='worksite inherent risk taking dermatitis'
                              render={({ field }) => (
                                <StyledSlider
                                  value={bottom1stSliderValue}
                                  min={0}
                                  step={1}
                                  max={4}
                                  scale={calculatevalue}
                                  onChange={bottom1stSliderHandleChange}
                                  valueLabelDisplay="auto"
                                  aria-labelledby="non-linear-slider"
                                  key={`slider-${bottom1stSliderValue}`}
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
                                <Typography sx={{ mb: '1rem', fontWeight: 'bold' }}>Staff are encouraged to wash hands with soap and water for 20 secs where possible as an alternative to hand sanitiser.</Typography>
                              </Box>

                              <Typography
                                sx={{ mb: '1rem'}}
                              >Residual Risk Rating - (Dermatitis)</Typography>

                              <Box sx={{width: '60%'}}>
                                <Controller
                                  control={control}
                                  name='worksite residual risk taking dermatitis'
                                  render={({ field }) => (
                                    <StyledSlider
                                      value={bottom2ndSliderValue}
                                      min={0}
                                      step={1}
                                      max={4}
                                      scale={calculatevalue}
                                      onChange={bottom2ndSliderHandleChange}
                                      valueLabelDisplay="auto"
                                      aria-labelledby="non-linear-slider"
                                      key={`slider-${bottom2ndSliderValue}`}
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

export default WorkSite