

export function Square(name, pricetext, color, price, grouxpNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
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

}


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
