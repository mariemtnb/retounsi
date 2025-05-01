function ProductDetailUI({ annonce, loading }) {
    if (loading) return <p>Chargement des détails...</p>;
    if (!annonce) return <p>Annonce introuvable.</p>;
  
    return (
      <div>
        <h2>{annonce.titre}</h2>
        <p>{annonce.description}</p>
        <p><strong>Prix :</strong> {annonce.prix} DT</p>
        <p><strong>Ville :</strong> {annonce.ville}</p>
        <p><strong>Gouvernorat :</strong> {annonce.gouvernorat}</p>
        <p><strong>Catégorie :</strong> {annonce.sous_categorie}</p>
      </div>
    );
  }
  
  export default ProductDetailUI;
  