import React, {Component, useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import useInterval from '@use-it/interval';
import '../App.css'

const Question = () => {
    const questions = [ 
        { 
          question: 
            "E. Snowden était ...", 
          answers: [
            { answerText: 'Un espion', isCorrect: true },
            { answerText: 'Un journaliste', isCorrect: false },
            { answerText: 'Un informaticien', isCorrect: false },
            { answerText: 'Un homme politique', isCorrect: false },
          ],
          
          questionId: "099099"
        }, 
        { 
          question: 
            "Lorsqu'il travaille pour la NSA en 2012, il est muté ...", 
          answers: [
            { answerText: 'A Hawai', isCorrect: true },
            { answerText: 'En Russie', isCorrect: false },
            { answerText: 'Au Mexique', isCorrect: false },
            { answerText: 'En Nouvelle-Zélande', isCorrect: false },
          ],
          questionId: "093909"
        }, 
        { 
          question: 
            "Où se sont rejoints E. Snowden, la journaliste et la réalisatrice ?", 
          answers: [
            { answerText: 'A Shanghai', isCorrect: false },
            { answerText: 'A Tokyo', isCorrect: false },
            { answerText: 'A Hong Kong', isCorrect: true },
            { answerText: 'A Pekin', isCorrect: false },
          ],
          questionId: "009039"
        }, 
        
      ]; 
    const initialState=10;
    const [seconds, setSeconds] = React.useState(initialState);

    useInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    const [currentQuestion, setCurrentQuestion] = useState(0);
	  const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
   
    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

    const nextQuestion = currentQuestion + 1;
    
		if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      
		} else {
			setShowScore(true);
    }
    setSeconds(initialState)
    
  };
  const nextQuestion = currentQuestion + 1;
  let isLast=false

  if(seconds==0){

    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion);
      setSeconds(initialState)
    }
    if(nextQuestion>=questions.length){
      isLast=true
    }
  }

    return (
    
    <div>
    {showScore || isLast ? (
      	<section id="content">

				<article id='results'>
          <h1>Fin de la partie</h1>
					<h2>Votre score est de {score} bonnes réponses sur {questions.length}</h2>
				</article>
        </section>
			) : (
    <section id="content">
    
    <article id="quizz">
                <div class="pre-quizz">
                <h1>{questions[currentQuestion].question}</h1>

                </div>
                <p id = "timerText">Temps restant : {seconds}<span id = "num"></span></p>

                <div class="quests">
                {questions[currentQuestion].answers.map((answer, index) => {
 
						return(	<button onClick={() => handleAnswerOptionClick(answer.isCorrect)}>{answer.answerText}</button>)
              
                })}
                    
    
                </div>
                <p>Question {currentQuestion}/{questions.length}</p>
    </article>
    <footer>

        <h3>Univers GALÉ ©</h3>

    </footer>

</section> )}

</div>
  

);
                
}

export default Question;