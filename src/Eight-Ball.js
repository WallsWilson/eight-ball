import { useState } from 'react';
import answers from './answers';

const EightBall = (answers) => {
    const randomIndex = Math.floor(Math.random() * answers.lengh);
    
    // const reset = () => {
    //     setTarget(randomIndex());
    //     setAnswer("Think of a Question");
    // }

    const askQuestion = () => {
        setAnswer(randomIndex());
    };
    

    const [answer, setAnswer] = useState('Think of a Question');
   
    return (
        <>
        <div className='EightBall'>
        <button onClick={() => setAnswer(randomIndex())}>{answer}</button>
        </div>
        </>
    )
};

export default EightBall;