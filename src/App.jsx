import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import { data } from './mockData'
import TopStories from './TopStories/TopStories'
import ArticlePage from './ArticlePage/ArticlePage'

function App() {
  
  const [news, setNews] = useState(data.articles)
  const [sources, setSources] = useState(['no sources'])

  useEffect(() =>{
    const sourceNames = news.map(article => article.source.name)
    setSources(['Filter by Source', ...sourceNames])
  }, [news])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout news={news} setNews={setNews} sources={sources} />}>
          <Route index element={<TopStories />} />
          <Route path=':articleIndex' element={<ArticlePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
