import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'
import RadioAndSliderComp from './RadioAndSliderComp'

const Danger = ({
  dangerChecked,
  setDangerChecked,
  danger1stRadioClicked,
  setDanger1stRadioClicked,
  danger2ndRadioClicked,
  setDanger2ndRadioClicked,
}) => {

  return (
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Hazardous / Dangerous Goods</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>

        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup sx={{ ml: "1.5rem"}}>
            <FormControlLabel 
              control={<Checkbox checked={dangerChecked} />} 
              label="Generic Painting Chemical Products"
              onClick={(e) => setDangerChecked(!dangerChecked)}
            />

            {
              dangerChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Generic Painting Chemical Products</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Chemical exposure - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={danger1stRadioClicked}
                      radioSetter={setDanger1stRadioClicked}
                      trueCheck={dangerChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Ensure current and valid SDS available for all dangerous/hazardous goods used.
                                     Ensure all PPE nominated in the SDS is readily available for use the work area 
                                     and all air filters are in suitable condition'
                      slider1Title='Inherent Risk Rating'
                      name1='danger chemical exposure inherent risk taking'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='danger chemical exposure residual risk taking'
                    />

                    <RadioAndSliderComp
                      titleNormal='Contaminated Waste - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={danger2ndRadioClicked}
                      radioSetter={setDanger2ndRadioClicked}
                      trueCheck={dangerChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Dispose of all contaminated wastes, using correct procedures. Return unwanted paint to the office for recycling or disposal.'
                      slider1Title='Inherent Risk Rating'
                      name1='danger contaminated waste inherent risk taking'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='danger contaminated waste residual risk taking'
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

export default Danger