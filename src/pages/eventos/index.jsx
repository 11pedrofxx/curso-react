import './index.scss';

export default function Eventos() {

    function clicou() {

        alert('Você clicou no botão!');

    }

    function movimentou() {
 
        alert('Você movimentou o mouse!'); 
         }

 
         function alterou(e) {

            let novovalor = e.target.value;

            if (novovalor === '') {
                alert('Você apagou o valor do input!');
            }

        alert('Você alterou o valor do input para: ' + novovalor);
    
    }

    function alterouCheck (e) {

        let novovalor = e.target.checked;
        alert('Você alterou o valor do checkbox para: ' + novovalor);   

    }

    // area para colocar todos os codigos da pagina //



    return (

        <div className='pagina-eventos pagina'>

        <header className='cabecalho'>

            <h1>React JS || Eventos</h1>

        </header>
        
        <section className='secao'>

        <h1>Entendendo sobre eventos</h1>
            <p onClick={clicou} onMouseMove={movimentou}>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <input onChange={alterou} type="text" placeholder="Digite seu nome" />

            <select onChange={alterou}>
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
            </select>

            <div className='grupo'>
                <input onChange={alterouCheck} type="checkbox"/>opção 1
                <input onChange={alterouCheck} type="checkbox"/>opção 2
            </div>

            <div className='grupo'>
                <input type="radio" name="opcao"/> opção 1
                <input type="radio" name="opcao"/> opção 2
            </div>

            <textarea onChange={alterou} placeholder='Digite seu texto'></textarea>e

            <button onClick={clicou} className='botao-enviar'>Enviar</button>

        </section>

        </div>

    )

}