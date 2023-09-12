import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import { data } from './mockData'

function App() {
  
  const [news, setNews] = useState(data.articles)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout news={news} />}>

        </Route>
      </Routes>
    </div>
  )
}

export default App
