import { NavLink, useNavigate } from "react-router-dom";
import { Header } from "../../header/header";
import classes from "./createGamePage.module.css";
import { useMyContext } from "../../helpers/context.jsx";
import { useState } from "react";

export function CreateGame() {
  const { users, setUsers } = useMyContext();
  const navigate = useNavigate();
  return (
    <div className={classes.CreateGame}>
      <Header />
      <div className="conteiner">
        <div className={classes.selectPlayers}>
          <div className={classes.selectTittle}>Select number of players:</div>
          <select
            className={classes.selectNumber}
            onChange={(e) => {
              setUsers(Number(e.target.value));
            }}
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <button className={classes.btn} onClick={() => navigate("/gamepage")}>
          Create Game
        </button>
      </div>
    </div>
  );
}
