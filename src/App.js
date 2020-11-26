import logo from './logo.svg';
import './App.css';
import Question from './components/Question'
import Form from './components/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
          <Question/>
          
       
    </div>
  );
}

export default App;
