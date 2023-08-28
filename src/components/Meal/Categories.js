import React from 'react';

const Categories = ({ newCategories, getInfo }) => {
    return (
        <div className="category">
            {newCategories.map((category, index) => (
                <button key={index} className="category-btn" onClick={() => getInfo(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
