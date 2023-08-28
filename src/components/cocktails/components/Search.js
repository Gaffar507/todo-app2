import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';
const Search = () => {
    const searchValue = useRef('');
    const { setSearch } = useGlobalContext();

    useEffect(() => {
        searchValue.current.focus();
    }, []);
    const searchCocktail = () => {
        const value = searchValue.current.value;
        setSearch(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="search">Search </label>
                    <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </div>
    );
};

export default Search;
