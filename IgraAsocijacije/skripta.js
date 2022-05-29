var vreme = 10;
var ukupnoVreme = 240;
var flag = false;
var trenutnoNaPotezu = 0;
var igrac1VecOtvorio = 0;
var igrac2VecOtvorio = 0;
var trenutnaAsocijacija = null;
var otvorenaPolja =[];
var niz = [];
var handler;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("poeniPlavi").innerHTML = poeni[0];
    document.getElementById("poeniCrveni").innerHTML = poeni[1];
    dodajListenere();
}, false);

function novaIgra(){
    window.location.replace("asocijacije-uputstvo.html");
}
    
var igraci = [
    {
        plavi: "",
        crveni: ""
    }
]

var poeni = [0,0]


function zapocni() {
    if (flag == false) {
        flag = true;
        document.getElementById("vreme2").innerHTML = ukupnoVreme;
        handler = setInterval(stoperica, 1000);
    }
}

function proveriResenje(){

}

function reset(){
    vreme = 10;
    igrac1VecOtvorio = 0;
    igrac2VecOtvorio = 0;
    document.getElementById("vreme").innerHTML = vreme;
    if (trenutnoNaPotezu == 0) {
        trenutnoNaPotezu = 1;
        document.getElementById("naPotezu").innerHTML = "Na potezu: " + igraci[1];
    }else {
        trenutnoNaPotezu = 0;
        document.getElementById("naPotezu").innerHTML = "Na potezu: " + igraci[0];
    }
}



function stoperica(){
    document.getElementById("vreme").innerHTML = vreme-1;
    document.getElementById("vreme2").innerHTML = ukupnoVreme-1;
    vreme--;
    ukupnoVreme--;
    if (ukupnoVreme == 0) {
        krajIgre();
    }
    if (vreme == 0) {
        reset();
    }
}

function okreni(clicked_id){
    if ((trenutnoNaPotezu == 0 && !igrac1VecOtvorio) || (trenutnoNaPotezu == 1 && !igrac2VecOtvorio)) {
        let trenutniSadrzaj = document.getElementById(clicked_id).innerText;
        if (trenutniSadrzaj == clicked_id) {
            document.getElementById(clicked_id).innerHTML = trenutnaAsocijacija[clicked_id];
            otvorenaPolja[clicked_id] = "DA"
            if (trenutnoNaPotezu == 0) {
                igrac1VecOtvorio = 1;
            }
            else {
                igrac2VecOtvorio = 1;
            }
        }
    }
  
}

var nizAsocijacija = [
    {
        A1: "IGRA", A2: "GIMNASTIKA", A3: "ATLETIKA", A4: "KLUB", A: "SPORT",
        B1: "RELI", B2: "KONJ", B3: "PREPONA", B4: "MARATON", B: "TRKA",
        C1: "RADIO", C2: "KARTA", C3: "PRVAK", C4: "POBEDNIK", C: "AS",
        D1: "SENATOR", D2: "NEMACKA", D3: "AUTO", D4: "KADET", D: "OPEL",
        konacno: "REKORD"
    },
    {
        A1: "AMBLEM", A2: "HERALDIKA", A3: "SIMBOL", A4: "PORODICNI", A: "GRB",
        B1: "BOZE PRAVDE", B2: "HEJ SLOVENI", B3: "PESMA", B4: "MARSELJEZA", B: "HIMNA",
        C1: "KRAGUJEVAC", C2: "RATNA", C3: "BELA", C4: "JARBOL", C: "ZASTAVA",
        D1: "ODBRANA", D2: "GRANICA", D3: "SUVERENA", D4: "INTEGRITET", D: "TERITORIJA",
        konacno: "DRZAVA"
    },
    {
        A1: "SKOLSKA", A2: "REZERVNA", A3: "OPTUZENICKA", A4: "ODMOR", A: "KLUPA",
        B1: "IGRA", B2: "RODITELJ", B3: "SKOLA", B4: "SMEH", B: "DECA",
        C1: "ZVEZDA", C2: "KOZJA", C3: "HIPODROM", C4: "FORMULA 1", C: "STAZA",
        D1: "ZELENA", D2: "STADION", D3: "LIVADA", D4: "VIMBLDON", D: "TRAVA",
        konacno: "PARK"
    },
    {
        A1: "UBOD", A2: "INSEKT", A3: "TRUT", A4: "ROJ", A: "PCELA",
        B1: "TUCAK", B2: "MIRIS", B3: "RUZA", B4: "BUKET", B: "CVET",
        C1: "PAPRIKA", C2: "STAKLO", C3: "KRASTAVAC", C4: "PEKMEZ", C: "TEGLA",
        D1: "DRVO", D2: "CVET", D3: "BELI", D4: "AKCIJA", D: "BAGREM",
        konacno: "MED"
    },
    {
        A1: "KRIVA", A2: "VISEGRAD", A3: "LIM", A4: "GRANICA", A: "DRINA",
        B1: "DINAMIT", B2: "NAGRADA", B3: "PRIZNANJE", B4: "SVEDSKA", B: "NOBEL",
        C1: "DVORISTE", C2: "BASTA", C3: "OGRADA", C4: "TURCIZAM", C: "AVLIJA",
        D1: "DRUGA", D2: "LUK", D3: "DRVENI", D4: "STUB", D: "MOST",
        konacno: "IVO ANDRIC"
    }

]



