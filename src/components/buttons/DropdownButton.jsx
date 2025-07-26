import'./DropdownButton.css'
import Chevron from '../assets/icons/chevron.svg'

function DropdownButton({ style, text, open}) {
    return (
        <button className={`f-row a-s dropdown-button ${style}`}>
            <div className='cen'>{text}</div>
            <div onClick={open} className='cen'>
                <img src={Chevron} />
            </div>
        </button>
    )
}

export default DropdownButton