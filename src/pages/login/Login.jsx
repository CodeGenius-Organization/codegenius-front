import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import codegenius from "../../shared/assets/brand-codegenius.png";
import FormLogin from "./components/form-login/FormLogin";
import FormRegister from "./components/form-register/FormRegister";

function Login({ toggleModal, visible }) {

  const [changeForm, setChangeForm] = useState(true)
  const navigate = useNavigate();

  function changeVisibleForm() {
    setChangeForm(!changeForm)
  }

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {

    if(sessionStorage.getItem('authToken') !== null){
      try {
        const tokenT = sessionStorage.getItem('authToken')
        const emailToken = parseJwt(tokenT).sub;
        // console.log(emailToken)
        if(emailToken.split("@")[1] === "mindtech.code"){
            navigate("/teacher/course");
          } else {
            navigate("/student/course")
          }
        
      } catch (error) {
        console.log(error)  
      }
      
    }
  
  }, [])

  return (
    <>
        <div id="content-modal" className="modal-content">
          <div className="login-form">
            <div className="login-content">
              <div className="logo-container">
                <img src={codegenius} alt="brand-codegenius" />
                <p>CodeGenius</p>
              </div>
              {changeForm ? <FormLogin
                changeForm={changeVisibleForm}
                modalVisible={visible}
                /> :
                <FormRegister
                  changeForm={changeVisibleForm}
                  modalVisible={visible}
                  />}
            </div>
          </div>

          <div className={`img-container ${changeForm ? '' : 'teste'}`}>
            <div className="linear-gradient">
              
              <p>MindTech</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default Login;