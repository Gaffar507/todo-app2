import React, { useState } from 'react';
import data from './Data';
import Menu from './Menu';
import Categories from './Categories';

import './mealApp.css';

const newCategoriesData = ['all', ...new Set(data.map((menu) => menu.category))];
const MealApp = () => {
    const [mealData, setMealData] = useState(data);
    const [newCategories, setCategories] = useState(newCategoriesData);

    const breakfast = (category) => {
        if (category === 'all') {
            return setMealData(data);
        }
        const newData = data.filter((meal) => meal.category === category);
        setMealData(newData);
    };

    return (
        <div>
            <h1 className="menu-title">Our Menu</h1>
            <Categories newCategories={newCategories} getInfo={breakfast} />
            <section>
                {mealData.map((meal) => (
                    <Menu key={meal.id} {...meal} />
                ))}
            </section>
        </div>
    );
};

export default MealApp;
