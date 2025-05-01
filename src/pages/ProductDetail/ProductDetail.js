// Fonctionnalité : Détails d'une annonce en fonction de son ID
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailUI from "./ProductDetailUI";
import API from "../../services/api";

function ProductDetail() {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/api/annonces/${id}/`)
      .then(res => {
        setAnnonce(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <ProductDetailUI annonce={annonce} loading={loading} />
  );
}

export default ProductDetail;
