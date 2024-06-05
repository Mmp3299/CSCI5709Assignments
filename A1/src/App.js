import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardActionArea, CardContent, TextField, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RecipeDetails from './RecipeDetails';
import { styled } from '@mui/system';

const SimpleCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      {showDetails ? (
        <RecipeDetails />
      ) : (
        <Container>
          <AppBar position="static" sx={{ backgroundColor: '#388E3C', borderRadius: '20px', marginBottom: '20px' }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Recipe Browser
              </Typography>
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box mb={2}>
            <TextField fullWidth variant="outlined" placeholder="Search for a recipe..." />
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            Recipes
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <CardActionArea onClick={() => setShowDetails(true)}>
                <SimpleCard>
                  <CardContent>
                    <Typography variant="h5" align="center">
                      Grilled Chicken Salad
                    </Typography>
                  </CardContent>
                </SimpleCard>
              </CardActionArea>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default App;
