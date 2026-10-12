import './index.scss';
import { useState } from 'react';

export default function Contador (props) {
    const [contador, setContador] = useState(0);

    
    function aumentar() {

        setContador(contador + 1)

    }

    function diminuir() {
        if (contador > 0) {
        setContador(contador - 1)
        }
    }
    

    return(

        <div className='comp-contador'>

        <section className='secao' >
            <p>{props.titulo ?? "contador"}</p>
                    <div className='Container' >
                        <button onClick={ aumentar } > + </button>
            
                        {contador}
                        <button onClick={ diminuir } > - </button>
                        <input className='area' value={contador} type="text"  onChange={e => setContador(e.target.value)}/>
                    </div>
            
                    <div className='a' ><button onClick={ () => setContador(0)} >Reset</button></div>
        </section>

        </div>

    );

}