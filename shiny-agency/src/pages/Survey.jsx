import { useParams, Link } from "react-router-dom";

function Survey() {
    const { idString } = useParams();
    console.log(idString);
    const id = Number(idString);
    const previous = "/survey/" + (id - 1);
    const next = "/survey/" + (id + 1);

    return (
        <div>
            <h1>Questionnaire!</h1>
            <h2>Question #{id}</h2>
            {id > 1 && <Link to={previous}>Précédent</Link>}
            {id < 10 && <Link to={next}>Suivant</Link>}
            {id === 10 && <Link to="/results">Résultats</Link>}
        </div>
    )
}

export default Survey;