function inicijalizujPodatke() {
    let asocijacije = localStorage.getItem("asocijacije");
    let x = localStorage.getItem("igraci");
    if (x == null){
        alert("NISTE PROCITALI UPUTSTVO I UNELI IGRACE");
        window.location.replace("asocijacije-uputstvo.html")
    } else {
        igraci = JSON.parse(x);
        document.getElementById("plavi").innerHTML = igraci[0];
        document.getElementById("crveni").innerHTML = igraci[1];
    }
    if (asocijacije == null){
        localStorage.setItem("asocijacije", JSON.stringify(nizAsocijacija));
    }
    else {
        nizAsocijacija = JSON.parse(asocijacije)
    }
    trenutnaAsocijacija = nizAsocijacija [Math.floor(Math.random() * nizAsocijacija.length)];
    for (var i in trenutnaAsocijacija) {
        otvorenaPolja.push(i);
    }
    otvorenaPolja['A1'] = "NE";
    otvorenaPolja['A2'] = "NE";
    otvorenaPolja['A3'] = "NE";
    otvorenaPolja['A4'] = "NE";
    otvorenaPolja['A']  = "NE";

    otvorenaPolja['B1'] = "NE";
    otvorenaPolja['B2'] = "NE";
    otvorenaPolja['B3'] = "NE";
    otvorenaPolja['B4'] = "NE";
    otvorenaPolja['B']  = "NE";

    otvorenaPolja['C1'] = "NE";
    otvorenaPolja['C2'] = "NE";
    otvorenaPolja['C3'] = "NE";
    otvorenaPolja['C4'] = "NE";
    otvorenaPolja['C']  = "NE";

    otvorenaPolja['D1'] = "NE";
    otvorenaPolja['D2'] = "NE";
    otvorenaPolja['D3'] = "NE";
    otvorenaPolja['D4'] = "NE";
    otvorenaPolja['D']  = "NE";

    document.getElementById("novaIgra").style.display = "none";

}

function izbrisiStare(){
    let x = localStorage.getItem("igraci");
    if (x != null) {
        localStorage.removeItem('igraci');
    }
}

function ucitajIgrace(){
    igraci[0] = document.getElementById("igrac1").value; 
    igraci[1] = document.getElementById("igrac2").value; 
    localStorage.setItem("igraci", JSON.stringify(igraci));
    window.location.replace("asocijacije-igra.html");
}

function otkriA(){
    document.getElementById('A1').innerHTML = trenutnaAsocijacija['A1'];
    document.getElementById('A2').innerHTML = trenutnaAsocijacija['A2'];
    document.getElementById('A3').innerHTML = trenutnaAsocijacija['A3'];
    document.getElementById('A4').innerHTML = trenutnaAsocijacija['A4'];
    
}
function otkriB(){
    document.getElementById('B1').innerHTML = trenutnaAsocijacija['B1'];
    document.getElementById('B2').innerHTML = trenutnaAsocijacija['B2'];
    document.getElementById('B3').innerHTML = trenutnaAsocijacija['B3'];
    document.getElementById('B4').innerHTML = trenutnaAsocijacija['B4'];
   
}
function otkriC(){
    document.getElementById('C1').innerHTML = trenutnaAsocijacija['C1'];
    document.getElementById('C2').innerHTML = trenutnaAsocijacija['C2'];
    document.getElementById('C3').innerHTML = trenutnaAsocijacija['C3'];
    document.getElementById('C4').innerHTML = trenutnaAsocijacija['C4'];
    
}
function otkriD(){
    document.getElementById('D1').innerHTML = trenutnaAsocijacija['D1'];
    document.getElementById('D2').innerHTML = trenutnaAsocijacija['D2'];
    document.getElementById('D3').innerHTML = trenutnaAsocijacija['D3'];
    document.getElementById('D4').innerHTML = trenutnaAsocijacija['D4'];
    
}

