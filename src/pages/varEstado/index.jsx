import './index.scss';
import {useState } from 'react';
import { tratarnumero } from '../../utils/tratarnumero.js';
import calcularValorIngresso from '../../service/ingresso.js';

export default function VarEstado() {

    const [contador, setContador] = useState(0); // cria a variavel de estado com const e entre [] coloca o nome da variavel de estado e o set+Nome da variavel para fazer com que seja permitido alterar ela. o useState(0) define o valor inicial do estado (neste caso, começa com o número 0).
    
    const [tituloS1, settituloS1] = useState('titulo personalizavel')

    const [tituloS3, settituloS3] = useState('Escolha um item');

    const [MarcouOpcaoS4, setMarcouOpcaoS4] = useState(false);

    const [tituloS5, setituloS5] = useState('Titulo');
    
    const [descS5, setdescS5] = useState('Titulo');

    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [resp, setresp] = useState(0);
    
    const [ValorIng, setValorIng] = useState(0);
    const [meioIng, setmeioIng] = useState(false);
    const [cupom, setcupom] = useState('');
    const [totaling, settotaling] = useState(0);

    const[novameta, setnovameta] = useState('');
    const [listaMetas, setlistaMetas] = useState([]);
    const [editando, seteditando] = useState(-1)


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

    function soma() {

        let soma = tratarnumero(num1) + tratarnumero(num2);
        setresp(soma)

    }

    function subtrair() {

        let subtracao = tratarnumero(num1) - tratarnumero(num2);
        setresp(subtracao)

    }

    function multiplicar() {

        let multi = tratarnumero(num1) * tratarnumero(num2);
        setresp(multi)

    }

    function divisao() {

        let divisao = tratarnumero(num1) / tratarnumero(num2);
        setresp(divisao)

    }

    function calcIngresso() {
        
        let total = calcularValorIngresso(meioIng, ValorIng, cupom);
        settotaling(total);
    }

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
        alert(`Item removido na posição ${pos}`)

    }

    function editarMeta(pos) {

        setnovameta(listaMetas[pos])
        seteditando(pos)

    }
    

    return (

        <div className='pagina-var-estado pagina'>

        <header className='cabecalho'><h1>Var Estado</h1></header>

        <section className='secao metas'>

        <div>
            <h1>METAS PARA 2030</h1>
            <input type="text" value={novameta} onKeyUp={teclaApertada} onChange={e => setnovameta(e.target.value)}/>
            <button onClick={addMeta}>Postar meta</button>
        </div>


        <div className='minhasmetas'>    
        
            <ul>

             {listaMetas.map((item, pos) => 

                <li key={pos}>
                <i className='fa fa-trash-can' onClick={() => removerMeta(pos)}></i> &nbsp;
                {item} &nbsp;
                <i class="fa-regular fa-pen-to-square" onClick={() => editarMeta(pos)} ></i>
                </li>

             )}

            </ul>

        </div>

        </section>

        <section className='secao ingresso'>

            <h1>Venda Igressos</h1>
            <label>Quantidade Ingressos</label>
            <div className='comprarIngresso'>
                <button onClick={ e => setValorIng(ValorIng + 1) } > + </button>
                <input type="text" value={ValorIng}/>
                <button onClick={ e => setValorIng(ValorIng - 1) } > - </button>
            </div>

            <div className='meiaentrada' >
                <label>Meia Entrada</label>
                <input checked={meioIng} onChange={e => setmeioIng(e.target.checked)} type="checkbox"/>
            </div>

            <div className='cupom' >
                <label >Cupom de desconto</label>
                <input value={cupom} onChange={e => setcupom(e.target.value)}  type="text"/>
            </div>

            <button onClick={calcIngresso} >calcular</button>
            <h2 value={totaling}>Total a pagar: {totaling} </h2>

        </section>

            <section className='secao calculadora-container'>
                <h1 className='calc-titulo'>CALCULADORA</h1>

                <div className='calc-entradas'>
                    <input className='calc-input' type="text" value={num1} onChange={e => setnum1(e.target.value)} />
                    <input className='calc-input' type="text" value={num2} onChange={e => setnum2(e.target.value)} />
                    <div className='calc-resultado'> = </div> 
                    <div> {resp} </div>
                </div>

                <div>
                    <button className='calc-botao' onClick={soma}> + </button>
                    <button className='calc-botao' onClick={subtrair}> - </button>
                </div>
                    <div>
                        <button className='calc-botao' onClick={multiplicar}> x </button>
                        <button className='calc-botao' onClick={divisao}> ÷ </button>
                    </div> 

            </section>

        <section className='secao'>
            
            <p>contador</p>
            <div className='Container' >
                <button onClick={ aumentar } > + </button>
                
                  {contador}

                <button onClick={ diminuir } > - </button>

                <input className='area' value={contador} type="text"  onChange={e => setContador(e.target.value)}/>

            </div>
            
            <div className='a' ><button onClick={ () => setContador(0)} >Reset</button></div>

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