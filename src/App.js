import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/LoginPage/Login'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Slider from './components/sliderCard/Slider.jsx';


function App() {
  return (
    <div className="container">
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product/:id' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
