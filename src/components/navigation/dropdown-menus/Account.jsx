import { useState, useEffect, useRef } from 'react'
import ProfilePicture from './assets/account/profile-picture.png'
import './Dropdown.css'
import User from './assets/account/user.svg'
import Book from './assets/account/book.svg'
import Mail from './assets/account/mail.svg'
import SignOut from './assets/account/sign-out.svg'
import Chat from './assets/account/speech-bubble.svg'

function Account({}) {
    const [ open, setOpen ] = useState(false)
    const [ animation, setAnimation ] = useState(true)
    const [ toggle, setToggle ] = useState(false)
    const dropdownRef = useRef(null)

    function handleOpen() {
        if (open) {
            setToggle(false)
            setAnimation(true)
            setTimeout(() => setOpen(false), 250)
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
            { open && 
                <div className={`dropdown account g6 f-col ${ animation ? 'closed' : ''}`} >
                    <p className="dropdown-label">daniil.hebenton@gmail.com</p>
                    <button className="dropdown-tab g12">
                        <img src={User} />
                        Account & Preferences
                    </button>
                    <button className="dropdown-tab g12">
                        <img src={Book} />
                        Resources
                    </button>
                    <button className="dropdown-tab g12">
                        <img src={Mail} />
                        Contact Support
                    </button>
                    <div className="seperator"></div>
                    <button className="dropdown-tab g12">
                        <img src={Chat} />
                        Feedback
                    </button>
                    <button className="dropdown-tab g12">
                        <img src={SignOut} />
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )

}

export default Account