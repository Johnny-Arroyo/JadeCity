import React, { useState, useEffect } from 'react'
import Icon from '../JadeCityIcon/JadeCityIcon'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [hovered, setHovered] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false) // State to handle menu open/close
    const handleLinkClick = () => {
        setMenuOpen(false) // Close the menu when a link is clicked
    }
    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)
    const toggleMenu = () => setMenuOpen(!menuOpen) // Toggle function

    //function to handle drawer when window is resized while it's open
    const handleResize = () => {
        if (window.innerWidth > 849) {
            setMenuOpen(false)
        }
    }

    useEffect(() => {
        // Add the event listener when the component mounts
        window.addEventListener('resize', handleResize)

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="nav-background">
            <header>
                <nav aria-label="Main navigation">
                    {/* Logo on the left */}
                    <div
                        className={`logo-wrapper ${
                            hovered ? 'hovered' : ''
                        }`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <h1 className="jade-city-records">
                            <Link to="/">
                                <Icon
                                    icon="JadeCityIcon"
                                    id="jc-icon"
                                    alt="Jade City Emblem"
                                />
                                <span className="JCR">
                                    JADE CITY RECORDS
                                </span>
                            </Link>
                        </h1>
                    </div>
                    {/* Centered Navigation Links */}
                    <div
                        className={`nav-links ${
                            menuOpen ? 'open' : ''
                        }`}>
                        <ul role="list">
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                            <li>
                                <Link to="/news">news</Link>
                            </li>
                            <li>
                                <Link to="/artists">artists</Link>
                            </li>
                            <li>
                                <Link to="/shop">shop</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Social Links on the right */}
                    <div className="social-links">
                        <ul role="list">
                            <li>
                                <a
                                    className="spotify"
                                    href="https://open.spotify.com/playlist/6VVSzRxczOu431YRU941YD?si=1c97cf7f19ed4dde&nd=1&dlsi=4087f4d648d4414d"
                                    target="_blank"
                                    aria-label="Spotify">
                                    <span
                                        className="fa-brands fa-spotify"
                                        aria-hidden="true"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="youtube"
                                    href="https://www.youtube.com/@JadeCityRecords"
                                    target="_blank"
                                    aria-label="YouTube">
                                    <span
                                        className="fa-brands fa-youtube"
                                        aria-hidden="true"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="discord"
                                    href="https://discord.gg/GhG5D8qhyv"
                                    target="_blank"
                                    aria-label="Discord">
                                    <span
                                        className="fa-brands fa-discord"
                                        aria-hidden="true"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    href="https://www.instagram.com/jadecityrecords/"
                                    target="_blank"
                                    aria-label="Instagram">
                                    <span
                                        className="fa-brands fa-instagram"
                                        aria-hidden="true"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Hamburger Button */}
                    <div
                        className={`hamburger-wrapper ${
                            menuOpen ? 'open' : ''
                        }`}
                        id="hamburger"
                        onClick={toggleMenu}>
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    {/* Nav Links Drawer */}
                    <div
                        className={`nav-drawer ${
                            menuOpen ? 'open' : ''
                        }`}>
                        <ul role="list">
                            <li>
                                <Link
                                    to="/about"
                                    onClick={handleLinkClick}>
                                    about
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    onClick={handleLinkClick}>
                                    news
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/artists"
                                    onClick={handleLinkClick}>
                                    artists
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop"
                                    onClick={handleLinkClick}>
                                    shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={handleLinkClick}>
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
