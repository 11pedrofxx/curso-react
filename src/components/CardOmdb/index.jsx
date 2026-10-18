import './index.scss';

export default function CardOMDB(props) {

    return(

        <div className='comp-card-omdb'>
            <img src={props.item.Poster} />

            <div>
                <div>
                    <h1>{props.item.Tittle}</h1>
                    <h2>Lançamento em {props.item.Year}</h2>
                </div>
                <h3>codigo imdb {props.item.imdbID}</h3>
            </div>
        </div>

    )

}