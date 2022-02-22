import "./CategoryContainer.css";
import { categories } from "../../../data/data.js";
import CategoryItem from "./CategoryItem/CategoryItem";
import GameContext from "../../../store/game-context";
import { useContext } from "react";

export default function CategoryContainer(props) {
  const gameCtx = useContext(GameContext);

  return (
    <div className="menu-item">
      <p>Category</p>
      <div className="category-container">
        {categories.map((category) => {
          const { name, image } = category;
          return (
            <CategoryItem
              key={name}
              name={name}
              image={image}
              active={name === gameCtx.category.value}
            />
          );
        })}
      </div>
    </div>
  );
}
