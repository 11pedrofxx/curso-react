import './index.scss'
import Cabecalho from '../../components/cabecalho'
import { useState } from 'react';
import axios from 'axios';

export default function Api() {
    const [cep, setcep] = useState('');
    const [resposta, setresposta] = useState('');
    const [buscaFilme, setbuscaFilme] = useState('')
    const [listaFilmes, setListaFilmes] = useState([]);

    async function BuscarCEP() {
        let url = `https://viacep.com.br/ws/${cep}/json/`

        let resp = await axios.get(url);
        let dados = resp.data

        let msg = dados.logradouro + ', ' + dados.bairro + ', ' + dados.localidade + '/' + dados.uf
        setresposta(msg)
    }

    async function buscarFilmes() {
        let url = `http://www.omdbapi.com/?s=${buscaFilme}&apikey=f3de2a27`;
        let resp = await axios.get(url);
        let dados = resp.data;

        if (dados.Response == 'False') {
            alert('Nenhum filme encontrado!')
            return
        }

        let filmes = dados.Search
        setListaFilmes(filmes)
        setbuscaFilme('')
    }

    return (
        <div className='pagina-api pagina'>

            <Cabecalho titulo='Chamada em API' />

            <section className='secao omdb'>
                <h1>Catálogo de Filmes</h1>

                <div className='entradas'>
                    <input type="text" placeholder='Nome do Filme' value={buscaFilme} onChange={e => setbuscaFilme(e.target.value)} />
                    <button onClick={buscarFilmes}>Buscar</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Filme</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaFilmes.map(item => (
                            <tr key={item.imdbID}>
                                <td>{item.imdbID}</td>
                                <td>{item.Title}</td>
                                <td>{item.Year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className='secao'>
                <h1>API CORREIOS</h1>

                <div>
                    <input type="text" placeholder='Informe o CEP' value={cep} onChange={e => setcep(e.target.value)} />
                    <button onClick={BuscarCEP}>Buscar</button>
                </div>

                <h1>
                    {resposta}
                </h1>
            </section>


        </div>
    );

}