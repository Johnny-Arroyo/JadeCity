import React from 'react'
import styles from './About.css'

const About = () => {
    return (
        <section id="about">
            <div className="aboutContainer">
                <h2 className="about">About</h2>

                <p>
                    Your new home for ethereal melodic bass. With
                    immersive songwriting, enchanting vocals, and
                    spellbinding production, the mages of Jade City
                    are bringing a new magic to the world of bass
                    music. More than just a record label, Jade City is
                    a thriving community of music creators and
                    enthusiasts who gather under the banner of
                    creativity and kindness.
                </p>
                <p>
                    Come and discover a realm where every note is a
                    spell, every lyric a story, and every gathering a
                    celebration of the magic of friendship.
                </p>
                <a
                    href="https://discord.gg/GhG5D8qhyv"
                    target="_blank"
                    aria-label="Discord"
                    className="abtDiscord">
                    Join Our Discord
                </a>
            </div>
        </section>
    )
}

export default About
