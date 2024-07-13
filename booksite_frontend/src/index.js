import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './index.css'
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import BookList from './Components/BookList/BookList';
import Search from './pages/Search/Search';
import BookHome from './pages/BookHome/BookHome'
import Authentication from './pages/Authentication/LoginPage';
// import CreateAccount from './pages/Authentication/CreateAccount';
// import ForgotPassword from './pages/Authentication/ForgotPassword';
import '@fortawesome/fontawesome-free/css/all.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        {/* <Route path="/authentication/createaccount" element={<CreateAccount />} />
        <Route path='/authentication/forgotpassword' element={<ForgotPassword />} /> */}
        <Route path='/search' element={<Search />} />
        <Route path="/search/book/:id" element={<BookHome />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
