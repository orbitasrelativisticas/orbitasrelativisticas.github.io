orbitas = false;
mensagem = false;
msg = false;

// Função que é executada sempre que a página é aberta
function init() {
    dark();
    mode = 'dark';
}

function dark() {
    var r = document.querySelector(':root');
    r.style.setProperty('--texto', '#ffffff');
    r.style.setProperty('--fundo', ' #0E1118');
    r.style.setProperty('--botoes', '#181F2F');
    r.style.setProperty('--input', '#1c2438');
    r.style.setProperty('--hover', '#253048');
    r.style.setProperty('--hoverx', '#49495f');
    r.style.setProperty('--pontos', '#353549');
    r.style.setProperty('--destaque', '#FFC700');
    r.style.setProperty('--artigo', '#181F2F');
    r.style.setProperty('--titlebar', '#181924');
    r.style.setProperty('--bordax', 'e3e3e3');
    var element = document.body;
    element.classList.add("dark-mode");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0E1118');
}

function light(){
    var r = document.querySelector(':root');
    r.style.setProperty('--texto', '#000000');
    r.style.setProperty('--fundo', '#ededed');
    r.style.setProperty('--botoes', '#f6f6f6');
    r.style.setProperty('--input', '#f0f0f0');
    r.style.setProperty('--hover', '#ffffff');
    r.style.setProperty('--hoverx', '#e6e6e6');
    r.style.setProperty('--pontos', '#c1bfbf');
    r.style.setProperty('--destaque', '#ffdb57');
    r.style.setProperty('--artigo', '#f7f7f7');
    r.style.setProperty('--titlebar', '#cecece');
    r.style.setProperty('--bordax', '#f6f6f6');
    var element = document.body;
    element.classList.remove("dark-mode");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", '#ededed');
}

function change() {
    if (mode == "dark") {
        mode =  "light";
        light();
    } else {
        mode = "dark";
        dark();
    }
}

function show(shown, hide) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hide).style.display='none';
}

function openModal(a,b) {
    document.getElementById(a).style.display='block';
    document.getElementById(b).style.display='block';
}

function hide(a,b){
    document.getElementById(a).style.display='none';
    document.getElementById(b).style.display='none';
}

function nav(a,b,c,d,e,f){
    show(a,b);
    document.getElementById(c).style.color='#FFC700';
    if (mode == 'light') {
        document.getElementById(d).style.color='#000000';
    } else {
        document.getElementById(d).style.color='#ffffff';
    }
    document.getElementById(e).classList.add('select');
    document.getElementById(f).classList.remove('select');  
}

function getValues() {
    x = document.getElementById("rangevalue").value;
    v0js = document.getElementById("rangevalue2").value;
    orb = document.getElementById("rangevalue3").value;
    d = document.getElementById("rangevalue4").value;
}

setInterval(getValues,100);

function mostraPasso3() {
    //orbitas = pyscript.interpreter.globals.get('orbitas');
    //ocultar = pyscript.interpreter.globals.get('ocultar');
    if (orbitas) {
        document.getElementById("parte3").style.display='block';
        if (ocultar) {
            document.getElementById("GrafM").style.display='none';
        }
    }
}

setInterval(mostraPasso3,100);

function exibeMensagemM() {
    //mensagem = pyscript.interpreter.globals.get('mensagem');
    if (mensagem) {
        document.getElementById('infos').style.display='block';
    } else {
        document.getElementById('infos').style.display='none';
    }
}

setInterval(exibeMensagemM,100);

function exibeMensagemL() {
    //msg = pyscript.interpreter.globals.get('msg');
    if (msg) {
        document.getElementById('infos2').style.display='block';
    } else {
        document.getElementById('infos2').style.display='none';
    }
}

setInterval(exibeMensagemL,100);

function limpaDiv(show){
    document.getElementById(show).style.display='block';
}

function limpaDiv2() {
    var GrafM = document.getElementById("GrafM");
    GrafM.style.display="block";
    var graph = document.getElementById("graph");
    graph.firstChild.remove();
    var info = document.getElementById("infos");
    info.firstChild.remove();
    info.firstChild.remove();
}

function limpaDiv3() {
    var GrafL = document.getElementById("GrafL");
    GrafL.style.display="block";
    var graph = document.getElementById("graph2");
    graph.firstChild.remove();
    var infos2 = document.getElementById("infos2");
    infos2.firstChild.remove();
    infos2.firstChild.remove();
    msg = false;
}

function reiniciar() {
    mensagem = false;
    orbitas = false;
    document.getElementById("parte2").style.display="none";
    document.getElementById("parte3").style.display="none";
    document.getElementById("GrafM").style.display="none";
    document.getElementById("range1").value=3;
    document.getElementById("rangevalue").value=3;
    document.getElementById("range2").value=0.0;
    document.getElementById("rangevalue2").value=0.0;
    document.getElementById("range3").value=1;
    document.getElementById("rangevalue3").value=1;
}