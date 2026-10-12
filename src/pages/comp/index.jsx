import './index.scss';
import { useState } from 'react';

import Contador from '../../components/contador';
import Cabecalho from '../../components/cabecalho';
import ItensMeta from '../../components/ItensMeta';


export default function Comp () {

    const[novameta, setnovameta] = useState('');
    const [listaMetas, setlistaMetas] = useState([]);
    const [editando, seteditando] = useState(-1)

    function addMeta() {
    
        if (novameta != '') {
            if (editando === -1) {

                setlistaMetas([...listaMetas, novameta])
                setnovameta('')

            }

            else {

                listaMetas[editando] = novameta
                setlistaMetas([...listaMetas])
                seteditando(-1)

            }
        }

    }

    function teclaApertada(e) {

        if (e.key === 'Enter') {

            addMeta()

        }

    }

    function removerMeta(pos) {

        listaMetas.splice(pos, 1);
        setlistaMetas([...listaMetas])

    }

    function editarMeta(pos) {

        setnovameta(listaMetas[pos])
        seteditando(pos)

    }

    return(

        <div className='pagina-comp pagina'>
            <Cabecalho/>

            <Contador titulo="passos"/>
            
            <Contador/> 

        <section className='secao'>
            <div>
                <h1>METAS PARA 2030</h1>
                <input type="text" value={novameta} onKeyUp={teclaApertada} onChange={e => setnovameta(e.target.value)}/>
                <button onClick={addMeta}>Postar meta</button>
            </div>
            <section >
                <div className='minhasmetas'>
            
                    <ul>
                     {listaMetas.map((item, pos) =>
                       <ItensMeta
                       item={item}
                       pos={pos}
                       removerMeta={removerMeta}
                       editarMeta={editarMeta}
                       />
                     )}
                    </ul>
                </div>
            </section>
        </section>

        </div>

    );

}