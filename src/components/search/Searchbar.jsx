import Ctrl from './assets/icons/ctrl.svg'
import K from './assets/icons/k.svg'
import Search from './assets/icons/search.svg'
import './Search.css'

function SearchBar({ handleSearchOpen, searchToggle }) {
    return (
        <button onClick={handleSearchOpen} className={`searchbar f-row g4 ${searchToggle ? 'on' : ''}`}>
            <div className='f-row flex g10'>
                <img src={Search} />
                Search
            </div>
            <img src={Ctrl} />
            <img src={K} />
        </button>
    )
}

export default SearchBar