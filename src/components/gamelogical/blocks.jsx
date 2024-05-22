

export function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;
    // groupNumber 1 = bus station, 2 = communal, 3 = Batken, 4 = Talas, 5 = Dzhalal Abad, 6 = Naryn, 7 = Osh, 8 = Chuy, 9 = Issyk kul, 10 = Kapitals 

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}

    function Card(text, action) {
        this.text = text;
        this.action = action;
    }

    var Square = []

    square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
    square[1] = new Square("Suyulak", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
    square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
    square[3] = new Square("Batken", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
    square[4] = new Square("City Tax", "Pay $200", "#FFFFFF");
    square[5] = new Square("Osh-1", "$200", "#FFFFFF", 200, 1);
    square[6] = new Square("Besh-Tash", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
    square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
    square[8] = new Square("Ak-Naryn", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
    square[9] = new Square("Talas", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
    square[10] = new Square("Just Visiting", "", "#FFFFFF");
    square[11] = new Square("Kazarman", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
    square[12] = new Square("Electric Company", "$150", "#FFFFFF", 150, 2);
    square[13] = new Square("Tash-Kumyr", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
    square[14] = new Square("Dzhalal-Abad", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
    square[15] = new Square("Osh-2", "$200", "#FFFFFF", 200, 1);
    square[16] = new Square("Sary-Oy", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
    square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
    square[18] = new Square("Uchkun", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
    square[19] = new Square("Naryn", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
    square[20] = new Square("Free Parking", "", "#FFFFFF");
    square[21] = new Square("Nookat", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
    square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
    square[23] = new Square("Aravan", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
    square[24] = new Square("Uzgon", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
    square[25] = new Square("Bishkek-1", "$200", "#FFFFFF", 200, 1);
    square[26] = new Square("Chon-Aryk", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
    square[27] = new Square("Kara-Balta", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
    square[28] = new Square("Water Works", "$150", "#FFFFFF", 150, 2);
    square[29] = new Square("Tokmok", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
    square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
    square[31] = new Square("Bostori", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
    square[32] = new Square("Cholpon-Ata", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
    square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
    square[34] = new Square("Karakol", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
    square[35] = new Square("Bishkek-2", "$200", "#FFFFFF", 200, 1);
    square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
    square[37] = new Square("Osh", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
    square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
    square[39] = new Square("Bishkek    ", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);


    var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("You have won second prize in a beauty contest. Collect $10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("From sale of stock, you get $50.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Life insurance matures. Collect $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Income tax refund. Collect $20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Holiday fund matures. Receive $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("You inherit $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Receive $25 consultancy fee.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Pay hospital fees of $100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Bank error in your favor. Collect $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Pay school fees of $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Doctor's fee. Pay $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("It is your birthday. Collect $10 from every player.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Advance to \"GO\" (Collect $200).", function() { advance(0);});
communityChestCards[14] = new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});

function chanceCommunityChest() {
	var p = player[turn];

	// Community Chest
	if (p.position === 2 || p.position === 17 || p.position === 33) {
		var communityChestIndex = communityChestCards.deck[communityChestCards.index];

		// Remove the get out of jail free card from the deck.
		if (communityChestIndex === 0) {
			communityChestCards.deck.splice(communityChestCards.index, 1);
		}

		popup("<img src='images/community_chest_icon.png' style='height: 50px; width: 53px; float: left; margin: 8px 8px 8px 0px;' /><div style='font-weight: bold; font-size: 16px; '>Community Chest:</div><div style='text-align: justify;'>" + communityChestCards[communityChestIndex].text + "</div>", function() {
			communityChestAction(communityChestIndex);
		});

		communityChestCards.index++;

		if (communityChestCards.index >= communityChestCards.deck.length) {
			communityChestCards.index = 0;
		}

	// Chance
	} else if (p.position === 7 || p.position === 22 || p.position === 36) {
		var chanceIndex = chanceCards.deck[chanceCards.index];

		// Remove the get out of jail free card from the deck.
		if (chanceIndex === 0) {
			chanceCards.deck.splice(chanceCards.index, 1);
		}

		popup("<img src='images/chance_icon.png' style='height: 50px; width: 26px; float: left; margin: 8px 8px 8px 0px;' /><div style='font-weight: bold; font-size: 16px; '>Chance:</div><div style='text-align: justify;'>" + chanceCards[chanceIndex].text + "</div>", function() {
			chanceAction(chanceIndex);
		});

		chanceCards.index++;

		if (chanceCards.index >= chanceCards.deck.length) {
			chanceCards.index = 0;
		}
	} else {
	}
}

function chanceAction(chanceIndex) {
	var p = player[turn]; // This is needed for reference in action() method.

	// $('#popupbackground').hide();
	// $('#popupwrap').hide();
	chanceCards[chanceIndex].action(p);

	updateMoney();

	if (chanceIndex !== 15 && !p.human) {
		p.AI.alertList = "";
		game.next();
	}
}

function communityChestAction(communityChestIndex) {
	var p = player[turn]; // This is needed for reference in action() method.

	// $('#popupbackground').hide();
	// $('#popupwrap').hide();
	communityChestCards[communityChestIndex].action(p);

	updateMoney();

	if (communityChestIndex !== 15 && !p.human) {
		p.AI.alertList = "";
		game.next();
	}
}

chanceCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Make General Repairs on All Your Property. For each house pay $25. For each hotel $100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Speeding fine $15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("You have been elected chairman of the board. Pay each player $50.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Bank pays you dividend of $50.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Pay poor tax of $15.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Take a trip to Reading Rail Road. If you pass \"GO\" collect $200.", function() { advance(5);});
chanceCards[10] = new Card("ADVANCE to Boardwalk.", function() { advance(39);});
chanceCards[11] = new Card("ADVANCE to Illinois Avenue. If you pass \"GO\" collect $200.", function() { advance(24);});
chanceCards[12] = new Card("Your building loan matures. Collect $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("ADVANCE to St. Charles Place. If you pass \"GO\" collect $200.", function() { advance(11);});
chanceCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});



    for (var i = 0; i < 40; i++) {
        s = square[i];
    
        currentCell = document.getElementById("cell" + i);
    
        currentCellAnchor = currentCell.appendChild(document.createElement("div"));
        currentCellAnchor.id = "cell" + i + "anchor";
        currentCellAnchor.className = "cell-anchor";
    
        currentCellPositionHolder = currentCellAnchor.appendChild(document.createElement("div"));
        currentCellPositionHolder.id = "cell" + i + "positionholder";
        currentCellPositionHolder.className = "cell-position-holder";
        currentCellPositionHolder.enlargeId = "enlarge" + i;
    
        currentCellName = currentCellAnchor.appendChild(document.createElement("div"));
        currentCellName.id = "cell" + i + "name";
        currentCellName.className = "cell-name";
        currentCellName.textContent = s.name;
    
        if (square[i].groupNumber) {
            currentCellOwner = currentCellAnchor.appendChild(document.createElement("div"));
            currentCellOwner.id = "cell" + i + "owner";
            currentCellOwner.className = "cell-owner";
        }
    
        document.getElementById("enlarge" + i + "color").style.backgroundColor = s.color;
        document.getElementById("enlarge" + i + "name").textContent = s.name;
        document.getElementById("enlarge" + i + "price").textContent = s.pricetext;
    }

     function corrections() {
        document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";
    
        document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
        document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
        document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
        document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
        document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
        document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
    }
     function utiltext() {
        return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
    }
    
    function transtext() {
        return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
    }
    function luxurytax() {
        addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
        player[turn].pay(100, 0);
    
        $("#landed").show().text("You landed on Luxury Tax. Pay $100.");
    }
    
    function citytax() {
        addAlert(player[turn].name + " paid $200 for landing on City Tax.");
        player[turn].pay(200, 0);
    
        $("#landed").show().text("You landed on City Tax. Pay $200.");
    }
    
    
    
}
