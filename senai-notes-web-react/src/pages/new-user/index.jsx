import "./new-user.css"
import logo from "../../assets/imgs/logo.svg"
<<<<<<< HEAD
import bar from "../../assets/imgs/Divider.svg"
import { useState } from "react";

function NewUser () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onUserCLick = async () => {
    
    if (email == "") {

      alert("Preencha o espaço do email.");
      return;

    }

    if (password == "") {

      alert("Preencha o espaço da senha.")
      return;

    }
    
    let response = await fetch("http://localhost:3000/users", {

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

      alert("Cadastro realizado com sucesso!");
      console.log(response)

      let json = await response.json();

      let token = json.accessToken;

      console.log("Token: " + token);

      // LOCAL STORAGE
      localStorage.setItem("meuToken", token);

      window.location.href = "/login"

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
                                className="titulo"> Create Your Account </h1>

                                <p className="subtitulo"> Sing up to start organizing your notes and boost your productivity.</p>

                            <p className="textEmail">Email Adress</p>
                            <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="email@example.com" />

                            <p className="textPassword">Password</p>
                            <input className="inpt"  value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="password" />
                            <p className="senhaSubtitulo"> At least 8 characters</p>
                            
                            <button className="btm" onClick={onUserCLick}> Sign up </button>

                            <img className="barra" src={bar} alt=""></img>

                            <a className="form-hint" href="/login"> Already have an account? Login </a>

                            </div>
=======

function NewUser() {


    
        return (

            <>
                <header></header>

                <main className="page-container">

                    <div className="login-container">
                        <img className="logo" src={logo} alt=""></img>

                            <h1
                                className="titulo"> Create Your Account </h1>

                                <p className="subtitulo"> Please log in to continue</p>

                            <p className="textEmail">Email Address</p>
                            <input className="inpt"  placeholder="email@example.com" />

                            <p className="textPassword">Password</p>
                            <input className="inpt"  placeholder="password" />

                            <button className="btm" >Login </button>
>>>>>>> 7e1a854421f7b184fc906d33ba37fdbf8a8db461


                        
                    </div>

                </main>


            </>
<<<<<<< HEAD
=======
        )
    }
>>>>>>> 7e1a854421f7b184fc906d33ba37fdbf8a8db461



export default NewUser

