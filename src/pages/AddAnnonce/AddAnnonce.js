import { useState } from 'react';
import AddAnnonceUI from './AddAnnonceUI';
import { createAnnonce } from '../../services/api';

function AddAnnonce() {
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    prix: '',
    ville: '',
    gouvernorat: '',
    sous_categorie: '',
    images_urls: [],
    is_premium: false,
  });

  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageAdd = (url) => {
    if (url.trim()) {
      setFormData((prev) => ({
        ...prev,
        images_urls: [...prev.images_urls, url.trim()],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        sous_categorie: parseInt(formData.sous_categorie), // assure que c’est un entier
        prix: parseFloat(formData.prix),
      };
      await createAnnonce(payload);
      setSuccessMsg('Annonce créée avec succès !');
      setError(null);
      // Réinitialise le formulaire
      setFormData({
        titre: '',
        description: '',
        prix: '',
        ville: '',
        gouvernorat: '',
        sous_categorie: '',
        images_urls: [],
        is_premium: false,
      });
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la création de l'annonce.");
    }
  };

  return (
    <AddAnnonceUI
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleImageAdd={handleImageAdd}
      error={error}
      successMsg={successMsg}
    />
  );
}

export default AddAnnonce;
