import { useState } from 'react'
import MainPage from './components/mainPage/MainPage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RegisterChild from './components/mainPage/surveyor/RegisterChild'
import RegisterMother from './components/mainPage/surveyor/RegisterMom'
import Register from './components/mainPage/surveyor/Register'
import MotherList from './components/mainPage/surveyor/MotherList'
import ChildList from './components/mainPage/surveyor/ChildList'
import Postnatal from './components/mainPage/surveyor/Postnatal'
import Antenatal from './components/mainPage/surveyor/Antenatal'
import InfantForm from './components/mainPage/surveyor/InfantForm'
import AllowLocation from './components/mainPage/surveyor/AllowLocation'
 import DashBoardRouting from './components/UserDashboard/DashBoardRouting'
 import AnalizeWithAI from './components/UserDashboard/AnalizeWithAI'
 import SurveyorAccounts from './components/UserDashboard/SurveyorAccounts'
 import Oveview from './components/UserDashboard/Oveview'
 import {QueryClientProvider, QueryClient} from 'react-query'

 const queryClient=new QueryClient()

import UserDashboard from './components/UserDashboard/UserDashboard'
import Signin from './components/AuthPages/Signin';
import Signup from './components/AuthPages/Signup';
import LandingPage from './components/LandingPage/LandingPage'
import { Button } from '@tremor/react'


function App() {
  const navigate = useNavigate();
  return (
    <>
        <QueryClientProvider client={queryClient}>

      <Routes>
        <Route path='/done' element={<div style={{textAlign:'center', fontSize:'23px'}}>form submitted<br></br><Button onClick={()=>navigate(-1)}>go back</Button></div>}/>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/location' element={<AllowLocation />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/surveyor/*' element={<Register/>}/>

        
        <Route path='/user/*' element={<UserDashboard/>}/>

         

      </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
