function COUNTDOWN(endTime, urlRedirect = "https://www.facebook.com/292706121240740") {
    var link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css?family=Bungee&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    var link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css?family=Vast+Shadow&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    var style = document.createElement("style");
    style.innerHTML = "*{margin: 0;padding: 0;}body{background-color: #1e2125;}#countdown > ul {width: 100%;display: table;text-align: center;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);}#countdown > ul > li {display: inline-block;float: none;}#countdown > ul > li > span:first-child {color: yellow;font-family: 'Vast Shadow', Bungee, cursive;font-weight: bold;}.sub {color: white;font-weight: bold;}@media only screen and (min-width : 320px) {#countdown > ul > li {margin: 0px 4px 0px 4px;padding: 32px 4px 32px 4px;}#countdown > ul > li > span:first-child {font-size: 28px;}.sub {font-size: 11px;}}@media only screen and (min-width : 480px) {#countdown > ul > li {margin: 0px 6px 0px 6px;padding: 32px 8px 32px 8px;}#countdown > ul > li > span:first-child {font-size: 44px;}.sub {font-size: 14px;}}@media only screen and (min-width : 768px) {#countdown > ul > li {margin: 0px 8px 0px 8px;padding: 32px 8px 32px 8px;}#countdown > ul > li > span:first-child {font-size: 76px;}.sub {font-size: 16px;}}@media only screen and (min-width : 992px) {#countdown > ul > li {margin: 0px 12px 0px 12px;padding: 32px 14px 32px 14px;}#countdown > ul > li > span:first-child {font-size: 90px;}.sub {font-size: 20px;}}@media only screen and (min-width : 1200px) {#countdown > ul > li {margin: 0px 16px 0px 16px;padding: 32px 16px 32px 16px;}#countdown > ul > li > span:first-child {font-size: 110px;}.sub {font-size: 28px;}}";
    document.head.appendChild(style);
    document.getElementById("countdown").innerHTML = '<ul><li><span>00</span><br><span class="sub">days</span></li><li><span>00</span><br><span class="sub">hours</span></li><li><span>00</span><br><span class="sub">minutes</span></li><li><span>00</span><br><span class="sub">seconds</span></li></ul>';
    document.getElementById("countdown").setAttribute("oncontextmenu", "return false");
    document.getElementById("countdown").setAttribute("onmousedown", "return false");
    var DateTime = new Date(endTime).toString().split(" GMT")[0];
    var nowTime = new Date();
    nowTime = nowTime.getTime() - nowTime.getMilliseconds();
    var endTime = (new Date(endTime)).getTime() - (new Date(endTime)).getMilliseconds();
    endTime = (endTime - nowTime) / 1000;
    var timer = setInterval(function () {
        if (endTime <= 0) {
            clearInterval(timer);
            location.href = urlRedirect
        }
        var days = parseInt(endTime / (1 * 24 * 60 * 60));
        (days < 10) ? (days = "0" + days) : days;
        var hours = parseInt((endTime - (days * 24 * 60 * 60)) / (1 * 60 * 60));
        (hours < 10) ? (hours = "0" + hours) : hours;
        var minutes = parseInt((endTime - (days * 24 * 60 * 60) - (hours * 60 * 60)) / (1 * 60));
        (minutes < 10) ? (minutes = "0" + minutes) : minutes;
        var seconds = endTime % 60;
        (seconds < 10) ? (seconds = "0" + seconds) : seconds;
        endTime -= 1;
        document.getElementById("countdown").innerHTML = `<ul><li><span>${days}</span><br><span class="sub">days</span></li><li><span>${hours}</span><br><span class="sub">hours</span></li><li><span>${minutes}</span><br><span class="sub">minutes</span></li><li><span>${seconds}</span><br><span class="sub">seconds</span></li></ul>`
    }, 1000)
}
