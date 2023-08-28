import { Navigate, Link } from 'react-router-dom';

const Cocktail = ({ id, name, img, glass, category, type }) => {
    return (
        <section className="cocktail-card">
            <img src={img} alt={name} />
            <article className="cocktail-details">
                <h3>Drink Name: {name}</h3>
                <p>Glass: {glass}</p>
                <p>Category: {category}</p>
                <p>Type : {type}</p>
                <Link to={`/home/${id}`} state={{id}}> <span>Details</span> </Link>
            </article>
        </section>
    );
};

export default Cocktail;
