import React, { useEffect, useState } from "react";

import "./Social.css";
import Loading from "../../../shared/components/loading/Loading";
import Filters from "../../../shared/components/filter/Filter";
import FriendCard from "./components/friend-card/FriendCard";
import TopBarSocial from "./components/top-bar-social/TopBarSocial";

import {
  _mockFollowersUsers,
  _mockFollowingUsers,
} from "../../../_mocks/socialMock";

const tabSocialMapping = {
  Seguindo: _mockFollowersUsers,
  "Seus Seguidores": _mockFollowingUsers,
};

function Social() {
  const [loading, setLoading] = useState(false);
  const [selectFilter, setSelectFilter] = useState("none");
  const [socialList, setSocialList] = useState([]);
  const [search, setSearch] = useState();
  const [currentTab, setCurrentTab] = useState("Seguindo");

  useEffect(() => {
    setLoading(true);
    tabSocialMapping[currentTab]().then((friends) => {
      setSocialList(friends);
      setLoading(false);
    });
  }, [currentTab]);

  const handleFilter = (filter) => {
    setSelectFilter(filter);
  };

  const handleSearchFilter = (filter) => {
    setSearch(filter);
  };

  const unfollowFriend = (friendId) => {
    setSocialList((friends) =>
      friends.filter((friend) => friend.id !== friendId)
    );
  };

  const followFriend = (friendId) => {
    console.log("pra fazer", friendId);
  };

  const listFriends = () => {
    let filterd = [...socialList];

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
          <div className="course_list">{listFriends()}</div>
        )}
      </div>
    </>
  );
}

export default Social;
