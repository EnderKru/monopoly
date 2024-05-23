import { NavLink } from "react-router-dom";
import { Header } from "../../header/header";
import classes from "./createGamePage.module.css";
import { useState } from "react";
import { Accounts } from "../../gamelogical/accounts";

export function CreateGame() {
  const [users, setUsers] = useState(null);
  return (
    <div className={classes.CreateGame}>
      <Header />
      <div className="conteiner">
        <div className={classes.selectPlayers}>
          <div className={classes.selectTittle}>Select number of players:</div>
          <select className={classes.selectNumber}>
            <option onClick={() => setUsers(2)}>2</option>
            <option onClick={() => setUsers(3)}>3</option>
            <option selected="selected" onClick={() => setUsers(4)}>
              4
            </option>
            <option onClick={() => setUsers(5)}>5</option>
            <option onClick={() => setUsers(6)}>6</option>
            <option onClick={() => setUsers(7)}>7</option>
            <option onClick={() => setUsers(8)}>8</option>
          </select>
        </div>
        <NavLink to="/gamepage">
          <button className={classes.btn}>Create Game</button>
        </NavLink>
      </div>
    </div>
  );
}
