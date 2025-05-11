import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, TextField, InputAdornment, Chip, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Tooltip, Divider, Snackbar } from '@mui/material';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface Cancion {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  letra: string;
  tipo: string;
  informante?: string;
  lugar?: string;
  recopilacion?: string;
  contexto?: string;
  fecha?: string;
  videoId?: string;
}

const cancionesEjemplo: Cancion[] = [
  {
    id: 1,
    titulo: "Pericona Tradicional",
    autor: "Tradicional",
    tipo: "Pericona",
    descripcion: "Danza tradicional chilota que se baila en las fiestas y celebraciones.",
    videoId: "zqlbKJhMS7Q",
    letra: `
La pericona tiene
/:Corona e' plata:/
Y un letrero que dice
/:Viva la patria:/

Se fue, se fue, se fue
/:Lo hallaron, lo hallaron, lo van a perder:/
Correle, correle, correle
/:Lo hallaron, lo hallaron, lo van a perder:/

La pericona tiene
/:En su turbante:/
Un letrero que dice
/:Viva mi amante:/

Se fue, se fue, se fue
/:Lo hallaron, lo hallaron, lo van a perder:/
Correle, correle, correle
/:Lo hallaron, lo hallaron, lo van a perder:/

Digo y no miento
Como noventa y nueve sí, sí
Digo y no miento
Y uno son ciento ayayay.`
  },
  {
    id: 2,
    titulo: "El Ciprés",
    autor: "Tradicional",
    tipo: "Vals",
    informante: "Lilia Andrade Álvarez",
    lugar: "Chonchi",
    recopilacion: "Conjunto Magisterio de Chonchi",
    descripcion: "Vals chilote que narra una historia de amor y espera.",
    videoId: "7HN9b8d5Vn0",
    letra: `Triste el mar y la playa está
Ya no viene mi dulce bien
/:Ya no canta ni el ruiseñor
En la copa de ese ciprés:/

Solo velo aquí noche y día
Esperando a mi amado volver
/:Y las olas se van y me dicen
No lo esperes que no lo has de ver:/

Olas crueles decidme qué hiciste
De mi amado y fiel pescador
/:Que lo llamo y no me responde
Y está lejos de mi triste voz:/

Olas crueles devolvedme un día
Aunque yerto cadáver esté
/:Yo quisiera mirar un instante
Y morir enseguida por él:/

Ya no veo lucir la esperanza
Ya no veo lucir la ilusión
/:Solo veo que en ellas se quejan
En el fondo de mi corazón:`
  },
  {
    id: 3,
    titulo: "Donde Va la Lancha",
    autor: "Ramón Yañez",
    tipo: "Vals",
    descripcion: "Vals que narra la historia de una lancha que zarpa hacia Quehui.",
    videoId: "6MomRt-s4q4",
    letra: `
/:La lancha está lista, el zarpe aquí está
Pasajeros todos, contentos se van:/
/:De pronto un turista, se acerca al pasar
Pregunta en voz alta, la lancha onde va:/

Coro:
/:Onde va la lancha, a Quehui va
Onde va la lancha, a Quehui va:/

/:Tempestad, tempestad
Con viento la lancha se va:/
/:A bordo ya suban, grita el capitán
Nos vamos al tiro, para nuestro hogar:/
/:Cuando la lancha, está por zarpar
Llega un pasajero, me puede llevar:/

Coro:
/:Onde va la lancha, a Quehui va
Onde va la lancha, a Quehui va:/`
  },
  {
    id: 4,
    titulo: "Amarillo, Amarillo",
    autor: "Tradicional",
    tipo: "Cueca Chilota",
    descripcion: "Cueca tradicional chilota con versión de Canahue y Magisterio de Castro.",
    videoId: "rxUdu0Na8FI",
    letra: `/:Amarillo amarillo, más amarillo:/
/:Amarillo es el oro, como el membrillo:/

/:Como el membrillo ay sí, cintas azules:/
/:Donde andará mi chica, con este sure:/

/:Con este sure ay sí, punga borracho:/
/:Se ha gastado la plata, jugando al cacho:/

Donde andará ese pillo, más amarillo.

Nota: Otras versiones dicen:

"Como el membrillo ay sí, ricas sandías."

"Ah, cabeza e' cepillo, como te pillo."`
  },
  {
    id: 5,
    titulo: "Gorro de Lana",
    autor: "Félix Cárdenas",
    tipo: "Vals",
    descripcion: "Vals que narra la historia de un gorro de lana y un amor perdido.",
    videoId: "RUbOjX7wieg",
    letra: `Un gorro de lana, te mandé a tejer
Para el crudo invierno, que vino a caer
Tú me lo tejiste, con loca pasión
Se destiñó, se destiñó, con la lluvia que cayó
Se destiñó, se destiñó, igual que tu cariño.

Una oveja blanca, te mandé a esquilar
Y después la lana, te mandé a lavar
Tú te descuidaste, en forma fatal
Se la llevó, se la llevó, la corriente del canal
Se la llevó, se la llevó, igual que tu cariño.

Desata la lancha, me voy pa' Quellón
Échenme la jarra, y echa el acordeón
Yo no quiero penas, ni loca pasión
Voy pa' Quellón, voy pa' Quellón, en busca de un nuevo amor
Voy pa' Quellón, voy pa' Quellón, no quiero tu cariño.`
  },
  {
    id: 6,
    titulo: "El Tornado",
    autor: "Del Folcklore",
    tipo: "Vals",
    descripcion: "Vals tradicional que narra la historia de un amor separado por un tornado que destruyó el puente.",
    videoId: "mFnQA4LjIyY",
    letra: `No puedo pasar a verte, no puedo cielito no
/:Porque se ha llevado el puente, un tornado que pasó:/

Coro:
No te impacientes, cielito mío
No te impacientes, pronto estará
/:La barquilla terminada, y con rosas el rosal:/

Los jilgueros no han cantado, su trino al amanecer
/:Las flores están marchitas, la calandria se me fue:/

Coro (repite)

Están haciendo una barca, los muchachos del lugar
/:Para que cruce yo el río, porque te quiero besar:/

Coro (repite)`
  },
  {
    id: 7,
    titulo: "La Nave",
    autor: "Tradicional",
    tipo: "Baile Tradicional",
    descripcion: "Danza chilota colectiva que se interpreta en las fiestas tradicionales. Los bailarines imitan el movimiento de una embarcación navegando, reflejando la vida marítima de Chiloé.",
    contexto: "Es una danza colectiva donde los participantes bailan sucesivamente. Primero sale una pareja, y cuando termina, el varón queda solo en el medio de la sala. En ese momento empiezan a cantarle un estribillo con el cual busca a una mujer. A la elegida, el hombre le coloca un sombrero en la cabeza, indicándole que la escoge como compañera del baile. Ambos bailan solo una estrofa de la canción. Ahora es la dama quién queda sola y elige de igual manera a un nuevo compañero de baile. La danza termina cuando todos han bailado.",
    letra: `Busca tu vida, mozo
Búscala, búscala
/:Si no la buscas solo
¿Quién te ayudará?:/

/:A la primera vuelta, vuelta te darás
A la segunda vuelta
Siéntate, galán:/

Busca tu vida, niña
Busca por los rincones
/:Que estarán tapaditos
Como ratones:/

/:A la primera vuelta, vuelta te darás
A la segunda vuelta
Siéntate, galán:/`
  },
  {
    id: 8,
    titulo: "Pericona de Mocopulli",
    autor: "Tradicional",
    tipo: "Pericona",
    descripcion: "Pericona tradicional de Mocopulli que describe los adornos y la belleza de la pericona, así como la alegría del baile.",
    recopilacion: "Recopilada por Silvestre y Antonio Bahamonde en 1962",
    videoId: "qhobZMsfHCs",
    letra: `La pericona trae
/:Cadena de oro:/
Todo chilote quiere
/:Tierra y tesoro:/

Estribillo:
Alo-lero-lero-lero,
Alo-lero-lero-la
Alo-lero-lero-le,
Alo-lero-lero-la
Alo-lero-lero-la.

La pericona trae
/:En la cabeza:/
Una peineta larga
/:Que la atraviesa:/

Estribillo (repite)

Esos cuatro que bailan
/:En esa sala:/
Son los cuatro luceros
/:De la mañana:/

Estribillo (repite)`
  },
  {
    id: 9,
    titulo: "La Cosecha",
    autor: "Rodrigo Gallardo",
    tipo: "Sirilla",
    descripcion: "Sirilla tradicional que celebra la cosecha y el trabajo en comunidad, con referencias a los cultivos locales y la vida rural.",
    videoId: "9tyS3fs6NLg",
    letra: `%Terminada la cosecha nos iremos a cantar%
%Y a los rayos de la luna bailaremos sirilla%
%Terminada la cosecha nos iremos a cantar%

%Saldremos por los papales iremos al manzanal%
%Cruzando los frutillares llegaremos hasta el mar%
%Saldremos por los papales iremos al manzanal%`
  },
  {
    id: 10,
    titulo: "Chocolate",
    autor: "Tradicional",
    tipo: "Danza Tradicional",
    descripcion: "Danza tradicional chilota que celebra la costumbre de tomar chocolate, con elementos de la vida cotidiana y festiva de Chiloé.",
    recopilacion: "Recopilada por Senda Chilota",
    informante: "Arcadio Bahamonde",
    letra: `Chocolate me has pedido
chocolate te he de dar
lere, lere, que tomaremos el chocolate
chocolate al mediodía
chocolate al almorzar
lere, lere, que tomaremos el chocolate

Arrebate y el chocolate
arrebate y el chocolate
agua de roma y así se toma
y el chocolate

Lero, lero, le zambita
corre y no vuela
nadie sabe el genio de ella, te vas a misa
y el chocolate

Que te embiste y embiste el toro
que te embistiera tirana
sacaras tu suerte mi alma
y a tu lugar compañerito
báilale bien a esa dama`
  },
  {
    id: 11,
    titulo: "Caballito Avante",
    autor: "Tradicional",
    tipo: "Cielito",
    descripcion: "Cielito tradicional chilote que describe diferentes tipos de caballos y la relación con sus jinetes, manteniendo un estribillo característico sobre la buena rienda y el temblor de la tierra.",
    informante: "Clara Naín y Juan Guequén",
    recopilacion: "Juan Sotomayor",
    videoId: "d__YgKImqzY",
    letra: `Arre caballito avante
no me botes por delante
de buena rienda, de buena rienda
cuando su amo lo sube
la tierra tiembla, la tierra tiembla

Arre caballo colorado
no me botes pal' lado
de buena rienda, de buena rienda
cuando su amo lo sube
la tierra tiembla, la tierra tiembla

Arre caballito bayo
no me botes pon' de challo
de buena rienda, de buena rienda
cuando su amo lo sube
la tierra tiembla, la tierra tiembla

Arre caballito blanco
no me botes pal' barranco
de buena rienda, de buena rienda
ay, caballito negro, cuanto me haces sufrir
de buena rienda, de buena rienda`
  },
  {
    id: 12,
    titulo: "Pericona de Dalcahue",
    autor: "Tradicional",
    tipo: "Pericona",
    descripcion: "Pericona tradicional de Dalcahue que describe el inicio del baile y la celebración, con un estribillo característico sobre la búsqueda y el hallazgo.",
    videoId: "RGGmCFXUImY",
    letra: `Vamos a empezar el baile
de tres a cuatro
Dos niñas bonitas, caramba
Dos hombres guapos
Se fue, se fue y se va
lo hallaron, lo hallaron
lo van a perder
lo hallaron, lo hallaron
lo van a perder

A cantar pericona
nadie me gana
porque tengo un librito, caramba
de la chingana
Se fue, se fue y se va
correlé, correlé, correlá`
  },
  {
    id: 13,
    titulo: "Pericona Macho",
    autor: "Tradicional",
    tipo: "Pericona",
    descripcion: "Pericona tradicional de Cogomó (Ancud) que describe el baile de cuatro personas y las interacciones entre los bailarines, con versos repetitivos característicos.",
    informante: "Onofre Galindo y Heriberto Bahamonde",
    recopilacion: "Amador Cárdenas",
    lugar: "Cogomó, Ancud",
    videoId: "wgfSwMtwlJ4",
    letra: `La pericona macho, caramba
la bailan cuatro
la bailan cuatro
la bailan cuatro
dos mujeres bonitas, caramba
dos hombres guapos
dos hombres guapos
dos hombres guapos

La cinta de tu pelo, caramba
quiere salirse
quiere salirse
quiere salirse
quiere salir al campo, caramba
a divertirse
a divertirse
a divertirse

La María me quiere, caramba
la Rosa me ama
la Rosa me ama
la Rosa me ama
hace lo que hace el huaso, caramba
dale un abrazo
dale un abrazo
dale un abrazo`
  },
  {
    id: 14,
    titulo: "El Peral",
    autor: "Tradicional",
    tipo: "Zamacueca",
    descripcion: "Zamacueca tradicional que juega con la metáfora del peral y la vida, incluyendo elementos marítimos y celestiales, con un estribillo característico de samba y refalosa.",
    videoId: "WafXjcjQKIw",
    letra: `Dicen que no caben
La vida, en un peral
Hagamos la prueba
Con los que se van al mar

A la samba, a la samba, ay si
A la samba, a la samba, ay no
A la refalosa y samba
A la samba refalé

Para subir al cielo
La vida, se necesita
Una escalita larga
La vida, y otra cortita

A la samba, a la samba, ay si
A la samba, a la samba, ay no
A la refalosa y samba
A la samba, si como no`
  },
  {
    id: 15,
    titulo: "Sirilla Me Pides",
    autor: "Tradicional",
    tipo: "Seguidilla",
    descripcion: "Seguidilla tradicional en versión rápida que juega con los colores y las emociones, manteniendo un estribillo característico que se repite en cada estrofa.",
    videoId: "7ZYG2l12j1E",
    letra: `Sirilla me pides
de la cuál quieres, si
de la cuál quieres

Me vo a la amarilla
Me vo a la verde; si

Sirilla me pides
de la cuál quieres; si
de la cuál quieres

Arriba te subes
tanto te alejas; si

Mira a tu pobre amante
como lo dejas, si

Arriba te subes
tanto te alejas; si
tanto te alejas

Sirilla me pides
con esta plata, si
con esta plata

Hay amores quebraos
por una ingrata, si

Sirilla me pides
con esta plata, si
con esta plata`
  },
  {
    id: 16,
    titulo: "Seguidilla Manchegas",
    autor: "Tradicional",
    tipo: "Seguidilla",
    descripcion: "Seguidilla tradicional recopilada en Curaco de Vélez que compara las seguidillas manchegas con las locales, manteniendo una estructura de versos repetitivos característica.",
    informante: "Clorinda Gallardo",
    recopilacion: "Margot Loyola",
    lugar: "Curaco de Vélez",
    fecha: "1962",
    videoId: "fF83D3OWiAg",
    letra: `Seguidilla me pides
De la cual quiere
De la cual quiere
De la cual quiere

Ser de las amarillas
O de las verde
O de las verde

Seguidilla me pides
De la cual quiere
De la cual quiere
De la cual quiere

Seguidilla Manchegas
Son las que canto
Son las que canto
Son las que canto

Porque las de mi tierra
No valen tanto
No valen tanto

Seguidilla Manchegas
Son las que canto
Son las que canto
Son las que canto

Con esta copla y otra
Se acaba el baile
Se acaba el baile
Se acaba el baile

Por la puerta señores
Se va a la calle
Se va a la calle

Con esta copla y otra
Se acaba el baile
Se acaba el baile
Se acaba el baile`
  },
  {
    id: 17,
    titulo: "La Zorrita (Chapecao)",
    autor: "Tradicional",
    tipo: "Chapecao",
    descripcion: "Canción tradicional que narra la persecución de una zorra por un perro, con un estribillo característico que se repite en cada estrofa.",
    informante: "Clorinda R. Curil Curil",
    recopilacion: "Magisterio de Chonchi",
    videoId: "xqGjWJp3nFc",
    letra: `/: La zorra cuando se arranca
Por las quebradas del cerro :/
/: llega a parar la colita
Cuando le ladra mi perro :/

/: Huita zorrita
Huita, la, la
Te hecho mi perro
Y te pillará :/

  /: La zorra cuando se arranca
Pal otro lado del río :/
/: como anda la pobre zorra
Pasando susto y con frío :/

/: Huita zorrita
Huita, la, la
Te hecho mi perro
Y te pillará :/

/: La zorra cuando se arranca
Por las quebradas del cerro :/
/: llega parar la colita
Cuando le ladra mi perro :/

/: Huita zorrita
Huita, la, la
Te hecho mi perro
Y te pillará :/`
  }
];

