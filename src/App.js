import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import HomePage from './component/home/HomePage'
import LoginPage from './component/auth/LoginPage'
import RegisterPage from './component/auth/RegisterPage'


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='content'>
          <Routes>
            {/* Public Routes */}
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
