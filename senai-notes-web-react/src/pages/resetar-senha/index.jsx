import "./resetar-senha.css"
import logo from "../../assets/imgs/logo.svg"
import bar from "../../assets/imgs/Divider.svg"
import Olho from "../../assets/imgs/Vector.svg"
import { useState } from "react";


function ResetarSenha() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     const onLoginCLick = async () => {

    if (email == "") {

      alert("Email nao pode estar vazio.");
      return;

    }

    if (password == ""){

      alert("Senha nao pode estar vazio.");
      return;

    }

     let response = await fetch("http://localhost:3000/", {  

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({


        email: email,
        password: password

      })
    });

    console.log(response);

    if (response.ok == true) {

      alert("Login realizado com sucesso!");
      console.log(response)

      let json = await response.json();

      let token = json.accessToken;
      let userId = json.user.id;

      console.log("Token: " + token);

      // LOCAL STORAGE
      localStorage.setItem("meuToken", token);
      localStorage.setItem("meuId", userId);

      window.location.href = "/senai-notes"

    } else {

      if (response.status == 401) {

        alert("Credenciais Incorretas. Tente novamente.");
      } else {

        alert("Erro inesperado. Caso persista, contate os administradores.")
      }

    }

  }
    
        return (

            <>
                <header></header>

                <main className="page-container">

                    <div className="login-container">
                        <div className="borda-interna">
                        <img className="logo" src={logo} alt=""></img>
                        

                            <h1
                                id="meutitulo"
                                className="titulo"> Reset Your Password </h1>

                                <p className="subtitulo"> Choose a new password to secure your account.</p>

                            <p className="novaSenha">New Password</p>
                            <input className="inpt" value={email} onChange={event => setEmail(event.target.value)}  type="email" placeholder="" />
                            

                            <p className="textPassword">Confirm New Password</p>
                            <input className="inpt"  value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="" />

                            
                            <button className="btm" onClick={onLoginCLick}> Reset Password </button>

                            <img className="barra" src={bar} alt=""></img>

                      

                            </div>


                        
                    </div>

                </main>


            </>
        )
    }



export default ResetarSenha

