    var btn1 = 0;
    var btn2 = 0;
    var btn3 = 0;
    var btn4 = 0; 
    var hit = 0;
    var totalScore = 0;
    var gameWins = 0;
    var gameLosses = 0;

    function reset() {
    
    btn1 = Math.floor((Math.random() * 12) + 1);
    console.log("Blue gem: " + btn1);

    btn2 = Math.floor((Math.random() * 12) + 1);
    console.log("Red gem: " + btn2);

    btn3 = Math.floor((Math.random() * 12) + 1);
    console.log("Purple gem: " + btn3);

    btn4 = Math.floor((Math.random() * 12) + 1);
    console.log("Gold gem: " + btn4);

    hit = Math.floor((Math.random() * 101) + 19);
    console.log(hit);
    $("#total-to-hit").text(hit);

    totalScore = 0;
    $("#total-scr").text(totalScore);
    $("#wins").text("Wins: " + gameWins);
    $("#losses").text("Losses: " + gameLosses);

    }
    reset();

    $("#wins").text("Wins: " + gameWins);
    $("#losses").text("Losses: " + gameLosses);
    $("#total-scr").text(totalScore);

    
    $(".a-button-1").on("click", function() {
        console.log("1");
        totalScore = totalScore + btn1;
        $("#total-scr").text(totalScore);
        win ();
    });

    $(".a-button-2").on("click", function() {
        console.log("2");
        totalScore = totalScore + btn2;
        $("#total-scr").text(totalScore);
        win ();
    });

    $(".a-button-3").on("click", function() {
        console.log("3");
        totalScore = totalScore + btn3;
        $("#total-scr").text(totalScore);
        win ();
    });

    $(".a-button-4").on("click", function() {
        console.log("4");
        totalScore = totalScore + btn4;
        $("#total-scr").text(totalScore);
        win ();
    });

    function win() {
        if (totalScore === hit) {
            gameWins++;
            reset();
            console.log(gameWins);
        }
        if (totalScore > hit) {
            gameLosses++;
            reset();
            console.log(gameLosses);
        }
    }

    document.getElementById("myAnimation1").style.zIndex = "-1"; 
    function myMove1() {
        var elem = document.getElementById("myAnimation1");   
        var pos = 0;
        var id = setInterval(frame, 6);
        function frame() {
          if (pos == 45) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.bottom = pos + "1px"; 
            document.getElementById("myAnimation1").style.zIndex = "0"; 
          }
        }
      }

        document.getElementById("myAnimation2").style.zIndex = "-1"; 
      function myMove2() {
        var elem = document.getElementById("myAnimation2");   
        var pos = 0;
        var id = setInterval(frame, 6);
        function frame() {
          if (pos == 45) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.bottom = pos + "2px"; 
            document.getElementById("myAnimation2").style.zIndex = "0"; 
          }
        }
      }

      document.getElementById("myAnimation3").style.zIndex = "-1"; 
      function myMove3() {
        var elem = document.getElementById("myAnimation3");   
        var pos = 0;
        var id = setInterval(frame, 6);
        function frame() {
          if (pos == 45) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.bottom = pos + "2px"; 
            document.getElementById("myAnimation3").style.zIndex = "0"; 
          }
        }
      }

      document.getElementById("myAnimation4").style.zIndex = "-1"; 
      function myMove4() {
        var elem = document.getElementById("myAnimation4");   
        var pos = 0;
        var id = setInterval(frame, 6);
        function frame() {
          if (pos == 45) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.bottom = pos + "2px"; 
            document.getElementById("myAnimation4").style.zIndex = "0"; 
          }
        }
      }