import styles from "./Inicio.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
// import videos from "db.json";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/videos")
      .then((resp) => resp.json())
      .then((json) => setVideos(json));
  }, []);

  return (
    <>
      <Banner imagem="Home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
};

export default Inicio;
