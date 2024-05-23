import "./map.css";
import dieicon1 from "../../assets/img/Die_1.svg";
import dieicon2 from "../../assets/img/Die-2.svg";
import dieicon3 from "../../assets/img/Die-3.svg";
import dieicon4 from "../../assets/img/Die-4.svg";
import dieicon5 from "../../assets/img/Die-5.svg";
import dieicon6 from "../../assets/img/Die-6.svg";
import { useState } from "react";

const squareData = [
  {
    name: "GO",
    pricetext: "COLLECT $200 SALARY AS YOU PASS.",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Suyulak",
    pricetext: "$60",
    color: "#8B4513",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 90,
    rent1: 160,
    rent2: 250,
    rent3: false,
    landcount: 2,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Batken",
    pricetext: "$60",
    color: "#8B4513",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 180,
    rent1: 320,
    rent2: 450,
    rent3: false,
    landcount: 4,
  },
  {
    name: "City Tax",
    pricetext: "Pay $200",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Osh-1",
    pricetext: "$200",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: 1,
  },
  {
    name: "Besh-Tash",
    pricetext: "$100",
    color: "#87CEEB",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 90,
    rent1: 270,
    rent2: 400,
    rent3: 550,
    landcount: 6,
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Ak-Naryn",
    pricetext: "$100",
    color: "#87CEEB",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 90,
    rent1: 270,
    rent2: 400,
    rent3: 550,
    landcount: 6,
  },
  {
    name: "Talas",
    pricetext: "$120",
    color: "#87CEEB",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 100,
    rent1: 300,
    rent2: 450,
    rent3: 600,
    landcount: 8,
  },
  {
    name: "Just Visiting",
    pricetext: "",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Kazarman",
    pricetext: "$140",
    color: "#FF0080",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 150,
    rent1: 450,
    rent2: 625,
    rent3: 750,
    landcount: 10,
  },
  {
    name: "Electric Company",
    pricetext: "$150",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: 2,
  },
  {
    name: "Tash-Kumyr",
    pricetext: "$140",
    color: "#FF0080",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 150,
    rent1: 450,
    rent2: 625,
    rent3: 750,
    landcount: 10,
  },
  {
    name: "Dzhalal-Abad",
    pricetext: "$160",
    color: "#FF0080",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 180,
    rent1: 500,
    rent2: 700,
    rent3: 900,
    landcount: 12,
  },
  {
    name: "Osh-2",
    pricetext: "$200",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: 1,
  },
  {
    name: "Sary-Oy",
    pricetext: "$180",
    color: "#FFA500",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 200,
    rent1: 550,
    rent2: 750,
    rent3: 950,
    landcount: 14,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Uchkun",
    pricetext: "$180",
    color: "#FFA500",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 200,
    rent1: 550,
    rent2: 750,
    rent3: 950,
    landcount: 14,
  },
  {
    name: "Naryn",
    pricetext: "$200",
    color: "#FFA500",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 220,
    rent1: 600,
    rent2: 800,
    rent3: 1000,
    landcount: 16,
  },
  {
    name: "Free Parking",
    pricetext: "",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Nookat",
    pricetext: "$220",
    color: "#FF0000",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 250,
    rent1: 700,
    rent2: 875,
    rent3: 1050,
    landcount: 18,
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Aravan",
    pricetext: "$220",
    color: "#FF0000",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 250,
    rent1: 700,
    rent2: 875,
    rent3: 1050,
    landcount: 18,
  },
  {
    name: "Uzgon",
    pricetext: "$240",
    color: "#FF0000",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 300,
    rent1: 750,
    rent2: 925,
    rent3: 1100,
    landcount: 20,
  },
  {
    name: "Bishkek-1",
    pricetext: "$200",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: 1,
  },
  {
    name: "Chon-Aryk",
    pricetext: "$260",
    color: "#FFFF00",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 330,
    rent1: 800,
    rent2: 975,
    rent3: 1150,
    landcount: 22,
  },
  {
    name: "Kara-Balta",
    pricetext: "$260",
    color: "#FFFF00",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 330,
    rent1: 800,
    rent2: 975,
    rent3: 1150,
    landcount: 22,
  },
  {
    name: "Water Works",
    pricetext: "$150",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: 2,
  },
  {
    name: "Tokmok",
    pricetext: "$280",
    color: "#FFFF00",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 360,
    rent1: 850,
    rent2: 1025,
    rent3: 1200,
    landcount: 24,
  },
  {
    name: "Go to Jail",
    pricetext: "Go directly to Jail. Do not pass GO. Do not collect $200.",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Bostori",
    pricetext: "$300",
    color: "#008000",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 390,
    rent1: 900,
    rent2: 1100,
    rent3: 1275,
    landcount: 26,
  },
  {
    name: "Cholpon-Ata",
    pricetext: "$300",
    color: "#008000",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 390,
    rent1: 900,
    rent2: 1100,
    rent3: 1275,
    landcount: 26,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Karakol",
    pricetext: "$320",
    color: "#008000",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 450,
    rent1: 1000,
    rent2: 1200,
    rent3: 1400,
    landcount: 28,
  },
  {
    name: "Bishkek-2",
    pricetext: "$200",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: 1,
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Osh",
    pricetext: "$350",
    color: "#0000FF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 500,
    rent1: 1100,
    rent2: 1300,
    rent3: 1500,
    landcount: 35,
  },
  {
    name: "LUXURY TAX",
    pricetext: "Pay $100",
    color: "#FFFFFF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: false,
    rent1: false,
    rent2: false,
    rent3: false,
    landcount: false,
  },
  {
    name: "Bishkek",
    pricetext: "$400",
    color: "#0000FF",
    owner: false,
    mortgage: false,
    house: false,
    hotel: false,
    baserent: 600,
    rent1: 1400,
    rent2: 1700,
    rent3: 2000,
    landcount: 50,
  },
];

