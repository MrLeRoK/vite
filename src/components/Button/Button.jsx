import './Button.css'
export const Button = ({isActive, buttonClick, children}) => {
    return (
        <button
            className={isActive ? 'button active' : 'button'}
            onClick={buttonClick}>
            {children}
        </button>
    )
}
