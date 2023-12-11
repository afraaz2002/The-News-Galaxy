import React, { useState,useEffect } from 'react';
import Card1 from '../components/reusable/Card1';
import Heading from '../components/reusable/Heading';

function Trending() {

  const [results, setResults] = useState([])

  useEffect(() => {
    getNews();
  }, [])

  const getNews = async () => {
    try {
      const news = await fetch(`https://newsapi.org/v2/everything?q=india&pageSize=4&sortBy=relevancy&apiKey=${process.env.REACT_APP_API_KEY}`)
        const response = await news.json();
        // console.log(response.articles)
        setResults(response.articles);
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='trending'>
      <div className='container'>
        <Heading heading="Trending News" displayAll="block" newsType="india" />
        <div className='card-section'>
          {results.map((news, index) => {
            return (
              <Card1 key={index} title={news.title} description={news.description} img={news.urlToImage} url={news.url} date={news.publishedAt} />
            )
          })}
        </div>
        <hr style={{ color: "#fafafa" }} />
      </div>
    </div>
  )
}

export default Trending