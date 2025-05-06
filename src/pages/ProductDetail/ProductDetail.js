import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailUI from './ProductDetailUI';
import API from '../../services/api';

function ProductDetail() {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnonce = async () => {
      try {
        const response = await API.get(`annonces/${id}/`);
        setAnnonce(response.data);
      } catch (err) {
        console.error('Erreur lors de la récupération de l\'annonce :', err);
        setError("Impossible de charger l'annonce.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnonce();
  }, [id]);

  return (
    <ProductDetailUI annonce={annonce} loading={loading} error={error} />
  );
}

export default ProductDetail;
