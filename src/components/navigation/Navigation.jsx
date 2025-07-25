import SecButton from '../buttons/SecButton'
import Account from './dropdown-menus/Account'
import './Navigation.css'
import CloseNav from '../assets/icons/close-nav.svg'
import Notifications from './dropdown-menus/Notifications'
import SearchBar from '../search/Searchbar'
import Tabs from './Tabs'

function Navigation({ searchToggle, handleSearchOpen}) {
    return (
        <div className="navigation f-col g48">
            <div className="navigation-block f-row g6 j-f-e">
                <Account />
                <Notifications />
                <SecButton iconLeft={CloseNav}/>
            </div>
            <SearchBar searchToggle={searchToggle} handleSearchOpen={handleSearchOpen} />
            <Tabs />
            <div className="navigation-block f-row g6 j-f-e"></div>
        </div>
    )
}

export default Navigation