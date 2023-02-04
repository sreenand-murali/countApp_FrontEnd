import React from 'react';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Day from './Day';

const BACKEND_URL = 'http://localhost:3001'

function App() {
  const [days,setDays] = useState([]);
  const [dayname,setDayname] = useState("");
  const [click,setClick] = useState(false);

  useEffect(()=>{
    axios.get(BACKEND_URL+'/day')
    .then((res)=>{
      setDays(res.data)
    })
    .catch((err)=>console.error("Error Occured Fetching days.\nError : "+err));
  },[])

  const postDay = ()=>{
    if(dayname!==''){
    axios.post(BACKEND_URL+"/addday",{name:dayname})
    .then((res)=>{
      setDays([...days,res.data]);
    })
    .catch((err)=>console.error("Error Occured Posting days.\nError : "+err));
  }
  }

  const deleteDay = (_id)=>{
    console.log(_id);
    axios.post(BACKEND_URL+"/deleteday",{_id})
    .then((res)=>{
        setDays(days.filter((d)=>d._id!==_id));
    })
    .catch((err)=>console.error("Error Occured Deleting day.\nError : "+err));
}

  return (
    <div className="App">
      <div className='inputContainer'>
          <input className='input' value={dayname} onChange={(e)=>setDayname(e.target.value)}/>
          <button className='inputSubmit' onClick={postDay}>SUBMIT</button>
      </div>
      <div className='daysContainer'>
          {days.map((d)=><Day key={d._id} deleteDay={deleteDay} _id={d._id} name={d.name} date={d.date}/>
          )}
      </div>
    </div>
  );
}

export default App;
