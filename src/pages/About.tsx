import { Container, Typography, Box, Grid, Card, CardContent, useTheme } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HistoryIcon from '@mui/icons-material/History';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';

const About = () => {
  const theme = useTheme();
  
  const sections = [
    {
      icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
      title: 'Nuestra Misión',
      content: 'Mi Cancionero Chilote nace con el propósito de preservar y difundir la rica tradición musical de Chiloé. Nuestro objetivo es crear un espacio donde la música tradicional chilota pueda ser accesible para todos, manteniendo viva la cultura y las tradiciones de esta hermosa región de Chile.'
    },
    {
      icon: <HistoryIcon sx={{ fontSize: 40 }} />,
      title: '¿Por qué Chiloé?',
      content: 'Chiloé es un archipiélago único en el sur de Chile, conocido por su rica tradición cultural y musical. La música chilota refleja la historia, las creencias y el modo de vida de sus habitantes, combinando influencias indígenas, españolas y locales en un estilo musical distintivo.'
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: 'Contribuye',
      content: 'Si tienes canciones tradicionales de Chiloé, historias o información que quieras compartir, ¡nos encantaría que te unieras a nuestra comunidad! Juntos podemos mantener viva esta importante tradición musical.'
    }
  ];

  return (
    <Box sx={{ 
      py: { xs: 4, md: 8 },
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'text.primary'
            }}
          >
            Acerca de la APP
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto' }}
          >
            Preservando la tradición musical de Chiloé
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4]
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ 
                    color: 'primary.main', 
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {section.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    gutterBottom 
                    color="primary"
                    sx={{ 
                      textAlign: 'center',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ textAlign: 'center' }}
                  >
                    {section.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box 
          sx={{ 
            mt: { xs: 6, md: 8 },
            textAlign: 'center',
            p: 4,
            borderRadius: 2,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            Contacto
          </Typography>
          <Box 
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              mt: 2,
              p: 2,
              borderRadius: 2,
              backgroundColor: 'action.hover',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1, sm: 0 },
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            <EmailIcon sx={{ color: 'primary.main' }} />
            <Typography 
              variant="h6"
              sx={{ 
                color: 'text.primary',
                fontWeight: 500,
                fontSize: { xs: '1rem', sm: '1.25rem' },
                textAlign: { xs: 'center', sm: 'left' },
                wordBreak: 'break-all'
              }}
            >
              tecqinformatica@gmail.com
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 