import'./SecButton.css'

function SecButton({ style, iconLeft, alt, text, click}) {
    return (
        <button onClick={click} className={`cen secbutton ${style}`}>
            {iconLeft && <img src={iconLeft} alt={alt}/>}
            {text}
        </button>
    )
}

export default SecButton