import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
// import { newsContext } from "../../Pages/Home.jsx";
import { NewsContext } from "../../Pages/Home.jsx";
const Hero = () => {
  const news = useContext(NewsContext);
  return (
    <div className="hero">
      <h1>News Application</h1>

      <div className="all_card">
        {news.length > 0 ? (
          news.map((item, i) => {
            return (
              <div className="card" key={i}>
                <img src={item.urlToImage?item.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_AMIjyzRmvofy1uvQV077YC7dFBu-TO1Tg&s"} alt="card_img" />
                <div className="card_data">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>

                  <Link to="#">View More</Link>
                </div>
              </div>
            );
          })
        ) : (
          <div>No news available</div>
        )}
      </div>
    </div>
  );
};

export default Hero;
