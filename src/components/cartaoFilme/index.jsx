import './index.scss'

export default function CartaoFilme(props){

    function identificarclassificacao() {
        if (props.item.classificacao == 'l') {
            return 'c-l'
        }
        if (props.item.classificacao == '10') {
            return 'c-10'
        }
        if (props.item.classificacao == '12') {
            return 'c-12'
        }
        if (props.item.classificacao == '16') {
            return 'c-16'
        }
        if (props.item.classificacao == '18') {
            return 'c-18'
        }
    }

    return(
    <div className='comp-cardFilme'>
        <img src={props.item.url} alt={props.item.nome} />
        <p>{props.item.nome}</p>
        <div className={'classificacao ' + identificarclassificacao()}>{props.item.classificacao}</div>
    </div>

    );

}