import { useState } from 'react';
import SignupUI from './SignupUI';
import API from '../../services/api';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    telephone: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await API.post('auth/register/', formData); // ✅ URL corrigée
      if (response.status === 201) {
        alert('Inscription réussie !');
        window.location.href = '/login';
      } else {
        setError("Une erreur est survenue.");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        const errors = err.response.data;
        const message = Object.values(errors).flat().join(' ');
        setError(message);
      } else {
        setError("Erreur lors de l'inscription.");
      }
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
