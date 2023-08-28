import React, { useState } from 'react';
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";

const Questions = ({ id, title, info }) => {
    const [toggle, setToggle] = useState(false);
    return (
            <article className='container' key={id}>
              <div>
                <h3 className='container-title'>{title}</h3>
                {toggle && <p className='info'>{info}</p>}
              </div>
                <div>
                  <button className='btn' onClick={() => setToggle(!toggle)}>{toggle ? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle/>}</button>
                </div>
            </article>
    );
};

export default Questions;
