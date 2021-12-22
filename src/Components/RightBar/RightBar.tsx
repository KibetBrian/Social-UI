import axios from "axios";
import Trending from "../Trending/Trending";
import { useEffect, useState } from "react";
import "./rightBar.scss";

const RightBar = () => {
  interface News {
    id: {
      id: string;
      publisher: {};
      title: string;
      author: string;
      published_utc: string;
      article_url: string;
      tickers: {};
      amp_url: string;
      image_url: string;
      description: string;
    };
  }

  const [news, setNews] = useState<Array<News>>([]);
  //Fetching news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await axios.get(
          process.env.REACT_APP_NEWS_API as string
        );
        setNews(fetchedNews.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  const HomeRightBar = () => {
    return (
      <>
        <h2 className="trending_title"> Trending </h2>
        {news.map((newsObject: any) => (
          <Trending key={newsObject.id} newsContent={newsObject} />
        ))}
      </>
    );
  };
  return (
    <div className="right_bar">
      <HomeRightBar />
    </div>
  );
};

export default RightBar;
