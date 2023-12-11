import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Navbar() {

    const [sidePanel, setSidePanel] = useState(false);
    const [search, setSearch] = useState("");

    const handleClick = (e) => {
        const { nodeName } = e.target;
        if (nodeName === 'LI') {
            setSidePanel(false);
            window.scrollTo(0, 0);
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="side-menu" style={{ transform: sidePanel ? "translateX(0%)" : "translateX(-100%)" }}>
                <div className="close">
                    <FontAwesomeIcon icon={faXmark} style={{ color: "white", fontSize: "1.8rem" }} onClick={() => setSidePanel(false)} />
                </div>

                <ul className="side-items flex" onClick={handleClick}>
                    <Link to="/"><li>News</li></Link>
                    <Link to="/technology" state={{ name: "Technology" }}><li>Technology</li></Link>
                    <Link to="/earth" state={{ name: "Our Planet" }}><li>Our Planet</li></Link>
                    <Link to="/health and science" state={{ name: "Health and Science" }}><li>Health and Science</li></Link>
                    <Link to="/sports" state={{ name: "Sports" }}><li>Sports</li></Link>
                </ul>
            </div>
            <div className='hero'>
                <div className='container'>
                    <div className='nav'>
                        <ul className='nav-list flex'>
                            <div className='flex'><FontAwesomeIcon icon={faBars} className='bars' onClick={() => setSidePanel(true)} />
                                <Link to="/"><li className='logo' onClick={() => window.scrollTo(0, 0)} >The News Galaxy</li></Link>
                            </div>
                            <ul className='sub-list flex' onClick={handleClick} >
                                <Link to="/"><li>News</li></Link>
                                <Link to="/technology" state={{ name: "Technology" }}><li>Technology</li></Link>
                                <Link to="/earth" state={{ name: "Our Planet" }}><li>Our Planet</li></Link>
                                <Link to="/health and science" state={{ name: "Health and Science" }}><li>Health and Science</li></Link>
                                <Link to="/sports" state={{ name: "Sports" }}><li>Sports</li></Link>
                            </ul>
                            <form className="search">
                                <input type="text" className="searchInput" placeholder="Search news..." name="search" autoComplete="off" required onChange={handleSearch} />
                                <Link to={search !== "" && "/search/" + search} state={{ name: "Search results for "+search }}>
                                    <button className="searchBtn" type="submit" >
                                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1rem" }} />
                                    </button>
                                </Link>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar