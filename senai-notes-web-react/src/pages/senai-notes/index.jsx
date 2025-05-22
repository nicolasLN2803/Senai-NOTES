import "./notes.css";
import SenaiNotes from "../../assets/imgs/Wrapper.svg"
import AlNotes from "../../assets/imgs/AllNotes.svg"
import Archived from "../../assets/imgs/ArchivedNotes.svg"
import Cooking from "../../assets/imgs/Cooking.svg"
import dev from "../../assets/imgs/Cooking.svg"
import Fitness from "../../assets/imgs/Cooking.svg"
import Health from "../../assets/imgs/Cooking.svg"
import Personal from "../../assets/imgs/Cooking.svg"
import React from "../../assets/imgs/Cooking.svg"
import Recipes from "../../assets/imgs/Cooking.svg"
import Shooping from "../../assets/imgs/Cooking.svg"
import Travel from "../../assets/imgs/Cooking.svg"
import TaypeScrit from "../../assets/imgs/Cooking.svg"
import Engrenage from "../../assets/imgs/Setting.svg"
import Topba from "../../assets/imgs/Topbar Item.svg"
import Search from "../../assets/imgs/Search.svg"
// import Rectangle from "../../assets/imgs/Rectangle 45.svg"
import Rectangle3 from "../../assets/imgs/Rectangle3.svg"
// import FavoritePasta from "../../assets/imgs/FavoritePasta.svg"
// import Weekly from "../../assets/imgs/Weekly.svg"
// import Meal from "../../assets/imgs/Meal.svg"
// import Reading from "../../assets/imgs/Reading.svg"
// import FitnessDir from "../../assets/imgs/Fitness.svg"
// import devdir from "../../assets/imgs/tag.svg"
// import reacttag from "../../assets/imgs/reacttag.svg"
// import personatag from "../../assets/imgs/personatag.svg"
// import cooking1tag from "../../assets/imgs/cooking1.svg"
import tag3 from "../../assets/imgs/Tag (3).svg"
import Clock from "../../assets/imgs/Circle Clock.svg"
import ChevronRight from "../../assets/imgs/Chevron Right MD.svg"
import Archive1 from "../../assets/imgs/Archive.svg"
import DarkMode from "../../assets/imgs/DARKMODE.svg"
import logosenainotes from "../../imgs/logosenainotes.svg"
// import Archived2 from "../../imgs/Archive.svg"


// import Delete from "../../assets/imgs/delete.svg"
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

