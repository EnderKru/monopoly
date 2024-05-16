import classes from './gamePage.module.css'
import { Map } from '../../map/map'

export function GamePage() {
    return(
        <div className={classes.gamePage}>
                <h1 className={classes.tittle}> KutyaPoly </h1>
                <Map/>
        </div>
    )
}