import './index.scss';
import Contador from '../../components/contador';
import Cabecalho from '../../components/cabecalho';

export default function Comp () {

    return(

        <div className='pagina-comp pagina'>
            <Cabecalho/>

            <Contador titulo="passos"/>
            
            <Contador/> 

        </div>

    );

}