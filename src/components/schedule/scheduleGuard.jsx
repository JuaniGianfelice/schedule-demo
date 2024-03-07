import React, { useState, useRef, useEffect } from "react";
import "./schedule.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import AddEventModal from "../modal/modal";
import { useNavigate } from "react-router-dom";

const ScheduleGuard = ({ isVisitDashboard, isAdminDashboard }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const navigate = useNavigate();

  // Cargar eventos al inicializar el componente
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  // Guardar los eventos en localStorage
  const saveEventsToLocalStorage = (updatedEvents) => {
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  // Agregar Eventos
  const onEventAdded = (event) => {
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  };

  // Cerrar Sesion
  const handleLogout = () => {
    navigate("/home");
  };

  

  return (
    <div className="schedule">
      <h1>Calendario de Guardias</h1>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekNumberCalculation="ISO"
        locale="es"
        height={600}
        headerToolbar={{
          left: isVisitDashboard ? "" : "Add",
          center: "title",
          right: "today prev,next CloseSesion",
        }}
        customButtons={{
          Add: {
            text: "Agregar Guardia",
            click: () => setModalOpen(true),
          },
          CloseSesion: {
            text: "Cerrar Sesion",
            click: handleLogout,
          },
        }}
        events={events}
        eventContent={({ event }) => (
          <div>
            <b>{event.title}</b>
          </div>
        )}
      />

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(event) => onEventAdded(event)}
      />
    </div>
  );
};

export default ScheduleGuard;
