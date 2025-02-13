import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CategoryTemplate from './CategoryTemplate';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Checkbox,
  Link,
  IconButton,
} from '@mui/material';
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
  Alert,
  Tabs,
  Tab,
  BottomNavigation,
  BottomNavigationAction,
  Menu,
  MenuItem
} from '@mui/material';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
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
      },
      {
        title: "Feedback Buttons",
        description: "Interactive feedback buttons in different sizes.",
        preview: (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Small Buttons */}
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5, textAlign: 'center' }}>
                Small Feedback
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <IconButton 
                  size="small"
                  color="primary" 
                  aria-label="thumbs up small"
                  sx={{ 
                    border: '1px solid',
                    borderColor: 'primary.main',
                    p: 1
                  }}
                >
                  <ThumbUpIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  size="small"
                  color="primary" 
                  aria-label="thumbs down small"
                  sx={{ 
                    border: '1px solid',
                    borderColor: 'primary.main',
                    p: 1
                  }}
                >
                  <ThumbDownIcon fontSize="small" />
                </IconButton>
              </Box>
            </Paper>

            {/* Medium Buttons */}
            <Paper elevation={1} sx={{ p: 2.5 }}>
              <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Medium Feedback
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2.5 }}>
                <IconButton 
                  color="primary" 
                  aria-label="thumbs up medium"
                  sx={{ 
                    border: '1.5px solid',
                    borderColor: 'primary.main',
                    p: 1.5
                  }}
                >
                  <ThumbUpIcon fontSize="medium" />
                </IconButton>
                <IconButton 
                  color="primary" 
                  aria-label="thumbs down medium"
                  sx={{ 
                    border: '1.5px solid',
                    borderColor: 'primary.main',
                    p: 1.5
                  }}
                >
                  <ThumbDownIcon fontSize="medium" />
                </IconButton>
              </Box>
            </Paper>

            {/* Large Buttons */}
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2.5, textAlign: 'center' }}>
                Large Feedback
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                <IconButton 
                  size="large"
                  color="primary" 
                  aria-label="thumbs up large"
                  sx={{ 
                    border: '2px solid',
                    borderColor: 'primary.main',
                    p: 2
                  }}
                >
                  <ThumbUpIcon fontSize="large" />
                </IconButton>
                <IconButton 
                  size="large"
                  color="primary" 
                  aria-label="thumbs down large"
                  sx={{ 
                    border: '2px solid',
                    borderColor: 'primary.main',
                    p: 2
                  }}
                >
                  <ThumbDownIcon fontSize="large" />
                </IconButton>
              </Box>
            </Paper>
          </Box>
        ),
        code: `<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
  {/* Small Buttons */}
  <Paper elevation={1} sx={{ p: 2 }}>
    <Typography variant="subtitle2" sx={{ mb: 1.5, textAlign: 'center' }}>
      Small Feedback
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <IconButton 
        size="small"
        color="primary" 
        aria-label="thumbs up small"
        sx={{ 
          border: '1px solid',
          borderColor: 'primary.main',
          p: 1
        }}
      >
        <ThumbUpIcon fontSize="small" />
      </IconButton>
      <IconButton 
        size="small"
        color="primary" 
        aria-label="thumbs down small"
        sx={{ 
          border: '1px solid',
          borderColor: 'primary.main',
          p: 1
        }}
      >
        <ThumbDownIcon fontSize="small" />
      </IconButton>
    </Box>
  </Paper>

  {/* Medium Buttons */}
  <Paper elevation={1} sx={{ p: 2.5 }}>
    <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
      Medium Feedback
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2.5 }}>
      <IconButton 
        color="primary" 
        aria-label="thumbs up medium"
        sx={{ 
          border: '1.5px solid',
          borderColor: 'primary.main',
          p: 1.5
        }}
      >
        <ThumbUpIcon fontSize="medium" />
      </IconButton>
      <IconButton 
        color="primary" 
        aria-label="thumbs down medium"
        sx={{ 
          border: '1.5px solid',
          borderColor: 'primary.main',
          p: 1.5
        }}
      >
        <ThumbDownIcon fontSize="medium" />
      </IconButton>
    </Box>
  </Paper>

  {/* Large Buttons */}
  <Paper elevation={1} sx={{ p: 3 }}>
    <Typography variant="h6" sx={{ mb: 2.5, textAlign: 'center' }}>
      Large Feedback
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
      <IconButton 
        size="large"
        color="primary" 
        aria-label="thumbs up large"
        sx={{ 
          border: '2px solid',
          borderColor: 'primary.main',
          p: 2
        }}
      >
        <ThumbUpIcon fontSize="large" />
      </IconButton>
      <IconButton 
        size="large"
        color="primary" 
        aria-label="thumbs down large"
        sx={{ 
          border: '2px solid',
          borderColor: 'primary.main',
          p: 2
        }}
      >
        <ThumbDownIcon fontSize="large" />
      </IconButton>
    </Box>
  </Paper>
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

interface TableData {
  id: string;
  title: string;
  owner: string;
  author: string;
  menuItem: string;
  contentType: string;
  workflowState: string;
  createdDate: string;
  updatedDate: string;
}

const mockData: TableData[] = [
  {
    id: '1',
    title: 'Getting Started Guide',
    owner: 'John Doe',
    author: 'Jane Smith',
    menuItem: 'Documentation',
    contentType: 'Manual Page',
    workflowState: 'Published',
    createdDate: '2024-01-15',
    updatedDate: '2024-02-10',
  },
  {
    id: '2',
    title: 'Company Policy Update',
    owner: 'HR Department',
    author: 'Mike Johnson',
    menuItem: 'Policies',
    contentType: 'Policy',
    workflowState: 'Draft',
    createdDate: '2024-02-01',
    updatedDate: '2024-02-11',
  },
  {
    id: '3',
    title: 'Product Launch Announcement',
    owner: 'Marketing Team',
    author: 'Sarah Wilson',
    menuItem: 'News',
    contentType: 'Article',
    workflowState: 'Published',
    createdDate: '2024-02-05',
    updatedDate: '2024-02-12',
  },
  {
    id: '4',
    title: 'Employee Handbook 2024',
    owner: 'HR Department',
    author: 'Lisa Brown',
    menuItem: 'HR',
    contentType: 'Document',
    workflowState: 'Review',
    createdDate: '2024-01-20',
    updatedDate: '2024-02-08',
  },
  {
    id: '5',
    title: 'Q1 Financial Report',
    owner: 'Finance Team',
    author: 'Robert Chen',
    menuItem: 'Reports',
    contentType: 'Report',
    workflowState: 'Draft',
    createdDate: '2024-02-08',
    updatedDate: '2024-02-12',
  },
  {
    id: '6',
    title: 'Customer Support Guidelines',
    owner: 'Support Team',
    author: 'Emma Davis',
    menuItem: 'Support',
    contentType: 'Manual Page',
    workflowState: 'Published',
    createdDate: '2024-01-25',
    updatedDate: '2024-02-09',
  },
  {
    id: '7',
    title: 'Project Management Best Practices',
    owner: 'PMO',
    author: 'Tom Anderson',
    menuItem: 'Best Practices',
    contentType: 'Guide',
    workflowState: 'Published',
    createdDate: '2024-01-18',
    updatedDate: '2024-02-07',
  },
  {
    id: '8',
    title: 'Security Protocol Update',
    owner: 'IT Department',
    author: 'David Kim',
    menuItem: 'Security',
    contentType: 'Policy',
    workflowState: 'Review',
    createdDate: '2024-02-03',
    updatedDate: '2024-02-11',
  },
  {
    id: '9',
    title: 'Brand Guidelines 2024',
    owner: 'Marketing Team',
    author: 'Rachel Green',
    menuItem: 'Brand',
    contentType: 'Guidelines',
    workflowState: 'Published',
    createdDate: '2024-01-10',
    updatedDate: '2024-02-05',
  },
  {
    id: '10',
    title: 'Remote Work Policy',
    owner: 'HR Department',
    author: 'Mike Johnson',
    menuItem: 'Policies',
    contentType: 'Policy',
    workflowState: 'Published',
    createdDate: '2024-01-22',
    updatedDate: '2024-02-08',
  },
  {
    id: '11',
    title: 'Sales Training Manual',
    owner: 'Sales Team',
    author: 'Chris Martinez',
    menuItem: 'Training',
    contentType: 'Manual Page',
    workflowState: 'Draft',
    createdDate: '2024-02-06',
    updatedDate: '2024-02-12',
  },
  {
    id: '12',
    title: 'Product Roadmap 2024',
    owner: 'Product Team',
    author: 'Alex Wong',
    menuItem: 'Product',
    contentType: 'Document',
    workflowState: 'Review',
    createdDate: '2024-01-30',
    updatedDate: '2024-02-10',
  },
  {
    id: '13',
    title: 'Customer Feedback Analysis',
    owner: 'Customer Success',
    author: 'Sophie Turner',
    menuItem: 'Reports',
    contentType: 'Report',
    workflowState: 'Published',
    createdDate: '2024-02-01',
    updatedDate: '2024-02-11',
  },
  {
    id: '14',
    title: 'API Documentation',
    owner: 'Development Team',
    author: 'James Lee',
    menuItem: 'Documentation',
    contentType: 'Technical Doc',
    workflowState: 'Published',
    createdDate: '2024-01-28',
    updatedDate: '2024-02-09',
  },
  {
    id: '15',
    title: 'Sustainability Report',
    owner: 'ESG Team',
    author: 'Maria Garcia',
    menuItem: 'Reports',
    contentType: 'Report',
    workflowState: 'Draft',
    createdDate: '2024-02-07',
    updatedDate: '2024-02-12',
  },
  {
    id: '16',
    title: 'Data Privacy Guidelines',
    owner: 'Legal Team',
    author: 'Paul Thompson',
    menuItem: 'Legal',
    contentType: 'Guidelines',
    workflowState: 'Review',
    createdDate: '2024-02-04',
    updatedDate: '2024-02-11',
  },
  {
    id: '17',
    title: 'Onboarding Checklist',
    owner: 'HR Department',
    author: 'Lisa Brown',
    menuItem: 'HR',
    contentType: 'Checklist',
    workflowState: 'Published',
    createdDate: '2024-01-15',
    updatedDate: '2024-02-06',
  }
];

export const MCTable: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [columnMenuAnchor, setColumnMenuAnchor] = useState<null | HTMLElement>(null);
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    'title',
    'owner',
    'author',
    'menuItem',
    'contentType',
    'workflowState',
    'createdDate',
    'updatedDate',
  ]);

  const allColumns = [
    { id: 'title', label: 'Title' },
    { id: 'owner', label: 'Owner' },
    { id: 'author', label: 'Author' },
    { id: 'menuItem', label: 'Menu Item' },
    { id: 'contentType', label: 'Content Type' },
    { id: 'workflowState', label: 'Workflow State' },
    { id: 'createdDate', label: 'Created Date' },
    { id: 'updatedDate', label: 'Updated Date' },
  ];

  const handleColumnMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setColumnMenuAnchor(event.currentTarget);
  };

  const handleColumnMenuClose = () => {
    setColumnMenuAnchor(null);
  };

  const handleColumnToggle = (columnId: string) => {
    setVisibleColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(mockData.map((row) => row.id));
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const filteredData = mockData.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <CategoryTemplate
      title="Manage content data table"
      description="Interactive data table with search, filtering, and sorting functionality"
      components={[
        {
          title: "Manage content data table",
          description: "A comprehensive data table component with various features",
          preview: (
            <Box sx={{ width: '100%' }}>
              <Paper sx={{ width: '100%', mb: 2 }}>
                {/* Search and Actions Bar */}
                <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                  <TextField
                    size="small"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                      ),
                    }}
                  />
                  <IconButton
                    onClick={handleColumnMenuOpen}
                    size="small"
                    title="Select columns"
                  >
                    <ViewColumnIcon />
                  </IconButton>
                  <Menu
                    anchorEl={columnMenuAnchor}
                    open={Boolean(columnMenuAnchor)}
                    onClose={handleColumnMenuClose}
                  >
                    {allColumns.map((column) => (
                      <MenuItem
                        key={column.id}
                        onClick={() => handleColumnToggle(column.id)}
                      >
                        <Checkbox
                          checked={visibleColumns.includes(column.id)}
                          size="small"
                        />
                        <ListItemText primary={column.label} />
                      </MenuItem>
                    ))}
                  </Menu>
                  <IconButton
                    size="small"
                    disabled={selected.length === 0}
                    title="Bulk actions"
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    disabled={selected.length === 0}
                    title="Delete selected"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>

                {/* Table */}
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          indeterminate={selected.length > 0 && selected.length < mockData.length}
                          checked={selected.length === mockData.length}
                          onChange={handleSelectAllClick}
                        />
                      </TableCell>
                      {visibleColumns.map((column) => (
                        <TableCell key={column}>
                          <TableSortLabel>
                            {column.charAt(0).toUpperCase() + column.slice(1)}
                          </TableSortLabel>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        const isSelected = selected.indexOf(row.id) !== -1;

                        return (
                          <TableRow
                            hover
                            onClick={() => handleClick(row.id)}
                            role="checkbox"
                            aria-checked={isSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox checked={isSelected} />
                            </TableCell>
                            {visibleColumns.map((column) => (
                              <TableCell key={column}>
                                {column === 'title' ? (
                                  <Link href="#" underline="hover">
                                    {row[column as keyof TableData]}
                                  </Link>
                                ) : column === 'author' ? (
                                  <Link href="#" underline="hover">
                                    {row[column as keyof TableData]}
                                  </Link>
                                ) : (
                                  row[column as keyof TableData]
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>

                {/* Pagination */}
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={filteredData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={(_, newPage) => setPage(newPage)}
                  onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 10));
                    setPage(0);
                  }}
                />
              </Paper>
            </Box>
          ),
          code: '// Full implementation code available upon request'
        }
      ]}
    />
  );
};
