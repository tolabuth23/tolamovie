import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import img1 from '../img/im01.jpg'
import Container from '@mui/material/Container';
import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
const ItemHome =()=>{
        return(
            <Card   sx={{
                width: {xs:175, md: 264}
              }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
             
              image={img1}
              title="Contemplative Reptile"
            />
           
          </CardActionArea>
          </Card>
        )
}

export default ItemHome;