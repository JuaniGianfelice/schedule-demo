import { useState } from "react";
import "./userCreationForm.scss";

const UserCreationForm = () => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
    confirmPassword: "",
    rol: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    // Validar Contraseña
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    alert("Usuario creado correctamente");

    // Reiniciar el formulario
    setFormData({
      user: "",
      password: "",
      confirmPassword: "",
      rol: "",
    });
  };

  return (
    <div className="dash">
      <form className="creation-form" onSubmit={handleSubmit}>
        <label className="creation-form-group">
          Usuario:
          <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
        </label>

        <label className="creation-form-group">
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <label className="creation-form-group">
          Confirmar Contraseña:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>

        <label className="creation-form-group">
          Rol:
          <select name="rol" value={formData.rol} onChange={handleChange} required>
            <option value="" disabled hidden>
              Seleccionar rol
            </option>
            <option value="Admin">Administrador</option>
            <option value="Coordinador">Coordinador</option>
            <option value="Medico">Médico</option>
          </select>
        </label>
        <button className="btn-create" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default UserCreationForm;
