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

    if(email == "teste@teste.com" && password == "teste"){

        let token = "meutoken";
        let userId = "meuId";

        localStorage.setItem("meuToken", token)
        localStorage.setItem("meuId", userId)

        alert("Login successfully completed!");
      
         window.location.href = "/senai-notes"
      
      }

    if (response.ok == true) {

      alert("Login successfully completed!");
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

        alert("Incorrect credentials. Please try again.");
      } else {

        alert("Unexpected error. If it persists, please contact the administrators.")
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
                                className="titulo"> Welcome to note </h1>

                                <p className="subtitulo"> Please log in to continue</p>

                            <p className="text-Email">Email Adress</p>
                            <input className="inpt" value={email} onChange={event => setEmail(event.target.value)}  type="email" placeholder="email@example.com" />
                            

                            <div className="Linha-da-senha" href="/new-password"><p className="textPassword">Password</p>
                             <a className="senhaEsquecida" href="/nova-senha"> Forgot </a></div>
                            <input className="inpt"  value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="password" />
                           
                            
                            <button className="btm" onClick={onLoginCLick}> Login </button>

                            <img className="barra" src={bar} alt=""></img>

                            <a className="form-hint" href="/new-user"> No account yet? Sign Up </a>

                            </div>


                        
                    </div>

                </main>


            </>
        )
    }



export default Login

