import SecButton from '../buttons/SecButton'
import Account from './dropdown-menus/Account'
import './Navigation.css'
import CloseNav from '../assets/icons/close-nav.svg'
import Notifications from './dropdown-menus/Notifications'
import SearchBar from '../search/Searchbar'
import Tabs from './Tabs'
import ThemeToggle from './ThemeToggle'
import Gear from '../assets/icons/gear.svg'
import Book from '../assets/icons/book.svg'
import Button from '../buttons/Button'
import { useState } from 'react'

function Navigation({ searchToggle, handleSearchOpen}) {
    const [ closed, setClosed ] = useState(false)
    const [ opening, setOpening ] = useState(false)

    function handleClose() {
        if (closed) {
            setClosed(false)
            setOpening(true)
            setTimeout(() => setOpening(false), 300)
        } else {
            setClosed(true)
        }
    }

    return (
        <div className={`navigation f-col g48 ${opening ? 'opening' : ''} ${closed ? 'closed' : ''}`}>
            <div className="navigation-block f-row g6 j-f-e">
                <Account />
                <Notifications />
                <SecButton style={'close-nav'} click={handleClose} iconLeft={CloseNav}/>
            </div>
            <SearchBar searchToggle={searchToggle} handleSearchOpen={handleSearchOpen} />
            <Tabs />
            <div className="navigation-block f-row g6 j-f-e">
                <ThemeToggle />
                <Button iconLeft={Book} style={'icon'}/>
                <Button iconLeft={Gear} style={'icon'}/>
            </div>
        </div>
    )
}

export default Navigation