import React from 'react'
import './form-login.css'

const FormLogin = () => {
    return (
        <div className='form-login'>
            <form action="">
                <input className='form-login__email' type="email" placeholder='Email ou telefone' name="" id=""/>
                <input className='form-login__password' type="password" placeholder='Senha' name="" id=""/>

                <button className='form-login__btn-login' type="submit">Entrar</button>
            </form>
            <p className='form-login__forgot-password'>Esqueceu Senha?</p>
            <div className='form-login__line'></div>
            <button className='btn-create-new-account' type="submit">Criar nova conta</button>
        </div>
    )
}

export default FormLogin