import React, { useState } from "react";
import "../index.scss";
import UserCreationForm from "../components/userCreationForm/userCreationForm";
import ScheduleGuard from "../components/schedule/scheduleGuard";
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
  const [showCreateUserForm, setShowCreateUserForm] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();

  const handleCreateUserClick = () => {
    setShowCreateUserForm(true);
    setShowCalendar(false);
  };

  const handleCalendarClick = () => {
    setShowCreateUserForm(false);
    setShowCalendar(true);
  };


  const handleCreateUser = async (formData) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Usuario creado exitosamente");
      } else {
        console.error("Error al crear usuario");
      }
    } catch (error) {
    } finally {
      setShowCreateUserForm(false);
    }
  };

  const handleLogout = () => {
    navigate('/home');
  };

  return (
    <div className="admin-dashboard">
      <div className="general">
        <div className="menu">
          <button onClick={handleCreateUserClick}>Crear Usuario</button>
          <button onClick={handleCalendarClick}>Calendario</button>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>

        <div className="option">
          {showCreateUserForm && <UserCreationForm onCreateUser={handleCreateUser} />}
          {showCalendar && <ScheduleGuard isAdminDashboard={true}/>}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
