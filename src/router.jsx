import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Contato from './pages/contato';
import App from './pages/app/';
import NaoEncontrado from './pages/NaoEncontrado/index.jsx';
import Eventos from './pages/eventos/index.jsx';
import VarEstado from './pages/varEstado/index.jsx';
import Comp from './pages/comp/index.jsx';
import RenderizacaoCondicional from './pages/RenderizacaoCond/index.jsx';
import Efeitos from './pages/efeitos/index.jsx';

export default function roteacao() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos />} />
                <Route path = '/eventos' element = {<Eventos />} />
                <Route path = '/varEstado' element = {<VarEstado />} />
                <Route path = '/comp' element = {<Comp />} />
                <Route path = '/renderizacao' element = {<RenderizacaoCondicional />} />
                <Route path = '/efeitos' element = {<Efeitos />} />

                <Route path='*' element ={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>  

    )

}