import { Link } from 'react-router-dom';

export const Button = ({className, href, children, px, py}) => {

    const classes = `button  relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 rounded-lg  ${className || ''} ${px} ${py}`;
    const spanClassees = `relative z-10`;

    const renderButton = () => (
        <button className={classes}>
            <span className={spanClassees}>{children}</span>
        </button>
    )

    const renderLink = () => (
        <Link className={classes} to={href}>
            <span className={spanClassees}>{children}</span>
        </Link>
    )

    return href 
    ? renderLink() 
    : renderButton()
}