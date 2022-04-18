import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
