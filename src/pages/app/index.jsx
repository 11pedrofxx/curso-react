import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">
    
    <header className="cabecalho"><h1>REACT JS</h1></header>

    <section className="secao">

      <h1>Curso de React JS</h1>
      <h1 className="Style"><Link to="/Contato">Ir para contato</Link></h1>

      <input placeholder='Digite aqui' type="text"/>
      <button>Enviar</button>

      <br />  
      <select>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>

    </section>

    </div>
  );
}


