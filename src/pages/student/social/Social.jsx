import React from "react";

import './Social.css'
import Filters from '../../../shared/components/filter/Filter'
import FriendCard from "./components/friend-card/FriendCard";
import TopBarSocial from "./components/top-bar-social/TopBarSocial";

function Social() {
    return (
        <>
            <div className="main_section">
                <TopBarSocial/>
                <Filters />
                <div className="course_list">
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                </div>
            </div>
        </>
    )
}

export default Social