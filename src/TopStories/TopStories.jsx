import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import './TopStories.css'

export default function TopStories() {

  const {displayNews} = useOutletContext()

  const testArticle = (article) => {
    if (article.content !== null && article.content !== '[Removed]') {
      return true
    } else {
      return false
    }
  }

  const displayArticles = displayNews.map((article, index) => (
    testArticle(article) === true ?
    <article key={article.title}>
      <Link to={`/${index}`} className='top-article'>
      <div className='article-content'>
        <h2 className='title'>{article.title.split('-')[0]}</h2>
        <p className='description'>{article.description}</p>
        <p className='date'>{article.publishedAt.split('T')[0]}</p>
      </div>
      <div className='article-image'>
        <img src={article.urlToImage} />
      </div>
      </Link>
    </article> : null
  ))

  return (
    <section className='top-stories'>
      <h4 style={{color: 'red'}}>Today's Top News</h4>
      {displayArticles}
    </section>
  )
}
