import { Link } from 'react-router-dom';

export const Button = ({className, to, children, px, py, onClick}) => {

    const classes = `button  relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 rounded-lg  ${className || ''} ${px} ${py}`;
    const spanClassees = `relative z-10`;

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClassees}>{children}</span>
        </button>
    )

    const renderLink = () => (
        <Link className={classes} to={to}>
            <span className={spanClassees}>{children}</span>
        </Link>
    )

    return to 
    ? renderLink() 
    : renderButton()
}