import Login from "./pages/login";
import NewUser from "./pages/new-user";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/senai-notes";
import NSenha from "./pages/nova-senha";
import ResetarSenha from "./pages/resetar-senha";

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
        <Route path="/senai-notes" element= {<Notes/>}></Route>
        <Route path="*" element= {<h1> Not Found </h1>}></Route>
        <Route path="/nova-senha" element= {<NSenha/>}></Route>
        <Route path="/resetar-senha" element= {<ResetarSenha/>}></Route>


      </Routes>

    </BrowserRouter>
    

   
  
  </>
)

}

export default App