// Importa la biblioteca React
import React from 'react';

// Importa el gancho (hook) useParams de react-router-dom, que permite acceder a los parámetros de la URL
import { useParams } from 'react-router-dom';

// Importa el archivo JSON hotelesData que contiene información sobre hoteles
import hotelesData from '../src/data/hoteles.json';

// Importa el componente FormularioReserva que se encuentra en el mismo directorio
import FormularioReserva from './FormularioReserva';

// Importa el archivo CSS llamado 'Detalles.css' para aplicar estilos al componente actual
import './Detalles.css';

function HotelDetalles() {
// Extrae el parámetro 'hotelNombre' de los parámetros de la URL usando el hook useParams
const { hotelNombre } = useParams();

// Busca el hotel correspondiente en el archivo JSON utilizando el nombre del hotel en la URL
const hotelSeleccionado = hotelesData.hoteles.find(
  (hotel) => hotel.nombre === decodeURIComponent(hotelNombre)
);

// Si no se encuentra el hotel, muestra un mensaje indicando que no se encontraron detalles para ese hotel
if (!hotelSeleccionado) {
  return <p>No se encontraron detalles para este hotel.</p>;
}

// Devuelve un componente JSX que representa los detalles del hotel
return (
  <div className="detalles-container">
    {/* Contenedor de la imagen del hotel */}
    <div className="imagen-container">
      <img src={hotelSeleccionado.imagen} alt={hotelSeleccionado.nombre} />
    </div>
    
    {/* Contenedor de la información del hotel */}
    <div className="informacion-container">
      <h2>{hotelSeleccionado.nombre}</h2>
      <p>Categoría: {hotelSeleccionado.categoria}</p>
      <p>Ubicación: {hotelSeleccionado.ubicacion.ciudad}, {hotelSeleccionado.ubicacion.pais}</p>
      <p>Servicios: {hotelSeleccionado.servicios.join(', ')}</p>
      
      {/* Lista de habitaciones disponibles en el hotel */}
      <p>Habitaciones:</p>
      <ul>
        {hotelSeleccionado.habitaciones.map((habitacion) => (
          <li key={habitacion.tipo}>
            <p>{habitacion.tipo}</p>
            <p>Precio: {habitacion.precio}€/noche</p>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Contenedor del formulario de reserva */}
    <div className="formulario-container">
      <h3>Reserva tu estancia</h3>
      {/* Utiliza el componente FormularioReserva y pasa el nombre del hotel como prop */}
      <FormularioReserva nombreHotel={hotelSeleccionado.nombre} />
    </div>
  </div>
);
}

export default HotelDetalles;
