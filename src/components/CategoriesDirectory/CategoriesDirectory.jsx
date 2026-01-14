import "./CategoriesDirectory.styles.scss";
import CategoryItem from "../CategoryItem/CategoryItem";
("../CategoryItem/CategoryItem");

const CategoriesDirectory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default CategoriesDirectory;
