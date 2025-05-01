function LoginUI({ formData, handleChange, handleSubmit, error }) {
    return (
      <div>
        <h2>Connexion</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          /><br />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
          /><br />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    );
  }
  
  export default LoginUI;
  