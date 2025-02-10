import React from 'react';
import { Typography, Box, Paper, Grid, Container } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: {
            xs: 'linear-gradient(45deg, #dcbdff 70%, #ffe9ff 90%)',
            md: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/inv-pattern.svg') right center no-repeat, linear-gradient(45deg, #dcbdff 70%, #ffe9ff 90%)`
          },
          backgroundBlendMode: 'soft-light',
          backgroundSize: '350px auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          py: { xs: 6, md: 8 },
          px: { xs: 6, md: 8 },
          width: '100%',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', mb: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="caption"
              component="div"
              sx={{
                bgcolor: '#fff',
                py: 1,
                px: 3,
                borderRadius: 50,
                display: 'inline-block',
                mb: 3,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              UNLOCK YOUR UX DESIGN POWERS
            </Typography>
          </Box>
          
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              mb: 3,
              lineHeight: 1.2
            }}
          >
            Explore, create, curate
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              mb: 4,
              fontSize: '1.1rem',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
             Explore, create and curate web components and layouts in this sandbox. 
          </Typography>
        </Container>
      </Box>

      {/* Rest of the content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Getting Started
              </Typography>
              <Typography variant="body1">
                Navigate to the Components section using the menu to explore various UI components and their implementations.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Features
              </Typography>
              <Typography component="ul" sx={{ pl: 2 }}>
                <li>Responsive design for all screen sizes</li>
                <li>Material-UI components and theming</li>
                <li>WCAG 2.1 AA compliant</li>
                <li>Modern React patterns and practices</li>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
