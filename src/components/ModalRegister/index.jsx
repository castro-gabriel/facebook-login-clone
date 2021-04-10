import React from 'react'
import './modal-register.css'

const ModalRegister = ({ onClose = () => { } }) => {
    return (
        <div className='container-modal'>
            <div className='modal'>
                <label className='modal__title' htmlFor="">Cadastre-se</label>
                <p>É rápido e fácil</p>

                <button className='close' onClick={onClose}>X</button>

                <div className='modal__line'></div>

                <form action="">
                    <div className='modal__name'>
                        <input type="text" placeholder='Nome' name="" id="" />
                        <input type="text" placeholder='Sobrenome' name="" id="" />
                    </div>

                    <input type="text" placeholder='Celular ou Email' name="" id="" />
                    <input type="text" placeholder='Nova senha' name="" id="" />

                    {/*<label htmlFor="">Data de nascimento</label>
                    <select name="" id="">
                        <option value="">20</option>
                        <option value="">02</option>
                        <option value="">03</option>
                    </select>

                    <select name="" id="">
                        <option value="">Jan</option>
                        <option value="">Fev</option>
                        <option value="">Mar</option>
                    </select>

                    <select name="" id="">
                      <option value="">2021</option>
                        <option value="">2000</option>
                        <option value="">2003</option>
                    </select>

                    <label htmlFor="">Gênero</label>
                    <div className='modal__geners'>
                        <span className='modal__geners-f'>
                            <label htmlFor="">Feminino</label>
                            <input type="radio" name="" id="" />
                        </span>
                        <span className='modal__geners-m'>
                            <label htmlFor="">Masculino</label>
                            <input type="radio" name="" id="" />
                        </span>
                        <span className='modal__geners-p'>
                            <label htmlFor="">Personalizado</label>
                            <input type="radio" name="" id="" />
                        </span>
                    </div>*/}
                </form>
            </div>
        </div>
    )
}

export default ModalRegister