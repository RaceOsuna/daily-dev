import { useState } from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import './TopStories.css'

export default function TopStories() {

  const {displayNews, setSources, setShowSources} = useOutletContext()
  const [searchValue, setSearchValue] = useState('')
  
  const news = searchValue ? displayNews.filter(article => (
    article.title.toLowerCase().includes(searchValue.toLowerCase()) || article.description.toLowerCase().includes(searchValue.toLowerCase())
  )) : displayNews

  const filteredSources = news.map(article => article.source.name)

  const filterByKeyWord = (event) =>  {
    setSearchValue(event.target.value)
    setSources(['All Sources', ...filteredSources])
  }

  const testArticle = (article) => {
    if (article.content !== null && article.content !== '[Removed]') {
      return true
    } else {
      return false
    }
  }

  const displayArticles = news.map((article, index) => (
    testArticle(article) === true ?
    <article key={article.title}>
      <Link to={`/${index}`} className='top-article' onClick={() => setShowSources(false)} >
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
      <div className='search'>
        <input value={searchValue} type="text" placeholder='search keywords' onChange={filterByKeyWord} />
      </div>
      {displayArticles}
    </section>
  )
}
