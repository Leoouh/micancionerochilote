import { Container, Typography, Box, Button } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <Container maxWidth="md">
        <MusicNoteIcon 
          sx={{ 
            fontSize: 80, 
            mb: 3, 
            color: 'primary.main',
            opacity: 0.8 
          }} 
        />
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 3,
            color: 'text.primary'
          }}
        >
          Mi Cancionero Chilote
        </Typography>
        <Typography
          variant="h5"
          sx={{ 
            mb: 6, 
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Descubre y comparte la riqueza musical de Chiloé
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/canciones')}
          sx={{ 
            px: 4, 
            py: 1.5,
            fontSize: '1.1rem',
            borderRadius: 2,
            boxShadow: 2
          }}
        >
          Explorar Canciones
        </Button>
      </Container>
    </Box>
  );
};

export default Home; 