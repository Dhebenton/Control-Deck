import'./Button.css'

function Button({ style, iconLeft, alt, text, click}) {
    return (
        <button onClick={click} className={`cen button ${style}`}>
            {iconLeft && <img src={iconLeft} alt={alt}/>}
            {text}
        </button>
    )
}

export default Button