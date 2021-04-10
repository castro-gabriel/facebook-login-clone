import React, { useState } from 'react';
import ModalRegister from '../ModalRegister';

import './form-login.css';

const FormLogin = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className='container-login'>
            <div className='form-login'>
                <form action="">
                    <input className='form-login__email' type="email" placeholder='Email ou telefone' name="" id=""/>
                    <input className='form-login__password' type="password" placeholder='Senha' name="" id=""/>

                    <button className='form-login__btn-login' type="submit">Entrar</button>
                </form>
                <p className='form-login__forgot-password'>Esqueceu Senha?</p>
                <div className='form-login__line'></div>
                <button className='btn-create-new-account' type="submit" onClick={() => setIsModalVisible(true)}>Criar nova conta</button>
                {isModalVisible ? <ModalRegister onClose={() => setIsModalVisible(false)}/> : null}
            </div>
            <p>
                <strong>Criar uma Página</strong> para uma celebridade, banda ou empresa.
            </p>
        </div>
    )
}

export default FormLogin