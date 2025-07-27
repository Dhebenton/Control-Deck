import './Card.css'

function Card({ style, children }) {
    return (
        <div className={`card ${style}`}>
            {children}
        </div>
    )
}

export default Card