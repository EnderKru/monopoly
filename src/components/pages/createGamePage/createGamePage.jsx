import { NavLink } from 'react-router-dom'
import { Header } from '../../header/header'
import classes from './createGamePage.module.css'

export function CreateGame(){
    return(
        <div className={classes.CreateGame}>
            <Header/>
            <div className="conteiner">
            <div className={classes.selectPlayers}>
                <div className={classes.selectTittle}>
                    Select number of players:
                </div>
                <select className={classes.selectNumber}>
                <option>2</option>
				<option>3</option>
				<option selected="selected">4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
                </select>
            </div>
            <NavLink to='/gamepage'>
            <button className={classes.btn}>
                Create Game
            </button>
            </NavLink>

            </div>
            
        </div>
    )
}