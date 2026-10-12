import './index.scss';

export default function ItensMeta(props) {

    return(

        <li key={props.pos}>
            <i className='fa fa-trash-can' onClick={() => props.removerMeta(props.pos)}></i> &nbsp;
                {props.item} &nbsp;
            <i class="fa-regular fa-pen-to-square" onClick={() => props.editarMeta(props.pos)} ></i>
        </li>

    );

}