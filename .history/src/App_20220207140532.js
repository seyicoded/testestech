import logo from './logo.svg';
import './App.css';
import './w3.css';
import {useEffect, useState} from 'react';

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);

  useEffect(()=>{
    (async()=>{
      const data = await fetch('https://adaorachi.github.io/esetech-assessment-api/game-data.json');
      console.log(data)
    })()
  },[]);

  return (
    <div className="App">
      <div className="Container">

        <div className='left'>
          <div className='card w3-card-2'>
            <h2>Filter Results</h2>

            <div className='content'>
              <label className='w3-label'>Name (Contains)</label>
              <br />
              <input className='w3-input' placeholder='By Name'/>
            </div>

            <br />

            <div className='content'>
              <label className='w3-label'>Order By</label>
              <br />
              <div className='orderby'>
                <i class="fa fa-futboll"></i>
                <input className='w3-input' placeholder='By Name'/>
              </div>

              <br />

              <div className='btn-container'>
                <button className='w3-btn w3-round'>Clear</button>
              </div>
              
            </div>
          </div>
        </div>

        <div className='right'>
            <div className='card'>
              <div className='c-left'>
                <img src=""/>
              </div>
              <div className='c-right'>
                <h1>a</h1>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
