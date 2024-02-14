import React from "react";
import "./CardOurTeam.css";

function CardOurTeam(props) {
    

    return (
        <>
            <div className="institucional-card-equipe">
                <div className="institucional-card-geral">
                    <img className="institucional-image" src={props.person} />
                    <div className="institucional-shadow">
                        <h1>{props.name}</h1>
                        <h2>{props.funcao}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardOurTeam;