function LoginUI({ formData, handleChange, handleSubmit, error }) {
    return (
      <div>
        <h2>Connexion</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label><br />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="password">Mot de passe</label><br />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          /><br /><br />
  
          <button type="submit">Se connecter</button>
        </form>
      </div>
    );
  }
  
  export default LoginUI;
  