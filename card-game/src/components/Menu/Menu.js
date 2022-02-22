import "./Menu.css";
import React from "react";
import MenuHeader from "./MenuHeader/MenuHeader";
import CategoryContainer from "./Category/CategoryContainer";
import DifficultyContainer from "./Difficulty/DifficultyContainer";
import PlayButton from "./PlayButton/PlayButton";

const Menu = (props) => {
  return (
    <section className="menu">
      <MenuHeader />
      <CategoryContainer />
      <DifficultyContainer />
      <PlayButton  />
    </section>
  );
};

export default Menu;
