function HomeUI({ annonces, loading }) {
    return (
      <div>
        <h2>Liste des Annonces</h2>
        {loading ? (
          <p>Chargement...</p>
        ) : annonces.length === 0 ? (
          <p>Aucune annonce disponible.</p>
        ) : (
          annonces.map((a) => (
            <div key={a.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <h3>{a.titre}</h3>
              <p>{a.description}</p>
              <strong>{a.prix} DT</strong>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default HomeUI;
  