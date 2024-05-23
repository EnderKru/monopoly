import classes from "./gamePage.module.css";
import { Map } from "../../map/map";
import { Header } from "../../header/header";
import { Accounts } from "../../gamelogical/accounts";

export function GamePage() {
  return (
    <div className={classes.gamePage}>
      <Header />
      <div className="conteiner">
        <div className={classes.game}>
          <Map />
        </div>
      </div>
    </div>
  );
}
