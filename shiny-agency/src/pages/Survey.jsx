import { useParams, useNavigate } from "react-router-dom";
import { Wrapper, QuestionID, Answers, Answer, NavLinksWrapper, NavLink } from './Survey.styles';

function Survey() {
    const { idString } = useParams();
    const id = Number(idString);
    const previous = "/survey/" + (id - 1);
    const next = "/survey/" + (id + 1);

    const navigate = useNavigate()

    const handleClick = () => {
        if (id === 10) {
            navigate('/results');
            return;
        }
        navigate(next);
    }

    return (
        <Wrapper>
            <QuestionID>Question {id}</QuestionID>
            <p>Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?</p>
            <Answers>
                <Answer onClick={handleClick}>Oui</Answer>
                <Answer onClick={handleClick}>Non</Answer>
            </Answers>
            <NavLinksWrapper>
                {id > 1 && <NavLink to={previous}>Précédent</NavLink>}
                {id < 10 && <NavLink to={next}>Suivant</NavLink>}
                {id === 10 && <NavLink to="/results">Résultats</NavLink>}
            </NavLinksWrapper>
        </Wrapper>
    )
}

export default Survey;
