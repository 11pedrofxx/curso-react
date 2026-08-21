import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Contato from './pages/contato';
import App from './pages/app/';
import NaoEncontrado from './NaoEncontrado';
import Eventos from './pages/eventos/index.jsx';

export default function roteacao() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos />} />

                <Route path='*' element ={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>  

    )

}