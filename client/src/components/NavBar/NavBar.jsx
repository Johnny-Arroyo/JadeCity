import React, { useState, useEffect } from 'react'
import Icon from '../JadeCityIcon/JadeCityIcon'
import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'

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

    const location = useLocation()

    const smoothScrollToTop = () => {
        const startPosition = window.scrollY
        const duration = 800 // Scroll duration in milliseconds
        let startTime = null

        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2
            if (t < 1) return (c / 2) * t * t + b
            t--
            return (-c / 2) * (t * (t - 2) - 1) + b
        }

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const run = easeInOutQuad(
                timeElapsed,
                startPosition,
                -startPosition,
                duration
            )

            document.documentElement.scrollTop = run // Use scrollTop for cross-browser support

            if (timeElapsed < duration) {
                requestAnimationFrame(animation)
            }
        }

        requestAnimationFrame(animation)
    }
    const handleHomeClick = (event) => {
        if (location.pathname === '/') {
            event.preventDefault()
            smoothScrollToTop()
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
        <div>
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
                                <Link
                                    to="/"
                                    onClick={handleHomeClick}>
                                    <Icon
                                        icon="JadeCityIcon"
                                        id="jc-icon"
                                        alt="Jade City Emblem"
                                    />
                                </Link>
                            </h1>
                            <div className="logobg"></div>
                            {/* <div className="logobg-dup"></div> */}
                        </div>
                        {/* Centered Navigation Links */}
                        <div
                            className={`nav-links ${
                                menuOpen ? 'open' : ''
                            }`}>
                            <ul role="list">
                                <li>
                                    <Link to="/about">ABOUT</Link>
                                </li>
                                <li>
                                    <Link to="/news">NEWS</Link>
                                </li>
                                <li>
                                    <Link to="/artists">ARTISTS</Link>
                                </li>
                                <li>
                                    <Link to="/shop">SHOP</Link>
                                </li>
                                <li>
                                    <Link to="/contact">CONTACT</Link>
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
                            <ul className="nav-links" role="list">
                                <li>
                                    <Link
                                        to="/about"
                                        onClick={handleLinkClick}>
                                        ABOUT
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/news"
                                        onClick={handleLinkClick}>
                                        NEWS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/artists"
                                        onClick={handleLinkClick}>
                                        ARTISTS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/shop"
                                        onClick={handleLinkClick}>
                                        SHOP
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        onClick={handleLinkClick}>
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                            <a
                                href="https://open.spotify.com/playlist/6VVSzRxczOu431YRU941YD?si=1c97cf7f19ed4dde&nd=1&dlsi=4087f4d648d4414d"
                                target="_blank"
                                aria-label="Spotify"
                                className="nav-drawer-listen">
                                Listen on Spotify
                            </a>
                        </div>
                    </nav>
                    <a
                        href="https://open.spotify.com/playlist/6VVSzRxczOu431YRU941YD?si=1c97cf7f19ed4dde&nd=1&dlsi=4087f4d648d4414d"
                        target="_blank"
                        aria-label="Spotify"
                        className="nav-listen">
                        Listen on Spotify
                    </a>
                </header>
            </div>
            <div className="nav-background-duplicate"></div>
            <div className="logobg-shadow"></div>
        </div>
    )
}

export default NavBar
