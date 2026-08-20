import './index.scss'
import { Link } from 'react-router-dom'


export default function Contato () {

    return (

        <div className='pagina-contato pagina'>

        <div className='teste'> 

            <header className='cabecalho'>
                <Link to='/' ><i className='fa fa-arrow-left voltar'></i></Link>
                <h1>Contato</h1>
                <img className='foto' src="/assets/images/contato.png" alt="" />
                
            </header>
        </div>

        </div>

 
    )

}