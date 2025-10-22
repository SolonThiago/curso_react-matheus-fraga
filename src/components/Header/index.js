import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Header da Página</h1>
      <Link to="/">Home</Link><br/>
      <Link to="/sobre">Sobre</Link><br/>
      <Link to="/contato">Contato</Link>
    </header>
  );
}
