import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'
import RadioAndSliderComp from './RadioAndSliderComp'

const Electrical = ({
  electricTopChecked,
  setElectricTopChecked,
  electricMiddleChecked,
  setElectricMiddleChecked,
  electricBottomChecked,
  setElectricBottomChecked,
  electricTopRadioClicked,
  setElectricTopRadioClicked,
  electricMiddleRadioClicked,
  setElectricMiddleRadioClicked,
  electricBottomRadioClicked,
  setElectricBottomRadioClicked,
}) => {
  return (
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Electrical</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>

        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup sx={{ ml: "1.5rem"}}>
            <FormControlLabel 
              control={<Checkbox checked={electricTopChecked} />} 
              label="Power Sources, Tools and Leads"
              onClick={(e) => setElectricTopChecked(!electricTopChecked)}
            />

            {
              electricTopChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Power Sources, Tools and Leads</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Electric shock injury - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={electricTopRadioClicked}
                      radioSetter={setElectricTopRadioClicked}
                      trueCheck={electricTopChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText="Identify all active power sources - remember that despite electricity has
                                   been turned off at the property does not turn of electricity on the street. Pre 
                                   Start check to ensure all electrical plant and equipment is in good working order. 
                                   If deemed non operational - must be taken out of use and report to management. 
                                   Ensure all electrical tools have a valid electrical testing and tag label - if not tagged 
                                   remove from service and report to management. Cover/mask electrical sockets/GPO's - ensure 
                                   socket is safe during the works"
                      slider1Title='Inherent Risk Rating'
                      name1='electrical inherent risk power sources'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='electrical residual risk power sources'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={electricMiddleChecked} />} 
              label="Aluminium / steel extension roller handles"
              onClick={(e) => setElectricMiddleChecked(!electricMiddleChecked)}
            />

            {
              electricMiddleChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Aluminium / steel extension roller handles</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Electric shock injury - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={electricMiddleRadioClicked}
                      radioSetter={setElectricMiddleRadioClicked}
                      trueCheck={electricMiddleChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText="Pre start check to identify electrical hazards, prior to use of aluminium/steel extension roller handles."
                      slider1Title='Inherent Risk Rating'
                      name1='electrical inherent risk steel extension'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='electrical residual risk steel extension'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={electricBottomChecked} />} 
              label="Overhead Power Lines"
              onClick={(e) => setElectricBottomChecked(!electricBottomChecked)}
            />

            {
              electricBottomChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Overhead Power Lines</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Electric shock injury - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={electricBottomRadioClicked}
                      radioSetter={setElectricBottomRadioClicked}
                      trueCheck={electricBottomChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText="Check for overhead wires, power lines and electrical installations prior to 
                                    setting up work area to perform scope of works. Pre start check before setting up access equipment"
                      slider1Title='Inherent Risk Rating'
                      name1='electrical inherent risk power overhead'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='electrical residual risk power overhead'
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

export default Electrical