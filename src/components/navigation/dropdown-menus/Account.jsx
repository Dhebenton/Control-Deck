import { useState, useEffect, useRef } from 'react'
import ProfilePicture from './assets/account/profile-picture.png'
import './Dropdown.css'

function Account({}) {
    const [ open, setOpen ] = useState(false)
    const [ animation, setAnimation ] = useState(true)
    const [ toggle, setToggle ] = useState(false)
    const dropdownRef = useRef(null)

    function handleOpen() {
        if (open) {
            setToggle(false)
            setAnimation(true)
            setTimeout(() => setOpen(false), 200)
        } else {
            setToggle(true)
            setTimeout(() => setAnimation(false), 1) 
            setOpen(true)
        }
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                if (open) handleOpen()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open])

    return (
        <div className={`dropdown-wrap account ${toggle ? 'open' : ''}`} ref={dropdownRef}>
            <button onClick={handleOpen} className="account-dropdown-toggle">
                <img src={ProfilePicture} />
            </button>
            { open && {
                
            }}
        </div>
    )

}

export default Account