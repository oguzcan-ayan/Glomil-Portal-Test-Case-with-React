import React, { useState, useEffect, useRef } from 'react';
import { IoIosSearch, IoIosSettings } from "react-icons/io";
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBellRinging2Filled } from 'react-icons/tb';
import { MdOutlineHelp } from 'react-icons/md';

function ResponsiveHeader() {

    const [isHamburgerButtonOpen, setIsHamburgerButtonOpen] = useState(false);
    const [isResponsiveHeaderMobile, setIsResponsiveHeaderMobile] = useState(false);
    const [isResponsiveHeaderLMobile, setIsResponsiveHeaderLMobile] = useState(false);
    const [isBarOpen, setIsBarOpen] = useState(false);
    const searchboxRef = useRef(null);

    useEffect(() => {
        const handleLMobileResize = () => {

            if (window.innerWidth > 576 && window.innerWidth <= 768) {
                console.log(window.innerWidth);
                setIsResponsiveHeaderLMobile(true);
            }
            else {
                setIsResponsiveHeaderLMobile(false);
            }
        }

        handleLMobileResize();


        window.addEventListener('resize', handleLMobileResize);


        return () => {
            window.removeEventListener('resize', handleLMobileResize);
        }
    }, []);

    useEffect(() => {
        const handleMobileResize = () => {

            if (window.innerWidth <= 576) {
                console.log(window.innerWidth);
                setIsResponsiveHeaderMobile(true);
            }
            else {
                setIsResponsiveHeaderMobile(false);
            }
        }

        handleMobileResize();


        window.addEventListener('resize', handleMobileResize);


        return () => {
            window.removeEventListener('resize', handleMobileResize);
        }
    }, []);

    useEffect(() => {
        const handleClickOutsideSearchbox = (event) => {
            if (searchboxRef.current && !searchboxRef.current.contains(event.target)) {
                setIsBarOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideSearchbox);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideSearchbox);
        }
    }, [searchboxRef]);

    const handleSearchFocus = () => {
        setIsBarOpen(true);
    }

    const handleSearchBlur = () => {
        setIsBarOpen(false);
    }
    const handleCloseSearch = () => {
        setIsBarOpen(false);
    }

    const handleSearchClick = () => {
        setIsBarOpen(!isBarOpen);
    }

    const openHamburgerClick = () => {
        setIsHamburgerButtonOpen(true);
        console.log("open button is working");
    }

    const closeHamburgerClick = () => {
        setIsHamburgerButtonOpen(false);
        console.log("close button is working");
    }

    if (isResponsiveHeaderLMobile) {
        return (
            <>
                <div className={`responsive-menu ${isHamburgerButtonOpen ? 'responsive-menu-close' : ''}`}>
                    <button className='close-hamburger-btn' onClick={closeHamburgerClick}><GiCancel /></button>
                    <>
                        <div className='user-contents'>
                            <div className='user-log'>
                                <span className='user-active-dot'></span>
                                <FaUser className='user-icon' />
                            </div>

                            <div className='user-info'>
                                <span className='username'>Glomil</span>
                                <div className='user-mail'>glml@glomil.com</div>
                            </div>

                        </div>
                    </>

                    <div className='searchbox' ref={searchboxRef}>
                        <IoIosSearch className='search-icon' />
                        <input type="search" placeholder="Search..." onClick={handleSearchClick} />
                        {isBarOpen && (
                            <div className='searchbox-info' onFocus={handleSearchFocus} onBlur={handleSearchBlur}>
                                <NavLink to="/"><button onClick={handleCloseSearch}>Anasayfa</button></NavLink>
                                <NavLink to="/services"><button onClick={handleCloseSearch}>Hizmetler</button></NavLink>
                                <NavLink to="/services/bots"><button onClick={handleCloseSearch}>Bots</button></NavLink>
                                <NavLink to="/services/text-analysis/sentiment"><button onClick={handleCloseSearch}>Sentiment</button></NavLink>
                                <NavLink to="/services/text-analysis"><button onClick={handleCloseSearch}>Text Analizi</button></NavLink>
                            </div>
                        )
                        }
                    </div>
                </div>

                <div className='main-contents'>
                    <NavLink to="/">Anasayfa</NavLink>
                    <NavLink to="/services">Hizmetler</NavLink>
                    <NavLink to="/packets">Paketler</NavLink>
                    <NavLink to="/products">Ürünler</NavLink>
                </div>

                <div className='user-buttons'>
                    <TbBellRinging2Filled className='bell-icon' />
                    <MdOutlineHelp className='help-icon' />
                    <IoIosSettings className='settings-icon' />
                    <button className='more-btn' onClick={openHamburgerClick}><GiHamburgerMenu /></button>
                </div>
            </>
        )
    }

    else if (isResponsiveHeaderMobile) {
        return (
            <>
                <div className={`responsive-menu ${isHamburgerButtonOpen ? 'responsive-menu-close before' : ''}`}>
                    <button className='close-hamburger-btn' onClick={closeHamburgerClick}><GiCancel /></button>
                    <>
                        <div className='user-contents'>
                            <div className='user-log'>
                                <span className='user-active-dot'></span>
                                <FaUser className='user-icon' />
                            </div>

                            <div className='user-info'>
                                <span className='username'>Glomil</span>
                                <div className='user-mail'>glml@glomil.com</div>
                            </div>

                        </div>

                    </>

                    <div className='main-contents'>
                        <NavLink to="/">Anasayfa</NavLink>
                        <NavLink to="/services">Hizmetler</NavLink>
                        <NavLink to="/packets">Paketler</NavLink>
                        <NavLink to="/products">Ürünler</NavLink>
                    </div>
                </div>

                {isHamburgerButtonOpen && <div className='responsive-menu-overlay'></div>}
                <>

                    <div className='searchbox' ref={searchboxRef}>
                        <IoIosSearch className='search-icon' />
                        <input type="search" placeholder="Search..." onClick={handleSearchClick} />
                        {isBarOpen && (
                            <div className='searchbox-info' onFocus={handleSearchFocus} onBlur={handleSearchBlur}>
                                <NavLink to="/"><button onClick={handleCloseSearch}>Anasayfa</button></NavLink>
                                <NavLink to="/services"><button onClick={handleCloseSearch}>Hizmetler</button></NavLink>
                                <NavLink to="/services/bots"> <button onClick={handleCloseSearch}>Bots</button></NavLink>
                                <NavLink to="/services/text-analysis/sentiment">  <button onClick={handleCloseSearch}>Sentiment</button></NavLink>
                                <NavLink to="/services/text-analysis"> <button onClick={handleCloseSearch}>Text Analizi</button></NavLink>
                            </div>
                        )
                        }
                    </div>

                    <div className='user-buttons'>
                        <TbBellRinging2Filled className='bell-icon' />
                        <MdOutlineHelp className='help-icon' />
                        <IoIosSettings className='settings-icon' />
                        <button className='more-btn' onClick={openHamburgerClick}><GiHamburgerMenu /></button>
                    </div>
                </>
            </>
        )
    }


    return (
        <>
            <div className='main-contents'>
                <NavLink to="/">Anasayfa</NavLink>
                <NavLink to="/services">Hizmetler</NavLink>
                <NavLink to="/packets">Paketler</NavLink>
                <NavLink to="/products">Ürünler</NavLink>
            </div>

            <div className='searchbox' ref={searchboxRef}>
                <IoIosSearch className='search-icon' />
                <input type="search" placeholder="Search..." onClick={handleSearchClick} />

                {isBarOpen && (
                    <div className='searchbox-info' onFocus={handleSearchFocus} onBlur={handleSearchBlur}>
                        <NavLink to="/"><button onClick={handleCloseSearch}>Anasayfa</button></NavLink>
                        <NavLink to="/services"><button onClick={handleCloseSearch}>Hizmetler</button></NavLink>
                        <NavLink to="/services/bots"><button onClick={handleCloseSearch}>Bots</button></NavLink>
                        <NavLink to="/services/text-analysis/sentiment"> <button onClick={handleCloseSearch}>Sentiment</button></NavLink>
                        <NavLink to="/services/text-analysis"> <button onClick={handleCloseSearch}>Text Analizi</button></NavLink>
                    </div>
                )}
            </div>

            <>
                <div className='user-contents'>
                    <TbBellRinging2Filled className='bell-icon' />
                    <MdOutlineHelp className='help-icon' />
                    <IoIosSettings className='settings-icon' />

                    <div className='user-log'>
                        <span className='user-active-dot'></span>
                        <FaUser className='user-icon' />
                    </div>

                    <div className='user-info'>
                        <span className='username'>Glomil</span>
                        <div className='user-mail'>glml@glomil.com</div>
                    </div>

                </div>

            </>
        </>
    )
}

export default ResponsiveHeader;