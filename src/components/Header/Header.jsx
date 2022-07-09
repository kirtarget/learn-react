import classes from './Header.module.css'

const Header = ()=> {
    return (
        <header className={classes.header}>
            <img width='50px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png' alt='' />
            <h2>Социальная сеть на React</h2>
        </header>
    )
}

export default Header