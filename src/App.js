import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