export function Map() {
  const [die, seDieSt] = useState(false);
  let [die1, seDieSt1] = useState(null);
  let [die2, seDieSt2] = useState(null);
  function rollDice() {
    seDieSt1(Math.floor(Math.random() * 6) + 1);
    seDieSt2(Math.floor(Math.random() * 6) + 1);
    seDieSt(true);
  }
  return (
    <div className="map">
      <div id="moneybarwrap">
        <div id="moneybar">
          <button onClick={() => onsole.log(props.numuser)}>dawdadw</button>
          <table>
            <tbody>
              <tr id="moneybarrow1" className="money-bar-row">
                <td className="moneybararrowcell">
                  <img
                    src="src\assets\img\arrow.svg"
                    id="p1arrow"
                    className="money-bar-arrow"
                    style={{ width: "50px" }}
                    alt=">"
                  />
                </td>
                <td id="p1moneybar" className="moneybarcell">
                  <div>
                    <span id="p1moneyname">Player 1</span>:
                  </div>
                  <div>
                    $<span id="p1money">1500</span>
                  </div>
                </td>
              </tr>
              <tr id="moneybarrow2" className="money-bar-row">
                <td className="moneybararrowcell">
                  <img
                    src="src\assets\img\arrow.svg"
                    id="p1arrow"
                    className="money-bar-arrow"
                    style={{ width: "50px" }}
                    alt=">"
                  />
                </td>
                <td id="p2moneybar" className="moneybarcell">
                  <div>
                    <span id="p2moneyname">Player 2</span>:
                  </div>
                  <div>
                    $<span id="p2money">1500</span>
                  </div>
                </td>
              </tr>
              <tr id="moneybarrow3" className="money-bar-row">
                <td className="moneybararrowcell">
                  <img
                    src="src\assets\img\arrow.svg"
                    id="p1arrow"
                    className="money-bar-arrow"
                    style={{ width: "50px" }}
                    alt=">"
                  />
                </td>
                <td id="p3moneybar" className="moneybarcell">
                  <div>
                    <span id="p3moneyname">Player 3</span>:
                  </div>
                  <div>
                    $<span id="p3money">1500</span>
                  </div>
                </td>
              </tr>
              <tr id="moneybarrow4" className="money-bar-row">
                <td className="moneybararrowcell">
                  <img
                    src="src\assets\img\arrow.svg"
                    id="p1arrow"
                    className="money-bar-arrow"
                    style={{ width: "50px" }}
                    alt=">"
                  />
                </td>
                <td id="p4moneybar" className="moneybarcell">
                  <div>
                    <span id="p4moneyname">Player 4</span>:
                  </div>
                  <div>
                    $<span id="p4money">1500</span>
                  </div>
                </td>
              </tr>
              <tr id="moneybarrow5" className="money-bar-row">
                <td className="moneybararrowcell">
                  <img
                    src="src\assets\img\arrow.svg"
                    id="p1arrow"
                    className="money-bar-arrow"
                    style={{ width: "50px" }}
                    alt=">"
                  />
                </td>
                <td id="p5moneybar" className="moneybarcell">
                  <div>
                    <span id="p5moneyname">Player 5</span>:
                  </div>
                  <div>
                    $<span id="p5money">1500</span>
                  </div>
                </td>
              </tr>
              <tr id="moneybarrow6" className="money-bar-row">
                <td className="moneybararrowcell">
                  <img
                    src="src\assets\img\arrow.svg"
                    id="p1arrow"
                    className="money-bar-arrow"
                    style={{ width: "50px" }}
                    alt=">"
                  />
                </td>
                <td id="p6moneybar" className="moneybarcell">
                  <div>
                    <span id="p6moneyname">Player 6</span>:
                  </div>
                  <div>
                    $<span id="p6money">1500</span>
                  </div>
                </td>
              </tr>
              <tr id="moneybarrow7" className="money-bar-row">
                <td className="moneybararrowcell">
                  <img
                    src="src\assets\img\arrow.svg"
                    id="p1arrow"
                    className="money-bar-arrow"
                    style={{ width: "50px" }}
                    alt=">"
                  />
                </td>
                <td id="p7moneybar" className="moneybarcell">
                  <div>
                    <span id="p7moneyname">Player 7</span>:
                  </div>
                  <div>
                    $<span id="p7money">1500</span>
                  </div>
                </td>
              </tr>
              <tr id="moneybarrow8" className="money-bar-row">
                <td className="moneybararrowcell">
                  <img
                    src="src\assets\img\arrow.svg"
                    id="p1arrow"
                    className="money-bar-arrow"
                    style={{ width: "50px" }}
                    alt=">"
                  />
                </td>
                <td id="p8moneybar" className="moneybarcell">
                  <div>
                    <span id="p8moneyname">Player 8</span>:
                  </div>
                  <div>
                    $<span id="p8money">1500</span>
                  </div>
                </td>
              </tr>
              <tr id="moneybarrowbutton">
                <td className="moneybararrowcell">&nbsp;</td>
                <td>
                  <input
                    type="button"
                    id="viewstats"
                    value="View stats"
                    title="View a pop-up window that shows a list of each player's properties."
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <td className="cell board-corner">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-top">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-corner">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-left">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td colspan="9" class="board-center"></td>
            <td className="cell board-right">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cell board-corner">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-bottom">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
              </div>
            </td>
            <td className="cell board-corner">
              <div>
                <p>Bishkek</p>
                <p>200$</p>
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
                <input
                  type="button"
                  id="nextbutton"
                  title="Roll the dice and move your token accordingly."
                  value="Roll Dice"
                  onClick={() => {
                    rollDice();
                  }}
                />
                <input
                  type="button"
                  id="resignbutton"
                  title="If you cannot pay your debt then you must resign from the game."
                  value="Resign"
                  onclick="game.resign();"
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
