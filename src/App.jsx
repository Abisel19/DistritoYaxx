import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import Acerca from '@pages/Acerca'
import Modelos from '@pages/Modelos'
import Amenidades from '@pages/Amenidades'
import Contacto from '@pages/Contacto'
import Ubicacion from '@pages/Ubicacion'
import Tour from '@pages/TourVirtual'
import Nivel from '@pages/Nivel'
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
          <Route path="/modelos" element={<Modelos />} />
          <Route path="/amenidades" element={<Amenidades />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/nivel/:nivelUrl/:departamentoUrl" element={<Nivel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
