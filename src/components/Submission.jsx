import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import SignaturePad from 'react-signature-canvas'

const Submission = () => {
  const { control } = useFormContext();

  const [saveButtonClicked1, setSaveButtonClicked1] = useState(false)
  const [saveButtonClicked2, setSaveButtonClicked2] = useState(false)
  const [saveButtonClicked3, setSaveButtonClicked3] = useState(false)

  let pad1 = useRef({})
  let pad2 = useRef({})
  let pad3 = useRef({})

  const save = (pad) => {
    if (pad?.current) {
      return pad1?.current.toDataURL();
    }
  }

  return (
    <Box sx={{
      width: '100%',
      m: '25px 0'
    }}>
      <Typography sx={{ mb: '2rem' }}>
        This SWMS has been developed in consultation with the relevant employer and workers on site. 
        I have read the above SWMS and I understand its contents. I confirm that I have the skills and training, 
        including relevant certification to conduct the task as described. I agree to comply with safety requirements within this SWMS including risk control measures, safe work instructions and Personal Protective Equipment as described. I will refrain from tasks for which I do not have the appropriate skills, training or certification and inform the site foreperson / Furlong Management immediately.
      </Typography>

      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="submit name 1"
          render={({ field }) => (
            <>
              <FormLabel id='submitName' sx={{ fontWeight: 'bold' }}>Name</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="submitName"
                variant="outlined"
                fullWidth
                {...field}
              />
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px'}}>
        <FormLabel id='submitName' sx={{ fontSize : '13px' }}>Signature 1</FormLabel>
        <Controller
          control={control}
          name="signature 1"
          render={({ field }) => (
            <>
              <Box sx={{ border: '1px solid lightGray', mb: '1rem' }}>
                <SignaturePad 
                  key={1}
                  ref={pad1}
                  onEnd={() => field.onChange(save(pad1))}
                  canvasProps={{
                    width: 600,
                    height: 200,
                  }}
                />
              </Box>

              {
                saveButtonClicked1 ? (
                  <Button sx={{backgroundColor: 'lightgray',}} onClick={() => setSaveButtonClicked1(!saveButtonClicked1)}>Redraw</Button>
                ) : (
                  <>
                    <Button sx={{ backgroundColor: 'lightgray', mr: '10px'}} onClick={() => pad1.current.clear()}>Clear</Button>
                    <Button variant='contained' onClick={() => setSaveButtonClicked1(!saveButtonClicked1)}>Save</Button>
                  </>
                )
              }
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="submit date 1"
          render={({ field }) => (
            <>
              <FormLabel id='submitName' sx={{ fontWeight: 'bold', display: 'block' }}>Date</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="submitName"
                variant="outlined"
                sx={{ width : '50%'}}
                {...field}
                type='date'
              />
            </>
          )}
        />
      </Box>



      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="submit name 2"
          render={({ field }) => (
            <>
              <FormLabel id='submitName' sx={{ fontWeight: 'bold' }}>Name</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="submitName"
                variant="outlined"
                fullWidth
                {...field}
              />
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px'}}>
        <FormLabel id='submitName' sx={{ fontSize : '13px' }}>Signature 2</FormLabel>
        <Controller
          control={control}
          name="signature 2"
          render={({ field }) => (
            <>
              <Box sx={{ border: '1px solid lightGray', mb: '1rem' }}>
                <SignaturePad 
                  key={2}
                  ref={pad2}
                  onEnd={() => field.onChange(save(pad2))}
                  canvasProps={{
                    width: 600,
                    height: 200,
                  }}
                />
              </Box>

              {
                saveButtonClicked2 ? (
                  <Button sx={{backgroundColor: 'lightgray',}} onClick={() => setSaveButtonClicked2(!saveButtonClicked2)}>Redraw</Button>
                ) : (
                  <>
                    <Button sx={{ backgroundColor: 'lightgray', mr: '10px'}} onClick={() => pad2.current.clear()}>Clear</Button>
                    <Button variant='contained' onClick={() => setSaveButtonClicked2(!saveButtonClicked2)}>Save</Button>
                  </>
                )
              }
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="submit date 2"
          render={({ field }) => (
            <>
              <FormLabel id='submitName' sx={{ fontWeight: 'bold', display: 'block' }}>Date</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="submitName"
                variant="outlined"
                sx={{ width : '50%'}}
                {...field}
                type='date'
              />
            </>
          )}
        />
      </Box>



      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="submit name 3"
          render={({ field }) => (
            <>
              <FormLabel id='submitName' sx={{ fontWeight: 'bold' }}>Name</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="submitName"
                variant="outlined"
                fullWidth
                {...field}
              />
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px'}}>
        <FormLabel id='submitName' sx={{ fontSize : '13px' }}>Signature 3</FormLabel>
        <Controller
          control={control}
          name="signature 3"
          render={({ field }) => (
            <>
              <Box sx={{ border: '1px solid lightGray', mb: '1rem' }}>
                <SignaturePad 
                  key={3}
                  ref={pad3}
                  onEnd={() => field.onChange(save(pad3))}
                  canvasProps={{
                    width: 600,
                    height: 200,
                  }}
                />
              </Box>

              {
                saveButtonClicked3 ? (
                  <Button sx={{backgroundColor: 'lightgray',}} onClick={() => setSaveButtonClicked3(!saveButtonClicked3)}>Redraw</Button>
                ) : (
                  <>
                    <Button sx={{ backgroundColor: 'lightgray', mr: '10px'}} onClick={() => pad3.current.clear()}>Clear</Button>
                    <Button variant='contained' onClick={() => setSaveButtonClicked3(!saveButtonClicked3)}>Save</Button>
                  </>
                )
              }
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: '20px'}}>
        <Controller
          control={control}
          name="submit date 3"
          render={({ field }) => (
            <>
              <FormLabel id='submitName' sx={{ fontWeight: 'bold', display: 'block' }}>Date</FormLabel>
              <TextField
                inputProps={{
                  style: {
                    padding: '5px 14px',
                    margin: '2px 8px'
                  }
                }}
                id="submitName"
                variant="outlined"
                sx={{ width : '50%'}}
                {...field}
                type='date'
              />
            </>
          )}
        />
      </Box>
    </Box>
  )
}

export default Submission