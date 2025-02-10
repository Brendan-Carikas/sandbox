import React, { useState } from 'react';
import CategoryTemplate from './CategoryTemplate';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  TextField, 
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Alert,
  Tabs,
  Tab,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';

const TabNavigation: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="navigation tabs example"
        >
          <Tab label="Overview" />
          <Tab label="Features" />
          <Tab label="Specifications" />
          <Tab label="Reviews" />
          <Tab label="Support" />
        </Tabs>
      </Box>
      <Box sx={{ p: 2 }}>
        {value === 0 && <Typography>Overview content</Typography>}
        {value === 1 && <Typography>Features content</Typography>}
        {value === 2 && <Typography>Specifications content</Typography>}
        {value === 3 && <Typography>Reviews content</Typography>}
        {value === 4 && <Typography>Support content</Typography>}
      </Box>
    </Box>
  );
};

const BottomNav: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <Paper 
      sx={{ 
        position: 'relative',
        pb: 7,
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ height: 56, bgcolor: 'background.default' }} />
      <Paper 
        sx={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0 
        }} 
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </Paper>
  );
};

export const AppShells: React.FC = () => (
  <CategoryTemplate
    title="Application Shells"
    description="Explore different application shell patterns and layouts for web applications."
    components={[
      {
        title: "Basic App Bar",
        description: "A simple application bar with navigation menu and title.",
        preview: (
          <AppBar position="static" sx={{ maxWidth: '100%' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                App Title
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        ),
        code: `<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      App Title
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>`
      }
    ]}
  />
);

export const Layout: React.FC = () => (
  <CategoryTemplate
    title="Layout"
    description="Various layout patterns and grid systems for organizing content."
    components={[
      {
        title: "Grid Layout",
        description: "Basic grid system for responsive layouts.",
        preview: (
          <Grid container spacing={2}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} sm={4} key={item}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  Grid Item {item}
                </Paper>
              </Grid>
            ))}
          </Grid>
        ),
        code: `<Grid container spacing={2}>
  <Grid item xs={12} sm={4}>
    <Paper sx={{ p: 2 }}>Grid Item 1</Paper>
  </Grid>
  <Grid item xs={12} sm={4}>
    <Paper sx={{ p: 2 }}>Grid Item 2</Paper>
  </Grid>
  <Grid item xs={12} sm={4}>
    <Paper sx={{ p: 2 }}>Grid Item 3</Paper>
  </Grid>
</Grid>`
      }
    ]}
  />
);

export const Components: React.FC = () => (
  <CategoryTemplate
    title="Components"
    description="Reusable UI components following Material Design principles."
    components={[
      {
        title: "Button Variants",
        description: "Different button styles for various use cases.",
        preview: (
          <Box sx={{ '& > button': { m: 1 } }}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Box>
        ),
        code: `<Box sx={{ '& > button': { m: 1 } }}>
  <Button variant="text">Text</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
</Box>`
      }
    ]}
  />
);

