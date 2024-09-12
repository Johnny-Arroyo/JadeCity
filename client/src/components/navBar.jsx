import React from 'react'

const NavBar = () => {
    return (
        <div className="nav-background">
            <nav>
                <ul>
                    <li>
                        <h1>
                            <a href="index.html">
                                <img
                                    id="jclogo"
                                    src="/client\Public\img\Jade City Logo.svg"
                                />
                                <span>JADE CITY RECORDS</span>
                            </a>
                        </h1>
                    </li>
                    <li>
                        <a href="About">about</a>
                    </li>
                    <li>
                        <a href="News">news</a>
                    </li>
                    <li>
                        <a href="Artists">artists</a>
                    </li>
                    <li>
                        <a href="Shop">shop</a>
                    </li>
                    <li>
                        <a href="Contact">contact</a>
                    </li>
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
