import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch, IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBellRinging2Filled } from "react-icons/tb";
import { MdOutlineHelp } from "react-icons/md";

function ResponsiveHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHamburgerButtonOpen, setIsHamburgerButtonOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const innerWidth = window.innerWidth;

    if (innerWidth && innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

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

  const renderSearchBox = () => {
    return (
      <div className="searchbox">
        <IoIosSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setSearchVisible(true)}
        />
        {searchVisible && (
          <div className="searchbox-info">
            {/* aşağısı silenecek */}
            <button onClick={() => setSearchVisible(false)}>kapat</button>
            <NavLink to="/">
              <button>Anasayfa</button>
            </NavLink>
            <NavLink to="/services">
              <button>Hizmetler</button>
            </NavLink>
            <NavLink to="/services/bots">
              <button>Bots</button>
            </NavLink>
            <NavLink to="/services/text-analysis/sentiment">
              <button>Sentiment</button>
            </NavLink>
            <NavLink to="/services/text-analysis">
              <button>Text Analizi</button>
            </NavLink>
          </div>
        )}
      </div>
    );
  };

  if (isMobile) {
    return (
      <>
        <div
          className={`responsive-menu ${
            isHamburgerButtonOpen ? "responsive-menu-close before" : ""
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
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
}

export default ResponsiveHeader;

{
  /* <>
<div
  className={`responsive-menu ${
    isHamburgerButtonOpen ? "responsive-menu-close" : ""
  }`}
>
  <button className="close-hamburger-btn" onClick={closeHamburgerClick}>
    <GiCancel />
  </button>
  <>
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
  </>

  <div className="searchbox" ref={searchboxRef}>
    <IoIosSearch className="search-icon" />
    <input
      type="search"
      placeholder="Search..."
      onClick={handleSearchClick}
    />
    {isBarOpen && (
      <div
        className="searchbox-info"
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
      >
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
</div>

<div className="main-contents">
  <NavLink to="/">Anasayfa</NavLink>
  <NavLink to="/services">Hizmetler</NavLink>
  <NavLink to="/packets">Paketler</NavLink>
  <NavLink to="/products">Ürünler</NavLink>
</div>

<div className="user-buttons">
  <TbBellRinging2Filled className="bell-icon" />
  <MdOutlineHelp className="help-icon" />
  <IoIosSettings className="settings-icon" />
  <button className="more-btn" onClick={openHamburgerClick}>
    <GiHamburgerMenu />
  </button>
</div>
</> */
}