const Canciones = () => {
  const [canciones] = useState<Cancion[]>(cancionesEjemplo);
  const [busqueda, setBusqueda] = useState('');
  const [cancionSeleccionada, setCancionSeleccionada] = useState<Cancion | null>(null);
  const [cantidadMostrada, setCantidadMostrada] = useState(6);
  const [showInfo, setShowInfo] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarColor, setSnackbarColor] = useState<'success' | 'error'>('success');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const cancionesFiltradas = canciones.filter(cancion =>
    cancion.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    cancion.autor.toLowerCase().includes(busqueda.toLowerCase()) ||
    cancion.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
    cancion.tipo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const cancionesAMostrar = cancionesFiltradas.slice(0, cantidadMostrada);
  const hayMasCanciones = cantidadMostrada < cancionesFiltradas.length;

  const handleOpenLetra = (cancion: Cancion) => {
    setCancionSeleccionada(cancion);
  };

  const handleCloseLetra = () => {
    setCancionSeleccionada(null);
  };

  const handleCargarMas = () => {
    setCantidadMostrada(prev => prev + 6);
  };

  const handleCopyLetra = async () => {
    if (cancionSeleccionada) {
      try {
        // Crear un elemento textarea temporal
        const textArea = document.createElement('textarea');
        textArea.value = cancionSeleccionada.letra;
        
        // Hacer el textarea visible pero fuera de la pantalla
        textArea.style.position = 'fixed';
        textArea.style.left = '0';
        textArea.style.top = '0';
        textArea.style.opacity = '0';
        textArea.style.pointerEvents = 'none';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        
        document.body.appendChild(textArea);
        
        // En dispositivos móviles, necesitamos hacer el textarea visible brevemente
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          textArea.style.opacity = '1';
          textArea.style.position = 'absolute';
          textArea.style.left = '50%';
          textArea.style.top = '50%';
          textArea.style.transform = 'translate(-50%, -50%)';
          textArea.style.zIndex = '9999';
          textArea.style.width = '80%';
          textArea.style.height = 'auto';
          textArea.style.padding = '10px';
          textArea.style.backgroundColor = 'white';
          textArea.style.border = '1px solid #ccc';
          textArea.style.borderRadius = '4px';
          textArea.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
        }
        
        // Seleccionar el texto
        textArea.select();
        textArea.setSelectionRange(0, 99999); // Para dispositivos móviles
        
        // Intentar copiar
        const successful = document.execCommand('copy');
        
        // Remover el textarea
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopiado(true);
          setSnackbarMessage('¡Letra copiada al portapapeles!');
          setSnackbarColor('success');
          setOpenSnackbar(true);
          
          setTimeout(() => {
            setCopiado(false);
          }, 1500);
        } else {
          throw new Error('No se pudo copiar el texto');
        }
      } catch (error) {
        console.error('Error al copiar:', error);
        setSnackbarMessage('No se pudo copiar la letra. Por favor, selecciona y copia el texto manualmente.');
        setSnackbarColor('error');
        setOpenSnackbar(true);
      }
    }
  };

  const handlePrintLetra = () => {
    window.print();
  };

  const handleShareLetra = async () => {
    if (cancionSeleccionada) {
      try {
        // Intentar usar la API Web Share si está disponible
        if (navigator.share) {
          await navigator.share({
            title: cancionSeleccionada.titulo,
            text: cancionSeleccionada.letra,
          });
          setSnackbarMessage('¡Contenido compartido exitosamente!');
          setSnackbarColor('success');
        } else {
          // Fallback: copiar al portapapeles
          await navigator.clipboard.writeText(
            `${cancionSeleccionada.titulo}\n\n${cancionSeleccionada.letra}`
          );
          setSnackbarMessage('¡Letra copiada al portapapeles! Puedes pegarla donde quieras compartirla.');
          setSnackbarColor('success');
        }
        setOpenSnackbar(true);
      } catch (error) {
        console.error('Error al compartir:', error);
        setSnackbarMessage('No se pudo compartir la letra. Por favor, intenta copiarla manualmente.');
        setSnackbarColor('error');
        setOpenSnackbar(true);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleOpenVideo = (cancion: Cancion) => {
    if (cancion.videoId) {
      setVideoUrl(cancion.videoId);
    }
  };

  const handleCloseVideo = () => {
    setVideoUrl(null);
  };

  // Resetear la cantidad mostrada cuando cambia la búsqueda
  useEffect(() => {
    setCantidadMostrada(6);
  }, [busqueda]);

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', py: 4, display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Container maxWidth={false} sx={{ flex: 1, display: 'flex', flexDirection: 'column', px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mb: 6, textAlign: 'center', width: '100%' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Canciones de Chiloé
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Explora nuestra colección de canciones tradicionales de Chiloé
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar canciones..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            sx={{ maxWidth: 800, mx: 'auto', mt: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
          {cancionesAMostrar.length === 0 ? (
            <Box sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center',
              py: 8,
              minHeight: '400px',
              width: '100%'
            }}>
              <MusicNoteIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No se encontraron canciones
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Intenta con otra búsqueda
              </Typography>
            </Box>
          ) : (
            <>
              <Grid 
                container 
                spacing={2} 
                sx={{ 
                  width: '100%', 
                  m: 0,
                  display: 'flex',
                  flexWrap: 'wrap'
                }}
              >
                {cancionesAMostrar.map((cancion) => (
                  <Grid 
                    key={cancion.id} 
                    sx={{ 
                      width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' },
                      p: 1,
                      flexGrow: 0,
                      flexShrink: 0
                    }}
                  >
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ mb: 2 }}>
                          <Chip 
                            label={cancion.tipo} 
                            color="primary" 
                            size="small" 
                            sx={{ mr: 1, mb: 1 }} 
                          />
                          {cancion.informante && (
                            <Chip 
                              label={`Informante: ${cancion.informante}`} 
                              variant="outlined" 
                              size="small" 
                              sx={{ mr: 1, mb: 1 }} 
                            />
                          )}
                        </Box>
                        <Typography variant="h5" component="h2" gutterBottom color="primary">
                          {cancion.titulo}
                        </Typography>
                        <Typography color="text.secondary" gutterBottom>
                          {cancion.autor}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                          {cancion.descripcion}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ mr: 1 }}
                          onClick={() => handleOpenLetra(cancion)}
                        >
                          Ver Letra
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          fullWidth
                          startIcon={<PlayArrowIcon />}
                          onClick={() => handleOpenVideo(cancion)}
                          disabled={!cancion.videoId}
                        >
                          Escuchar
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              {hayMasCanciones && (
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mt: 4,
                  mb: 2
                }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCargarMas}
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem'
                    }}
                  >
                    Cargar más canciones
                  </Button>
                </Box>
              )}
            </>
          )}
        </Box>
      </Container>

      <Dialog
        open={Boolean(cancionSeleccionada)}
        onClose={handleCloseLetra}
        maxWidth="lg"
        fullWidth
        keepMounted
        aria-labelledby="letra-dialog-title"
        PaperProps={{
          sx: {
            borderRadius: { xs: 2, sm: 2 },
            boxShadow: (theme) => theme.shadows[8],
            maxHeight: { xs: '80vh', sm: '90vh' },
            height: { xs: 'auto', sm: '90vh' },
            m: { xs: 2, sm: 2 },
          }
        }}
      >
        {cancionSeleccionada && (
          <>
            <DialogTitle 
              id="letra-dialog-title" 
              sx={{ 
                m: 0, 
                p: { xs: 1.5, sm: 3 }, 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' }, 
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'divider',
                gap: 1
              }}
            >
              <Box sx={{ flex: 1, width: '100%' }}>
                <Typography variant="h4" component="div" gutterBottom sx={{ 
                  fontSize: { xs: '1.25rem', sm: '2rem' },
                  mb: { xs: 0.5, sm: 1 }
                }}>
                  {cancionSeleccionada.titulo}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ 
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    mr: 1
                  }}>
                    {cancionSeleccionada.autor}
                  </Typography>
                  <Chip 
                    label={cancionSeleccionada.tipo} 
                    color="primary" 
                    size="small"
                    sx={{ 
                      fontSize: { xs: '0.7rem', sm: '0.875rem' },
                      height: { xs: '20px', sm: '24px' }
                    }}
                  />
                  {cancionSeleccionada.informante && (
                    <Chip 
                      label={`Informante: ${cancionSeleccionada.informante}`} 
                      variant="outlined" 
                      size="small"
                      sx={{ 
                        fontSize: { xs: '0.7rem', sm: '0.875rem' },
                        height: { xs: '20px', sm: '24px' }
                      }}
                    />
                  )}
                </Box>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                gap: 0.5,
                flexWrap: 'wrap',
                justifyContent: { xs: 'space-between', sm: 'flex-end' },
                width: { xs: '100%', sm: 'auto' }
              }}>
                <Tooltip title="Compartir">
                  <IconButton onClick={handleShareLetra} size="small" sx={{ p: { xs: 0.5, sm: 1 } }}>
                    <ShareIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title={copiado ? "¡Letra copiada!" : "Copiar letra"}>
                  <IconButton onClick={handleCopyLetra} size="small" sx={{ p: { xs: 0.5, sm: 1 } }}>
                    {copiado ? <CheckIcon fontSize="small" color="success" /> : <ContentCopyIcon fontSize="small" />}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Imprimir">
                  <IconButton onClick={handlePrintLetra} size="small" sx={{ p: { xs: 0.5, sm: 1 } }}>
                    <PrintIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Información adicional">
                  <IconButton onClick={() => setShowInfo(!showInfo)} size="small" sx={{ p: { xs: 0.5, sm: 1 } }}>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <IconButton
                  aria-label="cerrar"
                  onClick={handleCloseLetra}
                  size="small"
                  sx={{
                    p: { xs: 0.5, sm: 1 },
                    color: (theme) => theme.palette.grey[500],
                    '&:hover': {
                      color: (theme) => theme.palette.grey[700],
                      backgroundColor: (theme) => theme.palette.action.hover
                    }
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent 
              sx={{ 
                p: { xs: 1.5, sm: 3 },
                display: 'flex',
                flexDirection: 'column',
                maxHeight: { xs: '60vh', sm: 'calc(90vh - 140px)' },
                minHeight: { xs: '40vh', sm: 'auto' },
                overflow: 'auto'
              }}
            >
              {showInfo && (
                <Box sx={{ 
                  mt: 1.5,
                  mb: 2, 
                  p: { xs: 1, sm: 2 }, 
                  bgcolor: 'action.hover', 
                  borderRadius: 1 
                }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                    Información Adicional:
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    {cancionSeleccionada.lugar || cancionSeleccionada.recopilacion || cancionSeleccionada.fecha ? (
                      <>
                        {cancionSeleccionada.lugar && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon fontSize="small" color="action" />
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                              Lugar: {cancionSeleccionada.lugar}
                            </Typography>
                          </Box>
                        )}
                        {cancionSeleccionada.recopilacion && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <PersonIcon fontSize="small" color="action" />
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                              Recopilación: {cancionSeleccionada.recopilacion}
                            </Typography>
                          </Box>
                        )}
                        {cancionSeleccionada.fecha && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CalendarTodayIcon fontSize="small" color="action" />
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                              Fecha: {cancionSeleccionada.fecha}
                            </Typography>
                          </Box>
                        )}
                      </>
                    ) : (
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                        No hay información adicional disponible para esta canción.
                      </Typography>
                    )}
                  </Box>
                </Box>
              )}
              {cancionSeleccionada.contexto && (
                <Box sx={{ 
                  mb: 2, 
                  p: { xs: 1, sm: 2 }, 
                  bgcolor: 'action.hover', 
                  borderRadius: 1 
                }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                    Contexto:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                    {cancionSeleccionada.contexto}
                  </Typography>
                </Box>
              )}
              <Box 
                sx={{ 
                  whiteSpace: 'pre-line', 
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '0.9rem', sm: '1.2rem' },
                  lineHeight: { xs: 1.6, sm: 2 },
                  flex: 1,
                  '& .coro': {
                    fontWeight: 500,
                    mt: { xs: 2, sm: 3 },
                    mb: { xs: 2, sm: 3 }
                  },
                  '& .estribillo': {
                    fontStyle: 'italic',
                    mt: { xs: 1.5, sm: 2 },
                    mb: { xs: 1.5, sm: 2 }
                  },
                  '& .primer-verso': {
                    mt: { xs: 2, sm: 3 }
                  }
                }}
              >
                {cancionSeleccionada.letra.split('\n').map((linea, index) => {
                  if (linea.startsWith('Coro:')) {
                    return <div key={index} className="coro">{linea}</div>;
                  } else if (linea.startsWith('/:')) {
                    return <div key={index} className="estribillo">{linea.replace(/\/:/g, '')}</div>;
                  } else if (linea.startsWith('%')) {
                    return <div key={index} className="estribillo">{linea.replace(/%/g, '')}</div>;
                  }
                  return <div key={index} className={index === 0 ? 'primer-verso' : ''}>{linea}</div>;
                })}
              </Box>
            </DialogContent>
            <DialogActions sx={{ 
              p: { xs: 1, sm: 2 }, 
              borderTop: '1px solid', 
              borderColor: 'divider',
              justifyContent: 'center'
            }}>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Dialog
        open={Boolean(videoUrl)}
        onClose={handleCloseVideo}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: 2, sm: 2 },
            boxShadow: (theme) => theme.shadows[8],
            maxHeight: { xs: '80vh', sm: '90vh' },
            height: { xs: 'auto', sm: 'auto' },
            m: { xs: 2, sm: 2 },
          }
        }}
      >
        <DialogTitle 
          sx={{ 
            m: 0, 
            p: { xs: 1.5, sm: 2 }, 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <YouTubeIcon color="error" />
            <Typography variant="h6">
              Reproduciendo video
            </Typography>
          </Box>
          <IconButton
            aria-label="cerrar"
            onClick={handleCloseVideo}
            size="small"
            sx={{
              color: (theme) => theme.palette.grey[500],
              '&:hover': {
                color: (theme) => theme.palette.grey[700],
                backgroundColor: (theme) => theme.palette.action.hover
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, bgcolor: 'black' }}>
          {videoUrl && (
            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        ContentProps={{ 
          sx: { 
            zIndex: 20000, 
            fontWeight: 600, 
            fontSize: '1rem', 
            bgcolor: snackbarColor === 'success' ? 'success.main' : 'error.main', 
            color: 'white' 
          } 
        }}
      />
    </Box>
  );
};

export default Canciones; 