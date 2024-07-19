import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Oveview from './Oveview'
import SurveyorAccounts from './SurveyorAccounts'
import AnalizeWithAI from './AnalizeWithAI'

const DashBoardRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Oveview/>}/>
            <Route path='/surveyors' element={<SurveyorAccounts/>}/>
            <Route path='/analyze' element={<AnalizeWithAI/>}/>
        </Routes>
    </div>
  )
}

export default DashBoardRouting