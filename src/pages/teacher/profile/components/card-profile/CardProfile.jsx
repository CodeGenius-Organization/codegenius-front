import React from "react";
import "./CardProfile.css"
import pfp from "../../../../../shared/assets/avatar-profile.png"
import {MdOutlineGroupAdd} from "react-icons/md"
import {BsCalendarCheck} from "react-icons/bs"
import {LiaMedalSolid} from "react-icons/lia"
import {BsTrophy} from "react-icons/bs"
import Stat from "../stat/Stat";

function CardProfile() {
    const followStyle = {color: "white", width: "30px", height: "30px"}
    const calendarStyle = {color: "white", width: "42px", height: "47px"}
    const medalStyle = {color: "white", width: "47px", height: "45px"}
    const trophyStyle = {color: "white", width: "35px", height: "40px"}
    
    return (
        <>
            <div className="profile_container">
                <div className="profile_info">
                    <div className="pfp_name_section">
                        <img src={pfp} alt="" srcSet="" />
                        <div className="name_email">
                            <span className="name">Mariana Ribeiro</span>
                            <span className="email">mariana.ribeiro@gmail.com</span>
                        </div>
                    </div>
                    <div className="follower_sectio">
                        <div className="follow_numbers">
                            <span className="following">Segue 2</span>
                            <span className="followers">Tem 2 seguidores</span>
                        </div>
                        <div className="follow_button">
                            <MdOutlineGroupAdd style={followStyle}/>
                            <span>SIGA UM AMIGO</span>
                        </div>
                    </div>
                    <div className="stats_section">
                        <Stat 
                        icon={<BsCalendarCheck style={calendarStyle}/>} 
                        number={15}
                        text={"Dias seguidos"}
                        />
                        
                        <Stat 
                        icon={<LiaMedalSolid style={medalStyle}/>} 
                        number={4}
                        text={"Pódios"}
                        />
                        
                        <Stat 
                        icon={<BsTrophy style={trophyStyle}/>}
                        number={10682}
                        text={"Total de pontos"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProfile



// <div className="day_streak">
//                             <BsCalendarCheck style={calendarStyle} />
//                             <div className="streak-info">
//                                 <span className="streak-days">
//                                     15
//                                 </span>
//                                 <span className="days-info">
//                                     Dias seguidos
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="podiums-section">
//                             <LiaMedalSolid style={medalStyle}/>
//                             <div className="podium-info">
//                                 <span className="podium-qnt">
//                                     4
//                                 </span>
//                                 <span className="podium-text">
//                                     Pódios
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="total-points">
//                             <BsTrophy style={trophyStyle} />
//                             <div className="points-info">
//                                 <span className="total-points">
//                                     10682
//                                 </span>
//                                 <span className="points-text">
//                                     Total de pontos
//                                 </span>
//                             </div>
//                         </div>