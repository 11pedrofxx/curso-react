import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Comp from '../comp';


export default function App() {
  return (
    <div className="pagina-app pagina">
    
    <Cabecalho titulo="Bem Vindo(a) Ao APP"/>

    <section className='secao'>
      <Link to="/Eventos">Ir para eventos</Link>
        <br />
      <Link to={'varEstado'}>Ir para variavel de estado</Link>
      <br />
      <Link to={'comp'}>Ir para componentes</Link> <br />
      <Link to={'renderizacao'}>Ir para Renderização Condicional</Link>
    </section>

    </div>
  );
}


