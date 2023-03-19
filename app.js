var nb_beers = 0;
function main() {
    var body = document.body;

    if (nb_beers === 0) {
        // green #adff2f
        body.style.background = "#adff2f";
    }
    if (nb_beers >= 3) {
        // yellow #ffe72f
        body.style.background = "#ffe72f";
    }
    if (nb_beers >= 5) {
        // orange #ffa52f
        body.style.background = "#ffa52f";
    }
    if (nb_beers >= 7) {
        // red #ff2f2f
        body.style.background = "#ff2f2f";
    }
}

main();

document.getElementById("container-button").addEventListener("click", function(e) {
    nb_beers++;
    console.log(nb_beers);
    main();
})