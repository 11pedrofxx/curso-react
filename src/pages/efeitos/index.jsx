import './index.scss';
import Cabecalho from '../../components/cabecalho'
import { useState, useEffect } from 'react';

export default function Efeitos() {
    const [mencao, setMencao] = useState('');
    const [sitMencao, setsitMencao] = useState('-')

    useEffect(() => {
        avaliarMencao()
    }, [mencao])

    function avaliarMencao() {
        if (mencao == 'P') {
            setsitMencao('Plenamento Satisfátorio')
        }
        else if (mencao == 'S') {
            setsitMencao('Satisfátorio')
        }
        else if (mencao == 'NS') {
            setsitMencao('Não Satisfátorio')
        }
        else {
            setsitMencao('Inválido')
        }
    }

    return(
        <div className='pagina-efeitos pagina'>
            <Cabecalho titulo='Pagina de efeitos'/>

            <section className='secao'>
                <h1> Situação Aluno</h1>

                <div className='sit-aluno'>
                    <div>{sitMencao}</div>
                    
                    <div>
                        <label> Menção:</label>
                        <input type="text" value={mencao} onChange={e =>setMencao(e.target.value)}/>
                    </div>
                </div>
            </section>


        </div>
    )
}