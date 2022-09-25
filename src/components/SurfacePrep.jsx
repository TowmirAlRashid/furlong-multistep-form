import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'
import RadioAndSliderComp from './RadioAndSliderComp'

const SurfacePrep = ({
  surface1stChecked,
  setSurface1stChecked,
  surface2ndChecked,
  setSurface2ndChecked,
  surface3rdChecked,
  setSurface3rdChecked,
  surface4thChecked,
  setSurface4thChecked,
  surface1stRadioClicked,
  setSurface1stRadioClicked,
  surface2ndRadioClicked,
  setSurface2ndRadioClicked,
  surface3rdRadioClicked,
  setSurface3rdRadioClicked,
  surface4thRadioClicked,
  setSurface4thRadioClicked,
}) => {
  return (
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Surface Preparation including sanding, caulking and patching and painting</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>

        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup sx={{ ml: "1.5rem"}}>
            <FormControlLabel 
              control={<Checkbox checked={surface1stChecked} />} 
              label="Power Sources, Tools and Leads"
              onClick={(e) => setSurface1stChecked(!surface1stChecked)}
            />

            {
              surface1stChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Power Sources, Tools and Leads</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Electric shock injury - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={surface1stRadioClicked}
                      radioSetter={setSurface1stRadioClicked}
                      trueCheck={surface1stChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText="Identify all active power sources - remember that despite electricity 
                                  has been turned off at the property does not turn of electricity on the street. 
                                  Pre Start check to ensure all electrical plant and equipment is in good working order. 
                                  If deemed non operational - must be taken out of use and report to management. Ensure all 
                                  electrical tools have a valid electrical testing and tag label - if not tagged remove 
                                  from service and report to management. Cover/mask electrical sockets/GPO's - ensure socket is safe during the works"
                      slider1Title='Inherent Risk Rating'
                      name1='surface preparation inherent risk Electric shock injury'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='surface preparation residual risk Electric shock injury'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={surface2ndChecked} />} 
              label="Aluminium / steel extension roller handles"
              onClick={(e) => setSurface2ndChecked(!surface2ndChecked)}
            />

            {
              surface2ndChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Aluminium / steel extension roller handles</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Electric shock injury - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={surface2ndRadioClicked}
                      radioSetter={setSurface2ndRadioClicked}
                      trueCheck={surface2ndChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText="Pre start check to identify electrical hazards, prior to use of aluminium/steel extension roller handles."
                      slider1Title='Inherent Risk Rating'
                      name1='surface preparation inherent risk steel extension handles'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='surface preparation residual risk steel extension handles'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={surface3rdChecked} />} 
              label="Overhead Power Lines"
              onClick={(e) => setSurface3rdChecked(!surface3rdChecked)}
            />

            {
              surface3rdChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Overhead Power Lines</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Electric shock injury - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={surface3rdRadioClicked}
                      radioSetter={setSurface3rdRadioClicked}
                      trueCheck={surface3rdChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText="Check for overhead wires, power lines and electrical installations prior to setting up 
                                    work area to perform scope of works. Pre start check before setting up access equipment"
                      slider1Title='Inherent Risk Rating'
                      name1='surface preparation inherent risk Overhead Power Lines'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='surface preparation residual risk Overhead Power Lines'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={surface4thChecked} />} 
              label="Falling objects"
              onClick={(e) => setSurface4thChecked(!surface4thChecked)}
            />

            {
              surface4thChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Falling objects</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Serious head injuries - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={surface4thRadioClicked}
                      radioSetter={setSurface4thRadioClicked}
                      trueCheck={surface4thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText="Avoid using tools when working from a ladder. If there is a need to use tools 
                                    on ladder - use lanyard to pass tools to persons at height, minimize risk of equipment 
                                    falling from a height. Use an elevated work platform where possible and then conduct 
                                    pre start checklist - ensure all kick boards are installed and in good operational condition"
                      slider1Title='Inherent Risk Rating'
                      name1='surface preparation inherent risk Serious head injuries'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='surface preparation residual risk Serious head injuries'
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

export default SurfacePrep