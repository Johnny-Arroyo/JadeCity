import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <h2>Jade City Records</h2>
            <ul>
                <li>
                    <a
                        className="spotify"
                        href="https://open.spotify.com/playlist/6VVSzRxczOu431YRU941YD?si=1c97cf7f19ed4dde"
                        target="_blank"
                        rel="noopener noreferrer">
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
                        target="_blank"
                        rel="noopener noreferrer">
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
                        target="_blank"
                        rel="noopener noreferrer">
                        <span
                            className="fa-brands fa-instagram"
                            aria-hidden="true"></span>
                        <span className="sr-only">Instagram</span>
                    </a>
                </li>
            </ul>
            <p>
                <small>
                    &copy; 2024 Jade City Records. All rights
                    reserved.
                </small>
            </p>
        </footer>
    )
}

export default Footer
