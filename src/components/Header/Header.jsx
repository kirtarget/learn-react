import classes from './Header.module.css'

const Header = ()=> {
    return (
        <header className={classes.header}>
            <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' />
            <h2>ВReact'е</h2>
        </header>
    )
}

export default Header