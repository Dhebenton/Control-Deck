import { useState, useEffect, useRef } from 'react'
import Bell from '../../assets/icons/bell.svg'
import TwoChecks from './assets/notifications/two-checks.svg'

function Notifications({}) {
    const [ open, setOpen ] = useState(false)
    const [ animation, setAnimation ] = useState(true)
    const [ toggle, setToggle ] = useState(false)
    const [ read, setRead ] = useState(false)
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

    function handleRead() {
        setRead(true)
        handleOpen()
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
        <div className={`dropdown-wrap ${read ? '' : 'read'} notifications ${toggle ? 'open' : ''}`} ref={dropdownRef}>
            <button onClick={handleOpen} className="secbutton cen">
                <div className='cen'><img src={Bell} /></div>
            </button>
            { open && 
                <div className={`dropdown notifications g6 f-col ${ animation ? 'closed' : ''}`} >
                    <div className="f-row j-s-b">
                        <p className="dropdown-heading">Notifications</p>
                        <button onClick={handleRead} className="dd-button-sec g10 f-row">
                            <img src={TwoChecks} />
                            Mark All As Read
                        </button>
                    </div>
                    <div className="seperator"></div>
                    <div className='f-col g12'>
                        <button className={`notification-tab f-col g16 ${read ? '' : 'unread'}`}>
                            <p className="notifications-heading">Your latest changes have been published to production.</p>
                            <p >2 Days Ago</p>
                        </button>
                        <button className="notification-tab f-col g16">
                            <p className="notifications-heading">This month’s invoice is now available to view in your billing dashboard.</p>
                            <p >4 Days Ago</p>
                        </button>
                        <button className="notification-tab f-col g16">
                            <p className="notifications-heading">Google Analytics data synced successfully for June 27.</p>
                            <p >1 Week Ago</p>
                        </button>
                    </div>
                    <button className="dd-button cen">View All Notifications</button>
                </div>
            }
        </div>
    )

}

export default Notifications