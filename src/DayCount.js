import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Room from './Room'
import './DayCount.css'

const BACKEND_URL = 'https://countapp-backend.onrender.com'

const DayCount = () => {
    const [room,setRoom] = useState([])
    const [totalCount,setTotalCount] = useState(0)
    const {id} = useParams();
    useEffect(()=>{
      axios.post(BACKEND_URL+'/findday',{_id:id})
      .then((res)=>{
        setRoom(res.data.roomCount)
      })
      .catch((err)=>console.error("Error Occured Fetching day.\nError : "+err));
    },[]);

    useEffect(()=>{
      let tempTotalCount = 0;
      room.map((d)=>{
        if(d.count>=0){
          tempTotalCount+=d.count
        }
        return d;
      })
      setTotalCount(tempTotalCount)
      if(room!==[] && room!==null && room!==undefined && room.length!==0){
        axios.post(BACKEND_URL+"/updateroom",{'_id':id,'roomCount':room,'totalCount':totalCount})
      }
    },[room])

    const setCount = (r,c)=>{
      setRoom(room.map((d)=>{
        if(d.room===r) {
          return ({"room":d.room,"count":c})
        } 
        else{
          return d;
        }
      }))
    }

    

  return (
    <div className='main'>
      <h1 className='totalCount'>Total Count : {totalCount}</h1>
      <div className='roomContainer'>
      {room.map((d)=><Room key={d.room} setCount={setCount} room={d.room} count={d.count}/>)}
      </div>
    </div>
  )
}

export default DayCount
