import React from 'react'

import NavBar from './components/NavBar'
import About from './Pages/About'
import News from './Pages/News'
import NewsBanner from './components/NewsBanner'
import NewsCardLarge from './components/NewsCardLarge'
import Artists from './Pages/Artists'
import ArtistCardLarge from './components/ArtistCardLarge'
import Shop from './Pages/Shop'
import ContactForm from './Pages/Contact'
import Footer from './components/Footer'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <About />
                            <NewsBanner />
                            <Artists />
                            <Shop />
                            <ContactForm />
                        </>
                        } />
                    <Route path="/About" element={<About />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/News/:title" element={<NewsCardLarge/>} />
                    <Route path="/Artists" element={<Artists />} />
                    <Route path="/Artists/:name" element={<ArtistCardLarge />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/Contact" element={<ContactForm />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;
