import logo from './logo.svg';
import './App.css';
import './w3.css';

function App() {
  return (
    <div className="App">
      <div className="Container">

        <div className='left'>
          <div className='card'>
            <h2>Filter Results</h2>

            <div className='content'>
              <label>Name (Contains)</label>
              <br />
              <input className='w3-input' placeholder='By Name'/>
            </div>
          </div>
        </div>

        <div className='right'>
          b
        </div>

      </div>
    </div>
  );
}

export default App;
