import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { BsChatQuote } from 'react-icons/bs';
const Review = ({ data }) => {
    const [index, setIndex] = useState(0);
    const { id, name, image, job, text } = data[index];

    const checkData = (number) => {
        if (number >= data.length) {
            return 0;
        }
        if (number < 0) {
            return data.length - 1;
        }
        return number;
    };
    const rightReview = () => {
        setIndex((previous) => {
            const newData = previous + 1;
            return checkData(newData);
        });
    };
    const leftReview = () => {
        setIndex((previous) => {
            const newData = previous - 1;
            return checkData(newData);
        });
    };
    const random = () => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setIndex(randomNumber);
    };
    return (
        <main>
            <section className="review-container">
                <article>
                <span className="icon">
                        <BsChatQuote />
                    </span>
                    <img className="review-img" src={image} alt={name} />
                    <div className="description">
                        <h3>{name}</h3>
                        <h4>{job}</h4>
                        <p className="text">{text}</p>
                    </div>
                    <div className='btn-group'>
                        <button onClick={leftReview}>
                            <FaAngleDoubleLeft />
                        </button>
                        <button onClick={random}>Random Surprise</button>
                        <button onClick={rightReview}>
                            <FaAngleDoubleRight />
                        </button>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Review;
