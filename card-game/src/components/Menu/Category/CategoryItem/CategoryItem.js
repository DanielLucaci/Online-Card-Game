import './CategoryItem.css'

export default function CategoryItem(props) {
  return (
    <div
      className={`item category-item ${props.active && "active"}`}
      key={props.name}
      onClick={() => props.onChangeCategory(props.name)}
    >
      <h4>{props.name}</h4>
      <div className="category-image">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}
