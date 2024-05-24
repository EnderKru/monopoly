
import dieicon1 from "../../assets/img/Die_1.svg";
import dieicon2 from "../../assets/img/Die-2.svg";
import dieicon3 from "../../assets/img/Die-3.svg";
import dieicon4 from "../../assets/img/Die-4.svg";
import dieicon5 from "../../assets/img/Die-5.svg";
import dieicon6 from "../../assets/img/Die-6.svg";
import { useEffect, useState } from "react";
import { useMyContext } from "../helpers/context.jsx";

const squareData = [
  {
    name: "GO",
    pricetext: "COLLECT $200 SALARY AS YOU PASS.",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Suyulak",
    pricetext: "$60",
    color: "#8B4513",
    owner: false,
    baserent: 90,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Batken",
    pricetext: "$60",
    color: "#8B4513",
    owner: false,
    baserent: 180,
  },
  {
    name: "City Tax",
    pricetext: "Pay $200",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Osh-1",
    pricetext: "$200",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Besh-Tash",
    pricetext: "$100",
    color: "#87CEEB",
    owner: false,
    baserent: 90,
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Ak-Naryn",
    pricetext: "$100",
    color: "#87CEEB",
    owner: false,
    baserent: 90,
  },
  {
    name: "Talas",
    pricetext: "$120",
    color: "#87CEEB",
    owner: false,
    baserent: 100,
  },
  {
    name: "Just Visiting",
    pricetext: "",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Kazarman",
    pricetext: "$140",
    color: "#FF0080",
    owner: false,
    baserent: 150,
  },
  {
    name: "Electric Company",
    pricetext: "$150",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Tash-Kumyr",
    pricetext: "$140",
    color: "#FF0080",
    owner: false,
    baserent: 150,
  },
  {
    name: "Dzhalal-Abad",
    pricetext: "$160",
    color: "#FF0080",
    owner: false,
    baserent: 180,
  },
  {
    name: "Osh-2",
    pricetext: "$200",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Sary-Oy",
    pricetext: "$180",
    color: "#FFA500",
    owner: false,
    baserent: 200,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Uchkun",
    pricetext: "$180",
    color: "#FFA500",
    owner: false,
    baserent: 200,
  },
  {
    name: "Naryn",
    pricetext: "$200",
    color: "#FFA500",
    owner: false,
    baserent: 220,
  },
  {
    name: "Free Parking",
    pricetext: "",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Nookat",
    pricetext: "$220",
    color: "#FF0000",
    owner: false,
    baserent: 250,
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Aravan",
    pricetext: "$220",
    color: "#FF0000",
    owner: false,
    baserent: 250,
  },
  {
    name: "Uzgon",
    pricetext: "$240",
    color: "#FF0000",
    owner: false,
    baserent: 300,
  },
  {
    name: "Bishkek-1",
    pricetext: "$200",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Chon-Aryk",
    pricetext: "$260",
    color: "#FFFF00",
    owner: false,
    baserent: 330,
  },
  {
    name: "Kara-Balta",
    pricetext: "$260",
    color: "#FFFF00",
    owner: false,
    baserent: 330,
  },
  {
    name: "Water Works",
    pricetext: "$150",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Tokmok",
    pricetext: "$280",
    color: "#FFFF00",
    owner: false,
    baserent: 360,
  },
  {
    name: "Go to Jail",
    pricetext: "Go directly to Jail. Do not pass GO. Do not collect $200.",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Bostori",
    pricetext: "$300",
    color: "#008000",
    owner: false,
    baserent: 390,
  },
  {
    name: "Cholpon-Ata",
    pricetext: "$300",
    color: "#008000",
    owner: false,
    baserent: 390,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Karakol",
    pricetext: "$320",
    color: "#008000",
    owner: false,
    baserent: 450,
  },
  {
    name: "Bishkek-2",
    pricetext: "$200",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Osh",
    pricetext: "$350",
    color: "#0000FF",
    owner: false,
    baserent: 500,
  },
  {
    name: "LUXURY TAX",
    pricetext: "Pay $100",
    color: "#FFFFFF",
    owner: false,
    baserent: false,
  },
  {
    name: "Bishkek",
    pricetext: "$400",
    color: "#0000FF",
    owner: false,
    baserent: 600,
  },
];

