import React from 'react'
import styles from "./About.css"

const About = () => {
    return (
        <section id="about">
          <div className="aboutContainer">
            <p className="welcome">
                Welcome to
                <span className="records">JADE CITY,</span>
            </p>
            <h2 className="city">the City of Mages</h2>
            <p>
                — your new home for ethereal melodic bass. With
                immersive songwriting, enchanting vocals, and
                spellbinding production, the mages of Jade City are
                bringing a new magic to the world of bass music. More
                than just a record label, Jade City is a thriving
                community of music creators and enthusiasts who gather
                under the banner of creativity and kindness.
            </p>
            <p>
                Come and discover a realm where every note is a spell,
                every lyric a story, and every gathering a celebration
                of the magic of friendship.
            </p>
            </div>
        </section>
    )
}

export default About
