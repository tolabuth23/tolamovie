


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';

export default function CreateMovie() {

    const handleSubmit = event=>{
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "movie_name": movie_name,
        "movie_vedio": movie_vedio,
        "movie_img": movie_img,
        "type_name": [type_name],
        
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

    fetch("https://hhmer.herokuapp.com/api/movie/create", requestOptions)
    .then(response => response.json())
    .then(result => {
        
            window.location.href ='/'
      
    })
    .catch(error => console.log('error', error));
        }

    const [movie_name,setMame] = React.useState('');
    const [movie_img, setMImg] = React.useState('');
    const [movie_vedio, setMvedio] = React.useState('');
    const [type_name, setTypename] = React.useState('');
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p: 2}}>
      <Typography variant="h6" gutterBottom>
        Create Student
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
         <Grid item xs={12}  >
         <TextField  label="Movie Name" id="outlined-basic" fullWidth required variant="outlined" 
         onChange={(e)=>setMame(e.target.value)}/>
        </Grid>
        <Grid item  xs={12} >
        <TextField label="Movie Image" id="outlined-basic" fullWidth required variant="outlined" 
        onChange={(e)=>setMImg(e.target.value)}/>
        </Grid>
        <Grid item  xs={12} sm={6}>
        <TextField label="Movie Vedio" id="outlined-basic" fullWidth required variant="outlined" 
        onChange={(e=>setMvedio(e.target.value))}/>
        </Grid>
        <Grid item  xs={12} sm={6}>
        <TextField label="Movie Category" id="outlined-basic" fullWidth required variant="outlined" 
        onChange={(e)=>setTypename(e.target.value)}/>
        </Grid>
        
        <Grid item  xs={12}>
        <Button type='submit' variant="contained" fullWidth >
        Create Student
      </Button>
        </Grid>

        </Grid>

        
      </form>
      </Container>
    </React.Fragment>
  );
}


