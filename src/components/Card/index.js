import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useFavoritoContext } from "contextos/Favoritos";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((item) => item.id === id);
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;

  return (
    <div key={id} className={styles.container}>

      <Link className={styles.link} to={`videos/${id}`}>
        <img src={capa} alt={titulo} />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={icone}
        alt="Favoritar filmes"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
      
    </div>
  );
};

export default Card;
