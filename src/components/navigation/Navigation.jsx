import Account from './dropdown-menus/Account'
import './Navigation.css'

function Navigation({}) {
    return (
        <div className="navigation f-col g48">
            <div className="navigation-block f-row g6 j-f-e">
                <Account />
            </div>
            <div className="navigation-block f-row g6 j-f-e"></div>
        </div>
    )
}

export default Navigation