import React, { useCallback, useContext, useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [cocktails, setCocktails] = useState([]);
    const [searchItem, setSearch] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${url}+${searchItem}`);
            const cocktail = await res.json();
            const { drinks } = cocktail;
            if (drinks) {
                const newCocktails = drinks.map((drink) => {
                    const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic, strCategory } = drink;
                    return { id: idDrink, name: strDrink, img: strDrinkThumb, glass: strGlass, type: strAlcoholic, category: strCategory };
                });
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, [searchItem]);
    useEffect(() => {
        fetchData();
    }, [searchItem, fetchData]);

    return <AppContext.Provider value={{ isLoading, setLoading, error, fetchData, cocktails, setSearch }}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
