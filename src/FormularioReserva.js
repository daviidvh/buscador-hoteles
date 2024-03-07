//importa la biblioteca React y el gancho (hook) useState de React
import React, { useState} from 'react';
//importa los datos de los hoteles
import hotelesData from '../src/data/hoteles.json';

function FormularioReserva(props) {
  // Estados para almacenar la información del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState(1);
  const [tipoHabitacion, setTipoHabitacion] = useState('');



// Se utiliza hotelesData.hoteles.find para encontrar el hotel correspondiente al nombre proporcionado en las props (props.nombreHotel).
// Luego, se utiliza el operador opcional de encadenamiento (?.) para acceder a la propiedad habitaciones del hotel y mapear los tipos de habitación.
// Si no se encuentra el hotel, se asigna un arreglo vacío.
  const tiposHabitacionHotel =
    hotelesData.hoteles.find((hotel) => hotel.nombre === props.nombreHotel)?.habitaciones.map(
      (habitacion) => habitacion.tipo
    ) || [];

 
  // Función que se ejecuta al enviar el formulario
  const enviar = (e) => {
    e.preventDefault();
    // Alerta con la información del formulario
    alert(`Formulario enviado: 
    Nombre: ${nombre}
    Email: ${email}
    Fecha de inicio: ${fechaInicio}
    Fecha de fin: ${fechaFin}
    Cantidad de personas: ${cantidadPersonas}
    Tipo de habitación: ${tipoHabitacion}`);
  };

  // Renderización del formulario con JSX
  return (
    <form onSubmit={enviar} style={styles.form}>
      {/* Crea un campo de entrada para el nombre, vinculando su valor al estado nombre y actualizándolo con la función setNombre cuando cambia. */}
      <label htmlFor="nombre" style={styles.label}>
        Nombre:
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
          required
        />

      </label>

      {/* Similar al campo de nombre, pero para el email. */}
      <label htmlFor="email" style={styles.label}>
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required

        />
      </label>

      {/* Campo de fecha de inicio, con un tipo de entrada de fecha. */}
      <label htmlFor="fechaInicio" style={styles.label}>
        Fecha de inicio:
        <input
          type="date"
          id="fechaInicio"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          style={styles.input}
          required

        />
      </label>

      {/* Similar al campo de fecha de inicio, pero para la fecha de fin. */}
      <label htmlFor="fechaFin" style={styles.label}>
        Fecha de fin:
        <input
          type="date"
          id="fechaFin"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          style={styles.input}
          required

        />
      </label>

      {/* Campo de cantidad de personas, con un tipo de entrada de número. */}
      <label htmlFor="cantidadPersonas" style={styles.label}>
        Cantidad de personas:
        <input
          type="number"
          id="cantidadPersonas"
          value={cantidadPersonas}
          onChange={(e) => setCantidadPersonas(parseInt(e.target.value, 10))}
          min="1"
          style={styles.input}
          required

        />
      </label>
      {/* Lista desplegable (<select>) para seleccionar el tipo de habitación. Los valores se llenan con opciones generadas a partir de tiposHabitacionHotel. */}
      <label htmlFor="tipoHabitacion">Tipo de habitación:</label>
      <select
        id="tipoHabitacion"
        value={tipoHabitacion}
        onChange={(e) => setTipoHabitacion(e.target.value)}
      >
        <option value="">Selecciona el tipo de habitación</option>
        {/* Utiliza la información de tiposHabitacionHotel para generar opciones donde el valor y la etiqueta visible son el tipo de habitación. */}
        {tiposHabitacionHotel.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>



      <button type="submit" style={styles.button}>
        Reservar
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '300px', 
    margin: 'auto',
    paddingRight : '50px',

  },
  label: {
    display: 'block',
    margin: '10px 0',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
  },
  button: {
    background: '#4CAF50',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default FormularioReserva;
