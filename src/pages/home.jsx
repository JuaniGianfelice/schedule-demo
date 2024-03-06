import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    user: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user, password } = loginData;

    // Validar las credenciales estáticamente
    switch (user) {
      case 'coordinador':
        if (password === 'coordinador1') {
          navigate('/CoordinadorDashboard');
        } else {
          console.error("Error al iniciar sesión: Contraseña incorrecta");
        }
        break;
      case 'administrador':
        if (password === 'administrador1') {
          navigate('/AdminDashboard');
        } else {
          console.error("Error al iniciar sesión: Contraseña incorrecta");
        }
        break;
      case 'medico':
        if (password === 'medico1') {
          navigate('/VisitDashboard');
        } else {
          console.error("Error al iniciar sesión: Contraseña incorrecta");
        }
        break;
      default:
        console.error("Error al iniciar sesión: Usuario desconocido");
    }
  };

  return (
    <div className="home">
      <div className="container">
        <h1 className="title">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user">Usuario:</label>
            <input type="text" id="user" name="user" placeholder="Ingrese su usuario" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required onChange={handleChange} />
          </div>
          <button type="submit" className="btn-login">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Home;

