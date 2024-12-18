import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

const Player = () => {
  const [video, setVideo] = useState();
  const parametros = useParams();
  const videoId = Number(parametros.videoId);

  useEffect(() => {
    fetch(`http://localhost:3001/videos/${videoId}`)
      .then((resp) => resp.json())
      .then((json) => setVideo(json));
  }, [videoId]);

  if (!video) return <NaoEncontrada />;

  return (
    <>
      <Banner imagem="Player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          src={video.link}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
