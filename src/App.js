import logo from './logo.svg';
import composeWithGlobalState from './globalState.js/composeWithGlobalState';
import './App.css';
import ScoreInput from './Components/ScoreInput'
import ScoreValue from './Components/ScoreValue'

function App() {
  return (
    <div className="App">
      <div style={{display :"flex"}}>
        <ScoreInput />
        <ScoreValue />
      </div>
    </div>
  );
}

export default composeWithGlobalState(App);
