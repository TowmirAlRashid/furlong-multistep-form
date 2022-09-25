import { Box, FormControlLabel, Radio, RadioGroup, Slider, styled, Typography } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const RadioAndSliderComp = ({ 
  titleNormal,
  titleRed,
  radioGetter,
  radioSetter,
  trueCheck,
  slider1Title,
  name1,
  betweenQ,
  betweenText,
  slider2Title,
  name2,
  radioBotQ,
  radioBotSubQ,
  radioBotText,
  radioBotNote
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
    <Box>
      <Typography>{titleNormal}<span style={{color: 'red', fontSize: '14px', fontWeight: 'bold'}}>{titleRed}</span></Typography>

      <RadioGroup
        row
        aria-labelledby='hazards and risks'
        value={radioGetter}
      >
        <FormControlLabel 
          value="yes" 
          control={<Radio />}
          label="Yes" 
          sx={{ mr: '20px'}}
          onClick={(e) => radioSetter('yes')} />
        <FormControlLabel 
          value="no" 
          control={<Radio />} 
          label="No"
          onClick={(e) => radioSetter('no')} />
      </RadioGroup>

      {
        trueCheck && radioGetter === 'yes' && (
          <Box sx={{ m: '2rem 0 0'}}>
            <Box>
              <Typography sx={{
                fontWeight: 'bold', color: 'rgb(25, 118, 210)'
              }}>{radioBotQ} <span style={{ fontWeight: 'bold', color: 'black'}}>{radioBotSubQ}</span></Typography>
            </Box>

            <Typography sx={{
              m: '1rem 0 1rem'
            }}>{radioBotNote}</Typography>

            <Box sx={{
              m: '1rem 0',
            }}>
              <Typography sx={{ mb: '1rem', fontWeight: 'bold' }}>{radioBotText}</Typography>
            </Box>
            <Typography
              sx={{ mb: '1rem'}}
            >{slider1Title}</Typography>

            <Box sx={{width: '60%'}}>
              <Controller
                control={control}
                name={name1}
                render={({ field }) => (
                  <StyledSlider
                    // value={firstSliderValue}
                    min={0}
                    step={1}
                    max={4}
                    scale={calculatevalue}
                    onChange={(_, value) => field.onChange(value)}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                    // key={`slider-${firstSliderValue}`}
                    marks={marks}
                    {...field}
                  />
                )}
              />
            </Box>

            <Box>
              <Typography sx={{
                  fontWeight: 'bold', color: 'rgb(25, 118, 210)'
                }}>{betweenQ}</Typography>

                <Box sx={{
                  m: '1rem 0',
                }}>
                  <Typography sx={{ mb: '1rem', fontWeight: 'bold' }}>{betweenText}</Typography>
                </Box>

                <Typography
                  sx={{ mb: '1rem'}}
                >
                  {slider2Title}
                </Typography>

                <Box sx={{width: '60%'}}>
                  <Controller
                    control={control}
                    name={name2}
                    render={({ field }) => (
                      <StyledSlider
                        // value={secondSliderValue}
                        min={0}
                        step={1}
                        max={4}
                        scale={calculatevalue}
                        onChange={(_, value) => field.onChange(value)}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                        // key={`slider-${secondSliderValue}`}
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
  )
}

export default RadioAndSliderComp