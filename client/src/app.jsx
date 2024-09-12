import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './Pages/About'
import News from './Pages/News'
import Artists from './Pages/Artists'
import Shop from './Pages/Shop'
import ContactForm from './Pages/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <About />
                <News />
                <Artists />
                <Shop />
                <ContactForm />
                <Footer />
            </div>
        </Router>
    )
}

export default App
