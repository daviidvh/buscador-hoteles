// Importación de React y los hooks useState y useNavigate
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importación de los datos de hoteles desde el archivo JSON
import hotelesData from '../src/data/hoteles.json';


export function Bienvenida() {
// Estado para almacenar el destino ingresado por el usuario
const [destino, setDestino] = useState('');

// Hook useNavigate para la navegación programática en React Router
const navigate = useNavigate();

// Función para actualizar el estado con el texto introducido por el usuario
const textoIntroducido = (e) => {
  setDestino(e.target.value);
};

const cambioBuscar = () => {
  // Validar que el destino no esté vacío antes de redirigir
  if (destino.trim() === '') {
    alert('Por favor, ingresa un destino antes de buscar.');
  } else {
    // Redirige a la página de búsqueda con destino como prop
    navigate('/buscar', { state: { destino } });
  }
};

  //Estilos  CSS para el formulario
  const styles = {
    container: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: 'auto',

    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '20px 0',
    },
    subtitle: {
      fontSize: '16px',
      margin: '10px 0',
    },
    searchContainer: {
      marginTop: '20px',
    },
    label: {
      display: 'block',
      fontSize: '18px',
      marginBottom: '10px',
    },
    input: {
      padding: '8px',
      fontSize: '14px',
      width: '70%',
      marginRight: '10px',
    },
    button: {
      background: '#4CAF50',
      color: 'white',
      padding: '15px 32px',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'center',
      borderRadius: '12px',
      marginTop:  '10px'
    },
    destinosContainer: {
      marginTop: '30px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    destinoItem: {
      fontSize: '16px',
      margin: '5px',
    },
  };

// Mapeo de destinos a partir de los datos de hoteles
const destinos = hotelesData.hoteles.map((hotel) => {
  // Extracción de la ciudad y el país de la ubicación del hotel
  const { ciudad, pais } = hotel.ubicacion;
  
  // Creación de una cadena con el formato "Ciudad, País"
  return `${ciudad}, ${pais}`;
});


// Renderización del componente Bienvenida con JSX
return (
  <div style={styles.container}>
    {/* Título de Bienvenida */}
    <h1 style={styles.title}>Bienvenido a la búsqueda de hoteles</h1>
    <p style={styles.subtitle}>Encuentra el alojamiento perfecto para tu próximo viaje.</p>
    {/* Barra de búsqueda */}
    <div style={styles.searchContainer}>
      <label htmlFor="busqueda" style={styles.label}>
        ¿A dónde te gustaría ir?
      </label>
      {/* Buscador */}
      <input
        type="text"
        id="busqueda"
        placeholder="Ingresa tu destino"
        value={destino}
        onChange={textoIntroducido}
        style={styles.input}
      />

      {/* Enlace a la página de búsqueda */}
      <button onClick={cambioBuscar} style={styles.button}>
        Buscar Hoteles
      </button>
    </div>

    {/* Todos los destinos del JSON */}
    <div style={styles.destinosContainer}>
      {destinos.map((destino, index) => (
        <div key={index} style={styles.destinoItem}>
          ✈️ {destino}
        </div>
      ))}
    </div>
  </div>
);

}