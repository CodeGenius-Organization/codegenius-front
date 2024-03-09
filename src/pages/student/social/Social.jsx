import React, { useEffect, useState } from "react";

import "./Social.css";
import Loading from "../../../shared/components/loading/Loading";
import Filters from "../../../shared/components/filter/Filter";
import FriendCard from "./components/friend-card/FriendCard";
import TopBarSocial from "./components/top-bar-social/TopBarSocial";

//MOCKADO
import kaue from "../../institutional/assets/kaue.png";
import lucas from "../../institutional/assets/lucas.png";
import mariana from "../../institutional/assets/mariana.png";
import paula from "../../institutional/assets/paula.png";
import thiago from "../../institutional/assets/thiago.png";
import victor from "../../institutional/assets/victor.png";
//MOCKADO

function Social() {
  const [loading, setLoading] = useState(false);
  const [selectFilter, setSelectFilter] = useState("none");
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [search, setSearch] = useState();
  const [currentTab, setCurrentTab] = useState("Seguindo");

  useEffect(() => {
    if (currentTab === "Seguindo") {
      setLoading(true);
      _mockFollowersUsers().then((users) => {
        setFollowersList(users);
        setLoading(false);
      });
    } else {
      setLoading(true);
      _mockFollowingUsers().then((users) => {
        setFollowingList(users);
        setLoading(false);
      });
    }
  }, [currentTab]);

  const _mockFollowersUsers = () => {
    return new Promise((res, _) => {
      setTimeout(() => {
        res([
          {
            name: "Kaue (Seguindo)",
            id: "Kaue",
            img: kaue,
          },
          {
            name: "_",
            id: "_",
            img: "https://avatars.githubusercontent.com/u/38053457?v=4",
          },
          {
            name: "Lucas",
            id: "Lucas",
            img: lucas,
          },
          {
            name: "Mariana",
            id: "Mariana",
            img: mariana,
          },
          {
            name: "Paula",
            id: "paula",
            img: paula,
          },
          {
            name: "Thiago",
            id: "Thiago",
            img: thiago,
          },
          {
            name: "Victor",
            id: "Victor",
            img: victor,
          },
        ]);
      }, 2000);
    });
  };

  const _mockFollowingUsers = () => {
    return new Promise((res, _) => {
      setTimeout(() => {
        res([
          {
            name: "Kaue (Me segue)",
            id: "Kaue",
            img: kaue,
          },
          {
            name: "_",
            id: "_",
            img: "https://avatars.githubusercontent.com/u/38053457?v=4",
          },
          {
            name: "Lucas",
            id: "Lucas",
            img: lucas,
          },
          {
            name: "Mariana",
            id: "Mariana",
            img: mariana,
          },
          {
            name: "Paula",
            id: "paula",
            img: paula,
          },
          {
            name: "Thiago",
            id: "Thiago",
            img: thiago,
          },
          {
            name: "Victor",
            id: "Victor",
            img: victor,
          },
        ]);
      }, 2000);
    });
  };

  const handleFilter = (filter) => {
    setSelectFilter(filter);
  };

  const handleSearchFilter = (filter) => {
    setSearch(filter);
  };

  const unfollowFriend = (friendId) => {
    setFollowersList((friends) =>
      friends.filter((friend) => friend.id !== friendId)
    );
  };

  const followFriend = (friendId) => {
    console.log("pra fazer", friendId);
  };

  const listFriends = (userList) => {
    let filterd = [...userList];

    if (search)
      filterd = filterd.filter((friend) =>
        friend?.name?.toLowerCase().includes(search)
      );

    if (selectFilter) {
      if (selectFilter === "asc")
        filterd = filterd.sort((a, b) => a.name.localeCompare(b.name));
      if (selectFilter === "desc")
        filterd = filterd
          .sort((a, b) => a.name.localeCompare(b.name))
          .reverse();
    }

    return filterd.map((friend) => (
      <FriendCard
        name={friend.name}
        img={friend.img}
        id={friend.id}
        handleUnfollow={currentTab === "Seguindo" && unfollowFriend}
        handleFollow={currentTab === "Seus Seguidores" && followFriend}
      />
    ));
  };

  return (
    <>
      <div className="main_section">
        <TopBarSocial currentTab={currentTab} handleTabChange={setCurrentTab} />
        <Filters
          onChangeFilter={handleFilter}
          currentCategory={selectFilter}
          onChangeSearch={handleSearchFilter}
        />
        {loading ? (
          <div className="loading-container">
            <Loading backgroundColor={"#121526"} />
          </div>
        ) : (
          <div className="course_list">
            {listFriends(
              currentTab === "Seguindo" ? followersList : followingList
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Social;
