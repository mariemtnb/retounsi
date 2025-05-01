import { useEffect, useState } from "react";
import CartUI from "./CartUI";
import API from "../../services/api";

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger le panier de l'utilisateur connecté
  useEffect(() => {
    API.get("/api/panier/")
      .then(res => {
        setCart(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Impossible de charger le panier.");
        setLoading(false);
      });
  }, []);

  // Retirer un article du panier
  const handleRemoveItem = async (annonceId) => {
    try {
      await API.delete(`/api/panier/supprimer/${annonceId}/`);
      setCart(prev => ({
        ...prev,
        articles: prev.articles.filter(a => a.id !== annonceId)
      }));
    } catch (err) {
      console.error(err);
      setError("Échec de la suppression.");
    }
  };

  // Confirmer l'achat du panier
  const handleConfirmPurchase = async () => {
    try {
      await API.post("/api/panier/confirmer/");
      alert("Achat confirmé !");
      setCart({ articles: [] });
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la confirmation.");
    }
  };

  return (
    <CartUI
      cart={cart}
      loading={loading}
      error={error}
      onRemoveItem={handleRemoveItem}
      onConfirmPurchase={handleConfirmPurchase}
    />
  );
}

export default Cart;
