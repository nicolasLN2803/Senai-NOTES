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


                    <div class="linha"></div>


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


                    <div class="caixa-direita">

                        <div class="direita-cabecalho">

                            <h1>All Notes</h1>

                            <input class="inpt" type="Search" placeholder="Search by tIthe,content or tags..."/>
                            <img src={TaypeScrit} alt="" srcset="" />
                            <img src={TaypeScrit} alt="" srcset="" />
                            <img src={TaypeScrit} alt="" srcset="" />



                        </div>


                    </div>

 



                </main >
    


</div>

</>

    )
}

export default Notes