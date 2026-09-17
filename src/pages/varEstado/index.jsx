import './index.scss';
import { use, useState } from 'react';

export default function VarEstado() {

    const [contador, setContador] = useState(0); // cria a variavel de estado com const e entre [] coloca o nome da variavel de estado e o set+Nome da variavel para fazer com que seja permitido alterar ela. o useState(0) define o valor inicial do estado (neste caso, começa com o número 0).
    
    const [tituloS1, settituloS1] = useState('titulo personalizavel')

    const [tituloS3, settituloS3] = useState('Escolha um item');

    const [MarcouOpcaoS4, setMarcouOpcaoS4] = useState(false);

    const [tituloS5, setituloS5] = useState('Titulo');
    
    const [descS5, setdescS5] = useState('Titulo');


    

    function aumentar() {

        setContador(contador + 1)

    }

    function diminuir() {   
        if (contador > 0) {
        setContador(contador - 1)
        }
    }

   

    function AlterarTituloS2(e){

        let novovalor = e.target.value;
        settituloS1(novovalor);

    }

    
     function AlterarTituloS3(e){

        let novovalor = e.target.value;
        settituloS3(novovalor); 

    }

    function Alterou(e) {

        let novovalor = e.target.checked;
        setMarcouOpcaoS4(novovalor);

    }

    

    

    

    return (

        <div className='pagina-var-estado pagina'>

        <header className='cabecalho'><h1>Var Estado</h1></header>

        <section className='secao'>
            
            <p>contador</p>
            <div className='Container' >
                <button onClick={ aumentar } > + </button>
                
                  {contador}

                <button onClick={ diminuir } > - </button>

                <input className='area' value={contador} type="text"  onChange={e => setContador(e.target.value)}/>

            </div>
            
            <div className='a' ><button onClick={ () => setContador} >Reset</button></div>

        </section>

        <section className='secao'>

            <h1> { tituloS1 } </h1>

            <input type="text" value={tituloS1} onChange={AlterarTituloS2}/>

        </section>

        
        <section className='secao'>

            <h1> { tituloS3 } </h1>

            <select onChange={AlterarTituloS3}>

                <option>Selecione</option>
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>

            </select>

        </section>

        <section className='secao'>

            <h1> Vc concorda? { MarcouOpcaoS4 ? 'Sim' : 'Não'} </h1>

            <input type="checkbox" checked={ MarcouOpcaoS4 } onChange={Alterou}/>Sim

        </section>

        

        <section className='secao'>

            <h1> {tituloS5} </h1>
            <input type="text" value={descS5} onChange={e => setdescS5(e.target.value)}/>
            
            <button onClick={() => setituloS5(descS5)} >Enviar</button>

        </section>
        
        <br />

        </div>
    )

}