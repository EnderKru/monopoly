
export function Dice(){
    var die1;
	var die2;
	var areDiceRolled = false;

    this.rollDice = function() {
		die1 = Math.floor(Math.random() * 6) + 1;
		die2 = Math.floor(Math.random() * 6) + 1;
		areDiceRolled = true;
	};

	this.resetDice = function() {
		areDiceRolled = false;
	};

	this.getDie = function(die) {
		if (die === 1) {

			return die1;
		} else {

			return die2;
		}

	};

	function updateDice() {
		var die0 = game.getDie(1);
		var die1 = game.getDie(2);
	
		$("#die0").show();
		$("#die1").show();
	
		if (document.images) {
			var element0 = document.getElementById("die0");
			var element1 = document.getElementById("die1");
	
			element0.classList.remove("die-no-img");
			element1.classList.remove("die-no-img");
	
			element0.title = "Die (" + die0 + " spots)";
			element1.title = "Die (" + die1 + " spots)";
	
			if (element0.firstChild) {
				element0 = element0.firstChild;
			} else {
				element0 = element0.appendChild(document.createElement("img"));
			}
	
			element0.src = "images/Die_" + die0 + ".svg";
			element0.alt = die0;
	
			if (element1.firstChild) {
				element1 = element1.firstChild;
			} else {
				element1 = element1.appendChild(document.createElement("img"));
			}
	
			element1.src = "images/Die_" + die1 + ".svg";
			element1.alt = die0;
		} else {
			document.getElementById("die0").textContent = die0;
			document.getElementById("die1").textContent = die1;
	
			document.getElementById("die0").title = "Die";
			document.getElementById("die1").title = "Die";
		}
	}

	function roll() {
		var p = player[turn];
	
		$("#option").hide();
		$("#buy").show();
		$("#manage").hide();
	
		if (p.human) {
			document.getElementById("nextbutton").focus();
		}
		document.getElementById("nextbutton").value = "End turn";
		document.getElementById("nextbutton").title = "End turn and advance to the next player.";
	
		game.rollDice();
		var die1 = game.getDie(1);
		var die2 = game.getDie(2);
	
		doublecount++;
	
		if (die1 == die2) {
			addAlert(p.name + " rolled " + (die1 + die2) + " - doubles.");
		} else {
			addAlert(p.name + " rolled " + (die1 + die2) + ".");
		}
	
		if (die1 == die2 && !p.jail) {
			updateDice(die1, die2);
	
			if (doublecount < 3) {
				document.getElementById("nextbutton").value = "Roll again";
				document.getElementById("nextbutton").title = "You threw doubles. Roll again.";
	
			// If player rolls doubles three times in a row, send him to jail
			} else if (doublecount === 3) {
				p.jail = true;
				doublecount = 0;
				addAlert(p.name + " rolled doubles three times in a row.");
				updateMoney();
	
	
				if (p.human) {
					popup("You rolled doubles three times in a row. Go to jail.", gotojail);
				} else {
					gotojail();
				}
	
				return;
			}
		} else {
			document.getElementById("nextbutton").value = "End turn";
			document.getElementById("nextbutton").title = "End turn and advance to the next player.";
			doublecount = 0;
		}
	
		updatePosition();
		updateMoney();
		updateOwned();
	
		if (p.jail === true) {
			p.jailroll++;
	
			updateDice(die1, die2);
			if (die1 == die2) {
				document.getElementById("jail").style.border = "1px solid black";
				document.getElementById("cell11").style.border = "2px solid " + p.color;
				$("#landed").hide();
	
				p.jail = false;
				p.jailroll = 0;
				p.position = 10 + die1 + die2;
				doublecount = 0;
	
				addAlert(p.name + " rolled doubles to get out of jail.");
	
				land();
			} else {
				if (p.jailroll === 3) {
	
					if (p.human) {
						popup("<p>You must pay the $50 fine.</p>", function() {
							payfifty();
							player[turn].position=10 + die1 + die2;
							land();
						});
					} else {
						payfifty();
						p.position = 10 + die1 + die2;
						land();
					}
				} else {
					$("#landed").show();
					document.getElementById("landed").innerHTML = "You are in jail.";
	
					if (!p.human) {
						popup(p.AI.alertList, game.next);
						p.AI.alertList = "";
					}
				}
			}
	
	
		} else {
			updateDice(die1, die2);
	
			// Move player
			p.position += die1 + die2;
	
			// Collect $200 salary as you pass GO
			if (p.position >= 40) {
				p.position -= 40;
				p.money += 200;
				addAlert(p.name + " collected a $200 salary for passing GO.");
			}
	
			land();
		}
	}
	
	function play() {
		if (game.auction()) {
			return;
		}
	
		turn++;
		if (turn > pcount) {
			turn -= pcount;
		}
	
		var p = player[turn];
		game.resetDice();
	
		document.getElementById("pname").innerHTML = p.name;
	
		addAlert("It is " + p.name + "'s turn.");
	
		// Check for bankruptcy.
		p.pay(0, p.creditor);
	
		$("#landed, #option, #manage").hide();
		$("#board, #control, #moneybar, #viewstats, #buy").show();
	
		doublecount = 0;
		if (p.human) {
			document.getElementById("nextbutton").focus();
		}
		document.getElementById("nextbutton").value = "Roll Dice";
		document.getElementById("nextbutton").title = "Roll the dice and move your token accordingly.";
	
		$("#die0").hide();
		$("#die1").hide();
	
		if (p.jail) {
			$("#landed").show();
			document.getElementById("landed").innerHTML = "You are in jail.<input type='button' title='Pay $50 fine to get out of jail immediately.' value='Pay $50 fine' onclick='payfifty();' />";
	
			if (p.communityChestJailCard || p.chanceJailCard) {
				document.getElementById("landed").innerHTML += "<input type='button' id='gojfbutton' title='Use &quot;Get Out of Jail Free&quot; card.' onclick='useJailCard();' value='Use Card' />";
			}
	
			document.getElementById("nextbutton").title = "Roll the dice. If you throw doubles, you will get out of jail.";
	
			if (p.jailroll === 0)
				addAlert("This is " + p.name + "'s first turn in jail.");
			else if (p.jailroll === 1)
				addAlert("This is " + p.name + "'s second turn in jail.");
			else if (p.jailroll === 2) {
				document.getElementById("landed").innerHTML += "<div>NOTE: If you do not throw doubles after this roll, you <i>must</i> pay the $50 fine.</div>";
				addAlert("This is " + p.name + "'s third turn in jail.");
			}
	
			if (!p.human && p.AI.postBail()) {
				if (p.communityChestJailCard || p.chanceJailCard) {
					useJailCard();
				} else {
					payfifty();
				}
			}
		}
	
		updateMoney();
		updatePosition();
		updateOwned();
	
		$(".money-bar-arrow").hide();
		$("#p" + turn + "arrow").show();
	
		if (!p.human) {
			if (!p.AI.beforeTurn()) {
				game.next();
			}
		}
	}

}