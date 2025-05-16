<<<<<<< HEAD
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
=======
import "./login.css"
import logo from "../../assets/imgs/logo.svg"
import bar from "../../assets/imgs/Divider.svg"
import { useState } from "react";

function Login() {

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
>>>>>>> d4d91e92409f46cf2fb9bbce24b8ea20f183445b

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({


<<<<<<< HEAD
        email: email
        })
    });

    if (response.ok == true) {

      alert("Link Sent!");
=======
        email: email,
        password: password

      })
    });

    console.log(response);

    if (response.ok == true) {

      alert("Login realizado com sucesso!");
>>>>>>> d4d91e92409f46cf2fb9bbce24b8ea20f183445b
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

<<<<<<< HEAD
    }}

  

    return (

        <>
            <header></header>

            <main className="page-container">

                <div className="login-container">
                    <div className="borda-interna">
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
=======
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
                                className="titulo"> Welcome to note </h1>

                                <p className="subtitulo"> Please log in to continue</p>

                            <p className="textEmail">Email Adress</p>
                            <input className="inpt" value={email} onChange={event => setEmail(event.target.value)}  type="email" placeholder="email@example.com" />

                            <p className="textPassword">Password</p>
                            <input className="inpt"  value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="password" />
                            <a className="senhaEsquecida" href="/nova-senha"> Forgot </a>
                            
                            <button className="btm" onClick={onLoginCLick}>Login </button>

                            <img className="barra" src={bar} alt=""></img>

                            <a className="form-hint" href="/new-user"> No account yet? Sign Up </a>

                            </div>


                        
                    </div>

                </main>


            </>
        )
    }
>>>>>>> d4d91e92409f46cf2fb9bbce24b8ea20f183445b



export default Login

<<<<<<< HEAD



export default NSenha
=======
>>>>>>> d4d91e92409f46cf2fb9bbce24b8ea20f183445b
