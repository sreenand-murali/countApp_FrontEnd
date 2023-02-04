import React from 'react'
import axios from 'axios'
import './Day.css'
import { useNavigate } from 'react-router-dom'

const Day = (props) => {
const navigate = useNavigate();
const navToLocation = () => {
    navigate(props._id)
}
  return (
    <div onClick={navToLocation} className='container'>
            <h2>{props.name}</h2>
            <h4>{props.date.toString().split("T")[0]}</h4>
            <button onClick={(e)=>{
              props.deleteDay(props._id)
              e.stopPropagation();
            }} className='closeButton'>x</button>  
    </div>
  )
}

export default Day