import'./ButtonFilter.css'

function ButtonFilter({ style, iconLeft, alt, text, click}) {
    return (
        <button onClick={click} className={`cen button-filter ${style}`}>
            {iconLeft && <img src={iconLeft} alt={alt}/>}
            {text}
        </button>
    )
}

export default ButtonFilter