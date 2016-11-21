var senseOfLife = 42;

function showVariable (otherSenseOfLife) {

    senseOfLife = otherSenseOfLife || senseOfLife;
    console.log(senseOfLife);

    return senseOfLife;
}
showVariable(senseOfLife);
console.log(senseOfLife);


showVariable(87);
console.log(senseOfLife);


showVariable();
console.log(senseOfLife);