const usersdb = [
  {
    id: 1,
    name: "Player 1",
    money: 1500,
    houses: [],
    points: 0,
  },
  {
    id: 2,
    name: "Player 2",
    money: 1500,
    houses: [],
    points: 0,
  },
  {
    id: 3,
    name: "Player 3",
    money: 1500,
    houses: [],
    points: 0,
  },
  {
    id: 4,
    name: "Player 4",
    money: 1500,
    houses: [],
    points: 0,
  },
  {
    id: 5,
    name: "Player 5",
    money: 1500,
    houses: [],
    points: 0,
  },
  {
    id: 6,
    name: "Player 6",
    money: 1500,
    houses: [],
    points: 0,
  },
  {
    id: 7,
    name: "Player 7",
    money: 1500,
    houses: [],
    points: 0,
  },
  {
    id: 8,
    name: "Player 8",
    money: 1500,
    houses: [],
    points: 0,
  },
];
export function Map() {
  const [die, seDieSt] = useState(false);
  const [que, setQue] = useState(false);
  let [die1, seDieSt1] = useState(null);
  let [die2, seDieSt2] = useState(null);
  let [user, setUser] = useState(0);

  function handleClick() {
    rollDice();
    nextUser();
    setTimeout(houseAlert, 500);
  }

  function rollDice() {
    seDieSt1(Math.floor(Math.random() * 6) + 1);
    seDieSt2(Math.floor(Math.random() * 6) + 1);
    seDieSt(true);

    usersdb[user].points = usersdb[user].points + die1 + die2;
    if (usersdb[user].points > 40) {
      usersdb[user].points = usersdb[user].points - 40;
    }
    console.log(usersdb[user].houses);
  }
  function nextUser() {
    if (user < users - 1) {
      setUser(user + 1);
    } else if (user >= users - 1) {
      setUser(0);
    }
  }
  function houseAlert() {
    setQue(confirm("Вы хотите купить этот дом?"));
    if (que) {
      usersdb[user].houses.push({
        id: usersdb[user].points,
        name: `Bishkek`,
        price: `200$`,
      });
      usersdb[user].money = usersdb[user].money - 200;
    }
  }
  const { users } = useMyContext();
  return (
    <div className="map">
      <div id="moneybarwrap">
        <div id="moneybar">
          <table>
            {usersdb.map((item) =>
              item.id <= users ? (
                <tbody>
                  <tr id="moneybarrow1" className="money-bar-row">
                    <td id="p1moneybar" className="moneybarcell">
                      <div>
                        <span id="p1moneyname">{item.name}</span>:
                      </div>
                      <div>
                        $<span id="p1money">{item.money}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <div></div>
              )
            )}
          </table>
        </div>
      </div>
      <div>
        <table>
          <tr>
            {usersdb[user].points == 1 ? (
              <td className="cell board-corner selectcolor" id="cell1">
                <div>
                  <p>Bishkek</p>
                  <p>200$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-corner " id="cell1">
                <div>
                  <p>GO</p>
                  <p></p>
                </div>
              </td>
            )}
            {usersdb[user].points == 2 ? (
              <td className="cell board-top selectcolor" id="cell2">
                <div>
                  <p>Suyulak</p>
                  <p>60$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell2">
                <div>
                  <p>Suyulak</p>
                  <p>60$</p>
                </div>
              </td>
            )}

            {usersdb[user].points == 3 ? (
              <td className="cell board-top selectcolor" id="cell3">
                <div>
                  <p>Community Chest</p>
                  <p>FOLLOW INSTRUCTIONS ON TOP CAR</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell3">
                <div>
                  <p>Community Chest</p>
                  <p>FOLLOW INSTRUCTIONS ON TOP CAR</p>
                </div>
              </td>
            )}
            {usersdb[user].points == 4 ? (
              <td className="cell board-top selectcolor" id="cell4">
                <div>
                  <p>Batken</p>
                  <p>60$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell4">
                <div>
                  <p>Batken</p>
                  <p>60$</p>
                </div>
              </td>
            )}
            {usersdb[user].points == 5 ? (
              <td className="cell board-top selectcolor" id="cell5">
                <div>
                  <p>City Tax</p>
                  <p>200$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell5">
                <div>
                  <p>City Tax</p>
                  <p>Pay $200</p>
                </div>
              </td>
            )}
            {usersdb[user].points == 6 ? (
              <td className="cell board-top selectcolor" id="cell6">
                <div>
                  <p>Bishkek</p>
                  <p>200$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell6">
                <div>
                  <p>Osh-1</p>
                  <p>200$</p>
                </div>
              </td>
            )}
            {usersdb[user].points == 7 ? (
              <td className="cell board-top selectcolor" id="cell7">
                <div>
                  <p>Bishkek</p>
                  <p>200$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell7">
                <div>
                  <p>Besh-Tash</p>
                  <p>100$</p>
                </div>
              </td>
            )}
            {usersdb[user].points == 8 ? (
              <td className="cell board-top selectcolor" id="cell8">
                <div>
                  <p>Bishkek</p>
                  <p>200$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell8">
                <div>
                  <p>Chance</p>
                  <p>FOLLOW INSTRUCTIONS ON TOP CARD</p>
                </div>
              </td>
            )}
            {usersdb[user].points == 9 ? (
              <td className="cell board-top selectcolor" id="cell9">
                <div>
                  <p>Bishkek</p>
                  <p>200$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell9">
                <div>
                  <p>Ak-Naryn</p>
                  <p>100$</p>
                </div>
              </td>
            )}
            {usersdb[user].points == 10 ? (
              <td className="cell board-top selectcolor" id="cell10">
                <div>
                  <p>Bishkek</p>
                  <p>200$</p>
                </div>
              </td>
            ) : (
              <td className="cell board-top" id="cell10">
                <div>
                  <p>Talas</p>
                  <p>120$</p>
                </div>
              </td>
            )}
            <td className="cell board-corner" id="cell11">
              <div>
                <p>Just Visiting</p>
                <p>Jail</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell12">
              <div>
                <p>Bishkek</p>
                <p>400$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell13">
              <div>
                <p>Kazarman</p>
                <p>140$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell14">
              <div>
                <p>LUXURY TAX</p>
                <p>Pay $100</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell15">
              <div>
                <p>Electric Company</p>
                <p>150$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell16">
              <div>
                <p>Osh</p>
                <p>350$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell17">
              <div>
                <p>Tash-Kumyr</p>
                <p>140$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell18">
              <div>
                <p>Chance</p>
                <p>FOLLOW INSTRUCTIONS ON TOP CARD</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell19">
              <div>
                <p>Dzhalal-Abad</p>
                <p>160$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell20">
              <div>
                <p>Bishkek-2</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell21">
              <div>
                <p>Osh-2</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell22">
              <div>
                <p>KarakolKarakol</p>
                <p>320$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell23">
              <div>
                <p>Sary-Oy</p>
                <p>180$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell24">
              <div>
                <p>Community Chest</p>
                <p>FOLLOW INSTRUCTIONS ON TOP CARD</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell25">
              <div>
                <p>Community Chest</p>
                <p>FOLLOW INSTRUCTIONS ON TOP CARD</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell26">
              <div>
                <p>Cholpon-Ata</p>
                <p>300$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell27">
              <div>
                <p>Uchkun</p>
                <p>180$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left" id="cell28">
              <div>
                <p>Bostori</p>
                <p>300$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right" id="cell29">
              <div>
                <p>Naryn</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-corner" id="cell30">
              <div>
                <p>Go to Jail</p>
                <p>Go directly to Jail.</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell31">
              <div>
                <p>"Tokmok</p>
                <p>280$</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell32">
              <div>
                <p>Water Works</p>
                <p>150$</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell33">
              <div>
                <p>Kara-Balta</p>
                <p>260$</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell34">
              <div>
                <p>Chon-Ary</p>
                <p>260$</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell35">
              <div>
                <p>Bishkek-1</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell36">
              <div>
                <p>Uzgon</p>
                <p>240$</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell37">
              <div>
                <p>Aravan</p>
                <p>220$</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell38">
              <div>
                <p>Chance</p>
                <p>FOLLOW INSTRUCTIONS ON TOP CARD</p>
              </div>
            </td>
            <td className="cell board-bottom" id="cell39">
              <div>
                <p>Nookat</p>
                <p>220$</p>
              </div>
            </td>
            <td className="cell board-corner" id="cell40">
              <div>
                <p>Free Parking</p>
                <p></p>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div id="control">
        <table>
          <tr>
            <td
              style={{
                textAlign: "left",
                verticalAlign: "top",
                border: "none",
              }}
            >
              <div id="menu">
                <table id="menutable" cellspacing="0">
                  <tr>
                    <td class="menu-item" id="buy-menu-item">
                      <a
                        href="javascript:void(0);"
                        title="View alerts and buy the property you landed on."
                      >
                        Buy
                      </a>
                    </td>
                    <td class="menu-item" id="manage-menu-item">
                      <a
                        href="javascript:void(0);"
                        title="View, mortgage, and improve your property. "
                      >
                        Manage
                      </a>
                    </td>
                    <td class="menu-item" id="trade-menu-item">
                      <a
                        href="javascript:void(0);"
                        title="Exchange property with other players."
                      >
                        Trade
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <div id="diceView">
                {die ? (
                  die1 == 1 ? (
                    <img src={dieicon1} alt="error" className="diceIcons" />
                  ) : die1 == 2 ? (
                    <img src={dieicon2} alt="error" className="diceIcons" />
                  ) : die1 == 3 ? (
                    <img src={dieicon3} alt="error" className="diceIcons" />
                  ) : die1 == 4 ? (
                    <img src={dieicon4} alt="error" className="diceIcons" />
                  ) : die1 == 5 ? (
                    <img src={dieicon5} alt="error" className="diceIcons" />
                  ) : (
                    <img src={dieicon6} alt="error" className="diceIcons" />
                  )
                ) : (
                  <div></div>
                )}
                {die ? (
                  die2 == 1 ? (
                    <img src={dieicon1} alt="error" className="diceIcons" />
                  ) : die2 == 2 ? (
                    <img src={dieicon2} alt="error" className="diceIcons" />
                  ) : die2 == 3 ? (
                    <img src={dieicon3} alt="error" className="diceIcons" />
                  ) : die2 == 4 ? (
                    <img src={dieicon4} alt="error" className="diceIcons" />
                  ) : die2 == 5 ? (
                    <img src={dieicon5} alt="error" className="diceIcons" />
                  ) : (
                    <img src={dieicon6} alt="error" className="diceIcons" />
                  )
                ) : (
                  <div></div>
                )}
              </div>

              <div id="manage">
                <div id="option">
                  <div id="buildings" title="Available buildings"></div>
                  <input type="button" value="Buy house" id="buyhousebutton" />
                  <input type="button" value="Mortgage" id="mortgagebutton" />
                  <input
                    type="button"
                    value="Sell house"
                    id="sellhousebutton"
                  />
                </div>
                <div id="owned"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2" style={{ border: "none" }}>
              <div style={{ paddingTop: "8px" }}>
                <p style={{ color: "black" }}>След ход:{usersdb[user].name}</p>
                <input
                  type="button"
                  id="nextbutton"
                  title="Roll the dice and move your token accordingly."
                  value="Roll Dice"
                  onClick={() => {
                    handleClick();
                  }}
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
