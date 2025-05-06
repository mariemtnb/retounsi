function ProductDetailUI({ annonce, loading, error }) {
    if (loading) return <p>Chargement des détails...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!annonce) return <p>Annonce introuvable.</p>;
  
    return (
      <div>
        <h2>{annonce.titre}</h2>
        <p>{annonce.description}</p>
        <p><strong>Prix :</strong> {annonce.prix} DT</p>
        <p><strong>Ville :</strong> {annonce.ville}</p>
        <p><strong>Gouvernorat :</strong> {annonce.gouvernorat}</p>
        <p><strong>Catégorie :</strong> {annonce.sous_categorie?.nom}</p>
        <p><strong>Vendeur :</strong> {annonce.user?.username}</p>
        <p><strong>Téléphone :</strong> {annonce.user?.telephone}</p>
      </div>
    );
  }
  
  export default ProductDetailUI;
  