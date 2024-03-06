import Home from './pages/home'
import Index from './pages/index'
import CoordinadorDashboard from './pages/coordinadorDashboard'
import AdminDashboard from './pages/adminDashboard'
import VisitDashboard from './pages/visitDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/index" element = {<Index/>}/>
      <Route path = "/coordinadordashboard" element = {<CoordinadorDashboard/>}/>
      <Route path = "/admindashboard" element = {<AdminDashboard/>}/>
      <Route path = "/visitdashboard" element = {<VisitDashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App