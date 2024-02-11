import React from "react";
import './Stat.css'

function Stat({ icon, number, text }) {
    return (
        <>
            <div className="stats_wrapper">
                <div className="icon_wrapper">
                    {icon}
                </div>
                <div className="stats_info">
                    <span className="stats_numbe">
                        {number}
                    </span>
                    <span className="stats_text">
                        {text}
                    </span>
                </div>
            </div>

        </>
    )
}

export default Stat