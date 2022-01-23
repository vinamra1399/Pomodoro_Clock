var upper_cont=document.getElementById("upper_cont");
var upper_cont_inner=document.getElementById("upper_cont_inner")
var heading1 = document.getElementById("heading1");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var no = document.getElementById("no");
var no1 = document.getElementById("no1");
var minusS = document.getElementById("minusS");
var plusS = document.getElementById("plusS");
var minusB = document.getElementById("minusB");
var plusB = document.getElementById("plusB");
var start = document.getElementById("start");
var reset = document.getElementById("reset");

let S = Number(no.innerText);
let B = Number(no1.innerText);

check_Zero();

if (S === 0) {
    minusS.disabled = true;
}
if (B === 0) {
    minusB.disabled = true;
}

minusS.addEventListener("click", function () {
    S--;
    if (S === 0) {
        minusS.disabled = true;
        no.innerText=S;
    }
    no.innerText=S;
    check_Zero();
})

plusS.addEventListener("click", function () {
    minusS.disabled = false;
    S++;
    no.innerText=S;
    Not_check_Zero();
})

minusB.addEventListener("click", function () {
    B--;
    if (B === 0) {
        minusB.disabled = true;
        no1.innerText=B;
    }
    no1.innerText=B;
check_Zero();
})

plusB.addEventListener("click", function () {
    minusB.disabled = false;
    B++;
    no1.innerText=B;
    Not_check_Zero();
})

var session_id_mints;
var session_id_secs;
var break_id_mints;
var break_id_secs;

start.addEventListener("click", function () {
    minusS.disabled = true;
    minusB.disabled = true;
    plusB.disabled = true;
    plusS.disabled = true;

    upper_cont_inner.style.color="yellow";
    upper_cont.style.borderColor="yellow";

    var min_time = S;
    min_time--;

    if (min_time < 10) min.innerText = `0${min_time}`;
    else min.innerText = `${min_time}`;

    session_id_mints = setInterval(() => {
        min_time--;
        if (min_time < 10) min.innerText = `0${min_time}`;
        else min.innerText = `${min_time}`;

        if (min_time < 0) {
            clearInterval(session_id_mints);
            clearInterval(session_id_secs);
            heading1.innerText=`Break!`;
            upper_cont.style.borderColor="coral";
            upper_cont_inner.style.color="coral";
            B--;

            if (B < 10) min.innerText = `0${B}`;
            else min.innerText = `${B}`;

            var temp = B;
            break_id_mints = setInterval(() => {
                B--;
                if (B < 10 && B >= 10)
                    min.innerText = `0${B}`;
                else if (B > 10) min.innerText = `${B}`;
                if (B < 0) {
                    B = temp;
                    min_time.innerText = B;
                }
            }, 60000);
            var secs = 60;
            sec.innerText = `60`;

            break_id_secs = setInterval(() => {
                secs--;
                if (secs < 10) sec.innerText = `0${secs}`;
                else sec.innerText = `${secs}`;
                if (secs <= 0) {
                    secs = 60;
                }
            }, 1000);

        }
    }, 60000);

    var secs = 60;
    sec.innerText = `60`;

    session_id_secs = setInterval(() => {
        secs--;
        if (secs < 10) sec.innerText = `0${secs}`;
        else sec.innerText = secs;
        if (secs <= 0) secs = 60;

    }, 1000);
})

reset.addEventListener("click", function () {
    min.innerText = "00";
    sec.innerText = "00";
    no1.innerText = "0";
    no.innerText = "0";
    minusS.disabled = false;
    minusB.disabled = false;
    plusB.disabled = false;
    plusS.disabled = false;

    S = 0;
    B = 0;
    heading1.innerText = "Session 1";

    clearInterval(session_id_mints);
    clearInterval(session_id_secs);
    clearInterval(break_id_mints);
    clearInterval(break_id_secs);
})

function check_Zero() {
    if (no === 0 && no1 === 0) {
        start.disabled = true;
        reset.disabled = true;
    }
}

function Not_check_Zero() {
    if (no !== 0 && no1 !== 0) {
        start.disabled = false;
        reset.disabled = false;
    }
}