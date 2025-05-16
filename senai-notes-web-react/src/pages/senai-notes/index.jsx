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
import Rectangle from "../../assets/imgs/Rectangle 45.svg"
import Rectangle3 from "../../assets/imgs/Rectangle3.svg"
import FavoritePasta from "../../assets/imgs/FavoritePasta.svg"
import Weekly from "../../assets/imgs/Weekly.svg"
import Meal from "../../assets/imgs/Meal.svg"
import Reading from "../../assets/imgs/Reading.svg"
import FitnessDir from "../../assets/imgs/Fitness.svg"
import devdir from "../../assets/imgs/tag.svg"
import reacttag from "../../assets/imgs/reacttag.svg"
import traveltag from "../../assets/imgs/traveltag.svg"
import personatag from "../../assets/imgs/personatag.svg"


import cooking1tag from "../../assets/imgs/cooking1.svg"
import recipestag from "../../assets/imgs/recipestag.svg"


function Notes() {

    return (
        <>
            <div class="tela-principal">

                <header class="caixa-esquerda">

                    <div class="superior-senai">

                        <button class="botoes" type="button">
                            <img src={SenaiNotes} alt="" srcset="" />
                        </button>

                    </div>

                    <div class="superior-esquerda">
                        <button class="botoes" type="button">
                            <img src={AlNotes} alt="" srcset="" />
                            Al Notes </button>

                        <button class="botoes" type="button">
                            <img src={Archived} alt="" srcset="" />
                            Archived Notes </button>
                    </div>


                    <div class="inferior-esquerda">

                        <button class="botoes" type="button">
                            <img src={Cooking} alt="" srcset="" />
                            Cooking </button>

                        <button class="botoes" type="button">
                            <img src={dev} alt="" srcset="" />
                            Dev </button>

                        <button class="botoes" type="button">
                            <img src={Fitness} alt="" srcset="" />
                            Fitness </button>

                        <button class="botoes" type="button">
                            <img src={Health} alt="" srcset="" />
                            Health </button>

                        <button class="botoes" type="button">
                            <img src={Personal} alt="" srcset="" />
                            Personal </button>

                        <button class="botoes" type="button">
                            <img src={React} alt="" srcset="" />
                            React</button>

                        <button class="botoes" type="button">
                            <img src={Recipes} alt="" srcset="" />
                            React</button>

                        <button class="botoes" type="button">
                            <img src={Shooping} alt="" srcset="" />
                            Recipes </button>

                        <button class="botoes" type="button">
                            <img src={Travel} alt="" srcset="" />
                            Shooping </button>

                        <button class="botoes" type="button">
                            <img src={TaypeScrit} alt="" srcset="" />
                            Travel </button>

                    </div>


                </header>

                <main>

                    <div class="direita-cabecalho">

                        <h1>All Notes</h1>
                        <div className="pesquisa">
                            <img src={Search} alt="" srcset="" />
                            <input class="input" type="Search" placeholder="Search by tIthe,content or tags..." />
                            <img src={Engrenage} alt="" srcset="" />
                            <img src={Topba} alt="" srcset="" />
                        </div>
                    </div>

                    <div class="caixa-direita">

                        <div class="direita-inferior">

                            <div class="create-notes" >
                                <button class="create-new" type="button"> + Create New Notes</button>
                            </div>

                            <div class="botao">
                                <button class="botoes" type="button">
                                    <img src={Rectangle} alt="" srcset="" />
                                </button>

                                <div>
                                    <h1>React Performance Optimization</h1>
                                    <div>
                                        <button class="botoes" type="button">
                                            <img src={devdir} alt="" srcset="" />
                                        </button>

                                        <button class="botoes" type="button">
                                            <img src={reacttag} alt="" srcset="" />
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <div class="botao">
                                <button class="botoes" type="button">
                                    <img src={Rectangle3} alt="" srcset="" />
                                </button>

                                <div>
                                    <h1>Japan Travel Planning</h1>
                                    <div>
                                        <button class="botoes" type="button">
                                            <img src={traveltag} alt="" srcset="" />
                                        </button>

                                        <button class="botoes" type="button">
                                            <img src={personatag} alt="" srcset="" />
                                        </button>

                                    </div>
                                </div>
                            </div>


                            <div class="botao">
                                <button class="botoes" type="button">
                                    <img src={FavoritePasta} alt="" srcset="" />
                                </button>
                                <div>
                                    <h1>Favorite Pasta Recipes</h1>
                                    <div>
                                        <button class="botoes" type="button">
                                            <img src={cooking1tag} alt="" srcset="" />
                                        </button>

                                        <button class="botoes" type="button">
                                            <img src={recipestag} alt="" srcset="" />
                                        </button>

                                    </div>
                                </div>
                            </div>



                            <div class="botao">
                                <button class="botoes" type="button">
                                    <img src={Weekly} alt="" srcset="" />
                                </button>

                                <div>
                                    <h1>Weekly Workout Plan</h1>
                                    <div>
                                        <button class="botoes" type="button">
                                            <img src={devdir} alt="" srcset="" />
                                        </button>

                                        <button class="botoes" type="button">
                                            <img src={reacttag} alt="" srcset="" />
                                        </button>

                                    </div>
                                </div>
                            </div>



                            <div class="botao">
                                <button class="botoes" type="button">
                                    <img src={Meal} alt="" srcset="" />
                                </button>

                                <div>
                                    <h1>Meal Prep Ideas</h1>
                                    <div>
                                        <button class="botoes" type="button">
                                            <img src={devdir} alt="" srcset="" />
                                        </button>

                                        <button class="botoes" type="button">
                                            <img src={reacttag} alt="" srcset="" />
                                        </button>

                                    </div>
                                </div>
                            </div>


                            <div class="botao">
                                <button class="botoes" type="button">
                                    <img src={Reading} alt="" srcset="" />
                                </button>

                                <div>
                                    <h1>Reading List</h1>
                                    <div>
                                        <button class="botoes" type="button">
                                            <img src={devdir} alt="" srcset="" />
                                        </button>

                                        <button class="botoes" type="button">
                                            <img src={reacttag} alt="" srcset="" />
                                        </button>

                                    </div>
                                </div>
                            </div>



                            <div class="botao">
                                <button class="botoes" type="button">
                                    <img src={FitnessDir} alt="" srcset="" />
                                </button>

                                <div>
                                    <h1>Reading List</h1>
                                    <div>
                                        <button class="botoes" type="button">
                                            <img src={devdir} alt="" srcset="" />
                                        </button>

                                        <button class="botoes" type="button">
                                            <img src={reacttag} alt="" srcset="" />
                                        </button>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="direita-meio">

                            <div class="imagem-central">
                             </div>

                               <div class="textoImage">
                                    <h1>React Performanc Optimization</h1>
                                </div>

                        </div>

                    </div>

                </main >



            </div>

        </>

    )
}

export default Notes