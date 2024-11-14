


function DemenderModeDeCalcul() {
    let question = prompt("Quelle calcul vouler pour faire :\n \n1- addition \n2- soustracion \n3- muliplication \n4- division");
    question = parseInt(question);

    if (isNaN(question)) {
        alert("Option :  addition");
    }


    if (question == 1) {
        addition();
    }
    if (question == 2) {
        soustracion();
    }
    if (question == 3) {
        muliplication();
    }
    if (question == 4) {
        division();
    }

}
function addition() {

    let nombre1 = prompt("Choisis le premier nombre :");
    nombre1 = parseInt(nombre1);

    let nombre2 = prompt("Choisis le deuxième nombre :");
    nombre2 = parseInt(nombre2);


    let resultat = nombre1 + nombre2;

    alert("Le résultat est : " + resultat);

}
function soustracion() {

    let nombre1 = prompt("Choisis le premier nombre :");
    nombre1 = parseInt(nombre1);

    let nombre2 = prompt("Choisis le deuxième nombre :");
    nombre2 = parseInt(nombre2);


    let resultat = nombre1 - nombre2;

    alert("Le résultat est : " + resultat);

}
function muliplication() {

    let nombre1 = prompt("Choisis le premier nombre :");
    nombre1 = parseInt(nombre1);

    let nombre2 = prompt("Choisis le deuxième nombre :");
    nombre2 = parseInt(nombre2);


    let resultat = nombre1 * nombre2;

    alert("Le résultat est : " + resultat);

}
function division() {

    let nombre1 = prompt("Choisis le premier nombre :");
    nombre1 = parseInt(nombre1);

    let nombre2 = prompt("Choisis le deuxième nombre :");
    nombre2 = parseInt(nombre2);


    let resultat = nombre1 / nombre2;

    alert("Le résultat est : " + resultat);

}


DemenderModeDeCalcul()