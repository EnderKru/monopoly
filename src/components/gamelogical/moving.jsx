export function updatePosition() {
	// Reset borders
	document.getElementById("jail").style.border = "1px solid black";
	document.getElementById("jailpositionholder").innerHTML = "";
	for (var i = 0; i < 40; i++) {
		document.getElementById("cell" + i).style.border = "1px solid black";
		document.getElementById("cell" + i + "positionholder").innerHTML = "";

	}

	var sq, left, top;

	for (var x = 0; x < 40; x++) {
		sq = square[x];
		left = 0;
		top = 0;

		for (var y = turn; y <= pcount; y++) {

			if (player[y].position == x && !player[y].jail) {

				document.getElementById("cell" + x + "positionholder").innerHTML += "<div class='cell-position' title='" + player[y].name + "' style='background-color: " + player[y].color + "; left: " + left + "px; top: " + top + "px;'></div>";
				if (left == 36) {
					left = 0;
					top = 12;
				} else
					left += 12;
			}
		}

		for (var y = 1; y < turn; y++) {

			if (player[y].position == x && !player[y].jail) {
				document.getElementById("cell" + x + "positionholder").innerHTML += "<div class='cell-position' title='" + player[y].name + "' style='background-color: " + player[y].color + "; left: " + left + "px; top: " + top + "px;'></div>";
				if (left == 36) {
					left = 0;
					top = 12;
				} else
					left += 12;
			}
		}
	}

	left = 0;
	top = 53;
	for (var i = turn; i <= pcount; i++) {
		if (player[i].jail) {
			document.getElementById("jailpositionholder").innerHTML += "<div class='cell-position' title='" + player[i].name + "' style='background-color: " + player[i].color + "; left: " + left + "px; top: " + top + "px;'></div>";

			if (left === 36) {
				left = 0;
				top = 41;
			} else {
				left += 12;
			}
		}
	}

	for (var i = 1; i < turn; i++) {
		if (player[i].jail) {
			document.getElementById("jailpositionholder").innerHTML += "<div class='cell-position' title='" + player[i].name + "' style='background-color: " + player[i].color + "; left: " + left + "px; top: " + top + "px;'></div>";
			if (left === 36) {
				left = 0;
				top = 41;
			} else
				left += 12;
		}
	}

	p = player[turn];

	if (p.jail) {
		document.getElementById("jail").style.border = "1px solid " + p.color;
	} else {
		document.getElementById("cell" + p.position).style.border = "1px solid " + p.color;
	}
    function gotojail() {
        var p = player[turn];
        addAlert(p.name + " was sent directly to jail.");
        document.getElementById("landed").innerHTML = "You are in jail.";
    
        p.jail = true;
        doublecount = 0;
    
        document.getElementById("nextbutton").value = "End turn";
        document.getElementById("nextbutton").title = "End turn and advance to the next player.";
    
        if (p.human) {
            document.getElementById("nextbutton").focus();
        }
    
        updatePosition();
        updateOwned();
    
        
    }
}