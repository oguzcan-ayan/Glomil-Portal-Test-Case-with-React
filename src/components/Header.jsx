import React, { useState, useEffect, useRef } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { IoArrowUp } from "react-icons/io5";
import { IoIosSearch, IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBellRinging2Filled } from "react-icons/tb";
import { MdOutlineHelp } from "react-icons/md";

function Header() {

    const [isMobile, setIsMobile] = useState(false);
    const [isHamburgerButtonOpen, setIsHamburgerButtonOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const searchboxRef = useRef(null);

    useEffect(() => {
        const innerWidth = window.innerWidth;

        if (innerWidth && innerWidth <= 768) {
            setIsMobile(true);
        }
    }, []);

    console.log(innerWidth);

    useEffect(() => {

        const handleClickOutsideSearchbox = (event) => {
            if (searchboxRef.current && !searchboxRef.current.contains(event.target)) {
                setSearchVisible(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideSearchbox);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideSearchbox);
        }
    }, [searchboxRef])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const renderNavigation = (isMobile) => {
        const navs = [
            {
                name: "Anasayfa",
                path: "/",
            },
            {
                name: "Hizmetler",
                path: "/services",
            },
            {
                name: "Paketler",
                path: "/packets",
            },
            {
                name: "Ürünler",
                path: "/products",
            },
        ];

        return (
            <div className="main-contents">
                {navs.map((nav, index) => (
                    <NavLink
                        key={index}
                        to={nav.path}
                        onClick={() => isMobile && setIsHamburgerButtonOpen(false)}
                    >
                        {nav.name}
                    </NavLink>
                ))}
            </div>
        );
    };

    const handleCloseSearch = () => {
        setSearchVisible(false);
    }

    const handleSearchBlur = () => {
        setSearchVisible(false);
    }

    const handleSearchFocus = () => {
        setSearchVisible(true);
    }

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    }

    const renderSearchBox = () => {
        return (
            <div className="searchbox" ref={searchboxRef}>
                <IoIosSearch className="search-icon" />
                <input
                    type="search"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onClick={handleSearchClick}
                />
                {searchVisible && (
                    <div className="searchbox-info" onFocus={handleSearchFocus} onBlur={handleSearchBlur}>
                        <NavLink to="/">
                            <button onClick={handleCloseSearch}>Anasayfa</button>
                        </NavLink>
                        <NavLink to="/services">
                            <button onClick={handleCloseSearch}>Hizmetler</button>
                        </NavLink>
                        <NavLink to="/services/bots">
                            <button onClick={handleCloseSearch}>Bots</button>
                        </NavLink>
                        <NavLink to="/services/text-analysis/sentiment">
                            <button onClick={handleCloseSearch}>Sentiment</button>
                        </NavLink>
                        <NavLink to="/services/text-analysis">
                            <button onClick={handleCloseSearch}>Text Analizi</button>
                        </NavLink>
                    </div>
                )}
            </div>
        );
    }

    if (isMobile) {
        return (
            <>
                <div className='portal-header'>
                    <NavLink to="/">
                        <img className='glomil-logo' src='assets/img/glomil-logo.png' alt="glomil-site-logo" />
                    </NavLink>

                    <div
                        className={`responsive-menu ${isHamburgerButtonOpen ? "responsive-menu-close before" : ""
                            }`}
                    >
                        <button
                            className="close-hamburger-btn"
                            onClick={() => {
                                setIsHamburgerButtonOpen(false);
                            }}
                        >
                            <GiCancel />
                        </button>
                        <div className="user-contents">
                            <div className="user-log">
                                <span className="user-active-dot"></span>
                                <FaUser className="user-icon" />
                            </div>
                            <div className="user-info">
                                <span className="username">Glomil</span>
                                <div className="user-mail">glml@glomil.com</div>
                            </div>
                        </div>
                        {renderNavigation(isMobile)}
                    </div>
                    {isHamburgerButtonOpen && (
                        <div className="responsive-menu-overlay"></div>
                    )}
                    {renderSearchBox()}
                    <div className="user-buttons">
                        <TbBellRinging2Filled className="bell-icon" />
                        <MdOutlineHelp className="help-icon" />
                        <IoIosSettings className="settings-icon" />
                        <button
                            className="more-btn"
                            onClick={() => {
                                setIsHamburgerButtonOpen(true);
                            }}
                        >
                            <GiHamburgerMenu />
                        </button>
                    </div>

                    <a className='scroll-to-top-btn' onClick={scrollToTop}><IoArrowUp className='arrow-up' /></a>
                </div>
            </>
        );
    }

    else {
        return (
            <>
                <div className='portal-header'>
                    <NavLink to="/">
                        <img className='glomil-logo' src='assets/img/glomil-logo.png' alt="glomil-site-logo" />
                    </NavLink>

                    {renderNavigation(isMobile)}
                    {renderSearchBox()}

                    <div className="user-contents">
                        <TbBellRinging2Filled className="bell-icon" />
                        <MdOutlineHelp className="help-icon" />
                        <IoIosSettings className="settings-icon" />
                        <div className="user-log">
                            <span className="user-active-dot"></span>
                            <FaUser className="user-icon" />
                        </div>
                        <div className="user-info">
                            <span className="username">Glomil</span>
                            <div className="user-mail">glml@glomil.com</div>
                        </div>
                    </div>

                    <a className='scroll-to-top-btn' onClick={scrollToTop}><IoArrowUp className='arrow-up' /></a>
                </div>
            </>
        );
    }
}

export default Header;