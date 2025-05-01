function SignupUI({ formData, handleChange, handleSubmit, error }) {
    return (
      <div>
        <h2>Inscription</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Nom d'utilisateur" onChange={handleChange} /><br />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} /><br />
          <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} /><br />
          <input name="telephone" placeholder="Téléphone" onChange={handleChange} /><br />
          <select name="role" onChange={handleChange}>
            <option value="acheteur">Acheteur</option>
            <option value="vendeur">Vendeur</option>
          </select><br />
          <button type="submit">Créer un compte</button>
        </form>
      </div>
    );
  }
  
  export default SignupUI;
  