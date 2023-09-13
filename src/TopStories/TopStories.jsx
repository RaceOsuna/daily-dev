import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import './TopStories.css'

export default function TopStories() {

  const {displayNews} = useOutletContext()

  const test = (event) => {
    console.log('index', event.target.id)
  }

  const displayArticles = displayNews.map((article, index) => (
    <article key={article.title}>
      <Link to={`/${index}`} className='top-article' onClick={test}>
      <div className='article-content'>
        <h2 className='title'>{article.title.split('-')[0]}</h2>
        <p className='description'>{article.description}</p>
        <p className='date'>{article.publishedAt.split('T')[0]}</p>
      </div>
      <div className='article-image'>
        <img src={article.urlToImage} />
      </div>
      </Link>
    </article>
  ))

  return (
    <section className='top-stories'>
      <h4 style={{color: 'red'}}>Today's Top News</h4>
      {displayArticles}
    </section>
  )
}
