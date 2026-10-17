import './index.scss'
import Cabecalho from '../../components/cabecalho'
import { useState } from 'react';
import axios from 'axios';

export default function Api() {
    const [cep, setcep] = useState('');
    const [resposta, setresposta] = useState('');

    async function BuscarCEP() {
        let url = `https://viacep.com.br/ws/${cep}/json/`
        
        let resp = await axios.get(url);
        let dados = resp.data
        
        let msg = dados.logradouro + ', ' + dados.bairro + ', ' + dados.localidade + '/' + dados.uf
        setresposta(msg)
     }

    return(
        <div className='pagina-api pagina'>

            <Cabecalho titulo='Chamada em API'/>
            <section className='secao'>
                <h1>API CORREIOS</h1>

                <div>
                    <input type="text" placeholder='Informe o CEP' value={cep} onChange={e => setcep(e.target.value)}/>
                    <button onClick={BuscarCEP}>Buscar</button>
                </div>

                <h1>
                    {resposta}
                </h1>
            </section>
        </div>
    );

}