import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';




const drawerWidth = 240;


export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Typography variant="h6" sx={{ mx: 2 ,my:2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
       
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{textAlign: 'left'}}>
                <ListItemText>Thai Movie</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{textAlign: 'left'}}>
                <ListItemText>Khmer Movie</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{textAlign: 'left'}}>
                <ListItemText>Chiness Movie</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{textAlign: 'left'}}>
                <ListItemText>Korean Movie</ListItemText>
            </ListItemButton>
          </ListItem>
          
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link href='/'>
              <Button  sx={{ color: '#fff' }}>
                Home
              </Button>
              </Link>
              <Link href="/thai">
              <Button  sx={{ color: '#fff' }}>
                Thai Movie
              </Button>
              </Link>
              <Button  sx={{ color: '#fff' }}>
                Khmer Movie
              </Button>
              <Button  sx={{ color: '#fff' }}>
                Chiness Movie
              </Button>
              <Button  sx={{ color: '#fff' }}>
                Korean Movie
              </Button>
          
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>


      </div> 

  );
}
