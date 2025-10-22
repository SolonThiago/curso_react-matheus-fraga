import { Link } from 'react-router-dom'

export default function Erro() {
  return(
    <div>
      <h1>Hum...., parece que essa página não existe!</h1>

      <sapn>Parece que você está procurando:</sapn><br/>
      <Link to="/">Home</Link><br/>
      <Link to="/sobre">Sobre</Link><br/>
      <Link to="/contato">Contato</Link>
      
    </div>
  )
}
