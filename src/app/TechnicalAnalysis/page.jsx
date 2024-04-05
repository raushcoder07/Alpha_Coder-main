"use client"

import { Button } from '@chakra-ui/react';
import { useState } from 'react';

const QuizComponent = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const questions = [
        {
            imageUrl: '/t1.png',
            correctAnswer: 'Down',
            explanation: ['Explanation for Question 1...', '/e1.1.png', '/e1.2.png','/e1.3.png','/e1.4.png']
        },
        {
            imageUrl: '/t2.png',
            correctAnswer: 'Up',
            explanation: ['Explanation for Question 2...', '/explanation2_1.png', '/explanation2_2.png']
        },
        // Add more questions as needed
    ];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        if (answer === questions[questionIndex].correctAnswer) {
            setIsAnswerCorrect(true);
        } else {
            setIsAnswerCorrect(false);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setShowExplanation(false);
        setIsAnswerCorrect(null);
        setQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const currentQuestion = questions[questionIndex];

    return (
        <div>
            <div>
                <img src={currentQuestion.imageUrl} alt="Question" />
            </div>
            <div>
                {!showExplanation && (
                    <div className='flex gap-2'>
                        <Button onClick={() => handleAnswerSelection('Up')}>Up</Button>
                        <Button onClick={() => handleAnswerSelection('Down')}>Down</Button>
                        {isAnswerCorrect !== null && (
                            <p>{isAnswerCorrect ? 'Correct!' : 'Wrong!'}</p>
                        )}
                    </div>
                )}
                {selectedAnswer !== null && (
                    <div>
                        <Button onClick={() => setShowExplanation(true)}>Explain</Button>
                    </div>
                )}
                {showExplanation && (
                    <div>
                        <p>{currentQuestion.explanation[0]}</p>
                        {currentQuestion.explanation.slice(1).map((imagePath, index) => (
                            <img key={index} src={imagePath} alt={`Explanation ${index + 1}`} />
                        ))}
                        {questionIndex < questions.length - 1 ? (
                            <Button onClick={handleNextQuestion}>Next Question</Button>
                        ) : (
                            <p>End of Quiz</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizComponent;
