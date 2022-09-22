import { Box, Container, Paper, Typography } from "@mui/material"
import LinearStepper from "./components/LinearStepper";

import './App.css'

function App() {
  return (
    <div>
      <Container 
            component={Box} 
            p={4}
            sx={{
                width: {
                  lg: '55%',
                  sm: '70%',
                  xs: '90%'
                },
                margin: '20px auto'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: 'black',
                    color: 'white',
                    textAlign: 'center',
                    p: '12px 15px'
                }}
            >
                <Typography   
                    variant="h1"
                    sx={{ fontSize: '1.5rem' }}
                >
                    Furlong Painting - Safe Work Method Statement (SWMS)
                </Typography>
            </Box>
            <Paper component={Box} p={3} sx={{ minHeight: '700px'}}>
                <LinearStepper />
            </Paper>
      </Container>
    </div>
  );
}

export default App;
