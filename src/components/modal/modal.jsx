import { useState } from "react";
import "./modal.scss";
import Modal from "react-modal";
import DateTime from "react-datetime";
import moment from 'moment';

const AddEventModal = ({ isOpen, onClose, onEventAdded }) => {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    title: "",
  });
  const professionals = ["Dr. Fuentes", "Dr. Lopez", "Dra.Pacheco", "Dr. Parra", "Dr. Rivas"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = moment(date).toISOString();

    onEventAdded({
      title: formData.title,
      date: formattedDate,
    });
    onClose();

    // Resetear el formulario
    setFormData({
      title: "",
    });
    setDate(new Date());
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <button className="close" onClick={onClose}>x</button>
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="form">
          <label>Profesional</label>
          <div className="option">
            <select
              value={formData.title}
              name="title"
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Seleccionar profesional
              </option>
              {professionals.map((professional) => (
                <option key={professional} value={professional}>
                  {professional}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Ingresar Fecha</label>
          </div>
          <DateTime
            value={date}
            onChange={(newDate) => setDate(newDate)}
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            className="option"
            required
          />
          <button type="submit" className="btn">Agregar</button>
        </div>
      </form>
    </Modal >
  );
};

export default AddEventModal;
