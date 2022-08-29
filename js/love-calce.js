var divination = [
    "Menghitung grafik bintang",
    "Membaca daun teh",
    "Mengorbankan seekor kambing",
    "Konsultasi kalender Maya",
    "Memeriksa golongan darah",
    "Menelusuri garis telapak tangan"
];

function rndMsg() {
    var rndNum = Math.floor(Math.random() * divination.length);
    if (divination[rndNum].slice(5) == $("#div-msg").text().trim().slice(5)) {
        rndMsg();
    } else {
        var dM = divination[rndNum];
        $("#div-msg").text(dM);
        setTimeout(function() {
            $("#div-msg").text(dM + ".");
        }, 200);
        setTimeout(function() {
            $("#div-msg").text(dM + "..");
        }, 400);
        setTimeout(function() {
            $("#div-msg").text(dM + "...");
        }, 600);
    }
}

$(document).ready(function() {
    setInterval(function() {
        rndMsg();
    }, 1200);
    //$("#name1").focus();
    $("#name1-label").click(function() {
        $("#name1").focus();
    });
    $("#name2-label").click(function() {
        $("#name2").focus();
    });
    $("input").keypress(function(e) {
        if (e.which == 13) {
            $("#calculate").click();
        }
    });

    $("#calculate").click(function() {
        var name1 = $("#name1").val();
        var name2 = $("#name2").val();

        if (name1.length > 0 && name2.length > 0) {
            var seed = name1.length + name2.length;
            var megaName = name1 + " " + name2;
            var today = new Date();
            var love = 0;
            megaName = megaName.split("");
            for (i = 0; i < megaName.length; i++) {
                seed += megaName[i].charCodeAt(0);
            }
            seed = seed / (today.getMonth() + today.getDay());
            seed = Math.round(seed);
            seed = seed.toString().slice(-2);
            if (seed == "00") {
                seed = "100";
            }

            love = parseInt(seed);
            $("#initial-prompt").animate(
                {
                    height: 0,
                    width: 0,
                    opacity: 0
                },
                300,
                function() {
                    $("#initial-prompt").hide(function() {
                        $("#calculating").fadeIn(300, function() {
                            setTimeout(function() {
                                $("#love-results").html(
                                    name1 +
                                        " and " +
                                        name2 +
                                        " have a <strong>" +
                                        cinta +
                                        "%</strong> peringkat kompatibilitas sampai sekarang."
                                );
                                $("#calculating").fadeOut(300, function() {
                                    $("#results").fadeIn(300, function() {
                                        $("#try-again").focus();
                                    });
                                });
                            }, 3000);
                        });
                    });
                }
            );
        } else {
            $("#warning").animate(
                {
                    opacity: 1
                },
                300
            );
        }
    });

    $("#try-again").click(function() {
        $("#initial-prompt").css({
            height: "auto",
            width: "100%",
            opacity: 1
        });
        $("#name1").val("");
        $("#name2").val("");
        $("#results").fadeOut(300, function() {
            $("#initial-prompt").fadeIn(300, function() {
                $("#name1").focus();
            });
        });
    });
});
