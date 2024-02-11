import React from 'react'
import './CardLesson.css';
import { useState } from 'react'
import img from './assets/card-default.svg';
import img3 from './assets/shadow-favorite.svg';
import { MdOutlineFavorite, MdOutlineFavoriteBorder, MdOutlineStarOutline, MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";

import { FaCircle } from "react-icons/fa6";

function CardLesson({ course, onCardClick }) {

    const [favorite, setFavorite] = useState(false)

    const handleCardClick = (courseId) => {
        onCardClick(courseId)
    }

    return (
        <>
            <div className="cardCourse">
                <div className="imgCourse">
                    <img src={img} alt='image' onClick={() => handleCardClick(course.id)} />
                    <div className="fav">
                        {!favorite ?
                            <MdOutlineFavoriteBorder className='favorite' onClick={() => setFavorite(!favorite)} /> :
                            <MdOutlineFavorite className='favorite-fill' onClick={() => setFavorite(!favorite)} />
                        }
                    </div>
                </div>

                <div className="containerCourse" onClick={() => handleCardClick(course.id)}>
                    <div className="card_lesson">
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
                                <span>{course.stars.toFixed(1)} (1987)</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLesson