import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './Context';

const SubMenu = () => {
    const {
        isSubmenuOpen,
        location,
        page: { page, links }
    } = useGlobalContext();
    const container = useRef(null);
    const [column, setColumn] = useState('col-2');

    useEffect(() => {
        setColumn('col-2');
        const subMenu = container.current;
        const { center, bottom } = location;
        subMenu.style.left = `${center}px`;
        subMenu.style.top = `${bottom}px`;

        if (links.length === 3) {
            setColumn('col-3');
        }
        if (links.length > 3) {
            setColumn('col-4');
        }
    }, [location, links]);

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}><span className="subMenu-header"> {page}</span>
            <div className={`submenu-center ${column}`}>
                {links.map((link, index) => {
                    const { label, url, icon } = link;
                    return (
                        <a className="col-2 submenu-link" key={index} href={url}>
                            {label}
                            {icon}
                        </a>
                    );
                })}
            </div>
        </aside>
    );
};

export default SubMenu;
