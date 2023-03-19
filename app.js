var nb_beers = 0;
function main() {
    var html = document.getElementsByTagName("body");

    if (nb_beers == 0) {
        // green #adff2f
        
    }
    else if (nb_beers >= 3) {
        // yellow #ffe72f
    }
    else if (nb_beers >= 5) {
        // orange #ffa52f
    }
    else if (nb_beers >= 7) {
        // red #ff2f2f
    }
}

main();

document.getElementsById("container-button").addEventListener("click", function(e) {
    nb_beers++;
    console.log(nb_beers);
    main();
})