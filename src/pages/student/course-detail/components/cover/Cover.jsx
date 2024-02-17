import React, { useState } from "react";
import "./Cover.css"
import { MdOutlineFavorite, MdOutlineFavoriteBorder} from "react-icons/md";

function Cover({ title, contentDescription, courseDescription }) {

    const [favorite, setFavorite] = useState(false)

    return (
        <>
            <div className="learn_section">
                <span>O que aprenderá:</span>
                <div className="lesson_content">
                    <div className="lesson-header">
                        <span>{ title }</span>
                        <div className="like_button">
                        {!favorite ?
                            <MdOutlineFavoriteBorder className='favorite' onClick={() => setFavorite(!favorite)} /> :
                            <MdOutlineFavorite className='favorite-fill' onClick={() => setFavorite(!favorite)} />
                        }
                            <span>Curtir</span>
                        </div>
                    </div>
                    <div className="cover-description">
                        <span>{ contentDescription }</span>
                        <span>{ courseDescription }</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cover