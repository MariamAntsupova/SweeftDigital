import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import Questions from './Questions';
import { Link, useParams } from 'react-router-dom';
import './Quizz.scss'
import { Filter } from '../../routes/routes';
import Loader from '../../loader/Loader'
function Quizz() {

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [Loading, setLoading] = useState([]);
  const { category, difficulty } = useParams();

  useEffect(() =>{
    setLoading(true)
    Axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then(res => res.data)
      .then(data => {
        const questions = data.results.map((question) => ({
          ...question,
          answers:[question.correct_answer, ...question.incorrect_answers]
        }))
        setQuestions(questions)
      }).finally(()=>{
        setLoading(false)
    });
  },[])


  const handleAnswer = (answer) => {
      if(answer === questions[currentQuestion].correct_answer){
        setScore(score+1);
    }
    

    setShowScore(true);
    
  }

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion+1);
  }

   const questionsLength = questions.length ;


  return ( 
    <Loader isLoading={Loading}>
        <div className="container">
        {currentQuestion >= questions.length ? (
            <div className='main'>
              <div className='container'>
              <div className='score-section'>
                  You scored {score} out of {questions.length}
                  <Link to={Filter} style={{textDecoration: 'none'}}>
                      <button className="start">Tap to restart</button>
                  </Link>
              </div>
              </div>
            </div>
        ): (<Questions   handleAnswer={handleAnswer}
            showScore={showScore}
            questionsLength = {questionsLength}
            currentQuestion = {currentQuestion}
            handleNextQuestion={handleNextQuestion}
            data={questions[currentQuestion]}/>)}
        
        </div>
    </Loader>

    
  );
}

export default Quizz;