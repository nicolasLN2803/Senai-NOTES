import "./new-user.css"
import logo from "../../assets/imgs/logo.svg"

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


                        
                    </div>

                </main>


            </>
        )
    }



export default NewUser

