import { useEffect, useState } from "react";
import PanierUI from "./PanierUI";
import API from "../../services/api";

function Panier() {
  const [panier, setPanier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les articles du panier de l'utilisateur connecté
  useEffect(() => {
    API.get("/api/panier/")
      .then(res => {
        setPanier(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Impossible de charger le panier.");
        setLoading(false);
      });
  }, []);

  const handleRemoveItem = async (annonceId) => {
    try {
      await API.delete(`/api/panier/supprimer/${annonceId}/`);
      setPanier(prev => ({
        ...prev,
        articles: prev.articles.filter(a => a.id !== annonceId)
      }));
    } catch (err) {
      console.error(err);
      setError("Échec de la suppression.");
    }
  };

  const handleConfirmAchat = async () => {
    try {
      await API.post("/api/panier/confirmer/");
      alert("Achat confirmé !");
      setPanier(null);
    } catch (err) {
      console.error(err);
      setError("Échec de la confirmation.");
    }
  };

  return (
    <PanierUI
      panier={panier}
      loading={loading}
      error={error}
      onRemoveItem={handleRemoveItem}
      onConfirmAchat={handleConfirmAchat}
    />
  );
}

export default Panier;
