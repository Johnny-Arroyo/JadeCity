import React from 'react'
import { Link } from 'react-router-dom'
import './Drawer.css'

const Drawer = ({ isOpen, closeDrawer }) => {
    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <button className="drawer-close" onClick={closeDrawer}>×</button>
            <ul>
                <li><Link to="/about" onClick={closeDrawer}>about</Link></li>
                <li><Link to="/news" onClick={closeDrawer}>news</Link></li>
                <li><Link to="/artists" onClick={closeDrawer}>artists</Link></li>
                <li><Link to="/shop" onClick={closeDrawer}>shop</Link></li>
                <li><Link to="/contact" onClick={closeDrawer}>contact</Link></li>
                <li>
                    <a href="https://open.spotify.com/playlist/..." target="_blank" rel="noopener noreferrer" onClick={closeDrawer}>
                        <span className="fa-brands fa-spotify" aria-hidden="true"></span>
                        <span className="sr-only">Spotify</span>
                    </a>
                </li>
                {/* Add other social links similarly */}
            </ul>
        </div>
    )
}

export default Drawer


