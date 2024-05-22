import './gamelogic.css'

export function Accounts(){
//     const player1 = [
//     {
//         'nickname': 'zaka',
//         'color': 'red',
//         'id': "first-player",
//         'value': '',
//         'balance': 15000,
//         'own': '',
//         'stopped': '',
//     }];
//     const player2 = [
//         {
//             'nickname': 'Abu',
//             'color': 'blue',
//             'id': "second-player",
//             'value': '',
//             'balance': 15000,
//             'own': '',
//             'stopped': '',
//         }
// ]
function Player(name, color) {
	this.name = name;
	this.color = color;
	this.position = 0;
	this.money = 1500;
	this.creditor = -1;
	this.jail = false;
	this.jailroll = 0;
	this.communityChestJailCard = false;
	this.chanceJailCard = false;
	this.bidding = true;
	this.human = true;


	this.pay = function (amount, creditor) {
		if (amount <= this.money) {
			this.money -= amount;

			updateMoney();

			return true;
		} else {
			this.money -= amount;
			this.creditor = creditor;

			updateMoney();

			return false;
		}
	};
}

function setup() {
    pcount = parseInt(document.getElementById("playernumber").value, 10);

    var playerArray = new Array(pcount);
    var p;

    playerArray.randomize();

    for (var i = 1; i <= pcount; i++) {
        p = player[playerArray[i - 1]];


        p.color = document.getElementById("player" + i + "color").value.toLowerCase();

        if (document.getElementById("player" + i + "ai").value === "0") {
            p.name = document.getElementById("player" + i + "name").value;
            p.human = true;
        } else if (document.getElementById("player" + i + "ai").value === "1") {
            p.human = false;
            p.AI = new AITest(p);
        }
    }

    $("#board, #moneybar").show();
    $("#setup").hide();

    if (pcount === 2) {
        document.getElementById("stats").style.width = "454px";
    } else if (pcount === 3) {
        document.getElementById("stats").style.width = "686px";
    }

    document.getElementById("stats").style.top = "0px";
    document.getElementById("stats").style.left = "0px";

    play();
}

function updateOwned() {
    var p = player[turn];
    var checkedproperty = getCheckedProperty();
    $("#option").show();
    $("#owned").show();

    var HTML = "",
    firstproperty = -1;

    var mortgagetext = "",
    housetext = "";
    var sq;

    for (var i = 0; i < 40; i++) {
        sq = square[i];
        if (sq.groupNumber && sq.owner === 0) {
            $("#cell" + i + "owner").hide();
        } else if (sq.groupNumber && sq.owner > 0) {
            var currentCellOwner = document.getElementById("cell" + i + "owner");

            currentCellOwner.style.display = "block";
            currentCellOwner.style.backgroundColor = player[sq.owner].color;
            currentCellOwner.title = player[sq.owner].name;
        }
    }

    for (var i = 0; i < 40; i++) {
        sq = square[i];
        if (sq.owner == turn) {

            mortgagetext = "";
            if (sq.mortgage) {
                mortgagetext = "title='Mortgaged' style='color: grey;'";
            }

            housetext = "";
            if (sq.house >= 1 && sq.house <= 4) {
                for (var x = 1; x <= sq.house; x++) {
                    housetext += "<img src='images/house.png' alt='' title='House' class='house' />";
                }
            } else if (sq.hotel) {
                housetext += "<img src='images/hotel.png' alt='' title='Hotel' class='hotel' />";
            }

            if (HTML === "") {
                HTML += "<table>";
                firstproperty = i;
            }

            HTML += "<tr class='property-cell-row'><td class='propertycellcheckbox'><input type='checkbox' id='propertycheckbox" + i + "' /></td><td class='propertycellcolor' style='background: " + sq.color + ";";

            if (sq.groupNumber == 1 || sq.groupNumber == 2) {
                HTML += " border: 1px solid grey; width: 18px;";
            }

            HTML += "' onmouseover='showdeed(" + i + ");' onmouseout='hidedeed();'></td><td class='propertycellname' " + mortgagetext + ">" + sq.name + housetext + "</td></tr>";
        }
    }

    if (p.communityChestJailCard) {
        if (HTML === "") {
            firstproperty = 40;
            HTML += "<table>";
        }
        HTML += "<tr class='property-cell-row'><td class='propertycellcheckbox'><input type='checkbox' id='propertycheckbox40' /></td><td class='propertycellcolor' style='background: white;'></td><td class='propertycellname'>Get Out of Jail Free Card</td></tr>";

    }
    if (p.chanceJailCard) {
        if (HTML === "") {
            firstproperty = 41;
            HTML += "<table>";
        }
        HTML += "<tr class='property-cell-row'><td class='propertycellcheckbox'><input type='checkbox' id='propertycheckbox41' /></td><td class='propertycellcolor' style='background: white;'></td><td class='propertycellname'>Get Out of Jail Free Card</td></tr>";
    }

    if (HTML === "") {
        HTML = p.name + ", you don't have any properties.";
        $("#option").hide();
    } else {
        HTML += "</table>";
    }

    document.getElementById("owned").innerHTML = HTML;

    // Select previously selected property.
    if (checkedproperty > -1 && document.getElementById("propertycheckbox" + checkedproperty)) {
        document.getElementById("propertycheckbox" + checkedproperty).checked = true;
    } else if (firstproperty > -1) {
        document.getElementById("propertycheckbox" + firstproperty).checked = true;
    }
    $(".property-cell-row").click(function() {
        var row = this;

        // Toggle check the current checkbox.
        $(this).find(".propertycellcheckbox > input").prop("checked", function(index, val) {
            return !val;
        });

        // Set all other checkboxes to false.
        $(".propertycellcheckbox > input").prop("checked", function(index, val) {
            if (!$.contains(row, this)) {
                return false;
            }
        });

        updateOption();
    });
    updateOption();
}
function gobackthreespaces() {
    var p = player[turn];

    p.position -= 3;

    land();
}
    return(
        <div id="moneybarwrap">
		<div id="moneybar">
			<table>
                <tbody>
                <tr id="moneybarrow1" className="money-bar-row">
					<td className="moneybararrowcell"><img src="src\assets\img\arrow.svg" id="p1arrow" className="money-bar-arrow" style={{width: '50px'}} alt=">"/></td>
					<td id="p1moneybar" className="moneybarcell">
						<div><span id="p1moneyname" >Player 1</span>:</div>
						<div>$<span id="p1money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow2" className="money-bar-row">
                <td className="moneybararrowcell"><img src="src\assets\img\arrow.svg" id="p1arrow" className="money-bar-arrow" style={{width: '50px'}} alt=">"/></td>
					<td id="p2moneybar" className="moneybarcell">
						<div><span id="p2moneyname" >Player 2</span>:</div>
						<div>$<span id="p2money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow3" className="money-bar-row">
                <td className="moneybararrowcell"><img src="src\assets\img\arrow.svg" id="p1arrow" className="money-bar-arrow" style={{width: '50px'}} alt=">"/></td>
					<td id="p3moneybar" className="moneybarcell">
						<div><span id="p3moneyname" >Player 3</span>:</div>
						<div>$<span id="p3money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow4" className="money-bar-row">
                <td className="moneybararrowcell"><img src="src\assets\img\arrow.svg" id="p1arrow" className="money-bar-arrow" style={{width: '50px'}} alt=">"/></td>
					<td id="p4moneybar" className="moneybarcell">
						<div><span id="p4moneyname" >Player 4</span>:</div>
						<div>$<span id="p4money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow5" className="money-bar-row">
                <td className="moneybararrowcell"><img src="src\assets\img\arrow.svg" id="p1arrow" className="money-bar-arrow" style={{width: '50px'}} alt=">"/></td>
					<td id="p5moneybar" className="moneybarcell">
						<div><span id="p5moneyname" >Player 5</span>:</div>
						<div>$<span id="p5money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow6" className="money-bar-row">
                <td className="moneybararrowcell"><img src="src\assets\img\arrow.svg" id="p1arrow" className="money-bar-arrow" style={{width: '50px'}} alt=">"/></td>
					<td id="p6moneybar" className="moneybarcell">
						<div><span id="p6moneyname" >Player 6</span>:</div>
						<div>$<span id="p6money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow7" className="money-bar-row">
                <td className="moneybararrowcell"><img src="src\assets\img\arrow.svg" id="p1arrow" className="money-bar-arrow" style={{width: '50px'}} alt=">"/></td>
					<td id="p7moneybar" className="moneybarcell">
						<div><span id="p7moneyname" >Player 7</span>:</div>
						<div>$<span id="p7money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrow8" className="money-bar-row">
                <td className="moneybararrowcell"><img src="src\assets\img\arrow.svg" id="p1arrow" className="money-bar-arrow" style={{width: '50px'}} alt=">"/></td>
					<td id="p8moneybar" className="moneybarcell">
						<div><span id="p8moneyname" >Player 8</span>:</div>
						<div>$<span id="p8money">1500</span></div>
					</td>
				</tr>
				<tr id="moneybarrowbutton">
					<td className="moneybararrowcell">&nbsp;</td>
					<td >
						<input type="button" id="viewstats" value="View stats" title="View a pop-up window that shows a list of each player's properties." />
					</td>
				</tr>
                </tbody>
			</table>
		</div>
	</div>
    )

}