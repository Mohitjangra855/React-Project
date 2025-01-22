import React, { useState, useEffect, createContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import News from '../Components/News/News';
import Footer from '../Components/Footer/Footer';

// Create the context
export const NewsContext = createContext();

const Home = () => {
  const [news, setNews] = useState([]);
  const [err, setErr] = useState(null);

  // let url = "use your own api url"
  
  

  // Fetch news inside useEffect
  useEffect(() => {
    async function getNews() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
      } catch (err) {
        setErr(err);
      }
    }

    getNews();
  }); 

  if (err) {
    return <div>error: {err}</div>;
  }

  return (
    <NewsContext.Provider value={news}> {/* Provide the news state to the context */}
      <div>
        <Navbar />
        <Hero />
        <News />
        <Footer />
      </div>
    </NewsContext.Provider>
  );
};

export default Home;
