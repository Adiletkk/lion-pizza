import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/LoginPage/Login'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Slider from './components/sliderCard/Slider.jsx';
import AdminPage from './pages/AdminPage/AdminPage';
import PrivateRout from './components/Routes/PrivateRout';
import { useEffect, useState } from 'react';
import PublicRout from './components/Routes/PublicRout';
import Button from './components/button/Button';
import CreateProduct from './pages/CreateProduckt/CreateProduct';


function App() {
  const a = JSON.parse(localStorage.getItem('auth'))
  const [auth, setAuth] = useState(a);
  useEffect(() => {
    localStorage.setItem('auth', auth)
  }, [auth])
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<HomePage />} />
        <Route path='/login' element={<PublicRout ><Login setAuth={setAuth} /></PublicRout>} />
        <Route path='/admin' element={<PrivateRout > <AdminPage /></PrivateRout>} />
        <Route
          path='/create-product'
          element={
            <PrivateRout >
              <CreateProduct />
            </PrivateRout>
          }
          />
      </Routes>
    </div>

  );
}

export default App;
