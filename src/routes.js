import { BrowserRouter, Route, Routes as RoutesRD } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Erro from "./pages/Erro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesRD>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="*" element={<Erro />} />
      </RoutesRD>
    </BrowserRouter>
  );
};

export default Routes;
