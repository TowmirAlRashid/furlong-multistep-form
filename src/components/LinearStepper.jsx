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
    const [topSliderValue, setTopSliderValue] = useState(0)

    const [top2ndSliderValue, setTop2ndSliderValue] = useState(0)

    const [bottomChecked, setBottomChecked] = useState(false)
    const [bottomRadioClicked, setBottomRadioClicked] = useState('no')
    const [bottom1stSliderValue, setBottom1stSliderValue] = useState(0)

    const [bottom2ndSliderValue, setBottom2ndSliderValue] = useState(0)

    //planning component states - 2
    const [planningChecked, setPlanningChecked] = useState(false)
    const [planningRadioClicked, setPlanningRadioClicked] = useState('no')

    const [planning1stSliderValue, setPlanning1stSliderValue] = useState(0)
    const [planning2ndSliderValue, setPlanning2ndSliderValue] = useState(0)

    //transporting component states - 3
    const [transportingTopChecked, setTransportingTopChecked] = useState(false)
    const [transportingMiddleChecked, setTransportingMiddleChecked] = useState(false)
    const [transportingBottomChecked, setTransportingBottomChecked] = useState(false)

    const [transportingTop1stRadioClicked, setTransportingTop1stRadioClicked] = useState('no')
    const [transportingTop2ndRadioClicked, setTransportingTop2ndRadioClicked] = useState('no')
    const [transportingMiddleRadioClicked, setTransportingMiddleRadioClicked] = useState('no')
    const [transportingBottom1stRadioClicked, setTransportingBottom1stRadioClicked] = useState('no')
    const [transportingBottom2ndRadioClicked, setTransportingBottom2ndRadioClicked] = useState('no')

    const [transportTop1st1stSliderValue, setTransportTop1st1stSliderValue] = useState(0)
    const [transportTop1st2ndSliderValue, setTransportTop1st2ndSliderValue] = useState(0)
    const [transportTop2nd1stSliderValue, setTransportTop2nd1stSliderValue] = useState(0)
    const [transportTop2nd2ndSliderValue, setTransportTop2nd2ndSliderValue] = useState(0)
    const [transportMiddle1stSliderValue, setTransportMiddle1stSliderValue] = useState(0)
    const [transportMiddle2ndSliderValue, setTransportMiddle2ndSliderValue] = useState(0)
    const [transportBottom1st1stSliderValue, setTransportBottom1st1stSliderValue] = useState(0)
    const [transportBottom1st2ndSliderValue, setTransportBottom1st2ndSliderValue] = useState(0)
    const [transportBottom2nd1stSliderValue, setTransportBottom2nd1stSliderValue] = useState(0)
    const [transportBottom2nd2ndSliderValue, setTransportBottom2nd2ndSliderValue] = useState(0)
    

    // noise component states - 6
    const [noiseChecked, setNoiseChecked] = useState(false)

    const [noiseRadioClicked, setNoiseRadioClicked] = useState('no')

    const [noise1stSliderValue, setNoise1stSliderValue] = useState(0)
    const [noise2ndSliderValue, setNoise2ndSliderValue] = useState(0)

    //danger component states - 9
    const [dangerChecked, setDangerChecked] = useState(false)

    const [danger1stRadioClicked, setDanger1stRadioClicked] = useState('no')
    const [danger2ndRadioClicked, setDanger2ndRadioClicked] = useState('no')

    const [danger1st1stSliderValue, setDanger1st1stSliderValue] = useState(0)
    const [danger1st2ndSliderValue, setDanger1st2ndSliderValue] = useState(0)
    const [danger2nd1stSliderValue, setDanger2nd1stSliderValue] = useState(0)
    const [danger2nd2ndSliderValue, setDanger2nd2ndSliderValue] = useState(0)

    //completion component states - 10
    const [completionChecked, setCompletionChecked] = useState(false)

    const [completion1stRadioClicked, setCompletion1stRadioClicked] = useState('no')
    const [completion2ndRadioClicked, setCompletion2ndRadioClicked] = useState('no')
    const [completion3rdRadioClicked, setCompletion3rdRadioClicked] = useState('no')
    const [completion4thRadioClicked, setCompletion4thRadioClicked] = useState('no')

    const [completion1st1stSliderValue, setCompletion1st1stSliderValue] = useState(0)
    const [completion1st2ndSliderValue, setCompletion1st2ndSliderValue] = useState(0)
    const [completion2nd1stSliderValue, setCompletion2nd1stSliderValue] = useState(0)
    const [completion2nd2ndSliderValue, setCompletion2nd2ndSliderValue] = useState(0)
    const [completion3rd1stSliderValue, setCompletion3rd1stSliderValue] = useState(0)
    const [completion3rd2ndSliderValue, setCompletion3rd2ndSliderValue] = useState(0)
    const [completion4th1stSliderValue, setCompletion4th1stSliderValue] = useState(0)
    const [completion4th2ndSliderValue, setCompletion4th2ndSliderValue] = useState(0)



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
                    topSliderValue={topSliderValue}
                    setTopSliderValue={setTopSliderValue}

                    top2ndSliderValue={top2ndSliderValue}
                    setTop2ndSliderValue={setTop2ndSliderValue}

                    bottomChecked={bottomChecked}
                    setBottomChecked={setBottomChecked}
                    bottomRadioClicked={bottomRadioClicked}
                    setBottomRadioClicked={setBottomRadioClicked}
                    bottom1stSliderValue={bottom1stSliderValue}
                    setBottom1stSliderValue={setBottom1stSliderValue}

                    bottom2ndSliderValue={bottom2ndSliderValue}
                    setBottom2ndSliderValue={setBottom2ndSliderValue}
                />
            case 2:
                return <Planning
                    planningChecked={planningChecked}
                    setPlanningChecked={setPlanningChecked}

                    planningRadioClicked={planningRadioClicked}
                    setPlanningRadioClicked={setPlanningRadioClicked}

                    planning1stSliderValue={planning1stSliderValue}
                    setPlanning1stSliderValue={setPlanning1stSliderValue}
                    planning2ndSliderValue={planning2ndSliderValue}
                    setPlanning2ndSliderValue={setPlanning2ndSliderValue}
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

                    transportTop1st1stSliderValue={transportTop1st1stSliderValue}
                    setTransportTop1st1stSliderValue={setTransportTop1st1stSliderValue}
                    transportTop1st2ndSliderValue={transportTop1st2ndSliderValue}
                    setTransportTop1st2ndSliderValue={setTransportTop1st2ndSliderValue}
                    transportTop2nd1stSliderValue={transportTop2nd1stSliderValue}
                    setTransportTop2nd1stSliderValue={setTransportTop2nd1stSliderValue}
                    transportTop2nd2ndSliderValue={transportTop2nd2ndSliderValue}
                    setTransportTop2nd2ndSliderValue={setTransportTop2nd2ndSliderValue}
                    transportMiddle1stSliderValue={transportMiddle1stSliderValue}
                    setTransportMiddle1stSliderValue={setTransportMiddle1stSliderValue}
                    transportMiddle2ndSliderValue={transportMiddle2ndSliderValue}
                    setTransportMiddle2ndSliderValue={setTransportMiddle2ndSliderValue}
                    transportBottom1st1stSliderValue={transportBottom1st1stSliderValue}
                    setTransportBottom1st1stSliderValue={setTransportBottom1st1stSliderValue}
                    transportBottom1st2ndSliderValue={transportBottom1st2ndSliderValue}
                    setTransportBottom1st2ndSliderValue={setTransportBottom1st2ndSliderValue}
                    transportBottom2nd1stSliderValue={transportBottom2nd1stSliderValue}
                    setTransportBottom2nd1stSliderValue={setTransportBottom2nd1stSliderValue}
                    transportBottom2nd2ndSliderValue={transportBottom2nd2ndSliderValue}
                    setTransportBottom2nd2ndSliderValue={setTransportBottom2nd2ndSliderValue}
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

                    noise1stSliderValue={noise1stSliderValue}
                    setNoise1stSliderValue={setNoise1stSliderValue}
                    noise2ndSliderValue={noise2ndSliderValue}
                    setNoise2ndSliderValue={setNoise2ndSliderValue}
                />
            case 7:
                return <Electrical />
            case 8:
                return <WorkEnv />
            case 9:
                return <Danger 
                    dangerChecked={dangerChecked}
                    setDangerChecked={setDangerChecked}

                    danger1stRadioClicked={danger1stRadioClicked}
                    setDanger1stRadioClicked={setDanger1stRadioClicked}
                    danger2ndRadioClicked={danger2ndRadioClicked}
                    setDanger2ndRadioClicked={setDanger2ndRadioClicked}

                    danger1st1stSliderValue={danger1st1stSliderValue}
                    setDanger1st1stSliderValue={setDanger1st1stSliderValue}
                    danger1st2ndSliderValue={danger1st2ndSliderValue}
                    setDanger1st2ndSliderValue={setDanger1st2ndSliderValue}
                    danger2nd1stSliderValue={danger2nd1stSliderValue}
                    setDanger2nd1stSliderValue={setDanger2nd1stSliderValue}
                    danger2nd2ndSliderValue={danger2nd2ndSliderValue}
                    setDanger2nd2ndSliderValue={setDanger2nd2ndSliderValue}
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

                    completion1st1stSliderValue={completion1st1stSliderValue}
                    setCompletion1st1stSliderValue={setCompletion1st1stSliderValue}
                    completion1st2ndSliderValue={completion1st2ndSliderValue}
                    setCompletion1st2ndSliderValue={setCompletion1st2ndSliderValue}
                    completion2nd1stSliderValue={completion2nd1stSliderValue}
                    setCompletion2nd1stSliderValue={setCompletion2nd1stSliderValue}
                    completion2nd2ndSliderValue={completion2nd2ndSliderValue}
                    setCompletion2nd2ndSliderValue={setCompletion2nd2ndSliderValue}
                    completion3rd1stSliderValue={completion3rd1stSliderValue}
                    setCompletion3rd1stSliderValue={setCompletion3rd1stSliderValue}
                    completion3rd2ndSliderValue={completion3rd2ndSliderValue}
                    setCompletion3rd2ndSliderValue={setCompletion3rd2ndSliderValue}
                    completion4th1stSliderValue={completion4th1stSliderValue}
                    setCompletion4th1stSliderValue={setCompletion4th1stSliderValue}
                    completion4th2ndSliderValue={completion4th2ndSliderValue}
                    setCompletion4th2ndSliderValue={setCompletion4th2ndSliderValue}
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