import './index.scss';
import { useState } from 'react';

import Contador from '../../components/contador';
import Cabecalho from '../../components/cabecalho';
import ItensMeta from '../../components/ItensMeta';
import CartaoFilme from '../../components/cartaoFilme';


export default function Comp () {

    const[novameta, setnovameta] = useState('');
    const [listaMetas, setlistaMetas] = useState([]);
    const [editando, seteditando] = useState(-1)

    const [NomeFilme, setNomeFilme] = useState('');
    const [ClassificacaoFilme, setClassificacaoFilme] = useState('');
    const [urlFilme, seturlFilme] = useState('');
    const [EstreiaFilme, setEstreiaFilme] = useState('');
    const [DestaqueFilme, setDestaqueFilme] = useState(true);
    const [ListaFilmes, setListaFilmes] = useState([]);

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

    function addFilme() {
        if (NomeFilme == '' || ClassificacaoFilme == '' || urlFilme == '') {
            alert('Preencha todos os campos')
            return;
        }
        let novoFilme = {
            nome: NomeFilme,
            classificacao: ClassificacaoFilme,
            url: urlFilme,
            estreia: EstreiaFilme,
            destaque: DestaqueFilme
        }
        
        setListaFilmes([...ListaFilmes, novoFilme])
        setNomeFilme('');
        setClassificacaoFilme('');
        seturlFilme('');
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

        <section className='secao filmes'>
            <h1>Catálogo de filmes</h1>
            <div className='entradas'>
                <input type="text" placeholder='Nome do Filme' value={NomeFilme}  onChange={e => setNomeFilme(e.target.value)}/>
                <input type="text" placeholder='Classificação' value={ClassificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)}/>
                <input type="text" placeholder='URL da Capa' value={urlFilme} onChange={e => seturlFilme(e.target.value)}/>
                <input type="text" placeholder='Estreia do Filme' value={EstreiaFilme} onChange={e => setEstreiaFilme(e.target.value)}/>
                <div className='destaque'>
                    <label htmlFor="">Filme em destaque? </label>
                    <input type="checkbox" value={DestaqueFilme} onChange={e => setDestaqueFilme(e.target.checked)}/>
                </div>
                <button onClick={addFilme} >Adicionar</button>
            </div>
        </section>

        <section className='secao cartaz'>
            {ListaFilmes.map( item =>
                <CartaoFilme item={item}
                />
            )}
        </section>

        </div>

    );

}