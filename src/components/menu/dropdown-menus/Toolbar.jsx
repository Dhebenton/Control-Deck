import { useState, useEffect, useRef } from 'react'
import Hammer from './assets/toolbar/hammer.svg'
import Link from './assets/toolbar/link.svg'
import QR from './assets/toolbar/qrcode.svg'
import DropdownButton from '../../buttons/DropdownButton'
import Button from '../../buttons/Button'
import Puzzle from '../../assets/icons/puzzle.svg'

function Toolbar({}) {
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
        <div className={`dropdown-wrap toolbar ${toggle ? 'open' : ''}`} ref={dropdownRef}>
            <DropdownButton open={handleOpen} text={'Toolbar'}/>
            { open && 
                <div className={`dropdown toolbar g6 f-col ${ animation ? 'closed' : ''}`} >
                    <button className="dropdown-tab g12">
                        <img src={Hammer} />
                        Visit With Toolbar
                    </button>
                    <button className="dropdown-tab g12">
                        <img src={Link} />
                        Copy Toolbar Link
                    </button>
                    <div className="seperator"></div>
                    <p className="dropdown-label">Scan this QR code to open with the toolbar on a different device:</p>
                    <div className="toolbar-qr-wrap">
                        <img src={QR} />
                    </div>
                    <div className="seperator"></div>
                    <Button iconLeft={Puzzle} text={'Install Extension'} style={'small blue g8'} />
                </div>
            }
        </div>
    )

}

export default Toolbar