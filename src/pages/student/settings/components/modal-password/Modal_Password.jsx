import React from 'react'
import "./Modal_Password.css"
import { MdOutlineClose } from 'react-icons/md'

function Modal() {
  return (
    <div className='container-modal-password'>
      <div className='password-header'>
        <MdOutlineClose className='password-close' />
      </div>

      <div className='content-modal-password'>
        <span className='title-config'>Configurações de senha</span>
        <div className='content-password-horizontal'>
          <div className='content-password-txt'>
            <span>Senha atual:</span>
            <span>Nova senha:</span>
            <span>Confirmação de senha:</span>
          </div>
          <div className='content-password-input'>
            <input placeholder='Digite sua senha antiga' />
            <input placeholder='Digite sua senha nova' />
            <input placeholder='Digite novamente sua senha nova' />
          </div>
        </div>
        <button className='password-btn-save'>Salvar</button>


      </div>
    </div>
  )
}

export default Modal