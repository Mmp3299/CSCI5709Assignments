import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Paper,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from '@emotion/styled';
import backgroundImage from './Grill.jpg'; 

const BackgroundContainer = styled('div')`
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  filter: blur(10px);
  border-radius: 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const ForegroundContainer = styled(Container)`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

const RecipeImage = styled('div')`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  margin-bottom: 20px;
`;

const Content = styled(Box)`
  padding: 20px;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
  padding: 10px 0;
`;

const ScrollableCard = styled(Paper)`
  height: 300px;
  overflow-y: auto;
  padding: 0 20px 20px 20px; /* Adjusted padding to account for sticky header */
  margin: 10px;
  background: rgba(255, 255, 255, 0.9);
`;

const IngredientText = styled('span')`
  font-weight: bold;
`;

const StepNumber = styled('span')`
  font-weight: bold;
  margin-right: 8px;
`;

const SaveDialog = styled(DialogContent)`
  text-align: center;
  border-radius: 20px;
`;

const CenteredTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`;

const CustomButton = styled(Button)`
  background-color: #FF9800;
  &:hover {
    background-color: #388E3C;
  }
`;

const StyledAppBar = styled(AppBar)`
  background-color: #388E3C;
  box-shadow: none;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const RecipeDetails = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSaveDialog, setOpenSaveDialog] = useState(false);
  const [openShareDialog, setOpenShareDialog] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSaveClick = () => {
    setOpenSaveDialog(true);
  };

  const handleSaveDialogClose = () => {
    setOpenSaveDialog(false);
  };

  const handleShareClick = () => {
    setOpenShareDialog(true);
  };

  const handleShareDialogClose = () => {
    setOpenShareDialog(false);
  };

  return (
    <div>
      <BackgroundContainer aria-hidden="true" />
      <ForegroundContainer component="main">
        <StyledAppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Recipe Details
            </Typography>
            <IconButton color="inherit" aria-label="share" onClick={handleShareClick}>
              <ShareIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              aria-labelledby="menu-button"
            >
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>Recipe Builder</MenuItem>
              <MenuItem onClick={handleMenuClose}>Workout</MenuItem>
              <MenuItem onClick={handleMenuClose}>Merch Store</MenuItem>
              <MenuItem onClick={handleMenuClose}>Community</MenuItem>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            </Menu>
          </Toolbar>
        </StyledAppBar>
        <Paper sx={{ margin: '20px 0', padding: '20px', background: 'rgba(255, 255, 255, 0.8)' }}>
          <RecipeImage role="img" aria-label="Grilled Chicken Salad" />
          <Content>
            <CenteredTitle variant="h4" component="h2">
              Grilled Chicken Salad
            </CenteredTitle>
            <Typography variant="subtitle1" color="textSecondary" sx={{ textAlign: 'center' }}>
              A refreshing and nutritious grilled chicken salad with mixed greens, cherry tomatoes, cucumber, avocado, and feta cheese, tossed in a light lemon dressing.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ScrollableCard role="region" aria-labelledby="ingredients-heading">
                  <SectionTitle id="ingredients-heading" variant="h5">Ingredients</SectionTitle>
                  <List>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Chicken Breast:</IngredientText> 2 medium (400g) (440 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Olive Oil:</IngredientText> 2 tablespoons (240 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Mixed Salad Greens:</IngredientText> 4 cups (80 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Cherry Tomatoes:</IngredientText> 1 cup, halved (30 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Cucumber:</IngredientText> 1 medium, sliced (16 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Red Onion:</IngredientText> 1/2, thinly sliced (22 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Avocado:</IngredientText> 1 medium, sliced (234 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Feta Cheese:</IngredientText> 1/4 cup, crumbled (100 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Lemon Juice:</IngredientText> 2 tablespoons (8 calories)</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><IngredientText>Salt and Pepper:</IngredientText> to taste (0 calories)</>} />
                    </ListItem>
                  </List>
                </ScrollableCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <ScrollableCard role="region" aria-labelledby="steps-heading">
                  <SectionTitle id="steps-heading" variant="h5">Steps</SectionTitle>
                  <List>
                    <ListItem>
                      <ListItemText primary={<><StepNumber>Step 1:</StepNumber> Prepare Chicken: Preheat the grill to medium-high heat. Brush the chicken breasts with 1 tablespoon of olive oil and season with salt and pepper.</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><StepNumber>Step 2:</StepNumber> Grill Chicken: Place the chicken breasts on the grill and cook for about 6-7 minutes on each side, or until fully cooked and the internal temperature reaches 165°F (74°C). Remove the chicken from the grill and let it rest for a few minutes, then slice it thinly.</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><StepNumber>Step 3:</StepNumber> Prepare Salad: While the chicken is grilling, prepare the salad. In a large bowl, combine the mixed salad greens, cherry tomatoes, cucumber, and red onion.</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><StepNumber>Step 4:</StepNumber> Make Dressing: In a small bowl, whisk together the remaining 1 tablespoon of olive oil and the lemon juice. Season the dressing with salt and pepper to taste.</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><StepNumber>Step 5:</StepNumber> Assemble Salad: Add the sliced avocado to the salad bowl. Drizzle the salad with the lemon dressing and toss to combine. Top the salad with the sliced grilled chicken and crumbled feta cheese.</>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={<><StepNumber>Step 6:</StepNumber> Serve: Serve the salad immediately.</>} />
                    </ListItem>
                  </List>
                </ScrollableCard>
              </Grid>
            </Grid>
          </Content>
          <Divider />
          <Box textAlign="center" my={2}>
            <CustomButton variant="contained" onClick={handleSaveClick}>
              Save
            </CustomButton>
          </Box>
        </Paper>
      </ForegroundContainer>

      
      <Dialog open={openSaveDialog} onClose={handleSaveDialogClose} aria-labelledby="save-dialog-title">
        <SaveDialog>
          <CheckCircleOutlineIcon style={{ fontSize: 80, color: 'green' }} />
          <DialogTitle id="save-dialog-title">Recipe Saved!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your recipe has been saved successfully.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <CustomButton onClick={handleSaveDialogClose} variant="contained">
              OK
            </CustomButton>
          </DialogActions>
        </SaveDialog>
      </Dialog>

      
      <Dialog open={openShareDialog} onClose={handleShareDialogClose} aria-labelledby="share-dialog-title">
        <DialogTitle id="share-dialog-title">Share Recipe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share this recipe with your friends by copying the link below:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="shareLink"
            type="text"
            fullWidth
            variant="outlined"
            value={window.location.href}
            InputProps={{
              readOnly: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={handleShareDialogClose} variant="contained">
            Close
          </CustomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RecipeDetails;
