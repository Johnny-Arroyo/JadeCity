import React from 'react'

import NavBar from './components/NavBar'
import About from './Pages/About'
import News from './Pages/News'
import NewsBanner from './components/NewsBanner'
import Artists from './Pages/Artists'
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
                            <ContactForm />
                            <Shop />
                        </>
                        } />
                    <Route path="/About" element={<About />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Artists" element={<Artists />} />
                    <Route path="/Shop" element={<Shop />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;
