import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./HomeStudent.css";
import api from '../../Api'
import { toast } from "react-toastify";
import NavBarStudent from "./components/nav-bar/NavBarStudent";

function LogOut() {
  const navigate = useNavigate();
  const [emailUser, setEmailUser] = useState();
  const [token, setToken] = useState();
  const location = useLocation()


  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  function getDataHome(email, tokenJWT) {
    api.get(`user/users/info/${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${tokenJWT}`
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("dataUser", window.btoa(JSON.stringify(response.data)));
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }
  

  useEffect(() => {
    
    if(sessionStorage.getItem('authToken') !== null){
      try {
        const tokenT = sessionStorage.getItem('authToken')
        setToken(tokenT)
        const emailToken = parseJwt(tokenT).sub;
        setEmailUser(emailToken)
        if(location.pathname == "/student") navigate("/student/course")
        if(emailToken.split("@")[1] === "mindtech.code"){
          navigate("/teacher/course");
        }
        getDataHome(emailToken, tokenT)
        
      } catch (error) {
        console.log(error)  
      }
      
    }  else {
      navigate("/")
      toast.error("Você não está autenticado!")

    }
  
  }, [])

  return (
    <>
      <div className="home-container">
        <NavBarStudent/>
        <Outlet/>
      </div>
    </>
  );
}

export default LogOut;