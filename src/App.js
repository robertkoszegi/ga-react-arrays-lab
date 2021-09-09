import React, {Component} from 'react';
import Student from './components/Student/Student'
import studentList from './studentDb';
import './App.css';

class App extends Component {
  
  state = {
    studentList: studentList,
  }

  render() {
    return (
      <div className="App">
        {/* <Student /> */}
        {this.state.studentList.map(s => 
          <Student 
            key={s.name}
            name={s.name} 
            bio={s.bio}
            scores={s.scores}
           /> 
        )}
      </div>
    );
  }
}

export default App;
