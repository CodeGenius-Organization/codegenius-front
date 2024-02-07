import React from "react";
import './FriendCard.css'

function FriendCard() {
    return (
        <>
            <div className="card">
                <div className="profile_picture">
                    <img src="https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw" alt="" />
                </div>
                <div className="name">
                    <p>Paula Maria</p>
                </div>
                <div className="unfollow_btn">
                    <button className="unfollow">Deixar de seguir</button>
                </div>
            </div>
        </>
    )
}

export default FriendCard