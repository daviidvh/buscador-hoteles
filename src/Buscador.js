// Importa la librería React
import React from 'react';

// Importa los hooks useLocation y Link de la librería react-router-dom
import { useLocation, Link } from 'react-router-dom';

// Importa los datos de hoteles desde el archivo hoteles.json
import hotelesData from '../src/data/hoteles.json';


// Define una función llamada filtrarHotelesPorDestino que toma un array de hoteles y un destino como parámetros
function filtrarHotelesPorDestino(hoteles, destino) {
  // Filtra los hoteles según el destino, ya sea la ciudad o el país, ignorando mayúsculas y minúsculas
  return hoteles.filter(
    (hotel) =>
      hotel.ubicacion.ciudad.toLowerCase() === destino.toLowerCase() ||
      hotel.ubicacion.pais.toLowerCase() === destino.toLowerCase()
  );
}


function Buscador() {
  // Obtiene la ubicación actual de la aplicación mediante useLocation
  const location = useLocation();
  // Extrae el destino de la ubicación actual o establece 'Sin destino' si no está presente
  const { destino } = location.state || { destino: 'Sin destino' };
  // Filtra los hoteles según el destino obtenido
  const hotelesFiltrados = filtrarHotelesPorDestino(hotelesData.hoteles, destino);


  // Estilos para una tarjeta individual
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    backgroundColor: '#f5f5f5',
    color: '#333',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    marginLeft: '10px'
  };

  // Estilos para el contenedor de tarjetas
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  };

  return (
    <div>
      {/* Título de la lista de hoteles con el destino */}
      <h2 style={{ color: '#5e7d59', marginLeft: '10px'}}>Lista de Hoteles en {destino}</h2>
      
      {/* Condición: No hay hoteles disponibles en el destino */}
      {hotelesFiltrados.length === 0 ? (
        <p style={{ color: '#dc3545' }}>No hay hoteles disponibles en {destino}.</p>
      ) : (
        //  Contenedor de tarjetas de hoteles 
        <div style={cardContainerStyle} className="card-container">
          {/* Mapeo de hoteles filtrados para mostrar tarjetas */}
          {hotelesFiltrados.map((hotel) => (
            <div
              style={cardStyle}
              key={hotel.nombre}
              className="card"
            >
              {/* Imagen del hotel */}
              <img
                src={hotel.imagen} 
                alt={`Imagen de ${hotel.nombre}`}
                style={{ width: '100%', borderRadius: '8px 8px 0 0' }}
              />
              <div style={{ padding: '20px' }}>
                {/* Nombre del hotel */}
                <h3 style={{ color: '#5e7d59' }}>{hotel.nombre}</h3>
                {/* Categoría y ubicación del hotel */}
                <p>Categoría: {hotel.categoria}</p>
                <p>Ubicación: {hotel.ubicacion.ciudad}, {hotel.ubicacion.pais}</p>
                {/* Enlace para ver detalles del hotel */}
                <Link to={`/detalles/${encodeURIComponent(hotel.nombre)}`} style={{  backgroundColor: '#4CAF50', border: 'none',color: 'white',padding: '15px 32px',textAlign: 'center',textDecoration: 'none',display: 'inline-block',fontSize: '16px',margin: '4px 2px',cursor: 'pointer',borderRadius: '12px'}}>
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
}

export default Buscador;
