// Fonctionnalité : Connexion utilisateur avec appel API
import { useState } from "react";
import LoginUI from "./LoginUI";
import API from "../../services/api";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login/", formData);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/"; // Redirection vers Home
    } catch (err) {
      setError("Email ou mot de passe invalide");
    }
  };

  return (
    <LoginUI
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default Login;