function otkriSve(){
    otkriA();
    otkriB();
    otkriC();
    otkriD();
}

function bojaIPoeniA(){
    if (trenutnoNaPotezu == 0) {
        document.getElementById("A1").style.backgroundColor = "blue";
        document.getElementById("A1").style.borderColor = "blue";
        document.getElementById("A2").style.backgroundColor = "blue";
        document.getElementById("A2").style.borderColor = "blue";
        document.getElementById("A3").style.backgroundColor = "blue";
        document.getElementById("A3").style.borderColor = "blue";
        document.getElementById("A4").style.backgroundColor = "blue";
        document.getElementById("A4").style.borderColor = "blue";
        document.getElementById("aDiv").style.backgroundColor = "blue";
        document.getElementById("aDiv").style.borderColor = "blue";
        niz[0].disabled = true;
        poeni[0] = poeni[0] + 5;
        if (otvorenaPolja['A1'] == "NE") {
            poeni[0]++;
        }  
        if (otvorenaPolja['A2'] == "NE") {
            poeni[0]++;
        }    
        if (otvorenaPolja['A3'] == "NE") {
            poeni[0]++;
        }   
        if (otvorenaPolja['A4'] == "NE") {
            poeni[0]++;
        }  
        
    }      
    else {
        document.getElementById("A1").style.backgroundColor = "red";
        document.getElementById("A1").style.borderColor = "red";
        document.getElementById("A2").style.backgroundColor = "red";
        document.getElementById("A2").style.borderColor = "red";
        document.getElementById("A3").style.backgroundColor = "red";
        document.getElementById("A3").style.borderColor = "red";
        document.getElementById("A4").style.backgroundColor = "red";
        document.getElementById("A4").style.borderColor = "red";
        document.getElementById("aDiv").style.backgroundColor = "red";
        document.getElementById("aDiv").style.borderColor = "red";
        niz[0].disabled = true;
        poeni[1] = poeni[1] + 5;
        if (otvorenaPolja['A1'] == "NE") {
            poeni[1]++;
        }  
        if (otvorenaPolja['A2'] == "NE") {
            poeni[1]++;
        }    
        if (otvorenaPolja['A3'] == "NE") {
            poeni[1]++;
        }    
        if (otvorenaPolja['A4'] == "NE") {
            poeni[1]++;
        }  
    }
    document.getElementById("poeniPlavi").innerHTML = poeni[0];
    document.getElementById("poeniCrveni").innerHTML = poeni[1];
    otvorenaPolja['A'] = "DA";
    

}

function bojaIPoeniB(){
    if (trenutnoNaPotezu == 0) {
        document.getElementById("B1").style.backgroundColor = "blue";
        document.getElementById("B1").style.borderColor = "blue";
        document.getElementById("B2").style.backgroundColor = "blue";
        document.getElementById("B2").style.borderColor = "blue";
        document.getElementById("B3").style.backgroundColor = "blue";
        document.getElementById("B3").style.borderColor = "blue";
        document.getElementById("B4").style.backgroundColor = "blue";
        document.getElementById("B4").style.borderColor = "blue";
        document.getElementById("bDiv").style.backgroundColor = "blue";
        document.getElementById("bDiv").style.borderColor = "blue";
        niz[1].disabled = true;
        poeni[0] = poeni[0] + 5;
        if (otvorenaPolja['B1'] == "NE") {
            poeni[0]++;
        }  
        if (otvorenaPolja['B2'] == "NE") {
            poeni[0]++;
        }    
        if (otvorenaPolja['B3'] == "NE") {
            poeni[0]++;
        }    
        if (otvorenaPolja['B4'] == "NE") {
            poeni[0]++;
        }   
    }
    else {
        document.getElementById("B1").style.backgroundColor = "red";
        document.getElementById("B1").style.borderColor = "red";
        document.getElementById("B2").style.backgroundColor = "red";
        document.getElementById("B2").style.borderColor = "red";
        document.getElementById("B3").style.backgroundColor = "red";
        document.getElementById("B3").style.borderColor = "red";
        document.getElementById("B4").style.backgroundColor = "red";
        document.getElementById("B4").style.borderColor = "red";
        document.getElementById("bDiv").style.backgroundColor = "red";
        document.getElementById("bDiv").style.borderColor = "red";
        niz[1].disabled = true;
        poeni[1] = poeni[1] + 5;
        if (otvorenaPolja['B1'] == "NE") {
            poeni[1]++;
        }  
        if (otvorenaPolja['B2'] == "NE") {
            poeni[1]++;
        }    
        if (otvorenaPolja['B3'] == "NE") {
            poeni[1]++;
        }    
        if (otvorenaPolja['B4'] == "NE") {
            poeni[1]++;
        }  
    }
    document.getElementById("poeniPlavi").innerHTML = poeni[0];
    document.getElementById("poeniCrveni").innerHTML = poeni[1];
    otvorenaPolja['B'] = "DA";
}

