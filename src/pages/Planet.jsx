import React, { useState,useEffect } from 'react'
import Card1 from '../components/reusable/Card1';
import Heading from "../components/reusable/Heading"

function Planet() {
    const [results, setResults] = useState([])

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        try {
            const news = await fetch(`https://newsapi.org/v2/everything?q=wildlife&sortBy=relevancy&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)
            const response = await news.json();
            // console.log(response.articles)
            setResults(response.articles);
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='planet'>
            <div className='container'>
                <Heading heading="Our Planet" displayAll="block" newsType="wildlife" />
                <div className='card-section card2'>
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

export default Planet