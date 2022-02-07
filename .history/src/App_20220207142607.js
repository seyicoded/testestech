import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [unfilterdata, setunfilterdata] = useState([]);

  useEffect(()=>{
    // console.log('reached')
    (async()=>{
      const data = await fetch('https://adaorachi.github.io/esetech-assessment-api/game-data.json');
      const body = await data.json();
      setdata((body))
      setunfilterdata(body)
      setisLoading(false)
      console.log(body)
    })()
  },[]);

  if(isLoading){
    return (
      <div style={{backgroundColor: 'black'}}>

      </div>
    )
  }

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
            {
              data.map((item, index)=>{
                return (
                  <div className='card'>
                    <div className='c-left'>
                      {/* <img src=""/> */}
                    </div>
                    <div className='c-right'>
                      <div className='main'>
                        <h1>{item.name}</h1>
                        <div>
                          Release Date: {new Date(item.first_release_date).toDateString()}
                        </div>
                        <div>
                          {item.summary}
                        </div>
                      </div>
                      <div className='sub'>
                        <span className='w3-circle w3-padding'>{item.rating}</span>
                        
                      </div>
                    </div>
                  </div>
                )
              })
            }
            
        </div>
        

      </div>
    </div>
  );
}

export default App;
