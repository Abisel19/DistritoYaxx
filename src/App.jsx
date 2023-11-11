import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import Acerca from '@pages/Acerca'
import Proyectos from '@pages/Proyectos'
import Contacto from '@pages/Contacto'
import NotFound from '@pages/NotFound'

import Footer from '@components/Footer';
import Header from '@components/Header';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
