import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import { data } from './mockData'
import TopStories from './TopStories/TopStories'
import ArticlePage from './ArticlePage/ArticlePage'

function App() {
 
  const [news, setNews] = useState(data.articles)
  const [sources, setSources] = useState(['All Sources'])
  console.log(news)

  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6d59076f146540638e13aaa6aab0c06c')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.statusText)
  //     } else {
  //       return response.json()
  //     }
  //   })
  //   .then(data => setNews(data.articles))
  //   .catch(err => console.log(err))
  // }, [])

  useEffect(() =>{
    const sourceNames = news.map(article => article.source.name)
    setSources(['All Sources', ...sourceNames])
  }, [news])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout news={news} setNews={setNews} sources={sources} setSources={setSources}/>}>
          <Route index element={<TopStories />} />
          <Route path=':articleIndex' element={<ArticlePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
