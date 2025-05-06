import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import AddAnnonce from './pages/AddAnnonce/AddAnnonce';
import Cart from './pages/Cart/Cart';
import MyAnnonces from './pages/MyAnnonces/MyAnnonces';
import Messages from './pages/Messages/Messages';
import Category from './pages/Category/Category';
import Premium from './pages/Premium/Premium';
import NotFound from './pages/NotFound/NotFound';

const isAuthenticated = !!localStorage.getItem('accessToken');

function PrivateRoute({ element }) {
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <Signup /> : <Navigate to="/" replace />}
        />

        {/* Annonces */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/add-annonce" element={<PrivateRoute element={<AddAnnonce />} />} />
        <Route path="/my-annonces" element={<PrivateRoute element={<MyAnnonces />} />} />

        {/* Panier */}
        <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />

        {/* Messagerie */}
        <Route path="/messages" element={<PrivateRoute element={<Messages />} />} />

        {/* Premium */}
        <Route path="/premium" element={<PrivateRoute element={<Premium />} />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
