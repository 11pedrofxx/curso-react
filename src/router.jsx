import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Contato from './pages/contato';
import App from './pages/app/';
import NaoEncontrado from './pages/NaoEncontrado/index.jsx';
import Eventos from './pages/eventos/index.jsx';
import VarEstado from './pages/varEstado/index.jsx';

export default function roteacao() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos />} />
                <Route path = '/eventos' element = {<Eventos />} />
                <Route path = '/varEstado' element = {<VarEstado />} />

                <Route path='*' element ={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>  

    )

}