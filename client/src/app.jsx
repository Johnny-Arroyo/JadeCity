import React, {useState, useEffect} from 'react'

import NavBar from './components/NavBar'
import About from './Pages/About'
import News from './Pages/News/News.jsx'
import NewsBanner from './components/NewsBanner'
import NewsCardLarge from './components/NewsCardLarge'
import Artists from './Pages/Artists'
import ArtistCardLarge from './components/ArtistCardLarge'
import Shop from './Pages/Shop/Shop.jsx'
import ContactForm from './Pages/Contact/Contact.jsx'
import Footer from './components/Footer'
import { fetchAPIData } from './utils/fetchAPIData.js';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {


    const [artists, setArtists] = useState([]);
    const [news, setNews] = useState([]);
  
    useEffect(() => { 
        const getArtists = async () => {
            const data = await fetchAPIData('artists'); // make api calls just once
            setArtists(data);
        };

        getArtists();
    }, []);

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchAPIData('news');
            setNews(data);
        };

        getNews();
        
    }, []);


    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <About />
                            <NewsBanner news={news}/>
                            <Artists artists={artists}/>
                            <Shop />
                            <ContactForm />
                        </>
                        } />
                    <Route path="/About" element={<About />} />
                    <Route path="/News" element={<News news={news}/>} />
                    <Route path="/News/:title" element={<NewsCardLarge/>} />
                    <Route path="/Artists" element={<Artists artists={artists}/>} />
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
