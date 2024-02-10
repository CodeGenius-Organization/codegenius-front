import { useEffect, useState } from "react";
import './ModalToForm.css'
import codegenius from "../../../../shared/assets/codegenius.svg";
import FormLogin from "../../../login/components/form-login/FormLogin";
import { AiOutlineClose } from "react-icons/ai";
import FormRegister from "../../../login/components/form-register/FormRegister";

function LoginModal({ toggleModal, visible }) {

  const [changeForm, setChangeForm] = useState(true)

  function changeVisibleForm() {
    setChangeForm(!changeForm)
  }

  useEffect(() => {
    const modal = document.getElementById("content-modal");
    modal.classList.toggle("block");
    const modalContainer = document.getElementById("modal-close");
    modalContainer.classList.toggle("off");
  }, [visible]);

  return (
    <>
      <div
        id="modal-close"
        className="institucional-modal-container"
        onClick={(e) => {
          if (e.target.id === "modal-close") {
            toggleModal();
            setTimeout(() => {
              if (changeForm === false) changeVisibleForm()
            }, 500)
          }
        }
        }
      >
        <div id="content-modal" className="institucional-modal-content">
          <div className="institucional-login-form">
            <div className="institucional-login-content">
              <div className="institucional-logo-container">
                <img src={codegenius} alt="logo-codegenius" />
                <p>CodeGenius</p>
              </div>
              {changeForm ? <FormLogin
                changeForm={changeVisibleForm}
                toggleModal={toggleModal} 
                modalVisible={visible}
                /> :
                <FormRegister
                  changeForm={changeVisibleForm}
                  toggleModal={toggleModal}
                  modalVisible={visible}
                  />}
            </div>
          </div>

          <div className={`img-container ${changeForm ? '' : 'teste'}`}>
            <div className="institucional-linear-gradient">
              <AiOutlineClose
                id="buttonCloseModal"
                className="institucional-close-icon"
                onClick={() => {
                  toggleModal()
                  setTimeout(() => {
                    if (changeForm === false) changeVisibleForm()
                  }, 500)
                }
                }
              />
              <p>MindTech</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;