import classes from './gamePage.module.css'
import { Map } from '../../map/map'
import { Header } from '../../header/header'

export function GamePage() {
    return(
        <div className={classes.gamePage}>
                <Header/>
                <div className="conteiner">
                <Map/>
                </div>
        </div>
    )
}