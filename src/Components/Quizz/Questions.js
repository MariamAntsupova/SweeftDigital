import React from 'react'
import './Quizz.scss'
function Questions({handleAnswer,currentQuestion,handleNextQuestion,questionsLength, data:{question, answers}}) {
    return (
        <>
            <div className='main'>
            <div className='container'>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion+1}</span>/{questionsLength}
                    </div>
                    <div className='question-text' dangerouslySetInnerHTML={{__html:question}} />
                </div>
                <div className='answer-section'>
                {answers.map((answer,idx) => {
                    return(
                        <button
                            onClick = {() => {handleAnswer(answer)}}
                            dangerouslySetInnerHTML={{__html:answer}}>
                        </button>
                    )
                })}
                </div>
                <button onClick = {handleNextQuestion} className='start'>Next Question</button>
            </div>
        </div>
        </>
    )
}

export default Questions