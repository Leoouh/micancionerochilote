import { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  Container,
  Tooltip,
  Fade,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import InfoIcon from '@mui/icons-material/Info';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../App';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const colorMode = useContext(ColorModeContext);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Inicio', path: '/', icon: <HomeIcon /> },
    { text: 'Canciones', path: '/canciones', icon: <LibraryMusicIcon /> },
    { text: 'Acerca de', path: '/about', icon: <InfoIcon /> },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          p: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          }
        }}
      >
        <MusicNoteIcon sx={{ mr: 1, color: 'primary.main', fontSize: 32 }} />
        <Typography variant="h6" color="primary.main" fontWeight={600}>
          Mi Cancionero Chilote
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              borderRadius: 1,
              mx: 1,
              my: 0.5,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'action.hover',
                transform: 'translateX(4px)',
              },
              ...(location.pathname === item.path && {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selected',
                },
              }),
            }}
          >
            <ListItemIcon sx={{ color: 'primary.main', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontWeight: location.pathname === item.path ? 600 : 400
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          {isMobile ? (
            <Tooltip title="Menú" arrow TransitionComponent={Fade}>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'rotate(90deg)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
          ) : null}
          <Box 
            sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              alignItems: 'center', 
              flexGrow: 1,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          >
            <MusicNoteIcon sx={{ mr: 2, color: 'primary.main', display: { xs: 'none', sm: 'block' }, fontSize: 32 }} />
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 600,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  color: 'primary.dark',
                }
              }}
            >
              Mi Cancionero Chilote
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Tooltip key={item.text} title={item.text} arrow TransitionComponent={Fade}>
                  <Button
                    component={RouterLink}
                    to={item.path}
                    startIcon={item.icon}
                    sx={{
                      mx: 1,
                      color: 'text.secondary',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                        color: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                      ...(location.pathname === item.path && {
                        color: 'primary.main',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'action.selected',
                        }
                      })
                    }}
                  >
                    {item.text}
                  </Button>
                </Tooltip>
              ))}
            </Box>
          )}

          <Box sx={{ flexGrow: 1 }} />
          
          <Tooltip 
            title={theme.palette.mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} 
            arrow 
            TransitionComponent={Fade}
          >
            <IconButton 
              sx={{ 
                color: 'text.secondary',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'action.hover',
                  transform: 'rotate(180deg)',
                }
              }} 
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'background.paper',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 