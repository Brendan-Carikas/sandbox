import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';

interface Component {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code?: string;
}

interface TableOfContentsProps {
  components: Component[];
}

interface CategoryTemplateProps {
  title: string;
  description: string;
  components?: Component[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ components }) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 72; // AppBar height (64px) + 8px spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Paper 
      sx={{ 
        p: 2,
        position: 'sticky',
        top: 24,
        maxHeight: 'calc(100vh - 48px)',
        overflowY: 'auto'
      }}
      elevation={0}
    >
      <Typography variant="subtitle1" gutterBottom fontWeight="medium">
        Contents
      </Typography>
      <List dense>
        {components.map((component, index) => {
          const id = component.title.toLowerCase().replace(/\s+/g, '-');
          return (
            <ListItem 
              key={index}
              sx={{ 
                py: 0.5,
                '&:hover': {
                  bgcolor: 'action.hover',
                  borderRadius: 1
                }
              }}
              onClick={(e) => handleClick(e, id)}
            >
              <Link
                href={`#${id}`}
                underline="hover"
                color="text.primary"
                sx={{ 
                  width: '100%',
                  cursor: 'pointer'
                }}
                onClick={(e) => e.preventDefault()}
              >
                <ListItemText 
                  primary={component.title}
                  primaryTypographyProps={{
                    variant: 'body2'
                  }}
                />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ title, description, components = [] }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={9}>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
          
          {components.map((component, index) => (
            <Paper 
              id={component.title.toLowerCase().replace(/\s+/g, '-')}
              key={index} 
              sx={{ 
                p: { xs: 2, sm: 3 }, 
                mb: 3,
                overflow: 'hidden'
              }}
            >
              <Typography variant="h5" gutterBottom>
                {component.title}
              </Typography>
              {component.description && (
                <Typography variant="body2" sx={{ mb: 3 }}>
                  {component.description}
                </Typography>
              )}
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Preview
                </Typography>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    bgcolor: 'background.default',
                    border: 1,
                    borderColor: 'divider',
                    overflowX: 'auto',
                    '& > *': {
                      minWidth: { xs: 'fit-content', sm: '100%' },
                      maxWidth: '100%'
                    }
                  }}
                >
                  {component.preview}
                </Paper>
              </Box>

              {component.code && (
                <Accordion 
                  sx={{ 
                    bgcolor: 'grey.50',
                    '&:before': {
                      display: 'none',
                    },
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: 'grey.100',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CodeIcon fontSize="small" color="action" />
                      <Typography variant="subtitle2" color="text.secondary">
                        View Code
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0 }}>
                    <Paper 
                      elevation={0}
                      sx={{ 
                        p: { xs: 1.5, sm: 2 },
                        bgcolor: 'grey.50',
                        overflowX: 'auto',
                        '& pre': { 
                          m: 0,
                          fontFamily: 'monospace',
                          fontSize: '0.875rem',
                          whiteSpace: { xs: 'pre-wrap', sm: 'pre' },
                          wordBreak: { xs: 'break-word', sm: 'normal' }
                        }
                      }}
                    >
                      <pre>{component.code}</pre>
                    </Paper>
                  </AccordionDetails>
                </Accordion>
              )}
            </Paper>
          ))}

          {components.length === 0 && (
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                Examples
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography>
                    Coming soon...
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Box>
      </Grid>
      {isDesktop && (
        <Grid item lg={3}>
          <Box sx={{ 
            mt: 6,
            position: 'sticky',
            top: 88, // AppBar height (64px) + margin (24px)
            maxHeight: 'calc(100vh - 88px)',
            overflowY: 'auto'
          }}>
            <TableOfContents components={components} />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default CategoryTemplate;
