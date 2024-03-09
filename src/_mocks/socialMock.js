import kaue from "../pages/institutional/assets/kaue.png";
import lucas from "../pages/institutional/assets/lucas.png";
import mariana from "../pages/institutional/assets/mariana.png";
import paula from "../pages/institutional/assets/paula.png";
import thiago from "../pages/institutional/assets/thiago.png";
import victor from "../pages/institutional/assets/victor.png";

export const _mockFollowingUsers = () => {
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
    }, 1000);
  });
};

export const _mockFollowersUsers = () => {
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
    }, 1000);
  });
};
