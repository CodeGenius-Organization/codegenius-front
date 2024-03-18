import React, { useState } from 'react'
import { MdOutlineStarOutline } from "react-icons/md";
import "./StarRating.css"

export default function StarRating() {

    const [rating, setRating] = useState(null)
    const [rateColor, setColor] = useState(null)

    return (
        <>
            <div className='star-rating'>
                {[...Array(5)].map((star, index) => {
                    const currentRate = index + 1;
                    return (
                        <React.Fragment key={index}>
                            <label>
                                <MdOutlineStarOutline size={50}
                                    color={currentRate <= (rateColor || rating) ? "#F4CC3B" : "#242c50"}
                                    value={currentRate}
                                    onClick={() => setRating(currentRate)}
                                />
                            </label>
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    )

}