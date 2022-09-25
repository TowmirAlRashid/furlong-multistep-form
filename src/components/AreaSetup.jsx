import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React from 'react'
import RadioAndSliderComp from './RadioAndSliderComp'

const AreaSetup = ({
  area1stChecked,
  setArea1stChecked,
  area2ndChecked,
  setArea2ndChecked,
  area3rdChecked,
  setArea3rdChecked,
  area4thChecked,
  setArea4thChecked,
  area5thChecked,
  setArea5thChecked,
  area6thChecked,
  setArea6thChecked,
  area7thChecked,
  setArea7thChecked,
  area8thChecked,
  setArea8thChecked,
  area9thChecked,
  setArea9thChecked,
  area10thChecked,
  setArea10thChecked,
  area1st1stRadioClicked,
  setArea1st1stRadioClicked,
  area1st2ndRadioClicked,
  setArea1st2ndRadioClicked,
  area2ndRadioClicked,
  setArea2ndRadioClicked,
  area3rd1stRadioClicked,
  setArea3rd1stRadioClicked,
  area3rd2ndRadioClicked,
  setArea3rd2ndRadioClicked,
  area3rd3rdRadioClicked,
  setArea3rd3rdRadioClicked,
  area4thRadioClicked,
  setArea4thRadioClicked,
  area5thRadioClicked,
  setArea5thRadioClicked,
  area6thRadioClicked,
  setArea6thRadioClicked,
  area7th1stRadioClicked,
  setArea7th1stRadioClicked,
  area7th2ndRadioClicked,
  setArea7th2ndRadioClicked,
  area8thRadioClicked,
  setArea8thRadioClicked,
  area9thRadioClicked,
  setArea9thRadioClicked,
  area10thRadioClicked,
  setArea10thRadioClicked,
}) => {
  return (
    <Box sx={{
      width: '100%',
      m: '20px 0'
    }}>
      <Box mb={4}>
        <strong>Task Name:</strong> <Typography sx={{ display: 'inline'}}>Work Area Setup</Typography>
      </Box>

      <Box>
        <FormLabel id='planning' sx={{ fontWeight: 'bold', color: 'black' }}>Hazardous Elements</FormLabel>

        <Box sx={{ mt: '1.2rem'}}>
          <FormGroup sx={{ ml: "1.5rem"}}>
            <FormControlLabel 
              control={<Checkbox checked={area1stChecked} />} 
              label="Manual Handling Risks"
              onClick={(e) => setArea1stChecked(!area1stChecked)}
            />

            {
              area1stChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Manual Handling Risks</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Repetitive work activities - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area1st1stRadioClicked}
                      radioSetter={setArea1st1stRadioClicked}
                      trueCheck={area1stChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Identify repetitive tasks and implementation of manual handling techniques e.g. Rotate repetitive tasks etc.'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk repeatitive work'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk repeatitive work'
                    />

                    <RadioAndSliderComp
                      titleNormal='Physical manoeuvring of paint, tools and equipment - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area1st2ndRadioClicked}
                      radioSetter={setArea1st2ndRadioClicked}
                      trueCheck={area1stChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Use manual handling aids where ever possible. Reduce paint container size to under 10 litre in size where possible.'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Physical manoeuvring'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Physical manoeuvring'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area2ndChecked} />} 
              label="Emergency Fire and Explosive hazards"
              onClick={(e) => setArea2ndChecked(!area2ndChecked)}
            />

            {
              area2ndChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Emergency Fire and Explosive hazards</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Ignition sources in work area - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area2ndRadioClicked}
                      radioSetter={setArea2ndRadioClicked}
                      trueCheck={area2ndChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Ensure suitable fire suppression equipment is readily available.'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Ignition sources'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Ignition sources'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area3rdChecked} />} 
              label="Working adjacent to Roads and Public safety"
              onClick={(e) => setArea3rdChecked(!area3rdChecked)}
            />

            {
              area3rdChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Working adjacent to Roads and Public safety</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Clients / general public in or around work area - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area3rd1stRadioClicked}
                      radioSetter={setArea3rd1stRadioClicked}
                      trueCheck={area3rdChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotSubQ='(Clients / general public in or around work area)'
                      radioBotText='Erection of barricades and signage (inline with Vic Roads traffic
                                   control guidelines where required). Remove non required persons from the working areas'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk general public'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk general public'
                    />

                    <RadioAndSliderComp
                      titleNormal='Contractor vehicle parking - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area3rd2ndRadioClicked}
                      radioSetter={setArea3rd2ndRadioClicked}
                      trueCheck={area3rdChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Contractors vehicle is parked in designated parking area.'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk vehicle parking'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk vehicle parking'
                    />

                    <RadioAndSliderComp
                      titleNormal='Pedestrian and Traffic hazards - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area3rd3rdRadioClicked}
                      radioSetter={setArea3rd3rdRadioClicked}
                      trueCheck={area3rdChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Erection of barricades and signage (inline with Vic Roads traffic
                                   control guidelines where required). Traffic management plans for pedestrians and vehicles where required.'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Traffic hazards'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Traffic hazards'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area4thChecked} />} 
              label="Contact with mobile plant or vehicles"
              onClick={(e) => setArea4thChecked(!area4thChecked)}
            />

            {
              area4thChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Contact with mobile plant or vehicles</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Ignition sources in work area - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area4thRadioClicked}
                      radioSetter={setArea4thRadioClicked}
                      trueCheck={area4thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='No work in "No Go Zones". High visibility clothing worn at all times. 
                                    Do not stand behind reversing vehicles. Allow sufficient distance from plant during operation. 
                                    High alertness around:- reversing alarms/beepers, calls from plant operators,safety warning signs, 
                                    spotters, maintain good visibility with other workers in the area and compliance with traffic 
                                    management plan requirements.'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Worksite Traffic Hazards'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Worksite Traffic Hazards'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area5thChecked} />} 
              label="Spray Painting"
              onClick={(e) => setArea5thChecked(!area5thChecked)}
            />

            {
              area5thChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Spray Painting</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Spray Gun injury - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area5thRadioClicked}
                      radioSetter={setArea5thRadioClicked}
                      trueCheck={area5thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Follow manufacturers recommendations - avoid kinking of hoses, identify suitable pressure 
                                  for the tasks, protect surrounding area to avoid overspray and monitor external factors if applicable'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Spray Gun injury'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Spray Gun injury'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area6thChecked} />} 
              label="Ground surface"
              onClick={(e) => setArea6thChecked(!area6thChecked)}
            />

            {
              area6thChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Ground surface</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Slips, trips and falls - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area6thRadioClicked}
                      radioSetter={setArea6thRadioClicked}
                      trueCheck={area6thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Securing work area - signage, barricades, temporary closure of access doors 
                                    whilst performing works. Minimize tripping hazards - remove all tools and equipment from the 
                                    floor, securing drop sheets to floor. Ensure adequate lighting. Secure electric leads from 
                                    floor space. Ensure all painting equipment and materials is stored away at the end of the day'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk trips and falls'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk trips and falls'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area7thChecked} />} 
              label="Working at Heights above 2m"
              onClick={(e) => setArea7thChecked(!area7thChecked)}
            />

            {
              area7thChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Working at Heights above 2m</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Setting up - accessing height equipment. Use of ladders, 
                                  Trestles, EWP, Scaffolding, Roof Anchoring / Harnessing etc Falls from equipment, exposed edges - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area7th1stRadioClicked}
                      radioSetter={setArea7th1stRadioClicked}
                      trueCheck={area7thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Assess ground/floor surface condition, where ground surfaces may change. 
                                    Check the equipment design will support the specific loading for the takes. 
                                    Ensure weather conditions (rain, wind loads, fog, dew) prior to working. 
                                    Ensure all safety and access equipment is set up within manufacturers recommendations 
                                    and fit for purpose. Use harnessing where working within 2 metres of exposed edge and 
                                    risk of fall. Install temporary roof anchoring where required'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk accessing height equipment'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk accessing height equipment'
                    />

                    <RadioAndSliderComp
                      titleNormal='Certification/Competencies - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area7th2ndRadioClicked}
                      radioSetter={setArea7th2ndRadioClicked}
                      trueCheck={area7thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='All persons responsible for operation of access equipment are 
                                    trained and competent to operate and use the equipment accordingly'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Certification/Competencies'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Certification/Competencies'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area8thChecked} />} 
              label="Ladder Safety"
              onClick={(e) => setArea8thChecked(!area8thChecked)}
            />

            {
              area8thChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Ladder Safety</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Falls from Ladder - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area8thRadioClicked}
                      radioSetter={setArea8thRadioClicked}
                      trueCheck={area8thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Load rating 120Kg min - industrial rating label attached and clearly 
                                    visable. Correct size and length for task. Ladder in good operational order - 
                                    (clean and dry) after visual inspection. Suitable securing options available - 
                                    top and bottom and fitted with appropriate non slip foot moulding. Ability to secure 
                                    3 points of contact at all times'
                      radioBotNote='NOTE: do not attempt to move or extend ladder when working on the ladder, 
                                    sliding down stiles or stepping up or down two or more rungs at a time.'
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Falls from Ladder'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Falls from Ladder'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area9thChecked} />} 
              label="Trestle Safety"
              onClick={(e) => setArea9thChecked(!area9thChecked)}
            />

            {
              area9thChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>Trestle Safety</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Falls from access equipment - e.g. Trestle/Scaffold - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area9thRadioClicked}
                      radioSetter={setArea9thRadioClicked}
                      trueCheck={area9thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Rated for the proposed weight and span. Overhang of at least 150mm and nor 
                                    more than 250mm at each end and be locked together e.g. claimed near centre span 
                                    to prevent movement. Unobstructed surface width of at least 450mm (two planks wide). 
                                    Trestle/scaffold on firm level ground with feet properly supported - no loose 
                                    building material used to support weight of the access equipment'
                      radioBotNote=''
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Falls from access equipment'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Falls from access equipment'
                    />
                  </Box>
                </Box>
              )
            }

            <FormControlLabel 
              control={<Checkbox checked={area10thChecked} />} 
              label="EWP / Powered Access Equipment"
              onClick={(e) => setArea10thChecked(!area10thChecked)}
            />

            {
              area10thChecked && (
                <Box sx={{ m: '20px 0 0'}}>
                  <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>EWP / Powered Access Equipment</Typography>
                  <hr color='lightGray' />

                  <Box sx={{ m: '2rem 0 1rem'}}>
                    <RadioAndSliderComp
                      titleNormal='Falls from access equipment - e.g. Scissor / Boom lift - equipment suitable for nominated scope of work. - '
                      titleRed='Is it a risk at this site?'
                      radioGetter={area10thRadioClicked}
                      radioSetter={setArea10thRadioClicked}
                      trueCheck={area10thChecked}
                      radioBotQ='How hazards will be controlled?'
                      radioBotText='Ensure pre-use check list is completed. Ensure ground is level and 
                                  sound. Do not lean out of scissor lift / boom lift or stand on handrails. 
                                  Move equipment to enable safe access. Do not climb outside boom lift. Ensure minimal 
                                  tools, paint etc in boom lift. Take care re dropping items. Ensure no tradespersons 
                                  working directly below. Be sure to LOOK UP to ensure no powerlines in proximity.'
                      radioBotNote=''
                      slider1Title='Inherent Risk Rating'
                      name1='areaSetup inherent risk Falls from powered access equipment'
                      betweenQ=''
                      betweenText=''
                      slider2Title='Residual Risk Rating'
                      name2='areaSetup residual risk Falls from powered access equipment'
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

export default AreaSetup