function Notes() {


    const [notes, setNotes] = useState([]);
    const [noteSelecionado, setNoteSelecionado] = useState(null);


    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {

        getNotes();

        let dark = localStorage.getItem("darkmode");

        if (dark === "true") {
            setDarkMode(true);
            document.body.classList.add("darkmode");
        }

    }, []);

    const ativarDesativarDarkMode = () => {
        let darkModeAtualizado = !darkMode;
        setDarkMode(darkModeAtualizado);
        if (darkModeAtualizado == true) {
            document.body.classList.add("darkmode");
        } else {
            document.body.classList.remove("darkmode")
        }
        localStorage.setItem("darkmode", darkModeAtualizado);


    }

    const getNotes = async () => {
        let response = await fetch("http://localhost:3000/notes")

        if (response.ok) {


            let json = await response.json();

            setNotes(json);

        }

    };

    const clickNote = (note) => {

        setNoteSelecionado(note);
        // setIsLeftPanelOpen(false);
        console.log(note);

    }

   
    const novaNote = async () => {


        let novoTitulo = prompt("Insert a title: ");



        if (novoTitulo == null) {

            alert("Insert a title:");
            return; // faz o código parar de ser executado.

        }

        let userId = localStorage.getItem("meuId");

        let nNote = {

            title: novoTitulo,
            id: crypto.randomUUID,
            userId: userId,
            messages: []

        }

        const response = await fetch("http://localhost:3000/notes", {

            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                nNote
            )

        });

        if (response.ok) {

            //Atualiza os chats da tela
            await getNotes();
            setNoteSelecionado(nNote)

        }

    };

    const AtualizarNote = async () => {

        if(!noteSelecionado) {

            alert("No notes to update");
            return;

        }

        let novoTitulo = prompt("Update your  title: ");

        if (novoTitulo == null) {

            alert("Insert a title:");
            return; // faz o código parar de ser executado.

        }

        let attNote = {

           ...noteSelecionado,
           title: novoTitulo,
           messages: [],

        };

        const response = await fetch("http://localhost:3000/notes/" + noteSelecionado.id, {

            method: "PUT",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                attNote
            )

        });

        if (response.ok) {

            //Atualiza os chats da tela
            await getNotes();
            setNoteSelecionado(attNote)

        } else {

            alert("Error updating the note.")
        }

    };
        



    return (
        <>
            <div className="tela-principal">

                <header className="caixa-esquerda">

                    <button className="botoes" type="button">
                        <img src={darkMode == true? logosenainotes : SenaiNotes} alt="" srcset="" />


                    </button>

            

                    <button className="botoes-notes" type="button">
                        <img src={AlNotes} alt="" srcset="" />
                        Al Notes
                        <div className="controle-seta">
                            <img className="seta" src={ChevronRight} />
                        </div>
                    </button>

                    <button className="botoes-notes" type="button">
                        <img src={Archived} alt="" srcset="" />
                        Archived Notes </button>



                    <div className="inferior-esquerda">

                        <button className="botoes" type="button">
                            <img src={Cooking} alt="" srcset="" />
                            Cooking </button>

                        <button className="botoes" type="button">
                            <img src={dev} alt="" srcset="" />
                            Dev </button>

                        <button className="botoes" type="button">
                            <img src={Fitness} alt="" srcset="" />
                            Fitness </button>

                        <button className="botoes" type="button">
                            <img src={Health} alt="" srcset="" />
                            Health </button>

                        <button className="botoes" type="button">
                            <img src={Personal} alt="" srcset="" />
                            Personal </button>

                        <button className="botoes" type="button">
                            <img src={React} alt="" srcset="" />
                            React</button>

                        <button className="botoes" type="button">
                            <img src={Recipes} alt="" srcset="" />
                            React</button>

                        <button className="botoes" type="button">
                            <img src={Shooping} alt="" srcset="" />
                            Recipes </button>

                        <button className="botoes" type="button">
                            <img src={Travel} alt="" srcset="" />
                            Shooping </button>

                        <button className="botoes" type="button">
                            <img src={TaypeScrit} alt="" srcset="" />
                            Travel </button>

                    </div>


                </header>

                <main>

                    <div className="direita-cabecalho">

                        <h1>All Notes</h1>
                        <div className="pesquisa">
                            <img src={Search} alt="" srcset="" />
                            <input className="input" type="Search" placeholder="Search by tIthe,content or tags..." />
                            <img src={Engrenage} alt="" srcset="" />
                            <img src={Topba} alt="" srcset="" />
                        </div>
                    </div>

                    <div className="caixa-direita">


                        <div className="direita-inferior">

                            <div className="create-notes" >
                                <button className="create-new" onClick={() => novaNote()}> + Create New Notes</button>
                            </div>

                            {notes.map(note => (
                                <div className="botao">
                                    <button className="botoes" onClick={() => clickNote(note)}>
                                        <img src={Rectangle3} />
                                    </button>

                                    <div>
                                        <h1>{note.title}</h1>
                                        <div className="controle-tag">
                                            {note.tags?.map(tag => (
                                                <p className='botoes'>{tag}</p>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            ))}



                        </div>


                        <div className="direita-meio">

                            <div className="imagem-central"> </div>


                            <div className="textoImage">
                                <input value={noteSelecionado?.title} onChange={event => setNoteSelecionado({ ...noteSelecionado, title: event.target.value })} className="texto-titulo" maxlength="20" placeholder="Insert your title" type="Search" />

                                <div className="controle-tag">

                                    <div className="tag-meio">
                                        <img src={tag3} alt="" srcset="" />
                                        <p>Tags</p>
                                        <input className="texto-editavel"  value={noteSelecionado?.title} onChange={event => setNoteSelecionado({ ...noteSelecionado, title: event.target.value })} maxlength="20" placeholder="Insert the Tag name" type="Search" />

                                    </div>
                                </div>

                                <div className="controle-tag">

                                    <div className="tag-meio">
                                        <img src={Clock} alt="" srcset="" />
                                        <p>Last Edited</p>
                                        <input  className="texto-editavel" maxlength="20" placeholder="Date of the edition" type="Search" />

                                    </div>
                                </div>
                            </div>





                            <div className="linha-meio">

                                <textarea className="text-control" maxlength="200" placeholder="Insert your notes"
                                ></textarea>

                            </div>

                            <div className="controle-botao">

                                <div className="botao-inferior">
                                    <button className="save-note" onClick={() => AtualizarNote()}>+ Save Notes</button>

                                    <button className="cancel" type="button">  Cancel
                                    </button>


                                </div>

                            </div>

                        </div>

                        <div className="direita-total">

                            <div className="archived" >

                                <button className="archived-notes" type="button">
                                    <img src={Archive1} alt="" srcset="" />
                                    Archived Notes</button>

                                <button className="delete-notes" type="button">
                                    <img src={Delete} alt="" srcset="" />
                                    Delete Notes</button>

                                <button onClick={() => ativarDesativarDarkMode()} className="delete-notes" type="button">
                                    <img src={DarkMode} alt="" srcset="" />
                                    Dark mode</button>

                            </div>


                        </div>
                    </div>

                </main >



            </div>

        </>

    )
}

export default Notes