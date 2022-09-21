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


const getStepContent = (step) => {
    switch(step) {
        case 0: 
            return <ProjectInfo />
        case 1:
            return <WorkSite />
        case 2:
            return <Planning />
        case 3:
            return <Transporting />
        case 4:
            return <AreaSetup />
        case 5:
            return <SurfacePrep />
        case 6:
            return <Noise />
        case 7:
            return <Electrical />
        case 8:
            return <WorkEnv />
        case 9:
            return <Danger />
        case 10:
            return <Completion />
        case 11:
            return <Submission />
        default:
            return 'Unknown Step'
    }
}

const LinearStepper = () => {
    const methods = useForm({
        defaultValues: {
            "principal contractor": '',
            client: '',
            "workplace location": '',
            "work activity": '',
            "project manager": '',
            "project number": '',
            "hazardous materials sighted": '',
            
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

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

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