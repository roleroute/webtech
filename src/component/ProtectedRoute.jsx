import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const adminId = localStorage.getItem("AdminId");

  if (!adminId) {
    return <Navigate to="/adminLogin" />;
  }

  return element;
};

export default ProtectedRoute;
