import React, { useState, useEffect } from 'react'
import ScrollToTop from './utils/scrollToTop.jsx'

import NavBar from './components/NavBar/navBar.jsx'
import Hero from './Pages/Hero/Hero.jsx'
import About from './Pages/About/About.jsx'
import News from './Pages/News/News.jsx'
import NewsBanner from './components/NewsCard/NewsBanner'
import NewsCardLarge from './components/NewsCard/NewsCardLarge'
import Artists from './Pages/Artists/Artists.jsx'
import ArtistCardLarge from './components/ArtistCardLarge/ArtistCardLarge.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import ContactForm from './Pages/Contact/Contact.jsx'
import Footer from './components/Footer/Footer'

import { QueryClient, QueryClientProvider } from 'react-query'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

const App = () => {
    const queryClient = new QueryClient() // every child component will be able to fetch data with this with useQuery

    return (
        <div className="app-container">
            <QueryClientProvider client={queryClient}>
                <Router>
                    <ScrollToTop />
                    <div className="nav-bar">
                        <NavBar />
                    </div>
                    <div className="content">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Hero />
                                        <div className="aboutHome">
                                            <About />
                                        </div>
                                        <div className="newsHome">
                                            <NewsBanner />
                                        </div>
                                        <div className="artistHome">
                                            <Artists />
                                        </div>
                                        <div className='shopHome'><Shop /></div>
                                        
                                        <div className="contactHome">
                                            <ContactForm />
                                        </div>
                                    </>
                                }
                            />
                            <Route
                                path="/About"
                                element={<About />}
                            />
                            <Route path="/News" element={<News />} />
                            <Route
                                path="/News/:title"
                                element={<NewsCardLarge />}
                            />
                            <Route
                                path="/Artists"
                                element={<Artists />}
                            />
                            <Route
                                path="/Artists/:name"
                                element={<ArtistCardLarge />}
                            />
                            <Route path="/Shop" element={<Shop />} />
                            <Route
                                path="/Contact"
                                element={<ContactForm />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </Router>
            </QueryClientProvider>
        </div>
    )
}

export default App
