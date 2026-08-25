import './index.scss';
import { Link } from 'react-router-dom';

function clicou() {
  alert('Conteudo enviado com sucesso!');
}

function mudou(e) {

  let novovalor = e.target.value;
  alert('Você alterou o valor do input para: ' + novovalor);

  if (novovalor === '') {

    alert('Você apagou o valor do input!');

  }

}

export default function App() {
  return (
    <div className="pagina-app pagina">
    
    <header className="cabecalho"><h1>REACT JS</h1></header>

    <section className="secao">

      <h1>Curso de React JS</h1>
      <h1 className="Style"><Link to="/Contato">Ir para contato</Link></h1>

      <input onChange={mudou} placeholder='Digite aqui' type="text"/>
      <button onClick={clicou}>Enviar</button>

      <br />  
      <select>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>

    </section>

    <Link to="/Eventos">Ir para eventos</Link>

    </div>
  );
}


