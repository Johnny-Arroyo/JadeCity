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
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
