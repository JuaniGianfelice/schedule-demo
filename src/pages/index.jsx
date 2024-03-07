import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const goHome = () => {
    navigate("/home");
  }

  return (
    <div className="index">
      <div className="container">
        <h1>Bienvenido/a al Calendario de Guardias</h1>
        <p>
          La aplicacion web oficial es de uso exclusivo para la <a href="https://redbasa.com.ar/clinica-santa-clara-zarate/" target="_blank">Clinica Santa Clara</a>.<br /><br />
          En esta demo podran explorar las funcionalidades de nuestra app diseñada <br />
          para simplificar el proceso de liquidacion de sueldos en las guardias medicas. <br /><br />
          A continuacion les dejo las credenciales para acceder desde los distintos roles, <br />
          para una mejor experiencia es recomendable iniciar sesion en el siguiente orden.
        </p>
        <ul>
          <li><h4>Usuario:</h4> Coordinador</li>
          <li><h4>Contraseña:</h4>Coordinador1</li>
        </ul>
        <ul>
          <li><h4>Usuario:</h4> Medico</li>
          <li><h4>Contraseña:</h4> Medico1</li>
        </ul>
        <ul>
          <li><h4>Usuario:</h4> Administrador</li>
          <li><h4>Contraseña:</h4> Administrador1</li>
        </ul>
        <button onClick={goHome}>Comenzar</button>
      </div>
    </div>
  );
};

export default Index;
