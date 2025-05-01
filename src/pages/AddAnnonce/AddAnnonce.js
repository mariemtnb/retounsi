import { useState } from "react";
import AddAnnonceUI from "./AddAnnonceUI";
import API from "../../services/api";

function AddAnnonce() {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    prix: "",
    ville: "",
    gouvernorat: "",
    sous_categorie: "",     // ID d'une sous-catégorie existante
    images_urls: [],        // Array de strings (URLs)
    is_premium: false
  });

  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleImageAdd = (url) => {
    setFormData(prev => ({
      ...prev,
      images_urls: [...prev.images_urls, url]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/annonce/ajouter/", formData);
      setSuccessMsg("Annonce créée avec succès !");
      setError(null);
      // Redirection ou reset
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
