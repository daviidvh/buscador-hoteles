// Importa el archivo de estilos de la aplicación
import './App.css';

// Importa React desde la biblioteca 'react'
import React from 'react';

// Importa componentes y funciones necesarias
import { Bienvenida } from './Bienvenida';
import Buscador from './Buscador';
import HotelDetalles from './HotelDetalles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Define el componente principal de la aplicación
const App = () => {
  return (
    // Configura el enrutador utilizando BrowserRouter
    <Router>
      {/* Define las rutas de la aplicación */}
      <Routes>
        {/* Ruta para la página de bienvenida */}
        <Route path="/" element={<Bienvenida />} />

        {/* Ruta para la página de búsqueda */}
        <Route path="/buscar" element={<Buscador />} />

        {/* Ruta para la página de detalles del hotel */}
        <Route path="/detalles/:hotelNombre" element={<HotelDetalles />} />
      </Routes>
    </Router>
  );
}

// Exporta el componente principal de la aplicación
export default App;
