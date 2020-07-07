var lan = "sk";

let sk = new Map();
let en = new Map();

sk = { 
    "navhome":"Domov",
    "navabout":"O nás",
    "navstory":"Riešenie",
    "navwork":"Praca",
    "navteam":"Nas tim",
    "navcontact":"Kontakt",

    "slider1up":"Novy studentsky projekt",
    "slider1down":"Pozrite sa co riesime",
    "slider2up":"New student project & Business",
    "slider2down":"Our mission is to provide...",
    "slider3up":"New Business in Town",
    "slider3down":"Enjoy our special projects everyday",
    
    "abouth2":"Kto sme a čo chceme dosiahnuť?",
    "aboutp": "NEuTEČ je projekt zameriavajúci sa na rozvoj zelenej a modrej infraštruktúry za účelom obmedzenia povrchového odtoku dažďovej vody a zlepšenia mestskej klímy v mestách na Slovensku.", 
    
    "storyup":"Problémy, ktoré riešime",
    "storydown":"Povrchový odtok je proces, pri ktorom dažďová voda, ktorá dopadne na odtokové plochy ako strechy, cesty či akýkoľvek iný nepriepustný povrch, okamžite steká do kanalizácie namiesto toho, aby vsiakla do pôdy. Tento nedostatok vody v mestách spôsobuje suchá, prašnosť, ako aj intenzívne vlny horúčav v letnom období. Na druhej strane výdatné zrážky spôsobujú, že kanalizačný systém je preťažený, keďže všetká voda okamžite steká z ulíc a miest nadol. To môže mať za následok napríklad aj záplavy. Na dôvažok voda, ktorá odteká zo striech a ciest, býva často kontaminovaná pohonnými látkami či ťažkými kovmi. Všetky tieto problémy dokáže eliminovať či aspoň zmierniť jednoduchá a dobre navrhnutá moderná zelená infraštruktúra.",

    "workup":"Naša práca",

    "teamup":"Nas tim",
    "hrmo":"Vedúci marketingu",
    "sani":"Vedúci marketingu",
    "lisa":"Vedúca rozvoja",
    "timo":"Vedúci právnych záležitostí",
    "luki":"Vedúci komunikácie",

    "contactup":"Kontakt",

    "cf-submit":"Poslat spravu",
},

en = {    
    "navhome":"Home",
    "navabout":"About",
    "navstory":"Solution",
    "navwork":"Our work",
    "navteam":"Team",
    "navcontact":"Contact",

    "slider1up":"New student project & Business",
    "slider1down":"Water needs to stay in the city. City greenery needs to be developed.",
    "slider2up":"New student project & Business",
    "slider2down":"Our mission is to provide...",
    "slider3up":"New Business in Town",
    "slider3down":"Enjoy our special projects everyday",

    "abouth2":"Who are we and what is our goal?",
    "aboutp": "NEuTEČ (Do Not Runoff) is a project focusing on the development of green as well as blue infrastructure in order to prevent rainwater surface runoff and improve the city climate in Slovak cities. ", 
    
    "storyup":"Problems we are solving",
    "storydown":"Surface runoff occurs when rainwater runs off straight to the wastewater system after falling on non-permeable surfaces such as roads and roofs instead of absorbing into the soil. The lack of water in city environments causes droughts, dustiness, as well as intensified heatwaves during hot summer months. On the other hand, once heavy rains occur, sewage systems are overloaded, causing flash floods as a result of all the water runoff. In addition, the water from the streets often contains pollutants such as propellants or heavy metals. All of these problems can be eliminated or mitigated by employing simple and well-designed modern green infrastructure.",

    "workup":"Our work",

    "teamup":"Our team",
    "hrmo":"Founder & Director",
    "sani":"Head of Marketing",
    "lisa":"Head of Development",
    "timo":"Head of Legal Affairs",
    "luki":"Head of Communication",

    "contactup":"Contact",

    "cf-submit":"Send Message",
 
}


setLanguage("sk");

function setLanguage(lang) {
    this.lan = lang;
    lan == "en" ? locale = en : locale = sk; 
    for (var key in locale) {
        console.log(sk[key]);
        document.getElementById(key).innerHTML = locale[key];
    }

}
