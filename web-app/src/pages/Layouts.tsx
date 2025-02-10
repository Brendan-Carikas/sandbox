import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

const Layouts: React.FC = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Layout Patterns
      </Typography>

      {/* Basic Grid Layout */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Grid Layout
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Column 1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Responsive grid column that adapts to screen size
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Column 2</Typography>
                <Typography variant="body2" color="text.secondary">
                  Responsive grid column that adapts to screen size
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Column 3</Typography>
                <Typography variant="body2" color="text.secondary">
                  Responsive grid column that adapts to screen size
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Nested Layout */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Nested Layout
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6">Main Content</Typography>
                <Typography variant="body2" color="text.secondary">
                  Primary content area taking up most of the space
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
                        <Typography>Nested Item 1</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
                        <Typography>Nested Item 2</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Sidebar</Typography>
                <Typography variant="body2" color="text.secondary">
                  Secondary content area or navigation
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Action 1</Button>
                <Button size="small">Action 2</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Responsive Container */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Responsive Container
        </Typography>
        <Box sx={{ maxWidth: { xs: '100%', sm: '80%', md: '60%' }, mx: 'auto' }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Centered Content</Typography>
              <Typography variant="body2" color="text.secondary">
                This container adjusts its maximum width based on screen size while staying centered
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </Box>
  );
};

export default Layouts;