export const Navigation: React.FC = () => (
  <CategoryTemplate
    title="Navigation"
    description="Navigation patterns and components for web applications."
    components={[
      {
        title: "Simple List Navigation",
        description: "Basic list-based navigation component.",
        preview: (
          <Paper sx={{ maxWidth: 300 }}>
            <List>
              {['Home', 'Products', 'About', 'Contact'].map((text) => (
                <ListItem key={text} sx={{ cursor: 'pointer' }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Paper>
        ),
        code: `<List>
  {['Home', 'Products', 'About', 'Contact'].map((text) => (
    <ListItem button key={text}>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List>`
      },
      {
        title: "Navigation Tabs",
        description: "Responsive tab navigation with content panels.",
        preview: <TabNavigation />,
        code: `const TabNavigation = () => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="navigation tabs example"
        >
          <Tab label="Overview" />
          <Tab label="Features" />
          <Tab label="Specifications" />
          <Tab label="Reviews" />
          <Tab label="Support" />
        </Tabs>
      </Box>
      <Box sx={{ p: 2 }}>
        {value === 0 && <Typography>Overview content</Typography>}
        {value === 1 && <Typography>Features content</Typography>}
        {value === 2 && <Typography>Specifications content</Typography>}
        {value === 3 && <Typography>Reviews content</Typography>}
        {value === 4 && <Typography>Support content</Typography>}
      </Box>
    </Box>
  );
}`
      },
      {
        title: "Bottom Navigation",
        description: "Mobile-friendly bottom navigation bar.",
        preview: <BottomNav />,
        code: `const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'relative', pb: 7 }}>
      <Box sx={{ height: 56 }} />
      <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </Paper>
  );
}`
      }
    ]}
  />
);

export const Feedback: React.FC = () => (
  <CategoryTemplate
    title="Feedback"
    description="Components that provide feedback to user actions."
    components={[
      {
        title: "Alert Messages",
        description: "Different types of alert messages for various scenarios.",
        preview: (
          <Box sx={{ '& > * + *': { mt: 2 } }}>
            <Alert severity="success">Success message</Alert>
            <Alert severity="info">Info message</Alert>
            <Alert severity="warning">Warning message</Alert>
            <Alert severity="error">Error message</Alert>
          </Box>
        ),
        code: `<Box sx={{ '& > * + *': { mt: 2 } }}>
  <Alert severity="success">Success message</Alert>
  <Alert severity="info">Info message</Alert>
  <Alert severity="warning">Warning message</Alert>
  <Alert severity="error">Error message</Alert>
</Box>`
      }
    ]}
  />
);

export const Headings: React.FC = () => (
  <CategoryTemplate
    title="Headings"
    description="Typography patterns for headings and text hierarchy."
    components={[
      {
        title: "Typography Scale",
        description: "Different heading levels and text styles.",
        preview: (
          <Box>
            <Typography variant="h1" gutterBottom>h1. Heading</Typography>
            <Typography variant="h2" gutterBottom>h2. Heading</Typography>
            <Typography variant="h3" gutterBottom>h3. Heading</Typography>
            <Typography variant="h4" gutterBottom>h4. Heading</Typography>
            <Typography variant="h5" gutterBottom>h5. Heading</Typography>
            <Typography variant="h6" gutterBottom>h6. Heading</Typography>
          </Box>
        ),
        code: `<Box>
  <Typography variant="h1" gutterBottom>h1. Heading</Typography>
  <Typography variant="h2" gutterBottom>h2. Heading</Typography>
  <Typography variant="h3" gutterBottom>h3. Heading</Typography>
  <Typography variant="h4" gutterBottom>h4. Heading</Typography>
  <Typography variant="h5" gutterBottom>h5. Heading</Typography>
  <Typography variant="h6" gutterBottom>h6. Heading</Typography>
</Box>`
      }
    ]}
  />
);

export const Overlays: React.FC = () => (
  <CategoryTemplate
    title="Overlays"
    description="Components that appear on top of the main content."
    components={[
      {
        title: "Temporary Drawer",
        description: "A drawer that can be toggled open or closed.",
        preview: (
          <Box sx={{ position: 'relative', height: 300, overflow: 'hidden' }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  App Title
                </Typography>
              </Toolbar>
            </AppBar>
            <Box sx={{ p: 2 }}>
              <Typography>Main Content Area</Typography>
            </Box>
          </Box>
        ),
        code: `<Box sx={{ position: 'relative', height: 300 }}>
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        App Title
      </Typography>
    </Toolbar>
  </AppBar>
  <Box sx={{ p: 2 }}>
    <Typography>Main Content Area</Typography>
  </Box>
</Box>`
      }
    ]}
  />
);

export const Lists: React.FC = () => (
  <CategoryTemplate
    title="Lists"
    description="Different types of list components and patterns."
    components={[
      {
        title: "Simple List",
        description: "Basic list with text items.",
        preview: (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {['Item 1', 'Item 2', 'Item 3'].map((text) => (
              <ListItem key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        ),
        code: `<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {['Item 1', 'Item 2', 'Item 3'].map((text) => (
    <ListItem key={text}>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List>`
      }
    ]}
  />
);

export const DataVisualization: React.FC = () => (
  <CategoryTemplate
    title="Data Visualization"
    description="Components for displaying data in various formats."
    components={[
      {
        title: "Data Grid",
        description: "Simple grid for displaying tabular data.",
        preview: (
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={6} sm={3} key={item}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">{item}0k</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Metric {item}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ),
        code: `<Grid container spacing={2}>
  {[1, 2, 3, 4].map((item) => (
    <Grid item xs={6} sm={3} key={item}>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6">{item}0k</Typography>
        <Typography variant="body2" color="text.secondary">
          Metric {item}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>`
      }
    ]}
  />
);

export const Forms: React.FC = () => (
  <CategoryTemplate
    title="Forms"
    description="Form components and input patterns."
    components={[
      {
        title: "Login Form",
        description: "Basic login form with email and password fields.",
        preview: (
          <Box component="form" sx={{ maxWidth: 400, mx: 'auto' }}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Sign In
            </Button>
          </Box>
        ),
        code: `<Box component="form" sx={{ maxWidth: 400, mx: 'auto' }}>
  <TextField
    fullWidth
    label="Email"
    margin="normal"
    variant="outlined"
  />
  <TextField
    fullWidth
    label="Password"
    type="password"
    margin="normal"
    variant="outlined"
  />
  <Button
    fullWidth
    variant="contained"
    sx={{ mt: 3 }}
  >
    Sign In
  </Button>
</Box>`
      }
    ]}
  />
);

export const Chatbot: React.FC = () => (
  <CategoryTemplate
    title="Chatbot"
    description="Chat interface components and patterns."
    components={[
      {
        title: "Chat Interface",
        description: "Basic chat interface with message input.",
        preview: (
          <Paper sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
            <Box sx={{ height: 300, bgcolor: 'grey.100', mb: 2, p: 2, borderRadius: 1 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Bot: Hello! How can I help you today?
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, textAlign: 'right' }}>
                User: I have a question about...
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                placeholder="Type your message..."
                size="small"
              />
              <Button variant="contained">Send</Button>
            </Box>
          </Paper>
        ),
        code: `<Paper sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
  <Box sx={{ height: 300, bgcolor: 'grey.100', mb: 2, p: 2, borderRadius: 1 }}>
    <Typography variant="body2" sx={{ mb: 1 }}>
      Bot: Hello! How can I help you today?
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, textAlign: 'right' }}>
      User: I have a question about...
    </Typography>
  </Box>
  <Box sx={{ display: 'flex', gap: 1 }}>
    <TextField
      fullWidth
      placeholder="Type your message..."
      size="small"
    />
    <Button variant="contained">Send</Button>
  </Box>
</Paper>`
      }
    ]}
  />
);
