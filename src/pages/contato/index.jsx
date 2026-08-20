import './index.scss'
import { Link } from 'react-router-dom'


export default function Contato () {

    return (

        <div className='pagina-contato'>

        <div className='teste'> 

            <h1>Contato</h1>

            <img className='foto' src="/assets/images/contato.png" alt="" />

            <Link to='/' ><i className='fa fa-arrow-left voltar'></i></Link>
        </div>

        </div>

 
    )

}