import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../components/IsLoading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const SingleCocktail = () => {
    const { id } = useParams();
    const navigate=useNavigate()
    const[isLoading, setLoading]=useState(false)
    const [cocktails, setCocktails] = useState([]);

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${url}+${id}`);
            const cocktail = await res.json();
            const { drinks } = cocktail;
            if (drinks) {
                const newCocktails = drinks.map((drink) => {
                    const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic, strCategory, strInstructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = drink;
                    const ingredents=[            
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,]
                    return { id: idDrink, name: strDrink, img: strDrinkThumb, glass: strGlass, type: strAlcoholic, category: strCategory,instructions:strInstructions, ingredents };
                });
                setCocktails(newCocktails);
                setLoading(false)
            } else {
                setCocktails([]);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, [id]);

    if(isLoading){
        return<IsLoading/>
    }

    return <section>{cocktails.map((item)=>{
      const{ id,img,name,glass ,type,category,instructions ,ingredents}=item;
      return(
        <div key={id} className='info-container'>
            <h1>See a lot of information about "{name}"</h1>
              <div className="main">
                <img src={img} alt={name} />
                <div className="details">
                    <h2>{name}</h2>
                    <p><span className='type'> Type :</span>  {type}</p>
                    <p><span className='category'>Category :</span>{category} </p>
                    <p><span className='glass'>Glass :</span>  {glass}</p>
                    <p><span className='instruction'> Instructions :</span> {instructions}</p>
                    <p><span className='ingredents'>Ingredents :</span>{ingredents.map((item, index)=>{
                        return item? <article key={index}>{item} </article>:null
                    })} </p>
                </div>
              </div>
            <button className='back-btn' onClick={()=>navigate('/')}>Go back to home</button>
        </div>
      )
    })}</section>;
};

export default SingleCocktail;
