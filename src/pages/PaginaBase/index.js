import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
  return (
    <main>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          {/* NestedRoutes - Rotas Aninhadas - <Outlet /> */}
          <Outlet />
        </FavoritosProvider>
      </Container>
      <Rodape />
    </main>
  );
};

export default PaginaBase;
