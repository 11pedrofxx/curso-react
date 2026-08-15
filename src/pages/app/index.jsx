import './index.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
     
    <h1>React</h1>

    <div>

    <ul>
      <li>
        <Link to='/contato'> Ir para contato </Link>
      </li>
    </ul>

    </div>

    </div>
  );
}


