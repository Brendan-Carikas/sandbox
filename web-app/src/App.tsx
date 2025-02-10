import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import {
  AppShells,
  Layout,
  Components,
  Navigation,
  Feedback,
  Headings,
  Overlays,
  Lists,
  DataVisualization,
  Forms,
  Chatbot
} from './pages/categories';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app-shells" element={<AppShells />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/components" element={<Components />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/headings" element={<Headings />} />
            <Route path="/overlays" element={<Overlays />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/data-viz" element={<DataVisualization />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
