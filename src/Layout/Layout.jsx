import React from 'react'
import { Outlet, NavLink} from 'react-router-dom'
import { useState } from 'react'
import './Layout.css'
// import { data } from '../mockData'


function Layout({news, setNews, sources, setSources}) {

  const [showSources, setShowSources] = useState(true)
  const [sourceValue, setSourceValue] = useState('All Sources')
  const sourcesOptions = sources.map((source, index) => <option key={index} value={source}>{source}</option>)

  const displayNews = sourceValue !== 'All Sources' ? news.filter(article => article.source.name === sourceValue) : news

  const filterBySource = (event) => {
    setSourceValue(event.target.value)
  }

  const returnHome = () => {
    setSourceValue('All Sources')
    setShowSources(true)
  }

  return (
    <div>
      <header>
        <h1>Daily Dev</h1>
        <div className='header-links'>
          <NavLink to='/' className={({isActive}) => isActive ? 'active' : 'a'} onClick={returnHome}>Home</NavLink>
          {showSources && <select value={sourceValue} onChange={filterBySource}>
            {sourcesOptions}
          </select>}
          {showSources && <button onClick={() => setSourceValue('All Sources')}>clear</button>}
        </div>
      </header>
      <main>
        <Outlet context={{displayNews, setSources, setShowSources}} />
      </main>
    </div>
  )
}

export default Layout
