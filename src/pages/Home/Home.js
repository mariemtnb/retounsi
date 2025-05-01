// Fonctionnalité : Récupération et affichage des annonces
import { useEffect, useState } from "react";
import HomeUI from "./HomeUI";
import API from "../../services/api";

function Home() {
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/api/annonces/")  // Ce endpoint doit exister dans Django
      .then(res => {
        setAnnonces(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <HomeUI annonces={annonces} loading={loading} />
  );
}

export default Home;
