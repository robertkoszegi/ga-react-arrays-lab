// When using JSX, React must be in scope
import React from 'react';

function Scores(props) {
    return(
        <div className='Scores'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Score</th>
                    </tr>
                </thead>
                {props.scores.map(sc => 
                    <tbody>
                        <tr>
                            <td>{sc.date}</td>
                            <td>{sc.score}</td>
                        </tr>
                    </tbody>                
                )}
                
            </table>
        </div>
    )
}

export default Scores;