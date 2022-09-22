
import { Box, FormControlLabel, FormLabel, Radio, RadioGroup, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import BannerImg from '../assets/images/furlong-logo.png'
import BottomImg from '../assets/images/project-info.png'

const ProjectInfo = () => {
  const { control } = useFormContext;

  return (
    <Box
      sx={{
        width: '100%',
        m: '20px 0'
      }}
    >
      <Box
        sx={{
          width: '400px',
          m: '0 auto'
        }}
      >
        <img
          src={BannerImg}
          alt='banner'
          width='400px'
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '14px',
          m: '5px 0 15px'
        }}
      >
        All persons involved in works must have SWMS communicated to them before works commence and amend where necessary during works. 
        Tool Box meetings identify, control and communicate hazards,
        with work ceasing if incident or near miss occurs.
      </Typography>

      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="principal contractor"
          render={({ field }) => (
            <>
              <FormLabel id='principalContractor' sx={{ fontWeight: 'bold' }}>Principal Contractor</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="principalContractor"
                variant="outlined"
                fullWidth
                {...field}
              />
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px' }}>
        <Controller
          control={control}
          name="client"
          render={({ field }) => (
            <>
              <FormLabel id='client' sx={{ fontWeight: 'bold' }}>Client</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="client"
                variant="outlined"
                fullWidth
                {...field}
              />
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px' }}>
        <Controller
          control={control}
          name="workplace location"
          render={({ field }) => (
            <>
              <FormLabel id='workplaceLocation' sx={{ fontWeight: 'bold' }}>Workplace Location</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="workplaceLocation"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                {...field}
              />
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="work activity"
          render={({ field }) => (
            <>
              <FormLabel id='workActivity' sx={{ fontWeight: 'bold' }}>Work Activity</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="workActivity"
                variant="outlined"
                fullWidth
                {...field}
              />
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="project manager"
          render={({ field }) => (
            <>
              <FormLabel id='projectManager' sx={{ fontWeight: 'bold' }}>Project Manager</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="projectManager"
                variant="outlined"
                fullWidth
                {...field}
              />
            </>
          )}
        />
      </Box>
      
      <Box sx={{ mb: '20px'}}>
        <Controller
          rules={{ required: true }}
          control={control}
          name="project number"
          render={({ field }) => (
            <>
              <FormLabel id='projectNumber' sx={{ fontWeight: 'bold' }}>Furlong Painting - Project Number*</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="projectNumber"
                variant="outlined"
                required
                fullWidth
                {...field}
              />
            </>
          )}
        />
      </Box>

      <Box sx ={{ mb: '20px '}}>
        <Controller
          render={({ field }) => (
            <>
              <FormLabel id='materialsSighted' sx={{ fontWeight: 'bold' }}>Workplace Hazardous Materials Register Sighted</FormLabel>
              <RadioGroup
                row
                aria-labelledby='hazardous materials sighted'
                {...field}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" sx={{ mr: '200px'}} />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </>
          )}
          control={control}
          name="hazardous materials sighted"
        />
      </Box>

      <Box sx={{ mb: '20px' }}>
        <Typography sx={{
          fontWeight: 'bold',
          margin: '1.5rem 0 1.5rem'
        }}>
          PERSONS CONSULTED IN DEVELOPMENT, REVIEW AND APPROVAL OF SWMS :
        </Typography>
        <Table style={{ margin: '0 auto'}}>
            <TableHead>
              <TableRow style={{ fontSize: '12px', marginBottom: '20px' }} sx={{ borderBottom: 'none'}}>
                <TableCell></TableCell>
                <TableCell align='center'>Parson 1</TableCell>
                <TableCell align='center'>Parson 2</TableCell>
                <TableCell align='center'>Parson 3</TableCell>
                <TableCell align='center'>Parson 4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontSize: '12px' }}>Name</TableCell>
                <TableCell>
                  <Controller
                    control={control}
                    name='parson 1 name'
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
                    name='parson 2 name'
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
                    name='parson 3 name'
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
                    name='parson 4 name'
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

              <TableRow>
                <TableCell style={{ fontSize: '12px' }} >Initial</TableCell>
                <TableCell>
                  <Controller
                    control={control}
                    name='parson 1 initial'
                    render={({ field}) => (
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
                    name='parson 2 initial'
                    render={({ field}) => (
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
                    name='parson 3 initial'
                    render={({ field}) => (
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
                    name='parson 4 initial'
                    render={({ field}) => (
                      <TextField variant="outlined" type='text' {...field} inputProps={{
                        style: {
                          padding: '5px 14px',
                        }
                      }} />
                    )}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontSize: '12px' }}>Date</TableCell>
                <TableCell>
                  <Controller
                    control={control}
                    name='parson 1 date'
                    render={({ field}) => (
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
                    name='parson 2 date'
                    render={({ field}) => (
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
                    name='parson 3 date'
                    render={({ field}) => (
                      <TextField variant="outlined" type='text' {...field} inputProps={{
                        style: {
                          padding: '5px 14px',
                        }
                      }}
                      // sx={{
                      //   " & .MuiInputBase-input":  {
                      //     backgroundColor: 'yellow'
                      // }
                      // }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Controller
                    control={control}
                    name='parson 4 date'
                    render={({ field}) => (
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
      </Box>

      <Box sx={{ mb: '20px'}}>
        <Typography fontWeight='bold' textAlign='center' fontSize='14px' sx={{ textAlign: 'center', mb: '14px'}} >
          Key Concepts
        </Typography>
        <Box  sx={{ textAlign: 'center'}}>
          <Typography sx={{ fontSize: '13px', }}>
            <strong>Hazard</strong> - Something in the work environment that has the potential to cause harm to a person (injury, illness or death).
          </Typography>

          <Typography sx={{ fontSize: '13px', }}>
            <strong>Risk</strong> - The chance (or likelihood) that a hazard will cause that harm.
          </Typography>

          <Typography sx={{ fontSize: '13px', }}>
            <strong>Control Measure</strong> - A thing, work process or system of work that controls the OHS hazard or risk.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: '20px', textAlign: 'center' }}>
        <Typography
          sx={{ fontWeight: 'bold', mb: '10px' }}
        >OHS Risk Matrix and PPE Guide</Typography>

        <Typography
          sx={{ fontSize: '14px', }}
        >To be used to assess the risk rating for identified risks</Typography>
      </Box>

      <Box>
      <img
          src={BottomImg}
          alt='bottom'
          width='100%'
        />
      </Box>
    </Box>
  )
}

export default ProjectInfo