import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'
import RadioAndSliderComp from './RadioAndSliderComp'

const WorkEnv = ({
  workenvTopChecked,
  setWorkenvTopChecked,
  workenvMiddleChecked,
  setWorkenvMiddleChecked,
  workenvBottomChecked,
  setWorkenvBottomChecked,
  workenvTopRadioClicked,
  setWorkenvTopRadioClicked,
  workenvMiddleRadioClicked,
  setWorkenvMiddleRadioClicked,
  workenvBottomRadioClicked,
  setWorkenvBottomRadioClicked
}) => {
  return (
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Working Environment</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>

        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup sx={{ ml: "1.5rem"}}>
            <FormControlLabel 
              control={<Checkbox checked={workenvTopChecked} />} 
              label="General atmosphere"
              onClick={(e) => setWorkenvTopChecked(!workenvTopChecked)}
            />

            {
              workenvTopChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>General atmosphere</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Contraction / Transmission of Virus (COVID) - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={workenvTopRadioClicked}
                      radioSetter={setWorkenvTopRadioClicked}
                      trueCheck={workenvTopChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Review of sun exposure hazards - use of protective equipment clothing e.g. Sun hat, 
                                    safety glasses - UV rated, Sunscreen 30+ on exposure skin areas, remain hydrated and 
                                    provide shade as required. Review scheduled working hours - determine if the scope of 
                                    work can be performed outside the hotter parts of the day'
                      slider1Title='Inherent Risk Rating'
                      name1='work environment inherent risk transmission of virus'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='work environment residual risk transmission of virus'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={workenvMiddleChecked} />} 
              label="External atmosphere"
              onClick={(e) => setWorkenvMiddleChecked(!workenvMiddleChecked)}
            />

            {
              workenvMiddleChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>External atmosphere</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Exposure to the sun - ultra violet rays - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={workenvMiddleRadioClicked}
                      radioSetter={setWorkenvMiddleRadioClicked}
                      trueCheck={workenvMiddleChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Review of sun exposure hazards - use of protective equipment clothing e.g. Sun hat,
                                   safety glasses - UV rated, Sunscreen 30+ on exposure skin areas, remain hydrated and 
                                   provide shade as required. Review scheduled working hours - determine if the scope of work 
                                   can be performed outside the hotter parts of the day'
                      slider1Title='Inherent Risk Rating'
                      name1='work environment inherent risk UV rays'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='work environment residual risk UV rays'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={workenvBottomChecked} />} 
              label="Internal atmosphere"
              onClick={(e) => setWorkenvBottomChecked(!workenvBottomChecked)}
            />

            {
              workenvBottomChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Internal atmosphere</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Contaminated internal atmosphere - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={workenvBottomRadioClicked}
                      radioSetter={setWorkenvBottomRadioClicked}
                      trueCheck={workenvBottomChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Use of appropriate PPE respiratory protection where required. Ensure adequate ventilation for the scope of works.'
                      slider1Title='Inherent Risk Rating'
                      name1='work environment inherent risk atmosphere contamination'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='work environment residual risk atmosphere contamination'
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

export default WorkEnv