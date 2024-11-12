import React from 'react'
import logo from '/client/Public/img/JC-Logo.svg'
import './NavBar.css'

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
            <div className="nav-background">
                <nav>
                    <ul>
                        <li>
                            <h1>
                                <Link to="/">
                                    <img
                                        id="jclogo"
                                        src={logo}
                                        alt="Jade City Logo"
                                    />
                                    <span className="JCR">JADE CITY RECORDS</span>
                                </Link>
                            </h1>
                        </li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/news">news</Link></li>
                        <li><Link to="/artists">artists</Link></li>
                        <li><Link to="/shop">shop</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                        <li>
                            <a
                                className="spotify"
                                href="https://open.spotify.com/playlist/6VVSzRxczOu431YRU941YD?si=1c97cf7f19ed4dde&nd=1&dlsi=4087f4d648d4414d"
                                target="_blank">
                                <span
                                    className="fa-brands fa-spotify"
                                    aria-hidden="true"></span>
                                <span className="sr-only">Spotify</span>
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
                                <span className="sr-only">YouTube</span>
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
                                <span className="sr-only">Discord</span>
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
                                <span className="sr-only">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
    )
}

export default NavBar
