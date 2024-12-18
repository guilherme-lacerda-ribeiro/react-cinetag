import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritoContext } from "contextos/Favoritos";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  console.log(favorito);

  return (
    <>
      <Banner imagem="Favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito && favorito.map(item => 
          // <Card id={item.id} titulo={item.titulo} capa={item.capa} />
          <Card key={item.id} {...item} />
        )}
      </section>
    </>
  );
};

export default Favoritos;
