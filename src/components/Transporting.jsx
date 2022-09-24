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
}) => {

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
                      betweenQ='How will the hazards and risk be controlled?'
                      betweenText='All lids securely fastened and materials securely fastened in vehicles'
                      slider2Title='Residual Risk'
                      name2='transporting unsecured container residual risk'
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
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='transporting residual risk taking'
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
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='transporting residual risk taking flying objects'
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
                    <Typography fontWeight='bold' sx={{ mb: '1.5rem'}}>What are the hazards and risks?</Typography>

                    <RadioAndSliderComp
                      titleNormal='Horizontal overhang of ladders, planks etc: '
                      titleRed='Is it a risk at this site?'
                      radioGetter={transportingBottom1stRadioClicked}
                      radioSetter={setTransportingBottom1stRadioClicked}
                      trueCheck={transportingBottomChecked}
                      radioBotQ='How will the hazards and risks be controlled?'
                      radioBotText='Minimize horizontal overhang of ladders and planks. Tie a red flag (at least 300mm x 300mm) on the end of any ladder / plank that extends beyond the rear of the vehicle'
                      slider1Title='Inherent Risk Rating'
                      name1='transporting inherent risk taking securing ladders'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='transporting residual risk taking securing ladders'
                    />

                    <RadioAndSliderComp
                      titleNormal='Unsecured ladders and planks -'
                      titleRed='Is it a risk at this site?'
                      radioGetter={transportingBottom2ndRadioClicked}
                      radioSetter={setTransportingBottom2ndRadioClicked}
                      trueCheck={transportingBottomChecked}
                      radioBotQ='How will the hazards and risks be controlled?'
                      radioBotText='Install securing points for ladders, planks to minimal movement and vibration'
                      slider1Title='Inherent Risk Rating'
                      name1='transporting inherent risk taking securing points'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='transporting residual risk taking securing points'
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

export default Transporting