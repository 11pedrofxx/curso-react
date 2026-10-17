import './index.scss';
import Cabecalho from '../../components/cabecalho'
import { useState, useEffect } from 'react';
import { tratarnumero} from '../../utils/tratarnumero'

export default function Efeitos() {
    const [mencao, setMencao] = useState('');
    const [sitMencao, setsitMencao] = useState('-')

    const[nota1, setnota1] = useState(0)
    const[nota2, setnota2] = useState(0)
    const[nota3, setnota3] = useState(0)
    const[media, setmedia] = useState(0)
    const[situacao, setsituacao] = useState('')

    useEffect(() => {
        avaliarMencao()
    }, [mencao])


    useEffect(() => {
        avaliarNotas()
    }, [nota1, nota2, nota3])

    useEffect(() => {
        avaliarSituacao()
    }, [media])

    function avaliarNotas() {
        let m = (tratarnumero(nota1) + tratarnumero(nota2) + tratarnumero(nota3)) / 3
        setmedia(m)

    }

    function avaliarSituacao() {
        let s = '';
        if (media >= 6){
            s = 'Aprovado'
        }
        else {
            s = 'Reprovado'
        }
        setsituacao(s)
    }

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

            <section className='secao media'>
                
                <div className='notas-aluno'>
                    <h1> Notas Aluno</h1>
                    <input type="text" value={nota1} onChange={e => setnota1(e.target.value)}/>
                    <input type="text" value={nota2} onChange={e => setnota2(e.target.value)}/>
                    <input type="text" value={nota3} onChange={e => setnota3(e.target.value)}/>
                </div>

                <div className='result-aluno' >
                    <div className='result'>
                            <label> Média</label>
                            <h1> {media.toFixed(1)}</h1>
                    </div>
                    <div className='result'>
                        <label>Situação</label>
                        <h1>{situacao}</h1>
                    </div>
                </div>
            </section>

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