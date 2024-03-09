import React from "react";
import "./FriendCard.css";

function FriendCard({ name, img, handleUnfollow, handleFollow, id }) {
  return (
    <>
      <div className="card">
        <div className="profile_picture">
          <img src={img} alt="" />
        </div>
        <div className="name">
          <p>{name}</p>
        </div>
        {handleUnfollow && (
          <div className="unfollow_btn">
            <button className="unfollow" onClick={() => handleUnfollow?.(id)}>
              Deixar de seguir
            </button>
          </div>
        )}

        {handleFollow && (
          <div className="unfollow_btn">
            <button className="unfollow" onClick={() => handleFollow?.(id)}>
              Seguir
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FriendCard;
