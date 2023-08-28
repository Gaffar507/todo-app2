import React, { useState } from 'react';
import dataList from './Data';
import List from './List';
export default function App() {
    const [data, setData] = useState(dataList);
    return (
        <div className='container'>
            <h3>Birthday Remainder App</h3>
            <List data={data} />
            <button
                type="reset"
                onClick={() => {
                    setData([]);
                }}>
                Reset All
            </button>
        </div>
    );
}
