function verifica() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);

    if (n1 <= 0 || n2 <= 0 || n3 <= 0 || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Digite três números inteiros positivos.");
        return;
    }

    let numa, numb, numc, numd, nume;

    if (n2 - n1 == n3 - n2) {
        const sub = n3 - n2;
        numa = n3 + sub;
        numb = numa + sub;
        numc = numb + sub;
        numd = numc + sub;
        nume = numd + sub;
        alert("É uma sequência aritmética");
    } else if (n2 / n1 == n3 / n2) {
        const div = n3 / n2;
        numa = n3 * div;
        numb = numa * div;
        numc = numb * div;
        numd = numc * div;
        nume = numd * div;
        alert("É uma sequência geométrica");
    } else {
        alert("É uma sequência aleatória");
        const aleat = n1 + n2;
        numa = n3 + aleat;
        numb = numa + aleat;
        numc = numb + aleat;
        numd = numc + aleat;
        nume = numd + aleat;
    }

    document.getElementById("res").innerHTML = numa;
    document.getElementById("res1").innerHTML = numb;
    document.getElementById("res2").innerHTML = numc;
    document.getElementById("res3").innerHTML = numd;
    document.getElementById("res4").innerHTML = nume;
}

function limpar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";

    document.getElementById("res").innerHTML = "";
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";
    document.getElementById("res4").innerHTML = "";
}
