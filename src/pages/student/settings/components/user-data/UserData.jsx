import React, { useState } from 'react';
import "./UserData.css";
import { toast } from "react-toastify";
import api from "../../../../../Api"


function UserData({ data, token }) {

  const [teste, setTeste] = useState(data)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [surname, setSurname] = useState()
  const [phone, setPhone] = useState()
  const [birthday, setBirthday] = useState()
  const [cep, setCEP] = useState()

  const inputName = document.querySelector("#name")
  const inputSurName = document.querySelector("#surname")
  const inputDataNasc = document.querySelector("#birthday")
  const inputPhone = document.querySelector("#phone")
  const inputCep = document.querySelector("#cep")

  function validacaoCampos(){

    if(inputName.value.length < 3 || !(/^[A-Za-z]+$/.test(inputName.value))){
      toast.error("Nome inválido! Por favor, informe um nome válido")
      return
    }

    if(inputSurName.value.length < 3 || !(/^[A-Za-z]+$/.test(inputSurName.value))){
      toast.error("Sobrenome inválido! Por favor, informe um sobrenome válido")
      return
    }

    if(isNaN(inputPhone.value)){
      toast.error("Telefone inválido! Por favor,insira somente números!.")
      return
    }
    
    if(inputPhone.value.length < 8){
      toast.error("Telefone inválido! Por favor, informe um telefone válido")
      return
    }

    if(inputDataNasc.value.length < 8){
      toast.error("Data de nascimento inválida! Por favor, informe uma data válida")
      return
    }
    
    if(isNaN(inputDataNasc.value)){
      toast.error("Data de nascimento inválida! Por favor,insira somente números!.")
    }


    if(inputCep.value.length < 9){
      toast.error("CEP inválido! Por favor, verifique o formato do CEP e tente novamente.")
      return
    }
    
    if(isNaN(inputCep.value)){
      toast.error("CEP inválido! Por favor,insira somente números!.")
      return
    }

   
  }

  function onPutData(id, token) {

    api.put(
      `user/users/${id}`,
      {
        nome: name,
        email: email,
        password: "Lucc@s155"
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`
        },
      }
    )
      .then((response) => {

        console.log(response)
        if (response.status === 200) {
          setTeste(response.data)
          sessionStorage.setItem("dataUser", window.btoa(JSON.stringify(response.data)));
          inputEmail.value = ""
          inputName.value = ""
          toast.success("Dados alterados com sucesso!")
        }
      })
      .catch((error) => {
        switch (error) {
          case 409:
            toast.error("Esse e-mail já está sendo usado!")
            break;
          case 400:
            console.log(error)
            if (error.response.data === "User with this email already exists.") {
              toast.error("Esse e-mail já está sendo usado!")
              return
            }

            const erro = error.response.data.errors
            console.log(erro)

            for (let i = 0; i < erro.length; i++) {
              // if (erro[i].field === "password") {
              //   toast.error("Senha deve ter números, letras maiúsculas e caracteres especiais!")
              // }

              // if (erro[i].field === "email") {
              //   toast.error("Precisa ser um e-mail bem formatado!")
              //   return
              // }

              if (erro[i].field === "name") {
                toast.error("Nome inválido, Digite apenas o primeiro nome e um sobrenome!")
                return
              }

              if (error.field === "cep") {
                toast.error("CEP inválido! Por favor, verifique o formato do CEP e tente novamente.")
                return
              }
            }
            break;

          default:
            break;
        }

        console.log(error)

        
      });

  }

  return (
    <>
     <script type="text/javascript" src="js/script.js"></script>
      <div className='container-data'>
        <div className='content-data'>
          <span className='title'>Informações Pessoais</span>
          <div className='content-horizontal'>
            <div className='content-txt'>
              <span>Primeiro Nome:</span>
              <span>Sobrenome:</span>
              <span>Telefone:</span>
              <span>Data de Nascimento:</span>
              <span>CEP:</span>
            </div>
            <div className='content-input'>
              <input
              id="name"
              required
              onChange={(e) => {
                setName(e.target.value)
                e.target.classList.remove("error")
              }}
              placeholder={teste.nome}></input>

              <input
              required
              id='surname'
              onChange={(e) => {
                setSurname(e.target.value)
                e.target.classList.remove("error")
              }}
              placeholder='Sobrenome'></input>

              <input placeholder='(00) 90000-0000'
              required
              id='phone'
              maxLength= "8"
              onChange={(e) => {
                setPhone(e.target.value)
                e.target.classList.remove("error")
              }}></input>

              <input placeholder='dd/mm/aaaa'
              required
              id='birthday'
              maxLength= '8'
              onChange={(e) => {
                setBirthday(e.target.value)
                e.target.classList.remove("error")
              }}></input>

              <input
              id="cep"
              placeholder='00000-000'
              maxLength = '9'
              required
                onChange={(e) => {
                setCEP(e.target.value)
                e.target.classList.remove("error")
              }}></input>


            </div>
          </div>
          <button onClick={() => {
            // onPutData(data.id, token)
          validacaoCampos() }} >Salvar</button>
        </div>
      </div>
    </>
  )
}

export default UserData