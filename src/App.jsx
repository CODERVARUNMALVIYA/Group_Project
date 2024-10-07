import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Clothcard from './components/Clothcard';
import ForgetPassword from './components/ForgetPassword';
import UserProfile from './components/UserProfile';
import AdminLoginForm from './AdminComponent/AdminLoginForm';
import AddClothForm from './AdminComponent/AddClothForm';
import { useState } from 'react';
import AdminProducts from './AdminComponent/AdminProducts';
import Order from './components/Order';
import AddToCart from './components/AddToCart';
import AdminSignup from './AdminComponent/AdminSignUp';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='h-screen max-w-screen'>
      <Routes>
        {/* Home route: passing isLoggedIn and setIsLoggedIn */}
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/signup' element={<RegistrationForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/order' element={<Order />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        
        <Route path='/adminlogin' element={<AdminLoginForm />} />
        <Route path='/admin/signup' element={<AdminSignup />} />
        <Route path='/admin/products' element={<AdminProducts />} />
        <Route path='/admin/form' element={<AddClothForm />} />
      
      </Routes>
    </div>
  );
}

export default App;
