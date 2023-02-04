import React from 'react'
import {useState} from 'react'
import './Modal.css'

const Modal = (props) => {
  return (
    <div className='greyer'>
      <div className='main3'>
        <h1 className='m1'>Set Count:{(props.parentProp.count===-1?'Not Set':props.parentProp.count)}</h1>
        <button className={'b2 '+(props.parentProp.count===1?'green1':'red1')} onClick={()=>props.parentProp.setCount(props.parentProp.room,1)}>1</button>
        <button className={'b3 '+(props.parentProp.count===2?'green1':'red1')} onClick={()=>props.parentProp.setCount(props.parentProp.room,2)}>2</button>
        <button className={'b4 '+(props.parentProp.count===3?'green1':'red1')} onClick={()=>props.parentProp.setCount(props.parentProp.room,3)}>3</button>
        <button className={'b5 '+(props.parentProp.count===4?'green1':'red1')} onClick={()=>props.parentProp.setCount(props.parentProp.room,4)}>4</button>
        <button className={'b6 '+(props.parentProp.count===5?'green1':'red1')} onClick={()=>props.parentProp.setCount(props.parentProp.room,5)}>5</button>
        <button className={'b7 '+(props.parentProp.count===6?'green1':'red1')} onClick={()=>props.parentProp.setCount(props.parentProp.room,6)}>6</button>
        <button className={'b1 '+(props.parentProp.count===-1?'green1':'red1')} onClick={()=>props.parentProp.setCount(props.parentProp.room,-1)}>NO Count</button>
        <button className='clsBttn' onClick={()=>props.setOpen(false)}>X</button>
      </div>
    </div>
  )
}

export default Modal