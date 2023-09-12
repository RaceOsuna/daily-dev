import React from 'react'
import './ArticlePage.css'
import { useOutletContext, useParams, Link } from 'react-router-dom'
import { useState } from 'react'

export default function ArticlePage() {

  const { displayNews } = useOutletContext()
  const { articleIndex } = useParams()
  const article = displayNews[articleIndex]
  console.log(article.content)
  const displayArticle =
    <article className="selected-article">
      <div className='article-content'>
        <h1>{article.source.name}</h1>
        <p className='author'>{article.author}</p>
        <h2 className='title'>{article.title.split('-')[0]}</h2>
        <p className='description'>{article.content.split('[')[0]}<Link to={article.url}>View Full Article Here</Link></p>
        <p className='date'>{article.publishedAt.split('T')[0]}</p>
      </div>
      <div className='selected-article-image'>
        <img src={article.urlToImage} />
      </div>
    </article>

  return (
    <div>{displayArticle}</div>
  )
}