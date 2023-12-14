import React, { useState, useEffect } from 'react';
import Heading from '../components/reusable/Heading';
import Card1 from '../components/reusable/Card1';
import { useParams, useLocation } from 'react-router-dom';

function NewsType(props) {
    const [results, setResults] = useState([]);
    let [size, setSize] = useState(16)

    let params = useParams();
    const location = useLocation();

    const getNews = async (newPage) => {
        try {
            newPage && setSize(16);
            const news = await fetch(`https://newsapi.org/v2/everything?q=${params.type || props.newsType}&pageSize=${newPage ? 16 : size}&language=en&sortBy=relevancy&apiKey=${process.env.REACT_APP_API_KEY}`)
            const response = await news.json();
            // console.log(response.articles)
            setResults(response.articles);
        }
        catch (err) {
            console.log(err)
        }
    }

    const addMore = () => {
        size = size + 16;
        setSize(size)
        console.log(size)
        getNews(false);
    }

    useEffect(() => {
        getNews(true);
        window.scrollTo(0, 0)
    }, [params.type]);

    return (
        <div className='news-type'>
            <div className='container'>
                <Heading heading={location.state ? location.state.name : "Latest news"} displayAll={params.type ? "none" : "block"} newsType="general" />
                <div className='card-section type'>
                    {results.map((news, index) => {
                        return (
                            <Card1 key={index} title={news.title} description={news.description} img={news.urlToImage} url={news.url} date={news.publishedAt} />
                        )
                    })}
                </div>
                    {size < 90 ? <button className='bottom-btn' onClick={addMore}>See more</button> : <button className='bottom-btn' onClick={() => window.scrollTo(0, 0)}>Go to top</button>}
            </div>

        </div>
    )
}

export default NewsType