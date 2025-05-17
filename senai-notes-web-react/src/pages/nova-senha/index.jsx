import "./nSenha.css"
import logo from "../../assets/imgs/logo.svg"
import { useState } from "react";

function NSenha() {

    const [email, setEmail] = useState("");

    const onLoginCLick = async () => {

        if (email == "") {

            alert("Email nao pode estar vazio.");
            return;

        }
    

    let response = await fetch("http://localhost:3000/resetSenha", {  

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({


        email: email
        })
    });

    if (response.ok == true) {

      alert("Link Sent!");
      console.log(response)

      // let json = await response.json();

      // // let token = json.accessToken;
      // // let userId = json.user.id;

      // console.log("Token: " + token);

      // // LOCAL STORAGE
      // localStorage.setItem("meuToken", token);
      // localStorage.setItem("meuId", userId);

      window.location.href = "/resetar-senha"

    } else {

      if (response.status == 401) {

        alert("Credenciais Incorretas. Tente novamente.");
      } else {

        alert("Erro inesperado. Caso persista, contate os administradores.")
      }

    }}

  

    return (

        <>
            <header></header>

            <main className="page-container">

                <div className="login-container">
                    <div className="borda-Interna">
                        <img className="logo" src={logo} alt=""></img>

                        <h1
                            id="meutitulo"
                            className="titulo"> Forgotten your password? </h1>

                        <p className="subtitulo"> Enter your email below, and we’ll send you a link to reset it.</p>

                        <p className="textEmail">Email Adress</p>
                        <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="email@example.com" />

                        <button className="btm" onClick={onLoginCLick}> Send Reset Link </button>


                    </div>



                </div>

            </main>


        </>
    )
}

export default NSenha