function bojaIPoeniC(){
    if (trenutnoNaPotezu == 0) {
        document.getElementById("C1").style.backgroundColor = "blue";
        document.getElementById("C1").style.borderColor = "blue";
        document.getElementById("C2").style.backgroundColor = "blue";
        document.getElementById("C2").style.borderColor = "blue";
        document.getElementById("C3").style.backgroundColor = "blue";
        document.getElementById("C3").style.borderColor = "blue";
        document.getElementById("C4").style.backgroundColor = "blue";
        document.getElementById("C4").style.borderColor = "blue";
        document.getElementById("cDiv").style.backgroundColor = "blue";
        document.getElementById("cDiv").style.borderColor = "blue";
        niz[2].disabled = true;
        poeni[0] = poeni[0] + 5;
        if (otvorenaPolja['C1'] == "NE") {
            poeni[0]++;
        }  
        if (otvorenaPolja['C2'] == "NE") {
            poeni[0]++;
        }    
        if (otvorenaPolja['C3'] == "NE") {
            poeni[0]++;
        }    
        if (otvorenaPolja['C4'] == "NE") {
            poeni[0]++;
        }   
    }
    else {
        document.getElementById("C1").style.backgroundColor = "red";
        document.getElementById("C1").style.borderColor = "red";
        document.getElementById("C2").style.backgroundColor = "red";
        document.getElementById("C2").style.borderColor = "red";
        document.getElementById("C3").style.backgroundColor = "red";
        document.getElementById("C3").style.borderColor = "red";
        document.getElementById("C4").style.backgroundColor = "red";
        document.getElementById("C4").style.borderColor = "red";
        document.getElementById("cDiv").style.backgroundColor = "red";
        document.getElementById("cDiv").style.borderColor = "red";
        niz[2].disabled = true;
        poeni[1] = poeni[1] + 5;
        if (otvorenaPolja['C1'] == "NE") {
            poeni[1]++;
        }  
        if (otvorenaPolja['C2'] == "NE") {
            poeni[1]++;
        }    
        if (otvorenaPolja['C3'] == "NE") {
            poeni[1]++;
        }    
        if (otvorenaPolja['C4'] == "NE") {
            poeni[1]++;
        }  
    }
    document.getElementById("poeniPlavi").innerHTML = poeni[0];
    document.getElementById("poeniCrveni").innerHTML = poeni[1];
    otvorenaPolja['C'] = "DA";
}

function bojaIPoeniD(){
    if (trenutnoNaPotezu == 0) {
        document.getElementById("D1").style.backgroundColor = "blue";
        document.getElementById("D1").style.borderColor = "blue";
        document.getElementById("D2").style.backgroundColor = "blue";
        document.getElementById("D2").style.borderColor = "blue";
        document.getElementById("D3").style.backgroundColor = "blue";
        document.getElementById("D3").style.borderColor = "blue";
        document.getElementById("D4").style.backgroundColor = "blue";
        document.getElementById("D4").style.borderColor = "blue";
        document.getElementById("dDiv").style.backgroundColor = "blue";
        document.getElementById("dDiv").style.borderColor = "blue";
        niz[3].disabled = true;
        poeni[0] = poeni[0] + 5;
        if (otvorenaPolja['D1'] == "NE") {
            poeni[0]++;
        }  
        if (otvorenaPolja['D2'] == "NE") {
            poeni[0]++;
        }    
        if (otvorenaPolja['D3'] == "NE") {
            poeni[0]++;
        }    
        if (otvorenaPolja['D4'] == "NE") {
            poeni[0]++;
        }  
    }
    else {
        document.getElementById("D1").style.backgroundColor = "red";
        document.getElementById("D1").style.borderColor = "red";
        document.getElementById("D2").style.backgroundColor = "red";
        document.getElementById("D2").style.borderColor = "red";
        document.getElementById("D3").style.backgroundColor = "red";
        document.getElementById("D3").style.borderColor = "red";
        document.getElementById("D4").style.backgroundColor = "red";
        document.getElementById("D4").style.borderColor = "red";
        document.getElementById("dDiv").style.backgroundColor = "red";
        document.getElementById("dDiv").style.borderColor = "red";
        niz[3].disabled = true;
        poeni[1] = poeni[1] + 5;
        if (otvorenaPolja['D1'] == "NE") {
            poeni[1]++;
        } 
        if (otvorenaPolja['D2'] == "NE") {
            poeni[1]++;
        }    
        if (otvorenaPolja['D3'] == "NE") {
            poeni[1]++;
        }    
        if (otvorenaPolja['D4'] == "NE") {
            poeni[1]++;
        }  
    }
    document.getElementById("poeniPlavi").innerHTML = poeni[0];
    document.getElementById("poeniCrveni").innerHTML = poeni[1];
    otvorenaPolja['D'] = "DA";
}

