import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Container, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Web';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import TitleIcon from '@mui/icons-material/Title';
import LayersIcon from '@mui/icons-material/Layers';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuItems: MenuItem[] = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Application shells', icon: <WebIcon />, path: '/app-shells' },
    { text: 'Layout', icon: <ViewQuiltIcon />, path: '/layout' },
    { text: 'Components', icon: <WidgetsIcon />, path: '/components' },
    { text: 'Navigation', icon: <MenuOpenIcon />, path: '/navigation' },
    { text: 'Feedback', icon: <LayersIcon />, path: '/feedback' },
    { text: 'Headings', icon: <TitleIcon />, path: '/headings' },
    { text: 'Overlays', icon: <LayersIcon />, path: '/overlays' },
    { text: 'Lists', icon: <FormatListBulletedIcon />, path: '/lists' },
    { text: 'Data Visualization', icon: <InsertChartIcon />, path: '/data-viz' },
    { text: 'Forms', icon: <DynamicFormIcon />, path: '/forms' },
    { text: 'Chatbot', icon: <ChatIcon />, path: '/chatbot' },
    { text: 'MC Table', icon: <TableChartIcon />, path: '/mc-table' }
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
            component="img"
            src={`${process.env.PUBLIC_URL}/Invotra_rev.png`}
            alt="Invotra Logo"
            sx={{ 
              height: 24,
              mr: 2
            }}
          />
          <Typography variant="h6" noWrap component="div" sx={{ mt: 1.4 }}>
            sandbox
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem
              onClick={() => {
                navigate('/');
                setDrawerOpen(false);
              }}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <Divider sx={{ my: 1 }} />
            {menuItems.filter(item => item.path !== '/').map((item) => (
              <ListItem
                key={item.text}
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 240px)` },
          scrollPaddingTop: 'calc(64px + 8px)', // Add scroll padding for anchor links
        }}
      >
        <Toolbar />
        {isHomePage ? (
          children
        ) : (
          <Container maxWidth="lg" sx={{ p: 3 }}>
            {children}
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
