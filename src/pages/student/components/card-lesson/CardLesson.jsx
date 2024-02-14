import React from 'react'
import './CardLesson.css';
import { useState } from 'react'
import img from './assets/card-default.svg';
import img3 from './assets/shadow-favorite.svg';
import { MdOutlineFavorite, MdOutlineFavoriteBorder, MdOutlineStarOutline, MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";

import { FaCircle } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function CardLesson({ course }) {

    const [favorite, setFavorite] = useState(false)
    const navigate =useNavigate()

    return (
        <>
            <div className="cardCourse">
                <div className="imgCourse" onClick={() => navigate(`/student/course/${course.title.replaceAll(" ","-").toLowerCase()}`,{state: { id: course.id}})}>
                    <img src={img} alt='image' />
                    <div className="fav">
                        {!favorite ?
                            <MdOutlineFavoriteBorder className='favorite' onClick={() => setFavorite(!favorite)} /> :
                            <MdOutlineFavorite className='favorite-fill' onClick={() => setFavorite(!favorite)} />
                        }
                    </div>
                </div>

                <div className="containerCourse">
                    <div className="card_lesson"onClick={() => navigate(`/student/course/${course.title.replaceAll(" ","-").toLowerCase()}`,{id: course.id})}>
                        <div className="info_card">
                            <span className="card_title">{course.title}</span>
                            <div className="languages">
                            { course.languages.length > 0 ?
                                    course.languages.map((language, index) =>
                                        <React.Fragment key={language.id}>
                                            {index > 0  ? <FaCircle className='icon-circle-card-lesson' /> : ""}
                                            <span >{language.language}</span>
                                        
                                        </React.Fragment>
                                    ) : <span>N/A</span>}
                            </div>
                            <span>Feito por: Helen Pêra</span>
                            <span>Em andamento</span>
                            <div className="rate">
                                <MdOutlineStarOutline className='rate-course' />
                                <MdOutlineStarOutline className='rate-course' />
                                <MdOutlineStarOutline className='rate-course' />
                                <MdOutlineStarOutline className='rate-course' />
                                <MdOutlineStarOutline className='rate-course' />
                                <span>4.0 (1987)</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLesson