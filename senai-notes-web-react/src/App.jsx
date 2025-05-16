import Login from "./pages/login"
import NewUser from "./pages/new-user"
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/senai-notes"
<<<<<<< HEAD
import NSenha from "./pages/nova-senha";
=======
import ResetarSenha from "./pages/resetar-senha";
>>>>>>> d4d91e92409f46cf2fb9bbce24b8ea20f183445b

function App() {

const isAuthenticated = () =>{

let token = localStorage.getItem("meuToken");

if (token == null) {

return false;

} else {

return true;

}

}

return (

  <>
    <BrowserRouter>


      <Routes>

        <Route path="/" element= {<Login/>}></Route>
        <Route path="/login" element= {<Login/>}></Route>
        <Route path="/new-user" element= {<NewUser/>}></Route>
        <Route path="/senai-notes" element= {isAuthenticated() == true? <Notes/> : <Login/>}></Route>
        <Route path="*" element= {<h1> NOT FOUND </h1>}></Route>
<<<<<<< HEAD
        <Route path="/nova-senha" element= {<NSenha/>}></Route>
=======
          <Route path="/resetar-senha" element= {<ResetarSenha/>}></Route>
        
>>>>>>> d4d91e92409f46cf2fb9bbce24b8ea20f183445b


      </Routes>

    </BrowserRouter>
    

   

  </>
)

}

export default App