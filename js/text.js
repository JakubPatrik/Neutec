var lan = "sk";

let sk = new Map();
let en = new Map();

sk = { 
    "navhome":"Domov",
    "navabout":"O nás",
    "navstory":"Problém",
    "navwork":"Riešenie",
    "navteam":"Náš tím",
    "navcontact":"Kontakt",

    "btn1":"Čo sa deje?",
    "btn2":"Čo pre to robíme?",
    "btn3":"Pozri našu prácu",

    "slider1down":"Voda musí zostať v mestách. Mestská zeleň musí byť zveľaďovaná",
    "slider2down":"Našim cieľom je poskytnúť...",
    "slider3down":"Pozrite sa ako pomáhame...",
    
    "abouth4":"O NÁS",
    "abouth2":"Kto sme a čo chceme dosiahnuť?",
    "aboutp": "NEuTEČ je projekt zameriavajúci sa na rozvoj zelenej a modrej infraštruktúry za účelom obmedzenia povrchového odtoku dažďovej vody a zlepšenia mestskej klímy v mestách na Slovensku.\nNEuTEČ je projekt zameriavajúci sa na rozvoj zelenej a modrej infraštruktúry za účelom obmedzenia povrchového odtoku dažďovej vody a zlepšenia mestskej klímy v mestách na Slovensku.", 
    
    "storyh4":"PREČÍTAJTE SI NÁŠ PRÍBEH",
    "storyup":"Problémy, ktoré riešime",
    "storydown":"Povrchový odtok je proces, pri ktorom dažďová voda, ktorá dopadne na odtokové plochy ako strechy, cesty či akýkoľvek iný nepriepustný povrch, okamžite steká do kanalizácie namiesto toho, aby vsiakla do pôdy. Tento nedostatok vody v mestách spôsobuje suchá, prašnosť, ako aj intenzívne vlny horúčav v letnom období. Na druhej strane výdatné zrážky spôsobujú, že kanalizačný systém je preťažený, keďže všetká voda okamžite steká z ulíc a miest nadol. To môže mať za následok napríklad aj záplavy. Na dôvažok voda, ktorá odteká zo striech a ciest, býva často kontaminovaná pohonnými látkami či ťažkými kovmi. Všetky tieto problémy dokáže eliminovať či aspoň zmierniť jednoduchá a dobre navrhnutá moderná zelená infraštruktúra.",

    "workup":"Naše riešenie",

    "teamup":"Náš tím",
    "hrmo":"Riaditeľ",
    "sani":"Oddelenie hľadania príležitostí",
    "lisa":"Oddelenie rozvoja zelenej infraštruktúry",
    "samo":"Oddelenie hľadania príležitostí",
    "timo":"Oddelenie rozvoja zelenej infraštruktúry",
    "luki":"Oddelenie komunikácie",

    "contactup":"Kontakt",
    "contactdown":"alebo nás kontaktujte priamo na \t",

    "cf-submit":"Poslať správu",
},

en = {    
    "navhome":"Home",
    "navabout":"About",
    "navstory":"Problem",
    "navwork":"Solution",
    "navteam":"Team",
    "navcontact":"Contact",
    
    "btn1":"What's wrong?",
    "btn2":"How do we respond?",
    "btn3":"This is our job",

    "slider1down":"Water needs to stay in the city. City greenery needs to be developed.",
    "slider2down":"Our mission is to provide...",
    "slider3down":"See how we can help...",

    "abouth4":"ABOUT US",
    "abouth2":"Who are we and what is our goal?",
    "aboutp": "NEuTEČ (Do Not Runoff) is a project focusing on the development of green as well as blue infrastructure in order to prevent rainwater surface runoff and improve the city climate in Slovak cities. ", 
    
    "storyh4":"READ OUR STORY",
    "storyup":"Problems we are solving",
    "storydown":"Surface runoff occurs when rainwater runs off straight to the wastewater system after falling on non-permeable surfaces such as roads and roofs instead of absorbing into the soil. The lack of water in city environments causes droughts, dustiness, as well as intensified heatwaves during hot summer months. On the other hand, once heavy rains occur, sewage systems are overloaded, causing flash floods as a result of all the water runoff. In addition, the water from the streets often contains pollutants such as propellants or heavy metals. All of these problems can be eliminated or mitigated by employing simple and well-designed modern green infrastructure.",

    "workup":"Our solution",

    "teamup":"Our team",
    "hrmo":"Director",
    "sani":"Department of Opportunity Finding",
    "lisa":"Department of Product Development",
    "samo":"Department of Opportunity Finding",
    "timo":"Department of Product Development",
    "luki":"Department of Communication",

    "contactup":"Contact",
    "contactdown":"or shoot us an email under \t",

    "cf-submit":"Send Message",
 
}

setLanguage("sk");

function setLanguage(lang) {
    this.lan = lang;
    lan == "en" ? locale = en : locale = sk; 
    for (var key in locale) {
        document.getElementById(key).innerHTML = locale[key];
    }
}
