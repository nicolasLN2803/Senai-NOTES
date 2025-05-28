import "./resetar-senha.css"
import logo from "../../assets/imgs/logo.svg"
import bar from "../../assets/imgs/Divider.svg"
import Olho from "../../assets/imgs/Vector.svg"
import { useState } from "react";


function ResetarSenha() {

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

     const onLoginCLick = async () => {

    if (password == "") {

      alert("The password cannot be empty.");
      return;

    }

    if (newPassword == "") {

      alert("The New password cannot be empty.");
      return;

    }

    if (newPassword == password){

      alert("The passwords do not match.");
      return;

    }

     let response = await fetch("http://localhost:3000/", {  

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({


        email: password,
        password: newPassword

      })
    });

    console.log(response);

    if (response.ok == true) {

      alert("Password change completed successfully!");
      console.log(response)

      // let json = await response.json();

      // let token = json.accessToken;
      // let userId = json.user.id;

      // console.log("Token: " + token);

      // // LOCAL STORAGE
      // localStorage.setItem("meuToken", token);
      // localStorage.setItem("meuId", userId);

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
                        <div className="BORDA-interna">
                        <img className="logo" src={logo} alt=""></img>
                        

                            <h1
                                id="meutitulo"
                                className="titulo"> Reset Your Password </h1>

                                <p className="subtitulo"> Choose a new password to secure your account.</p>

                            <p className="novaSenha">New Password</p>
                            <input className="inpt" value={password} onChange={event => setPassword(event.target.value)}  type="password" placeholder="" />
                            

                            <p className="textPasswordd">Confirm New Password</p>
                            <input className="inpt"  value={newPassword} onChange={event => setNewPassword(event.target.value)} type="new-password" placeholder="" />

                            
                            <button className="btm" onClick={onLoginCLick}> Reset Password </button>

                            <img className="barra" src={bar} alt=""></img>

                      

                            </div>


                        
                    </div>

                </main>


            </>
        )
    }



export default ResetarSenha

