import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? <Navigate to="/products" /> : children;
};

export default PublicRoute;