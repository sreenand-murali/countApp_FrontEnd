import React from 'react'
import {Route,Routes} from 'react-router-dom'
import App from './App'
import DayCount from './DayCount'

const RouteDirector = () => {
  return (
    <Routes>
        <Route path="/Days" element={<App/>} />
        <Route path="/Days/:id" element={<DayCount/>} />
    </Routes>
  )
}

export default RouteDirector