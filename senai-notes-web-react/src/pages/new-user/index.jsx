import "./new-user.css"
import logo from "../../assets/imgs/logo.svg"
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

      alert("Registration completed successfully!");
      console.log(response)

      // let json = await response.json();

      // let token = json.accessToken;

      // console.log("Token: " + token);

      // // LOCAL STORAGE
      // localStorage.setItem("meuToken", token);

      window.location.href = "/login"

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


                        
                    </div>

                </main>


            </>
        )
    }



export default NewUser

