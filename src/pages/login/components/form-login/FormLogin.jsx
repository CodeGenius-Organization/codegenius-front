import React, { useEffect, useState} from 'react'
import api from '../../../../Api'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './FormLogin.css'

import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function FormLogin({ changeForm, modalVisible }) {

  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(true);


  useEffect(() => {

    if(modalVisible === false){
      document.querySelector("#inpSenha").value = ''
      document.querySelector("#inpEmail").value = ''

      document.querySelector("#inpSenha").classList.remove("error")
      document.querySelector("#inpEmail").classList.remove("error")
    }
  }, [modalVisible])

  function toggleVisibility() {
    
    visibility ? 
      document.querySelector("#inpSenha").setAttribute("type","text") :
      document.querySelector("#inpSenha").setAttribute("type","password")

      setVisibility(!visibility)
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const senha = document.querySelector("#inpSenha")
    const divSenha = document.querySelector("#divSenha")
    const email = document.querySelector("#inpEmail")

    
    if (username.trim() === "" || password.trim() === "") {
      if(username.trim() === "") email.classList.add("error")
      if(password.trim() === "") divSenha.classList.add("error")
      toast.error('Preencha os campos corretamente')
      return
    }

    if(!validateEmail(email.value)){
      email.classList.add("error")
      senha.value = ''
      email.value = ''
      toast.error('Email inválido')
      return
    }


    api.post(
        "user/login",
        {
          email: username,
          password: password,
        },
        { 
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200 && response.data?.token) {
          sessionStorage.setItem("authToken", response.data.token);
          toast.success("Login realizado com sucesso!")
          if(username.split("@")[1] === "mindtech.code"){
            navigate("/teacher/course");
          } else {
            navigate("/student/course")
          }
        } else {
          throw new Error("Ocorreu um erro interno!");
        }
      })
      .catch((error) => {
        switch (error.response.status) {
          case 403:
            email.classList.add("error")
            divSenha.classList.add("error")
            senha.value = "";
            toast.error("Credenciais incorretas")
            break;
          case 404:
            email.classList.add("error")
            divSenha.classList.add("error")
            senha.value = "";
            toast.error("Credenciais incorretas")
            break;
        default:
            break;
        }

      });

  }

  return (
   <>
    <p>Olá novamente!</p>
            <form className="form-content" onSubmit={handleSubmit} autoComplete='off'>
              <label>E-mail:</label>
              <input
                id="inpEmail"
                type="email"
                maxLength={80}
                className="input-margin"
                placeholder="Digite seu e-mail"
                onChange={(e) => {
                  setUserName(e.target.value)
                  e.target.classList.remove("error")
                }}
              />
              <label>Senha:</label>
              <div className='password-login'id="divSenha">
              <input
                id='inpSenha'
                className='inpSenha'
                maxLength={80}
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => {
                    setPassword(e.target.value)
                    document.querySelector("#divSenha").classList.remove("error")
                }}
              />
              {visibility ? <IoMdEye onClick={() => toggleVisibility()}/> : <IoMdEyeOff onClick={() => toggleVisibility()} />}
              </div>
              <a href="/">Esqueceu sua senha?</a>
              <button type="submit" className="button-form">
                ENTRAR
              </button>
              <p onClick={() => changeForm()} className="link-right-button toggle-cad-reg">
                Não tem cadastro? Cadastre-se aqui
              </p>
            </form>
   </>
  )
}

export default FormLogin