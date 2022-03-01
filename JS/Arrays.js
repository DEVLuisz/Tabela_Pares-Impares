Pares = []
Impares = []


function adicionar(a) {

    if (a % 2 == 0) {
        Pares.push(a)
        console.log(Pares)
        clear();
        listar();
    } else {
        Impares.push(a)
        console.log(Impares)
        clear()
        listar();
    }
}
function listar() {
    let vTable = document.getElementById('tabelaPares')
    let vTable2 = document.getElementById('tabelaImpares')

    for (let Cont = 0; Cont <= Pares.length - 1; Cont++) {

        //Criando linhas(tr) e colunas(td)
        let LinhaPar = document.createElement("tr")
        let ColunaPar = document.createElement("td")
        ColunaPar.setAttribute("class", "parnum")
        ColunaPar.appendChild(document.createTextNode(Pares[Cont]))
        LinhaPar.appendChild(ColunaPar)
        vTable.appendChild(LinhaPar)

    }

    for (let Cont = 0; Cont <= Impares.length - 1; Cont++) {
        let LinhaImpar = document.createElement("tr")
        let ColunaImpar = document.createElement("td")
        ColunaImpar.setAttribute("class", "impnum")
        ColunaImpar.appendChild(document.createTextNode(Impares[Cont]))
        LinhaImpar.appendChild(ColunaImpar)
        vTable2.appendChild(LinhaImpar)
    }

}
// para adicionar somente o valor no campo
function clear() {
    let tpar = document.getElementById('tabelaPares')

    while (tpar.rows.length > 1) {
        tpar.deleteRow(1)
    }

    let timpar = document.getElementById('tabelaImpares')

    while (timpar.rows.length > 1) {
        timpar.deleteRow(1)
    }
}

//para limpar as tables e os arrays
function erase() {
    var myTable = document.getElementById("tabelaPares");
    var rowCount = myTable.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
    }
    Pares.splice(0, Pares.length);
    console.log(Pares)

    var myTable2 = document.getElementById("tabelaImpares");
    var rowCount2 = myTable2.rows.length;
    for (var y = rowCount2 - 1; y > 0; y--) {
        myTable2.deleteRow(y);
    }
    Impares.splice(0, Impares.length);
    console.log(Impares)

}