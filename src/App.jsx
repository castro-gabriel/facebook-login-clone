import React from 'react'
import './App.css'

import FormLogin from './components/FormLogin'
import LogoInfo from './components/LogoInfo'
import ModalRegister from './components/ModalRegister'

const App = () => {
  return (
    <div className='body-page'>
        <LogoInfo />
        <FormLogin />
        <ModalRegister />
    </div>
  )
}


export default App