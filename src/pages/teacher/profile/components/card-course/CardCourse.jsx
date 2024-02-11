import React from "react";
import'./CardCourse.css';
import { IoMdStar } from "react-icons/io";

function CardCurse() {
    return (
        <div className="container-list-course">
            <div className="card-list-course">
            </div>
            <div className="info-list-course">
            <span className="bold">Nome: Nome do curso</span>
                <span>Data Criada:</span>
                <span>Descrição:</span>
                <span>Avaliação:</span>
                <div className="radio-list-course">
                <IoMdStar className="star-list-course"/>
                <IoMdStar className="star-list-course"/>
                <IoMdStar className="star-list-course"/>
                <IoMdStar className="star-list-course"/>
                <IoMdStar className="star-list-course"/>
                </div>
            </div>

            

        </div>

    );
}



export default CardCurse;