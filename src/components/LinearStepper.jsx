import { FormProvider, useForm } from "react-hook-form";

import ProjectInfo from './ProjectInfo';
import WorkSite from './WorkSite';
import Planning from './Planning';
import Transporting from './Transporting';
import AreaSetup from './AreaSetup';
import SurfacePrep from './SurfacePrep';
import Noise from './Noise';
import Electrical from './Electrical';
import WorkEnv from './WorkEnv';
import Danger from './Danger';
import Completion from './Completion';
import Submission from './Submission';

import { Box, Button, Step, StepButton, Stepper, Typography } from "@mui/material";
import { useState } from "react";

const getSteps = () => {
    return [
        'Project Information',
        'Attending work site',
        'Planning',
        'Transporting Paint & Equipment',
        'Work Area Setup',
        'Surface Preparation including sanding, caulking and patching and painting',
        'Noise',
        'Electrical',
        'Working Environment',
        'Hazardous / Dangerous Goods',
        'Completion of scope of works',
        'Submission'
    ]
}




const LinearStepper = () => {
    //worksite component states - 1
    const [topChecked, setTopChecked] = useState(false)
    const [topRadioClicked, setTopRadioClicked] = useState('no')

    const [bottomChecked, setBottomChecked] = useState(false)
    const [bottomRadioClicked, setBottomRadioClicked] = useState('no')

    //planning component states - 2
    const [planningChecked, setPlanningChecked] = useState(false)
    const [planningRadioClicked, setPlanningRadioClicked] = useState('no')

    //transporting component states - 3
    const [transportingTopChecked, setTransportingTopChecked] = useState(false)
    const [transportingMiddleChecked, setTransportingMiddleChecked] = useState(false)
    const [transportingBottomChecked, setTransportingBottomChecked] = useState(false)

    const [transportingTop1stRadioClicked, setTransportingTop1stRadioClicked] = useState('no')
    const [transportingTop2ndRadioClicked, setTransportingTop2ndRadioClicked] = useState('no')
    const [transportingMiddleRadioClicked, setTransportingMiddleRadioClicked] = useState('no')
    const [transportingBottom1stRadioClicked, setTransportingBottom1stRadioClicked] = useState('no')
    const [transportingBottom2ndRadioClicked, setTransportingBottom2ndRadioClicked] = useState('no')
    

    // noise component states - 6
    const [noiseChecked, setNoiseChecked] = useState(false)

    const [noiseRadioClicked, setNoiseRadioClicked] = useState('no')

    //danger component states - 9
    const [dangerChecked, setDangerChecked] = useState(false)

    const [danger1stRadioClicked, setDanger1stRadioClicked] = useState('no')
    const [danger2ndRadioClicked, setDanger2ndRadioClicked] = useState('no')

    //completion component states - 10
    const [completionChecked, setCompletionChecked] = useState(false)

    const [completion1stRadioClicked, setCompletion1stRadioClicked] = useState('no')
    const [completion2ndRadioClicked, setCompletion2ndRadioClicked] = useState('no')
    const [completion3rdRadioClicked, setCompletion3rdRadioClicked] = useState('no')
    const [completion4thRadioClicked, setCompletion4thRadioClicked] = useState('no')

    //workEnv component states - 8
    const [workenvTopChecked, setWorkenvTopChecked] = useState(false)
    const [workenvMiddleChecked, setWorkenvMiddleChecked] = useState(false)
    const [workenvBottomChecked, setWorkenvBottomChecked] = useState(false)

    const [workenvTopRadioClicked, setWorkenvTopRadioClicked] = useState('no')
    const [workenvMiddleRadioClicked, setWorkenvMiddleRadioClicked] = useState('no')
    const [workenvBottomRadioClicked, setWorkenvBottomRadioClicked] = useState('no')

    //electrical component states - 7
    const [electricTopChecked, setElectricTopChecked] = useState(false)
    const [electricMiddleChecked, setElectricMiddleChecked] = useState(false)
    const [electricBottomChecked, setElectricBottomChecked] = useState(false)

    const [electricTopRadioClicked, setElectricTopRadioClicked] = useState('no')
    const [electricMiddleRadioClicked, setElectricMiddleRadioClicked] = useState('no')
    const [electricBottomRadioClicked, setElectricBottomRadioClicked] = useState('no')



    const getStepContent = (step) => {
        switch(step) {
            case 0: 
                return <ProjectInfo />
            case 1:
                return <WorkSite 
                    topChecked={topChecked}
                    setTopChecked={setTopChecked}
                    topRadioClicked={topRadioClicked}
                    setTopRadioClicked={setTopRadioClicked}

                    bottomChecked={bottomChecked}
                    setBottomChecked={setBottomChecked}
                    bottomRadioClicked={bottomRadioClicked}
                    setBottomRadioClicked={setBottomRadioClicked}
                />
            case 2:
                return <Planning
                    planningChecked={planningChecked}
                    setPlanningChecked={setPlanningChecked}

                    planningRadioClicked={planningRadioClicked}
                    setPlanningRadioClicked={setPlanningRadioClicked}
                />
            case 3:
                return <Transporting
                    transportingTopChecked={transportingTopChecked}
                    setTransportingTopChecked={setTransportingTopChecked}
                    transportingMiddleChecked={transportingMiddleChecked}
                    setTransportingMiddleChecked={setTransportingMiddleChecked}
                    transportingBottomChecked={transportingBottomChecked}
                    setTransportingBottomChecked={setTransportingBottomChecked}
                    
                    transportingTop1stRadioClicked={transportingTop1stRadioClicked}
                    setTransportingTop1stRadioClicked={setTransportingTop1stRadioClicked}
                    transportingTop2ndRadioClicked={transportingTop2ndRadioClicked}
                    setTransportingTop2ndRadioClicked={setTransportingTop2ndRadioClicked}
                    transportingMiddleRadioClicked={transportingMiddleRadioClicked}
                    setTransportingMiddleRadioClicked={setTransportingMiddleRadioClicked}
                    transportingBottom1stRadioClicked={transportingBottom1stRadioClicked}
                    setTransportingBottom1stRadioClicked={setTransportingBottom1stRadioClicked}
                    transportingBottom2ndRadioClicked={transportingBottom2ndRadioClicked}
                    setTransportingBottom2ndRadioClicked={setTransportingBottom2ndRadioClicked}
                />
            case 4:
                return <AreaSetup />
            case 5:
                return <SurfacePrep />
            case 6:
                return <Noise 
                    noiseChecked={noiseChecked}
                    setNoiseChecked={setNoiseChecked}

                    noiseRadioClicked={noiseRadioClicked}
                    setNoiseRadioClicked={setNoiseRadioClicked}
                />
            case 7:
                return <Electrical 
                    electricTopChecked={electricTopChecked}
                    setElectricTopChecked={setElectricTopChecked}
                    electricMiddleChecked={electricMiddleChecked}
                    setElectricMiddleChecked={setElectricMiddleChecked}
                    electricBottomChecked={electricBottomChecked}
                    setElectricBottomChecked={setElectricBottomChecked}

                    electricTopRadioClicked={electricTopRadioClicked}
                    setElectricTopRadioClicked={setElectricTopRadioClicked}
                    electricMiddleRadioClicked={electricMiddleRadioClicked}
                    setElectricMiddleRadioClicked={setElectricMiddleRadioClicked}
                    electricBottomRadioClicked={electricBottomRadioClicked}
                    setElectricBottomRadioClicked={setElectricBottomRadioClicked}
                />
            case 8:
                return <WorkEnv 
                    workenvTopChecked={workenvTopChecked}
                    setWorkenvTopChecked={setWorkenvTopChecked}
                    workenvMiddleChecked={workenvMiddleChecked}
                    setWorkenvMiddleChecked={setWorkenvMiddleChecked}
                    workenvBottomChecked={workenvBottomChecked}
                    setWorkenvBottomChecked={setWorkenvBottomChecked}

                    workenvTopRadioClicked={workenvTopRadioClicked}
                    setWorkenvTopRadioClicked={setWorkenvTopRadioClicked}
                    workenvMiddleRadioClicked={workenvMiddleRadioClicked}
                    setWorkenvMiddleRadioClicked={setWorkenvMiddleRadioClicked}
                    workenvBottomRadioClicked={workenvBottomRadioClicked}
                    setWorkenvBottomRadioClicked={setWorkenvBottomRadioClicked}
                />
            case 9:
                return <Danger 
                    dangerChecked={dangerChecked}
                    setDangerChecked={setDangerChecked}

                    danger1stRadioClicked={danger1stRadioClicked}
                    setDanger1stRadioClicked={setDanger1stRadioClicked}
                    danger2ndRadioClicked={danger2ndRadioClicked}
                    setDanger2ndRadioClicked={setDanger2ndRadioClicked}
                />
            case 10:
                return <Completion 
                    completionChecked={completionChecked}
                    setCompletionChecked={setCompletionChecked}

                    completion1stRadioClicked={completion1stRadioClicked}
                    setCompletion1stRadioClicked={setCompletion1stRadioClicked}
                    completion2ndRadioClicked={completion2ndRadioClicked}
                    setCompletion2ndRadioClicked={setCompletion2ndRadioClicked}
                    completion3rdRadioClicked={completion3rdRadioClicked}
                    setCompletion3rdRadioClicked={setCompletion3rdRadioClicked}
                    completion4thRadioClicked={completion4thRadioClicked}
                    setCompletion4thRadioClicked={setCompletion4thRadioClicked}
                />
            case 11:
                return <Submission />
            default:
                return 'Unknown Step'
        }
    }

    const methods = useForm({
        defaultValues: {
            "principal contractor": '',
            client: '',
            "workplace location": '',
            "work activity": '',
            "project manager": '',
            "project number": '',
            "hazardous materials sighted": '',
            'parson 1 name': '',
            'parson 1 initial': '',
            'parson 1 date': '',
            'parson 2 name': '',
            'parson 2 initial': '',
            'parson 2 date': '',
            'parson 3 name': '',
            'parson 3 initial': '',
            'parson 3 date': '',
            'parson 4 name': '',
            'parson 4 initial': '',
            'parson 4 date': '',
            'worksite inherent risk taking': '',
            'worksite residual risk taking': '',
            'worksite inherent risk taking dermatitis': '',
            'worksite residual risk taking dermatitis': '',
            'planning inherent risk taking lead/asbestos': '',
            'planning residual risk taking Hazardous materials': '',
            'transporting inherent risk unsecured container': '',
            'transporting unsecured container residual risk': '',
            'transporting inherent risk taking': "",
            'transporting inherent risk taking flying objects': '',
            'transporting residual risk taking flying objects': '',
            'transporting inherent risk taking securing ladders': '',
            'transporting residual risk taking securing ladders': '',
            'transporting inherent risk taking securing points': '',
            'transporting residual risk taking securing points': '',
            'noise inherent risk taking': '',
            'noise residual risk taking': "",
            'danger chemical exposure inherent risk taking': '',
            'danger chemical exposure residual risk taking': '',
            'danger contaminated waste inherent risk taking': '',
            'danger contaminated waste residual risk taking': '',
            'completion inherent risk rating cleanUp': '',
            'completion residual risk rating cleanUp': '',
            'completion inherent risk rating disposal': '',
            'completion residual risk rating disposal': '',
            'completion inherent risk rating return energy': '',
            'completion residual risk rating return energy': '',
            'completion inherent risk rating remove barriers': '',
            'completion residual risk rating remove barriers': '',
            'hazards and risks': '',
            'risk at this site?': '',
            'inherent risk rating (1-4)': '',
            'how to control risks': '',
            'residual risk taking (1-4)': '',
            'work environment inherent risk transmission of virus': '',
            'work environment residual risk transmission of virus': '',
            'work environment inherent risk UV rays': '',
            'work environment residual risk UV rays': '',
            'work environment inherent risk atmosphere contamination': '',
            'work environment residual risk atmosphere contamination': '',
            'electrical inherent risk power sources': '',
            'electrical residual risk power sources': '',
            'electrical inherent risk steel extension': '',
            'electrical residual risk steel extension': "",
            'electrical inherent risk power overhead': '',
            'electrical residual risk power overhead': '',
        }
    })

    const [activeStep, setActiveStep] = useState(0)
    const [completed, setCompleted] = useState({});

    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 2 || step === 3 || step === 7 || step === 10;
    };

    const totalSteps = () => {
        return steps.length;
    };
    
    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    // const isLastStep = () => {
    //     return activeStep === totalSteps() - 1;
    // };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
    };

    const handleNext = (data) => {
        if (activeStep === steps.length - 1){
            console.log(data)
            setActiveStep(activeStep + 1)
        } else {
            setActiveStep(activeStep + 1);
        }
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    

    return (
        <div>
            <Stepper
                nonLinear
                activeStep={activeStep}
                sx={{
                    m: '20px auto 30px',
                    width: {
                        lg: '100%',
                        sm: '90%',
                        xs: '80%'
                    }
                }}
            >
                {
                    steps.map((_, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        if (isStepOptional(index)) {
                            labelProps.optional = (
                              <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                              >
                                optional
                              </Typography>
                            );
                        }

                        return (
                            <Step key={index} {...stepProps} completed={completed[index]}>
                              <StepButton color="inherit" onClick={handleStep(index)}></StepButton>
                            </Step>
                        );
                    })
                }
            </Stepper>

            {allStepsCompleted() ? (
                <Typography variant="h3" align="center">
                    Thank You!
                </Typography>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Button
                                    onClick={handleBack}
                                    sx={{ 
                                        visibility: activeStep === 0 ? 'hidden' : 'block', 
                                        backgroundColor: 'black',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'black',
                                        } 
                                    }}
                                >
                                    Back
                                </Button>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    sx={{ 
                                        backgroundColor: 'black',
                                        '&:hover': {
                                            backgroundColor: 'black',
                                        } 
                                    }}
                                    onClick={handleComplete}
                                >
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                            </Box>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    )
}

export default LinearStepper;