import { NavLink } from 'react-router-dom'
import classes from './header.module.css'

export function Header(){
    return(
        <header>
            <NavLink to='/' className={classes.link}>
                <h1 className={classes.tittle}>MonopolyKG</h1>
            </NavLink>
        </header>
    )
}