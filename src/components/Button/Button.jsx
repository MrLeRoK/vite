import './Button.css'
export const Button = ({isActive, onClick, children}) => {
    return (
        <button
            className={isActive ? 'button active' : 'button'}
            onClick={onClick}>
            {children}
        </button>
    )
}
