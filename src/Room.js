import React from 'react'
import { useState } from 'react'

import './Room.css'
import Modal from './Modal'
const Room = (props) => {
  const [open,setOpen] = useState(false);
  return (
    <div className='main2'>
      <button className={'rooms '+(props.count===-1?'red':'green')} onClick={()=>setOpen(true) }  >{props.room}</button>
      {open?<Modal parentProp={props} setOpen={setOpen}/>:null}
    </div>
  )
}


export default Room