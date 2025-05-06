import { useEffect, useState } from 'react';
import CategoryUI from './CategoryUI';
import { getCategories } from '../../services/api';

function Category() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Erreur lors du chargement des catégories.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryUI categories={categories} loading={loading} error={error} />
  );
}

export default Category;
