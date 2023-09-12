import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import './TopStories.css'

export default function TopStories() {

  const {news} = useOutletContext()

  const displayArticles = news.map(article => (
    <article>
      <Link to={`/${article.title}`} className='top-article'>
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
    <section className='top-stories'>{displayArticles}</section>
  )
}
