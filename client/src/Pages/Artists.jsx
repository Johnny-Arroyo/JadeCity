// components/ArtistSection.jsx
import React from 'react'

const ArtistSection = () => {
    return (
        <div className="section-dkblue">
            <section id="artists">
                <h2>Our Artists</h2>

                {/* First Artist */}
                <article>
                    <div className="text">
                        <div className="artist-bio">
                            <h4>Featured Artist</h4>
                            <h3>Wall of Wonder</h3>
                        </div>
                        <p className="black-box">
                            Description of the project. This should be
                            fairly concise while also describing the
                            key components that you developed or
                            worked on. It can be as long as you need
                            it to be but should at least be a few
                            sentences long. Be sure to include
                            specific links anywhere in the
                            description. A link looks like{' '}
                            <a href="https://frontendmasters.github.io/grid-flexbox-v2/">
                                this
                            </a>
                            , and multiple links look{' '}
                            <a href="#">like this</a> and{' '}
                            <a href="#">like this</a>.
                        </p>
                        <div className="tech-used">
                            <h4>Fave Music Tech</h4>
                            <ul>
                                <li>Serum</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                        alt="Screenshot of the Wall of Wonder."
                    />
                </article>

                {/* Additional artists would follow the same pattern */}
            </section>
            <div className="gradient"></div>
        </div>
    )
}

export default ArtistSection
