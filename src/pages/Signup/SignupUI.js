function SignupUI({ formData, handleChange, handleSubmit, error }) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Créer un compte</h2>
  
        {error && <p style={styles.error}>{error}</p>}
  
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            name="username"
            placeholder="Nom d'utilisateur"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="telephone"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>S'inscrire</button>
        </form>
      </div>
    );
  }
  
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      padding: '10px',
      margin: '8px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px'
    },
    button: {
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px'
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      textAlign: 'center'
    }
  };
  
  export default SignupUI;
  