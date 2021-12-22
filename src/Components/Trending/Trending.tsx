import "./trending.scss";

interface News {
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
}
const Trending = ({ newsContent }: { newsContent: News }) => {
  const openSource = () => {
    window.open(newsContent.article_url);
  };

  return (
    <div className="trending">
      <div className="trendingWrapper">
        <div className="trendingNews">
          <img
            src={newsContent.image_url}
            alt="News"
            className="trendingNewsImage"
          />
          <div className="trendingNewsContent">
            <h5 className="trendingNewsTitle" onClick={openSource}>
              {newsContent.title}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
