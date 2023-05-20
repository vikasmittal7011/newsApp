import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import defaultImg from "./default.jpg";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let jsonData = await data.json();
    props.setProgress(70);
    setArticles(jsonData.articles);
    setLoading(false);
    setTotalResults(jsonData.totalResults);
    document.title = "News Zilla - " + cpitalTitle(props.category);
    props.setProgress(100);
  };

  const cpitalTitle = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMore = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let jsonData = await data.json();
    setArticles(articles.concat(jsonData.articles));
    setTotalResults(jsonData.totalResults);
    // document.title = "News Zilla - " + cpitalTitle(props.category);
  };

  return (
    <>
      <h1 className="text-center my-3">
        News Zilla Top {cpitalTitle(props.category)} Headlines
      </h1>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length < totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article) => {
              let { title, content, urlToImage, url, publishedAt, author } =
                article;
              return (
                <div className="col-md-4" key={url}>
                  <NewsItems
                    key={url}
                    title={title.slice(0, 35)}
                    desc={
                      content === null
                        ? "Click Further Read to read this news. Sorry for incanviance "
                        : String(content).slice(0, 65)
                    }
                    img={urlToImage === null ? defaultImg : urlToImage}
                    url={url}
                    time={publishedAt}
                    author={author}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  pageSize: 6,
  apiKey: "40d6c2b63f7c43b78be98ab87fff1f60",
  category: "science",
  country: "in",
};

News.propTypes = {
  pageSize: PropTypes.number,
  apiKey: PropTypes.string,
  category: PropTypes.string,
  country: PropTypes.string,
};

export default News;
