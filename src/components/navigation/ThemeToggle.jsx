import { useState } from "react";
import Sun from './assets/theme-toggle/sun.svg'
import Moon from './assets/theme-toggle/moon.svg'

function ThemeToggle({}) {
    const [ lightMode, setLightMode ] = useState(false)

    function handleLightMode() {
        setLightMode(prev => !prev)
    }

    return (
        <button onClick={handleLightMode} className={`theme-toggle cen ${lightMode ? 'light' : ''}`}>
            <img src={Moon} />
            <img src={Sun} />
        </button>
    )
}

export default ThemeToggle