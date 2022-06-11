import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Wrapper, QuestionID, Answers, Answer, NavLinksWrapper, NavLink } from './Survey.styles';
import { Loader } from '../utils/styles/atoms';

function Survey() {
    // Navigation
    const { idString } = useParams();
    const id = Number(idString);
    const previous = "/survey/" + (id - 1);
    const next = "/survey/" + (id + 1);

    const navigate = useNavigate()
    
    const handleClick = () => {
        if (questions[id + 1] === undefined) {
            navigate('/results');
            return;
        }
        navigate(next);
    }

    // State
    const [questions, setQuestions] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:8000/survey');
                const {surveyData} = await res.json();
                setQuestions(surveyData);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }    
        })();
    }, [])

    return (
        <Wrapper>
            <QuestionID>Question {id}</QuestionID>
            {
                loading
                ? <Loader />
                : <div>  
                  <p>{questions[id]}</p>
                  <Answers>
                      <Answer onClick={handleClick}>Oui</Answer>
                      <Answer onClick={handleClick}>Non</Answer>
                  </Answers>
                  </div>
            }
            <NavLinksWrapper>
                {id > 1 && <NavLink to={previous}>Précédent</NavLink>}
                {questions[id + 1] 
                    ?   <NavLink to={next}>Suivant</NavLink>
                    :   <NavLink to="/results">Résultats</NavLink>}
            </NavLinksWrapper>
        </Wrapper>
    )
}

export default Survey;
