// When using JSX, React must be in scope
import React from 'react';
import Scores from '../Scores/Scores'

function Student(props) {
    return(
        <div className='Student'>
            <h3>Name: {props.name}</h3>
            <p>Bio: {props.bio}</p>
            <h4>Results:</h4>
            <Scores scores={props.scores} />
        </div>
    )
}

export default Student;