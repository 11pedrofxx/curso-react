import './index.scss';
import { useState } from 'react';

export default function VarEstado() {

    const [contador, setContador] = useState(0); // cria a variavel de estado com const e entre [] coloca o nome da variavel de estado e o set+Nome da varial para fazer com que seja permitido alterar ela. o useState(0) define o valor inicial do estado (neste caso, começa com o número 0).

    function aumentar() {

        setContador(contador + 1)

    }

    function diminuir() {
        if (contador > 0) {
        setContador(contador - 1)
        }
    }

    function reset() {

        setContador(0)

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

            </div>
            
            <div className='a' ><button onClick={ reset } >Reset</button></div>

        </section>

        </div>
    )

}