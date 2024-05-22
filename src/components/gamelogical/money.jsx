export function Bank(){
    function updateMoney() {
        var p = player[turn];
    
        document.getElementById("pmoney").innerHTML = "$" + p.money;
        $(".money-bar-row").hide();
    
        for (var i = 1; i <= pcount; i++) {
            p_i = player[i];
    
            $("#moneybarrow" + i).show();
            document.getElementById("p" + i + "moneybar").style.border = "2px solid " + p_i.color;
            document.getElementById("p" + i + "money").innerHTML = p_i.money;
            document.getElementById("p" + i + "moneyname").innerHTML = p_i.name;
        }
    
        if (document.getElementById("landed").innerHTML === "") {
            $("#landed").hide();
        }
    
        document.getElementById("quickstats").style.borderColor = p.color;
    
        if (p.money < 0) {
            // document.getElementById("nextbutton").disabled = true;
            $("#resignbutton").show();
            $("#nextbutton").hide();
        } else {
            // document.getElementById("nextbutton").disabled = false;
            $("#resignbutton").hide();
            $("#nextbutton").show();
        }
    }
    function buy() {
        var p = player[turn];
        var property = square[p.position];
        var cost = property.price;
    
        if (p.money >= cost) {
            p.pay(cost, 0);
    
            property.owner = turn;
            updateMoney();
            addAlert(p.name + " bought " + property.name + " for " + property.pricetext + ".");
    
            updateOwned();
    
            $("#landed").hide();
    
        } else {
            popup("<p>" + p.name + ", you need $" + (property.price - p.money) + " more to buy " + property.name + ".</p>");
        }
    }


    // function buyHouse(index) {
    //     var sq = square[index];
    //     var p = player[sq.owner];
    //     var houseSum = 0;
    //     var hotelSum = 0;
    
    //     if (p.money - sq.houseprice < 0) {
    //         if (sq.house == 4) {
    //             return false;
    //         } else {
    //             return false;
    //         }
    
    //     } else {
    //         for (var i = 0; i < 40; i++) {
    //             if (square[i].hotel === 1) {
    //                 hotelSum++;
    //             } else {
    //                 houseSum += square[i].house;
    //             }
    //         }
    
    //         if (sq.house < 4) {
    //             if (houseSum >= 32) {
    //                 return false;
    
    //             } else {
    //                 sq.house++;
    //                 addAlert(p.name + " placed a house on " + sq.name + ".");
    //             }
    
    //         } else {
    //             if (hotelSum >= 12) {
    //                 return;
    
    //             } else {
    //                 sq.house = 5;
    //                 sq.hotel = 1;
    //                 addAlert(p.name + " placed a hotel on " + sq.name + ".");
    //             }
    //         }
    
    //         p.pay(sq.houseprice, 0);
    
    //         updateOwned();
    //         updateMoney();
    //     }
    // }
    
    function land(increasedRent) {
        increasedRent = !!increasedRent; // Cast increasedRent to a boolean value. It is used for the ADVANCE TO THE NEAREST RAILROAD/UTILITY Chance cards.
    
        var p = player[turn];
        var s = square[p.position];
    
        var die1 = game.getDie(1);
        var die2 = game.getDie(2);
    
        $("#landed").show();
        document.getElementById("landed").innerHTML = "You landed on " + s.name + ".";
        s.landcount++;
        addAlert(p.name + " landed on " + s.name + ".");
    
        // Allow player to buy the property on which he landed.
        if (s.price !== 0 && s.owner === 0) {
    
            if (!p.human) {
    
                if (p.AI.buyProperty(p.position)) {
                    buy();
                }
            } else {
                document.getElementById("landed").innerHTML = "<div>You landed on <a href='javascript:void(0);' onmouseover='showdeed(" + p.position + ");' onmouseout='hidedeed();' class='statscellcolor'>" + s.name + "</a>.<input type='button' onclick='buy();' value='Buy ($" + s.price + ")' title='Buy " + s.name + " for " + s.pricetext + ".'/></div>";
            }
    
    
            game.addPropertyToAuctionQueue(p.position);
        }
    
        // Collect rent
        if (s.owner !== 0 && s.owner != turn && !s.mortgage) {
            var groupowned = true;
            var rent;
    
            // Railroads
            if (p.position == 5 || p.position == 15 || p.position == 25 || p.position == 35) {
                if (increasedRent) {
                    rent = 25;
                } else {
                    rent = 12.5;
                }
    
                if (s.owner == square[5].owner) {
                    rent *= 2;
                }
                if (s.owner == square[15].owner) {
                    rent *= 2;
                }
                if (s.owner == square[25].owner) {
                    rent *= 2;
                }
                if (s.owner == square[35].owner) {
                    rent *= 2;
                }
    
            } else if (p.position === 12) {
                if (increasedRent || square[28].owner == s.owner) {
                    rent = (die1 + die2) * 10;
                } else {
                    rent = (die1 + die2) * 4;
                }
    
            } else if (p.position === 28) {
                if (increasedRent || square[12].owner == s.owner) {
                    rent = (die1 + die2) * 10;
                } else {
                    rent = (die1 + die2) * 4;
                }
    
            } else {
    
                for (var i = 0; i < 40; i++) {
                    sq = square[i];
                    if (sq.groupNumber == s.groupNumber && sq.owner != s.owner) {
                        groupowned = false;
                    }
                }
    
                if (!groupowned) {
                    rent = s.baserent;
                } else {
                    if (s.house === 0) {
                        rent = s.baserent * 2;
                    } else {
                        rent = s["rent" + s.house];
                    }
                }
            }
    
            addAlert(p.name + " paid $" + rent + " rent to " + player[s.owner].name + ".");
            p.pay(rent, s.owner);
            player[s.owner].money += rent;
    
            document.getElementById("landed").innerHTML = "You landed on " + s.name + ". " + player[s.owner].name + " collected $" + rent + " rent.";
        } else if (s.owner > 0 && s.owner != turn && s.mortgage) {
            document.getElementById("landed").innerHTML = "You landed on " + s.name + ". Property is mortgaged; no rent was collected.";
        }
    
        // City Tax
        if (p.position === 4) {
            citytax();
        }
    
        // Go to jail. Go directly to Jail. Do not pass GO. Do not collect $200.
        if (p.position === 30) {
            updateMoney();
            updatePosition();
    
            if (p.human) {
                popup("<div>Go to jail. Go directly to Jail. Do not pass GO. Do not collect $200.</div>", gotojail);
            } else {
                gotojail();
            }
    
            return;
        }
    
        // Luxury Tax
        if (p.position === 38) {
            luxurytax();
        }
    
        updateMoney();
        updatePosition();
        updateOwned();
    
        if (!p.human) {
            popup(p.AI.alertList, chanceCommunityChest);
            p.AI.alertList = "";
        } else {
            chanceCommunityChest();
        }
    }
}