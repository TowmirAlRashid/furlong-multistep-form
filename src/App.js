import { Box, Container, Paper, Typography } from "@mui/material";


function App() {
  return (
    <div>
      <Container 
        component={Box} 
        p={4}
        sx={{
          width: '60%',
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
        <Paper component={Box} p={3}>
          <h1>App</h1>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
