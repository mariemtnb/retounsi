function CategoryUI({ categories, loading, error }) {
    if (loading) {
      return <p>Chargement des catégories...</p>;
    }
  
    if (error) {
      return <p style={{ color: 'red' }}>{error}</p>;
    }
  
    return (
      <div>
        <h2>Liste des Catégories</h2>
        {categories.length === 0 ? (
          <p>Aucune catégorie disponible.</p>
        ) : (
          <ul>
            {categories.map((categorie) => (
              <li key={categorie.id}>
                <strong>{categorie.nom}</strong> (ID: {categorie.id})
                {categorie.sous_categories && categorie.sous_categories.length > 0 && (
                  <ul>
                    {categorie.sous_categories.map((sc) => (
                      <li key={sc.id}>
                        ➤ {sc.nom} (ID: {sc.id})
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default CategoryUI;
  