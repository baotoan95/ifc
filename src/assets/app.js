var text = "";
var cursor = "|";
var count = 0;
function typeBT(str) {
    if ("default" === str) {
        text = "Chúc ai đó được hạnh phúc bên nửa yêu thương! </br> " +
            "Chúc ai đó còn cô đơn sẽ tìm thấy bờ vai chia sẻ! </br>" +
            "Chúc ai đó sẽ gặp được nhau sau những ngày xa cách!</br>" +
            "Chúc ai đó có một mùa giáng sinh tràn đầy niềm vui,</br>hạnh phúc và bình yên thật nhiều!</br>" +
            "Chúc ai đó một năm mới nhiều may mắn,</br>gặt hái nhiều thành công trong học tập cũng như cuộc sống!!!</br>" +
            "Chúc ai đó luôn hạnh phúc ấm áp bên gia đình và người thân!</br>" +
            "</br></br>______________________BT__________";
    } else {
        text = str;
    }
    type(text);
}

function type(str) {
    document.getElementById('typo').innerHTML = "<p>"
        + text.substring(0, count++) + cursor + "</p>";
    if (count <= text.length) {
        setTimeout('type()', 80);
    }
}

window.onload = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (window.orientation === 0) {
            document.getElementById("overlay").classList.remove("hidden");
        }
    }
}

typeBT("default");

window.addEventListener("orientationchange", function () {
    if (window.orientation === 0) {
        document.getElementById("overlay").classList.remove("hidden");
    } else {
        document.getElementById("overlay").classList.add("hidden");
    }
}, false);

window.addEventListener("resize", function () {
    for (const e of document.getElementsByTagName("canvas")) {
        e.style.width = (window.innerWidth) + "px";
        e.style.height = (window.innerHeight) + "px";
    }
});