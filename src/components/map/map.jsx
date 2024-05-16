import classes from './map.module.css'


export function Map() {
    return(
        <div className={classes.map}>
            <div className={classes.header}>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
            </div>
            <div className={classes.body}>
                <div className={classes.leftSide}>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                </div>
                <div className={classes.rightSide}>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                </div>
            </div>
            <div className={classes.footer}>
            <div className={classes.block}></div>
            <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
                <div className={classes.block}></div>
            </div>

        </div>
    )
}