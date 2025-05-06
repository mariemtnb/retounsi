function AddAnnonceUI({ formData, handleChange, handleSubmit, handleImageAdd, error, successMsg }) {
    return (
      <div>
        <h2>Créer une annonce</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
        <form onSubmit={handleSubmit}>
          <input
            name="titre"
            placeholder="Titre"
            value={formData.titre}
            onChange={handleChange}
          /><br />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          /><br />
          <input
            name="prix"
            placeholder="Prix (DT)"
            type="number"
            step="0.01"
            value={formData.prix}
            onChange={handleChange}
          /><br />
          <input
            name="ville"
            placeholder="Ville"
            value={formData.ville}
            onChange={handleChange}
          /><br />
          <input
            name="gouvernorat"
            placeholder="Gouvernorat"
            value={formData.gouvernorat}
            onChange={handleChange}
          /><br />
          <input
            name="sous_categorie"
            placeholder="ID de la sous-catégorie"
            value={formData.sous_categorie}
            onChange={handleChange}
          /><br />
          <input
            placeholder="Ajouter une image (URL)"
            onBlur={(e) => {
              handleImageAdd(e.target.value);
              e.target.value = ''; // vide le champ après ajout
            }}
          /><br />
          {formData.images_urls.length > 0 && (
            <ul>
              {formData.images_urls.map((url, index) => (
                <li key={index}>{url}</li>
              ))}
            </ul>
          )}
          <label>
            Premium ?
            <input
              type="checkbox"
              name="is_premium"
              checked={formData.is_premium}
              onChange={handleChange}
            />
          </label><br />
          <button type="submit">Publier</button>
        </form>
      </div>
    );
  }
  
  export default AddAnnonceUI;
  