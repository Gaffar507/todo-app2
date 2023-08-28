import React from 'react';
import logo from './logo.svg';
import { links, social } from './data';
import { useGlobalContext } from './Context';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <div className={`${isSidebarOpen ? `sidebar-container show-sidebar ` : `sidebar-container `}`}>
            <div className="sidebar-header">
                <img className="code-img" src={logo} alt="coding addict" />
                <button
                    type="submit"
                    className="sidebar-btn"
                    onClick={
                        closeSidebar}>
                    <FaRegArrowAltCircleRight className="right-arrow" />
                </button>
            </div>
            <div className="sidebar-nav">
                <section className="nav-container">
                    {links.map((link) => {
                        const { id, url, icon, text } = link;
                        return (
                            <article key={id}>
                                <a className="nav-article" href={url}>
                                    {icon} {text}
                                </a>
                            </article>
                        );
                    })}
                </section>
            </div>
            <div className="sidebar-footer">
                <section className="link-container">
                    {social.map((link) => {
                        const { id, url, icon } = link;
                        return (
                            <article className="" key={id}>
                                <a className="link" href={url}>
                                    {icon}
                                </a>
                            </article>
                        );
                    })}
                </section>
            </div>
        </div>
    );
};

export default Sidebar;
