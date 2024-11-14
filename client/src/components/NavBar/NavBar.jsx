import React, { useState } from 'react'
import Icon from '../JadeCityIcon/JadeCityIcon'
import './NavBar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    return (
        <div className="nav-background">
            <nav>
                <div
                    className={`logo-wrapper ${
                        hovered ? 'hovered' : ''
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <h1 className="jade-city-records">
                        <Link to="/home">
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
                <div>
                    <ul>
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
                        <li>
                            <a
                                className="spotify"
                                href="https://open.spotify.com/playlist/6VVSzRxczOu431YRU941YD?si=1c97cf7f19ed4dde&nd=1&dlsi=4087f4d648d4414d"
                                target="_blank">
                                <span
                                    className="fa-brands fa-spotify"
                                    aria-hidden="true"></span>
                                <span className="sr-only">
                                    Spotify
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="youtube"
                                href="https://www.youtube.com/@JadeCityRecords"
                                target="_blank">
                                <span
                                    className="fa-brands fa-youtube"
                                    aria-hidden="true"></span>
                                <span className="sr-only">
                                    YouTube
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="discord"
                                href="https://discord.gg/GhG5D8qhyv"
                                target="_blank">
                                <span
                                    className="fa-brands fa-discord"
                                    aria-hidden="true"></span>
                                <span className="sr-only">
                                    Discord
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="instagram"
                                href="https://www.instagram.com/jadecityrecords/"
                                target="_blank">
                                <span
                                    className="fa-brands fa-instagram"
                                    aria-hidden="true"></span>
                                <span className="sr-only">
                                    Instagram
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
