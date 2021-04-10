import React from 'react'

import './container.css';
import LogoInfo from '../LogoInfo'
import FormLogin from '../FormLogin'

const Container = ({ children }) => {
    return (
        <div className="container">
            <div className="container-left">
                <LogoInfo />
            </div>
            <div className="container-right">
                <FormLogin/>
            </div>
        </div>
    )
}

export default Container