import classes from './map.module.css'
import {Square} from '../gamelogical/blocks'

export function Map() {
    return(
        <div className={classes.map}>
            <div className={classes.header}> 
                <div className={classes.blockCorner} id='cell1'></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockUp}></div>
                <div className={classes.blockCorner}></div>
            </div>
            <div className={classes.body}>
                <div className={classes.leftSide}>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                </div>
                <div className={classes.board}>
                    <div className={classes.infoBoard}>
                        <h1>Board</h1>
                    </div>
                </div>
                <div className={classes.rightSide}>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                <div className={classes.blockSide}></div>
                </div>
            </div>
            <div className={classes.footer}>
            <div className={classes.blockCorner}></div>
            <div className={classes.blockDown}></div>
                <div className={classes.blockDown}></div>
                <div className={classes.blockDown}></div>
                <div className={classes.blockDown}></div>
                <div className={classes.blockDown}></div>
                <div className={classes.blockDown}></div>
                <div className={classes.blockDown}></div>
                <div className={classes.blockDown}></div>
                <div className={classes.blockDown}></div>
                <div className={classes.blockCorner}></div>
            </div>

        </div>
    )
}