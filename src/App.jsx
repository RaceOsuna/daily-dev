import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import { data } from './mockData'
import TopStories from './TopStories/TopStories'

function App() {
  
  const [news, setNews] = useState(data.articles)
  console.log(news[0])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout news={news} />}>
          <Route index element={<TopStories />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
