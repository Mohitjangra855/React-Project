import React,{useContext} from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { NewsContext } from "../../Pages/Home";
const News = () => {
  const news = useContext(NewsContext);
  return (
    <div className="all_news">
      {news.length > 0 ? (
          news.map((item, i) => {
            return (
      <div className="news">
      <img src={item.urlToImage?item.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_AMIjyzRmvofy1uvQV077YC7dFBu-TO1Tg&s"} alt="card_img" />
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <Link to="#">View More</Link>
      </div>  );
          })
        ) : (
          <div>No news available</div>
        )}
      
    </div>
  );
};

export default News;
