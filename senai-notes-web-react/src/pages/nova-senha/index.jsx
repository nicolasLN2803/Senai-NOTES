function NSenha() {

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
    
                                    <p className="subtitulo"> Enter your email below, and we'll send you a link to reset it</p>
    
                                <p className="textEmail">Email Adress</p>
                                <input className="inpt" value={email} onChange={event => setEmail(event.target.value)}  type="email" placeholder="email@example.com" />
                                
                                <button className="btm" onClick={onLoginCLick}> Send Reset Link </button>
    
            
                                </div>
    
    
                            
                        </div>
    
                    </main>
    
    
                </>
            )




}