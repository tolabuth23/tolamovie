import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material';
import React from 'react'
import ContentHome from './ContentHome';
import movie_img from '../img/movie_img.jpg'
import tela from '../img/te.gif'

const Home =()=>{
  return (
    <div>
    <Grid container direction="column" sx={{ pl:{xs: 2, md: 18}, pt:{xs:4, md:6} }}>
      <Box
         sx={{
          maxWidth: { xs: 410, md: 1340 },
         }}
      
        component="img"
        
        alt="The house from the offer."
        src={movie_img}
      />  
      <Box>
        <Typography textAlign="center" variant='h4' color="primary" sx={{pt:{xs: 3, md:4}}}>
        ភាគថ្មីទើបចេញក្ដៅៗ
        </Typography>
      </Box>
       
        
        <Grid sx={{ pt:{xs: 4, md:8}}}>
            <Grid item xs={0} sm={2}/>
            <Grid item xs={12} sm={8} container spacing={{ xs: 0, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <ContentHome/>
              </Grid> 
              <Box
            sx={{
              mb:{xs:4, md:4},
             maxWidth: { xs: 410, md: 1340 },
                  }}
      
                component="img"
        
            alt="The house from the offer."
          src={tela}
          />  
            <Box>
                <Typography textAlign="center" variant='h4' color="primary" sx={{pb:{xs: 3, md:5  }}}>
                   ភាគថ្មីទើបចេញក្ដៅៗ
               </Typography>
               
              </Box>    
          <Grid item xs={12} sm={8} container spacing={{ xs: 0, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <ContentHome/>
                
                 
          
              </Grid> 
              <Box>
                <Typography textAlign="center" variant='h4' color="primary" sx={{pb:{xs: 3, md:5  }}}>
                <Link href="/createMovie" textAlign="center">
            <Button variant="contained" >
            Create Student
            </Button>
            </Link>
               </Typography>
               
                </Box> 

             
              <Grid item xs={0} sm={2}/>
        </Grid>
        </Grid>
                  
        
        </div>
    
  );
}

export default Home;