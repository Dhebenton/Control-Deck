import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Search from './components/search/Search'

function App() {
  const [ searchOpen, setSearchOpen ] = useState(false)
  const [ searchAnimation, setSearchAnimation ] = useState(true)
  const [ searchToggle, setSearchToggle ] = useState(false)

  function handleSearchOpen() {
    if (searchOpen) {
      setSearchAnimation(true)
      setTimeout(() => setSearchOpen(false), 250)
      setSearchToggle(false)
    } else {
      setTimeout(() => setSearchAnimation(false), 1)
      setSearchOpen(true)
      setSearchToggle(true)
    }
  }

  return (
    <>
      <Navigation searchToggle={searchToggle} handleSearchOpen={handleSearchOpen} />
      {searchOpen && <Search searchAnimation={searchAnimation}/>}
    </>
  )
}

export default App
