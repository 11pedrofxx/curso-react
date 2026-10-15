import './index.scss';
import Cabecalho from '../../components/cabecalho'
import { useState } from 'react';

export default function RenderizacaoCondicional() {

    const [exibirMsg, setexibirMsg] = useState(false);
    function exibir() {
        setexibirMsg(!exibirMsg)
    }

    return(
        <div className='rend-cont pagina'>
            <Cabecalho/>
            <section className='secao'>
                <h1>Biscoito da sorte</h1>
                <button onClick={exibir} >{exibirMsg == true ? 'Fechar' : 'Abrir'}</button>

                {exibirMsg == true &&

                <p className='msg-biscoito'>
                    Sempre haverá pessoas melhores e piores em habilidades diferentes. Avance e ajude
                </p>
                }
            </section>
        </div>
    )
}