import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import img1 from '../img/im01.jpg'
import video1 from '../img/mov_bbb.mp4'
import Container from '@mui/material/Container';
import { Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';



export default function ContentHome() {

   const [movie, setMovie] = React.useState([]);
   React.useEffect(()=>{
      getMovie();
   },[]);
   const getMovie =()=>{
      fetch("https://hhmer.herokuapp.com/api/movie/getMovie")
      .then(res=>res.json())
      .then(
         (result)=>{
            setMovie(result);
         }
      )
   }
  return (
    <React.Fragment>
    <CssBaseline />
    <Container sx={{mb:{xs: 3, md:6}}}>
          <Grid  container spacing={{xs:3, md:8}} >
            {movie.map((row)=>(
               
               <Grid item   xs={6}  sm={4} md={3}>
                  <Card   sx={{
                     height:{xs:195, md:270},
                width: {xs:175, md: 264}
              }}>
            <CardActionArea>
               
            <Link href={row.movie_vedio}>
              <img src={row.movie_img} autoPlay loop muted/>

            </Link>
            </CardActionArea>
             </Card>
                  <Typography variant='h6' textAlign="center">
                  {row.movie_name} 
                  </Typography>
              </Grid>
             
            ))}
              
             
          </Grid>
    </Container>
  </React.Fragment>
  );
}
