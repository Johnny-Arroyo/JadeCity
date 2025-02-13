import React from 'react'
import styles from './Hero.css'

const Hero = () => {
    return (
        <section id="hero">
            <div className="heroContainer">
                <p className="welcome">
                    Welcome to
                    <span className="records">JADE CITY RECORDS</span>
                </p>
                <h2 className="tagline">
                    {' '}
                    — discover melodies that resonate beyond the
                    horizon.
                </h2>
                <a
                    className="listen"
                    href="https://open.spotify.com/playlist/6VVSzRxczOu431YRU941YD?si=1c97cf7f19ed4dde&nd=1&dlsi=4087f4d648d4414d"
                    target="_blank"
                    aria-label="Spotify">Listen on Spotify</a>
                <a href="/contact" className="demo">
                    Submit Your Demo
                </a>
            </div>
        </section>
    )
}

export default Hero