import "./CategoryContainer.css";
import { categories } from "../../../data/data.js";
import CategoryItem from "./CategoryItem/CategoryItem";

export default function CategoryContainer(props) {
  return (
    <div className="menu-item">
      <p>Category</p>
      <div className="category-container">
        {categories.map((category) => {
          const { name, image } = category;
          return (
            <CategoryItem
              name={name}
              image={image}
              onChangeCategory={props.onChangeCategory}
              active={name === props.category}
            />
          );
        })}
      </div>
    </div>
  );
}
