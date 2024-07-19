import { useState } from 'react'
import MainPage from './components/mainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
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


function App() {
  return (
    <>
        <QueryClientProvider client={queryClient}>

      <Routes>

        <Route path='/' element={<MainPage />} />
        <Route path='/location' element={<AllowLocation />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/surveyor' >
          <Route index element={<Register />} />
          <Route path='register-child' element={<RegisterChild />} />
          <Route path='register-mother' element={<RegisterMother />} />
          <Route path='mother-list/:type' element={<MotherList />} />
          <Route path='child-list' element={<ChildList />} />
        </Route>

        <Route path='postnatal/:id/:name' element={<Postnatal />} />
        <Route path='antenatal/:id/:name' element={<Antenatal />} />
        <Route path='infant-form/:id/:name' element={<InfantForm />} />
        <Route path='/user/*' element={<UserDashboard/>}/>

         

      </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
