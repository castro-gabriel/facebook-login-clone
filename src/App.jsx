import React from 'react'
import './App.css'

import FormLogin from './components/FormLogin'
import LogoInfo from './components/LogoInfo'
import ContainerPage from './components/ContainerPage'

const App = () => {
  return (
    <ContainerPage>
        <LogoInfo />
        <FormLogin />
    </ContainerPage>
  )
}


export default App