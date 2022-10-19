import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Navbar from './navbar';
import ThaiMovie from './component/ThaiMovie';
import Home from './component/Home';
import CreateMovie from './component/CreateMovie';


export default function Base(props) {
 
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar/>
      <Box component="main" >
        <Toolbar/>
          <div>
            <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact  path='/thai' element={<ThaiMovie/>}/>
            <Route exact  path='/createMovie' element={<CreateMovie/>}/>
            </Routes>
            </BrowserRouter>
          </div>
      </Box>
    </Box>
  );
}
