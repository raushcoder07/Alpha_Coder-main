// QuestionAnswerPage.js
"use client";

import React, { useState } from 'react';

function QuestionAnswerPage() {
    const [questions, setQuestions] = useState([]);
    const [questionText, setQuestionText] = useState('');
    const [questionImage, setQuestionImage] = useState('');

    const addQuestion = () => {
        if (!questionText && !questionImage) return;

        // Create a new question object
        const newQuestion = {
            text: questionText,
            image: questionImage ? URL.createObjectURL(questionImage) : null // Convert the image to URL if available
        };

        // Update the questions array state
        setQuestions([...questions, newQuestion]);

        // Clear the input fields
        setQuestionText('');
        setQuestionImage('');
    };

    return (
        <div className="QuestionAnswerPage">
            <style>
                {`
          .QuestionAnswerPage {
            text-align: center;
            margin-top: 20px;
          }

          .QuestionForm {
            margin-bottom: 20px;
          }

          .Question {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
          }

          img {
            max-width: 100%;
            max-height: 200px;
          }

          .askButton {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .askButton:hover {
            background-color: #0056b3;
          }
        `}
            </style>
            <h1>Question and Answer Page</h1>
            <div className="QuestionForm">
                <input
                    type="text"
                    placeholder="Enter your text question"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setQuestionImage(e.target.files[0])}
                />
                <button className="askButton" onClick={addQuestion}>Ask</button>
            </div>
            <div className="Questions">
                {questions.map((question, index) => (
                    <div key={index} className="Question">
                        {question.text && <h3>{question.text}</h3>}
                        {question.image && (
                            <img src={question.image} alt="Question" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionAnswerPage;