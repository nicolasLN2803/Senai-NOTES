import Login from "./pages/login"
import NewUser from "./pages/new-user"
import {BrowserRouter, Route, Routes } from "react-router-dom";

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


      </Routes>

    </BrowserRouter>
    

  </>
)

}

export default App