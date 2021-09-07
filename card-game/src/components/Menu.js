import "./Menu.css";
import React from 'react';

const categories = [
  {
    name: "Fruits",
    image:
    "https://previews.123rf.com/images/tankist276/tankist2761209/tankist276120900183/15257754-still-life-of-big-heap-multi-coloured-fruits-vertical-background.jpg"
  },
  {
    name: "Vegetables",
    image:
      "https://previews.123rf.com/images/welcomia/welcomia1203/welcomia120300501/12787581-vegetables-vertical-photo-multi-vegetables-composition-tomatoes-garlic-greens-mushrooms-and-broccoli.jpg",
  },
  {
    name: "Flowers",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/flower-pond-vertical-darrell-gulin.jpg",
  },
  {
    name: "Trees",
    image: "https://previews.123rf.com/images/andreiuc88/andreiuc881204/andreiuc88120400070/13403316-vertical-photo-of-an-old-tree-in-a-green-forest.jpg"
  },
  {
    name: "Animals",
    image:
      "https://i.pinimg.com/originals/89/be/14/89be14b46af0b056eae612988d351227.jpg",
  },
  {
    name: "Birds",
    image:
      "https://i.pinimg.com/originals/91/1f/0f/911f0f5d11b049739355cb87a98273c2.jpg",
  },
];

const difficulties = ["Easy", "Medium", "Hard"];

const Menu = (props) => {


  return (
    <section className="menu">
      <h1 className="menu-header">Menu</h1>
      <div className="menu-item">
        <p>Category</p>
        <div className="category-container">
          {categories.map((category) => {
            const { name, image } = category;
            return (
              <div
                className={`item ${
                  name === props.category && "active"
                }`}
                key={name}
                onClick={() => props.onChangeCategory(name)}
              >
                <h4>{name}</h4>
                <div className="category-image">
                  <img src={image} alt={name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="menu-item">
        <p>Difficulty</p>
        <div className="difficulty-container">
          {difficulties.map((difficulty) => {
            return (
              <div
                className={`item ${
                  difficulty === props.difficulty && "active"
                }`}
                key={difficulty}
                onClick={() => props.onChangeDifficulty(difficulty)}
              >
                  <h4>{difficulty}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <button type="button" className="play-button" onClick={props.onPlayButton}>Play</button>
    </section>
  );
};

export default Menu;