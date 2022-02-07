import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [unfilterdata, setunfilterdata] = useState([]);

  const search = (val)=>{
    var new_data = [];
    var count = 0;
    data.forEach(element => {
      if( ((element.name).search(val) != -1) ){
        new_data[count] = element;
        count++;
      }

    });

    setdata(new_data)
  }

  const sort = (val)=>{
    console.log(val)
  }

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
              <input onChange={(val=>{
                search(val)
              })} className='w3-input' placeholder='By Name'/>
            </div>

            <br />

            <div className='content'>
              <label className='w3-label'>Order By</label>
              <br />
              <div className='orderby'>
                <i class="fa fa-futboll"></i>
                <select onChange={(val)=>{sort(val)}}>
                  <option>select a filter</option>
                  <option value={'date'}>release date</option>
                  <option value={'rate'}>rating</option>
                </select>
              </div>

              <br />

              <div className='btn-container'>
                <button className='w3-btn w3-round' onClick={()=>{
                  setdata(unfilterdata)
                }}>Clear</button>
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
                        <br />
                        <div>
                          {item.summary}
                        </div>
                      </div>
                      <div className='sub'>
                        <span className='w3-circle'>{item.rating}</span>
                        
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
