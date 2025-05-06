import { useNavigate } from 'react-router-dom';

function HomeUI({ annonces, loading, error, isAuthenticated, handleReLogin }) {
  const navigate = useNavigate();

  if (loading) {
    return <p>Chargement des annonces...</p>;
  }

  if (error) {
    return (
      <div>
        <p style={{ color: 'red' }}>{error}</p>
        {!isAuthenticated && (
          <button onClick={handleReLogin}>🔄 Se reconnecter</button>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2>📢 Nos Annonces</h2>
      <div>
        {annonces.length === 0 ? (
          <p>Aucune annonce disponible.</p>
        ) : (
          annonces.map((annonce) => (
            <div
              key={annonce.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                marginBottom: '12px',
              }}
            >
              <h3>{annonce.titre}</h3>
              <p>{annonce.description}</p>
              <p><strong>Prix :</strong> {annonce.prix} DT</p>
              <p><strong>Vendeur :</strong> {annonce.user?.username || 'Non renseigné'}</p>
              <button onClick={() => navigate(`/annonce/${annonce.id}`)}>
                Voir Détails
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeUI;
