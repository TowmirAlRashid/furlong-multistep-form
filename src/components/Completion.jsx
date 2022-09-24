import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import RadioAndSliderComp from './RadioAndSliderComp'

const Completion = ({
  completionChecked,
  setCompletionChecked,
  completion1stRadioClicked,
  setCompletion1stRadioClicked,
  completion2ndRadioClicked,
  setCompletion2ndRadioClicked,
  completion3rdRadioClicked,
  setCompletion3rdRadioClicked,
  completion4thRadioClicked,
  setCompletion4thRadioClicked,
}) => {

  const { control } = useFormContext();

  return (
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Completion of scope of works</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>
        
        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup sx={{ ml: "1.5rem"}}>
            <FormControlLabel 
              control={<Checkbox checked={completionChecked} />} 
              label="General Hazards"
              onClick={(e) => setCompletionChecked(!completionChecked)}
            />

            {
              completionChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>General Hazards</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Returning work area to the state in which you commenced - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={completion1stRadioClicked}
                      radioSetter={setCompletion1stRadioClicked}
                      trueCheck={completionChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Clean up all tools and waste ensuring the site is left in a clean and tidy condition, removing all debris from the area'
                      slider1Title='Inherent Risk Rating'
                      name1='completion inherent risk rating cleanUp'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='completion residual risk rating cleanUp'
                    />

                    <RadioAndSliderComp
                      titleNormal='Accidental exposure to contaminated wastes - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={completion2ndRadioClicked}
                      radioSetter={setCompletion2ndRadioClicked}
                      trueCheck={completionChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Dispose of all contaminated wastes, using correct procedures. Return unwanted paint to the office for recycling or disposal'
                      slider1Title='Inherent Risk Rating'
                      name1='completion inherent risk rating disposal'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='completion residual risk rating disposal'
                    />

                    <RadioAndSliderComp
                      titleNormal='Reconnection of energy sources - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={completion3rdRadioClicked}
                      radioSetter={setCompletion3rdRadioClicked}
                      trueCheck={completionChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Return all energy sources when safe to do so'
                      slider1Title='Inherent Risk Rating'
                      name1='completion inherent risk rating return energy'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='completion residual risk rating return energy'
                    />

                    <RadioAndSliderComp
                      titleNormal='Traffic hazards - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={completion4thRadioClicked}
                      radioSetter={setCompletion4thRadioClicked}
                      trueCheck={completionChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Remove all signage and safety barriers when works are completed and safe to do so'
                      slider1Title='Inherent Risk Rating'
                      name1='completion inherent risk rating remove barriers'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='completion residual risk rating remove barriers'
                    />
                  </Box>
                </Box>
              )
            }
          </FormGroup>
        </Box>
      </Box>

      <Box sx={{ m: '1.5rem 0 1.5rem'}}>
        <Typography sx={{ fontSize: '14px', mb: '1.5rem' }}>Other Hazardous Elements</Typography>

        <Table style={{ margin: '0 auto'}}>
          <TableHead>
            <TableRow style={{ fontSize: '12px', marginBottom: '12px' }} sx={{ borderBottom: 'none'}}>
              <TableCell></TableCell>
              <TableCell align='center'>What are the hazards and risks?</TableCell>
              <TableCell align='center'>Is it a risk at this site? (Yes/No)</TableCell>
              <TableCell align='center'>Inherent Risk Rating (1-4)</TableCell>
              <TableCell align='center'>How the hazards and risks be controlled?</TableCell>
              <TableCell align='center'>Residual Risk Rating (1-4)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ fontSize: '12px' }}>Other 1</TableCell>
              <TableCell>
                <Controller
                  control={control}
                  name='hazards and risks'
                  render={({ field }) => (
                    <TextField variant="outlined" type='text' {...field} inputProps={{
                      style: {
                        padding: '5px 14px',
                      }
                    }} />
                  )}
                />
              </TableCell>
              <TableCell>
                <Controller
                  control={control}
                  name='risk at this site?'
                  render={({ field }) => (
                    <TextField variant="outlined" type='text' {...field} inputProps={{
                      style: {
                        padding: '5px 14px',
                      }
                    }} />
                  )}
                />
              </TableCell>
              <TableCell>
                <Controller
                  control={control}
                  name='inherent risk rating (1-4)'
                  render={({ field }) => (
                    <TextField variant="outlined" type='text' {...field} inputProps={{
                      style: {
                        padding: '5px 14px',
                      }
                    }} />
                  )}
                />
              </TableCell>
              <TableCell>
                <Controller
                  control={control}
                  name='how to control risks'
                  render={({ field }) => (
                    <TextField variant="outlined" type='text' {...field} inputProps={{
                      style: {
                        padding: '5px 14px',
                      }
                    }} />
                  )}
                />
              </TableCell>
              <TableCell>
                <Controller
                  control={control}
                  name='residual risk taking (1-4)'
                  render={({ field }) => (
                    <TextField variant="outlined" type='text' {...field} inputProps={{
                      style: {
                        padding: '5px 14px',
                      }
                    }} />
                  )}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Typography sx={{ fontSize: '10px', fontStyle: 'italic', mb: '2rem'}}>Add other hazardous elements</Typography>
      </Box>
    </Box>
  )
}

export default Completion