function bojaIPoeniSve() {
    if (otvorenaPolja['A'] == "NE")
        bojaIPoeniA();
    if (otvorenaPolja['B'] == "NE")
        bojaIPoeniB();
    if (otvorenaPolja['C'] == "NE")  
        bojaIPoeniC();
    if (otvorenaPolja['D'] == "NE")   
        bojaIPoeniD();


    document.getElementById('A').value = trenutnaAsocijacija['A']
    document.getElementById('B').value = trenutnaAsocijacija['B']
    document.getElementById('C').value = trenutnaAsocijacija['C']
    document.getElementById('D').value = trenutnaAsocijacija['D']
}


function dodajListenere(){
    niz = [document.getElementById('A'),document.getElementById('B'),document.getElementById('C'),document.getElementById('D'),document.getElementById('konacno')]

    niz[0].addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            niz[0].value = niz[0].value.toUpperCase();
            if (niz[0].value == trenutnaAsocijacija['A']) {
                otkriA();
                bojaIPoeniA();
            }
            else {
                alert("NETACNO")
                reset()
            }
        }
    })
    niz[1].addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            niz[1].value = niz[1].value.toUpperCase();
            if (niz[1].value == trenutnaAsocijacija['B']) {
                otkriB();
                bojaIPoeniB()
            }
            else {
                alert("NETACNO")
                reset();
            }
        }
    })
    niz[2].addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            niz[2].value = niz[2].value.toUpperCase();
            if (niz[2].value == trenutnaAsocijacija['C']) {
                otkriC();
                bojaIPoeniC()
                
            }
            else {
                alert("NETACNO")
                reset();
            }
        }
        
    })
    niz[3].addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            niz[3].value = niz[3].value.toUpperCase();
            if (niz[3].value == trenutnaAsocijacija['D']) {
                otkriD();
                bojaIPoeniD();
                
            }
            else {
                alert("NETACNO")
                reset();
            }
        }
    })
    niz[4].addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            niz[4].value = niz[4].value.toUpperCase();
            if (niz[4].value == trenutnaAsocijacija['konacno']) {
                if (trenutnoNaPotezu == 0) {
                    document.getElementById("konacno").style.backgroundColor = "blue";
                    document.getElementById("konacno").style.borderColor = "blue";
                    document.getElementById("resenjeDiv").style.backgroundColor = "blue";
                    document.getElementById("resenjeDiv").style.borderColor = "blue";
                    niz[4].disabled = true;
                    poeni[0] = poeni[0] + 10;
                }
                else {
                    document.getElementById("konacno").style.backgroundColor = "red";
                    document.getElementById("konacno").style.borderColor = "red";
                    document.getElementById("resenjeDiv").style.backgroundColor = "red";
                    document.getElementById("resenjeDiv").style.borderColor = "red";
                    niz[4].disabled = true;
                    poeni[1] = poeni[1] + 10;
                }
                document.getElementById("poeniPlavi").innerHTML = poeni[0];
                document.getElementById("poeniCrveni").innerHTML = poeni[1];
                otkriSve();
                bojaIPoeniSve();
                krajIgre();
            }
            else {
                alert("NETACNO")
                reset();
            }
        }
    })
}

function krajIgre() {
    clearInterval(handler);
    if (poeni[0] >poeni[1])
        window.confirm("Kraj igre, pobednik je:" + igraci[0])
    else if (poeni[0] < poeni[1])
        window.confirm("Kraj igre, pobednik je: " + igraci[1])
    else 
        window.confirm("Kraj igre, rezultat je neresen")
    
    document.getElementById("naPotezu").style.display = "none";
    document.getElementById("novaIgra").style.display = "block";
}
