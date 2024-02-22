import Login from "./Pages/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPassword from "./Pages/ForgotPassword";
import PasswordReset from "./Pages/PasswordReset";
import HomePage from "./Pages/HomePage";
import Navbars from "./Components/Navbars";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./Pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
