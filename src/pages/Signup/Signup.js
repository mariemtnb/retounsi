// Fonctionnalité : Inscription utilisateur avec envoi vers /auth/register/
import { useState } from "react";
import SignupUI from "./SignupUI";
import API from "../../services/api";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    telephone: "",
    role: "acheteur"
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register/", formData);
      alert("Inscription réussie !");
      window.location.href = "/login";
    } catch (err) {
      setError("Erreur lors de l'inscription");
    }
  };

  return (
    <SignupUI
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default Signup;
