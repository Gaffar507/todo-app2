import React, { useState } from 'react';
import Questions from './Questions';

import './app.css';
import data from './Data';

const App = () => {
    const [questions, setQuestions] = useState(data);

    return (
        <div className="questions">
            <h1 className="title">Question & Answer</h1>
            <section>
                {questions.map((question) => (
                <Questions key={question.id} {...question} />
            ))}
            </section>

        </div>
    );
};

export default App;
