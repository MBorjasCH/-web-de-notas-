import React from 'react';

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    // Lógica de autenticación (aquí es simulada)
    onLogin(true); // Llama a la función onLogin con true si se autentica correctamente
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
