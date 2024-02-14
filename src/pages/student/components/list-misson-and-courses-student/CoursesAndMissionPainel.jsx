import React from "react";
import "./CoursesAndMissionPainel.css"
import img from "./assets/conquistas 2.svg"
import img2 from "./assets/Frame 96.svg"
import img3 from "./assets/conquistar 2.svg"
import img4 from "./assets/Image 4.svg"
import img5 from "./assets/done.svg"


function CoursesAndMissionPainel() {
    return (
        <div className="course-and-mission-painel">
            <div className="mission-painel">
                <h2>Missões</h2>
                <div className="mission">
                    <div className="mission-info">
                        <div className='mission-name'>
                            <a>Nome da Missão</a>
                        </div>
                        <div className="mission-legend">
                            <a>Complete 7 dias de <br />ofensiva</a>
                        </div>
                        <img src={img2} id="img2" />
                    </div>
                    <div className="mission-image">
                        <img src={img} />
                    </div>
                </div>

                <div className="mission">
                    <div className="mission-info">
                        <div className='mission-name'>
                            <a>Nome da Missão</a>
                        </div>
                        <div className="mission-legend">
                            <a>Complete 7 dias de <br />ofensiva</a>
                        </div>
                        <img src={img2} id="img2" />
                    </div>
                    <div className="mission-image">
                        <img src={img3} />
                    </div>
                </div>

                <div className="mission">
                    <div className="mission-info">
                        <div className='mission-name'>
                            <a>Nome da Missão</a>
                        </div>
                        <div className="mission-legend">
                            <a>Complete 7 dias de <br />ofensiva</a>
                        </div>
                        <img src={img2} id="img2" />
                    </div>
                    <div className="mission-image">
                        <img src={img4} />
                    </div>
                </div>
            </div>

            <div className="gap"></div>


            <div className="course-painel">
                <h2>Lista de cursos</h2>
                <div className="course">
                    <div className='course-name'>
                        <a>Nome do Curso</a>
                    </div>
                    <div className="course-info">  
                    <a>30 Módulos<br/>
                    JS, HTML, CSS...<br/>
                    Concluído<img src={img5} id="img5"/></a>                     
                    </div>
                </div>

                <div className="course">
                    <div className='course-name'>
                        <a>Nome do Curso</a>
                    </div>
                    <div className="course-info">  
                    <a>30 Módulos<br/>
                    JS, HTML, CSS...<br/>
                    Concluído<img src={img5} id="img5"/></a>                     
                    </div>
                </div>

                <div className="course">
                    <div className='course-name'>
                        <a>Nome do Curso</a>
                    </div>
                    <div className="course-info">  
                    <a>30 Módulos<br/>
                    JS, HTML, CSS...<br/>
                    Concluído<img src={img5} id="img5"/></a>                     
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CoursesAndMissionPainel;