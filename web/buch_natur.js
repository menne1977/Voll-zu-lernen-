/* ====== Lehrbuch Naturwissenschaften, Klasse 6-10 ====== */
/* ---- Biologie: Blutkreislauf ---- */
lbx("biologie",7,"Herz und Blutkreislauf",{
  intro:"Das <b>Herz</b> ist eine Pumpe aus Muskeln. Es pumpt das Blut durch den ganzen Körper. Das Blut bringt Sauerstoff und Nährstoffe zu den Zellen und nimmt Kohlenstoffdioxid und Abfallstoffe mit.",
  teile:[
    {h:"Aufbau des Herzens",p:"Das Herz hat <b>vier Räume</b>: zwei Vorhöfe und zwei Kammern. Eine Scheidewand trennt die linke von der rechten Seite. Klappen wirken wie Ventile und lassen das Blut nur in eine Richtung fließen."},
    {h:"Zwei Kreisläufe",p:"<b>Lungenkreislauf:</b> rechte Herzhälfte → Lunge → linke Herzhälfte. In der Lunge nimmt das Blut Sauerstoff auf.<br><b>Körperkreislauf:</b> linke Herzhälfte → Körper → rechte Herzhälfte. Hier gibt das Blut Sauerstoff ab.",bsp:"<b>Arterien</b> führen vom Herzen weg. <b>Venen</b> führen zum Herzen hin. (Merke: A wie Abfahrt.)"},
    {h:"Das Blut",p:"<b>Rote Blutkörperchen</b> transportieren Sauerstoff mit dem roten Farbstoff Hämoglobin. <b>Weiße Blutkörperchen</b> bekämpfen Krankheitserreger. <b>Blutplättchen</b> verschließen Wunden. <b>Blutplasma</b> ist der flüssige Anteil."}
  ],
  merke:"Das Herz schlägt in Ruhe etwa 60- bis 80-mal pro Minute.",
  fo:[
    {svg:sv2(`<rect x="100" y="25" width="100" height="100" rx="20" fill="#fecaca" stroke="#241b4b" stroke-width="3"/>`+ln(150,25,150,125)+ln(100,70,200,70)+tx(125,50,"Vorhof",10)+tx(175,50,"Vorhof",10)+tx(125,100,"Kammer",10)+tx(175,100,"Kammer",10)+tx(125,62,"rechts",9,"#6b6590")+tx(175,62,"links",9,"#6b6590")+tx(150,145,"Das Herz hat 4 Räume",13)),txt:"Das Herz hat zwei Vorhöfe (oben) und zwei Kammern (unten). Die Scheidewand trennt rechts von links."},
    {svg:sv2(bx(110,60,80,40,"Herz",COL.d,15)+P(1,bx(10,20,80,32,"Lunge",COL.f)+ar(110,70,60,52)+tx(60,125,"Lungenkreislauf",11,"#4f46e5","start"))+P(2,bx(210,110,80,32,"Körper",COL.c)+ar(190,90,240,110))+tx(140,145,"",1)),txt:"Vom Herzen aus fließt Blut zuerst zur Lunge und holt dort Sauerstoff. Danach pumpt das Herz es in den ganzen Körper."},
    {svg:sv2(`<circle cx="60" cy="60" r="30" fill="#dc2626" stroke="#241b4b" stroke-width="3"/><circle cx="60" cy="60" r="12" fill="#991b1b"/>`+tx(60,115,"rote Blut-",11)+tx(60,129,"körperchen",11)+P(1,`<circle cx="150" cy="60" r="30" fill="#f1f5f9" stroke="#241b4b" stroke-width="3"/><circle cx="150" cy="60" r="12" fill="#a78bfa"/>`+tx(150,115,"weiße Blut-",11)+tx(150,129,"körperchen",11))+P(2,`<circle cx="240" cy="60" r="14" fill="#fde68a" stroke="#241b4b" stroke-width="3"/>`+tx(240,115,"Blut-",11)+tx(240,129,"plättchen",11))),txt:"Im Blut schwimmen drei Arten von Zellen: Die roten transportieren Sauerstoff, die weißen schützen vor Krankheiten, die Plättchen verschließen Wunden."}
  ],
  ue:[
    ["Wie viele Räume hat das menschliche Herz?","4","Zwei Vorhöfe und zwei Kammern."],
    ["Wie heißt der rote Blutfarbstoff?","hämoglobin",null],
    ["Welche Blutzellen transportieren Sauerstoff? (rote …)","rote blutkörperchen",["rote blutkörperchen","blutkörperchen","erythrozyten","rote"]],
    ["Wie heißen die Gefäße, die vom Herzen wegführen?","arterien",["arterien","arterie","schlagadern","schlagader"]],
    ["In welchem Organ nimmt das Blut Sauerstoff auf?","lunge","Das Blut fließt im Lungenkreislauf dorthin."]
  ]
});

/* ---- Biologie: Verdauung ---- */
lbx("biologie",8,"Der Weg der Nahrung: Verdauung",{
  intro:"Dein Körper kann Nahrung nicht so verwenden, wie sie ist. Bei der <b>Verdauung</b> wird sie in kleine Bausteine zerlegt, die das Blut aufnehmen kann.",
  teile:[
    {h:"Stationen",p:"<b>Mund:</b> Zähne zerkleinern, Speichel beginnt die Stärke zu spalten.<br><b>Speiseröhre:</b> transportiert den Brei durch Muskelbewegungen.<br><b>Magen:</b> Magensäure (Salzsäure) tötet Keime, Eiweiß wird zerlegt.<br><b>Dünndarm:</b> Hier werden fast alle Nährstoffe ins Blut aufgenommen. Galle (aus der Leber) hilft bei Fetten. Die Bauchspeicheldrüse liefert Verdauungssäfte.<br><b>Dickdarm:</b> entzieht dem Rest Wasser.<br><b>Enddarm:</b> Ausscheidung."},
    {h:"Nährstoffe",p:"<b>Kohlenhydrate</b> (Energie), <b>Eiweiße</b> (Baustoffe), <b>Fette</b> (Energiespeicher), dazu Vitamine, Mineralstoffe, Wasser und Ballaststoffe."}
  ],
  merke:"Die Innenwand des Dünndarms ist stark gefaltet. Dadurch ist die Fläche riesig und viele Nährstoffe können aufgenommen werden.",
  fo:[
    {svg:sv2(bx(10,10,90,28,"Mund",COL.b,12)+P(1,ar(100,24,125,24)+bx(125,10,90,28,"Speiseröhre",COL.a,11))+P(2,ar(170,38,170,58)+bx(125,58,90,28,"Magen",COL.d,12))+P(3,ar(125,72,100,100)+bx(10,92,100,28,"Dünndarm",COL.c,12))+P(4,ar(60,120,60,138)+bx(10,138,100,26,"Dickdarm",COL.e,12))),txt:"Die Nahrung wandert vom Mund durch die Speiseröhre in den Magen, dann in den Dünndarm und zuletzt in den Dickdarm."},
    {svg:sv2(bx(20,40,110,40,"Dünndarm",COL.c,14)+ar(130,60,170,60)+bx(170,40,110,40,"Blut",COL.d,14)+tx(150,110,"Nährstoffe gehen ins Blut über",13)),txt:"Im Dünndarm gehen die Nährstoffe durch die Darmwand ins Blut. Das Blut bringt sie zu allen Zellen."}
  ],
  ue:[
    ["In welchem Organ werden die meisten Nährstoffe ins Blut aufgenommen?","dünndarm",["dünndarm","duenndarm"]],
    ["Wo beginnt die Verdauung der Stärke?","mund",["mund","im mund"]],
    ["Welche Säure ist in der Magensäure?","salzsäure",["salzsäure","salzsaeure","hcl"]],
    ["In welchem Abschnitt wird dem Nahrungsrest hauptsächlich Wasser entzogen?","dickdarm",null],
    ["Welches Organ bildet die Galle?","leber",null]
  ]
});

/* ---- Physik: Hebel ---- */
lbx("physik",6,"Hebel und das Hebelgesetz",{
  intro:"Mit einem <b>Hebel</b> kannst du mit wenig Kraft schwere Dinge heben. Beispiele sind Wippe, Brecheisen, Schere und Schubkarre. Ein Hebel dreht sich um einen <b>Drehpunkt</b>.",
  teile:[
    {h:"Das Hebelgesetz",p:"Der Hebel ist im Gleichgewicht, wenn gilt:<br><b>Kraft · Kraftarm = Last · Lastarm</b><br>(F₁ · a₁ = F₂ · a₂). Der Arm ist der Abstand vom Drehpunkt.",svg:sv2(`<polygon points="150,100 135,125 165,125" fill="#241b4b"/><rect x="30" y="92" width="240" height="8" fill="#fbbf24" stroke="#241b4b" stroke-width="2"/><rect x="215" y="55" width="40" height="37" fill="#c7d2fe" stroke="#241b4b" stroke-width="2"/>`+tx(235,78,"100 N",11)+ln(150,138,230,138)+tx(190,152,"Lastarm",11)+ln(150,138,50,138)+tx(100,152,"Kraftarm",11)+ar(50,60,50,88)+tx(50,50,"F = ?",12,"#dc2626")),bsp:"Last 100 N, Lastarm 0,5 m, Kraftarm 2 m. F · 2 = 100 · 0,5 → F = 50 : 2 = <b>25 N</b>."},
    {h:"Merksatz",p:"„Was man an Kraft spart, muss man an Weg zugeben.“ Mit einem langen Kraftarm brauchst du weniger Kraft, drückst aber über einen längeren Weg."}
  ],
  merke:"Je länger der Kraftarm, desto kleiner die nötige Kraft.",
  fo:[
    {svg:sv2(`<polygon points="150,100 135,125 165,125" fill="#241b4b"/><rect x="30" y="92" width="240" height="8" fill="#fbbf24" stroke="#241b4b" stroke-width="2"/>`+tx(150,145,"Drehpunkt",12)),txt:"Ein Hebel ist ein starrer Stab, der sich um einen Drehpunkt dreht. Hier ist es eine Wippe."},
    {svg:sv2(`<polygon points="150,100 135,125 165,125" fill="#241b4b"/><rect x="30" y="92" width="240" height="8" fill="#fbbf24" stroke="#241b4b" stroke-width="2"/><rect x="215" y="55" width="40" height="37" fill="#c7d2fe" stroke="#241b4b" stroke-width="2"/>`+tx(235,78,"100 N",11)+P(1,ln(150,138,230,138,"#dc2626",3)+tx(190,152,"0,5 m",12,"#dc2626"))+P(2,ln(150,138,50,138,"#16a34a",3)+tx(100,152,"2 m",12,"#16a34a"))),txt:"Auf der rechten Seite liegt die Last: 100 Newton in 0,5 Meter Abstand. Links ist der Kraftarm 2 Meter lang."},
    {svg:sv2(tx(150,45,"F · 2 m = 100 N · 0,5 m",17)+P(1,tx(150,85,"F · 2 = 50",17))+P(2,tx(150,125,"F = 25 N",20,"#16a34a"))),txt:"Du setzt in das Hebelgesetz ein und löst nach F auf. Du brauchst nur 25 Newton, um 100 Newton zu halten."}
  ],
  ue:[
    ["Last 100 N, Lastarm 0,5 m, Kraftarm 2 m. Wie groß ist die Kraft in N?","25","F = 100 · 0,5 : 2."],
    ["Last 60 N, Lastarm 1 m, Kraftarm 3 m. Wie groß ist die Kraft in N?","20","F = 60 · 1 : 3."],
    ["Kraft 50 N, Kraftarm 0,4 m, Lastarm 0,1 m. Wie groß ist die Last in N?","200","Last = 50 · 0,4 : 0,1."],
    ["Wird die nötige Kraft größer oder kleiner, wenn der Kraftarm länger wird? (größer/kleiner)","kleiner",null],
    ["Wie heißt der Punkt, um den sich der Hebel dreht?","drehpunkt",null]
  ]
});

/* ---- Physik: Dichte ---- */
lbx("physik",7,"Dichte",{
  intro:"Ein Kilogramm Federn und ein Kilogramm Blei wiegen gleich viel. Aber die Federn brauchen viel mehr Platz. Die <b>Dichte</b> sagt, wie viel Masse in einem bestimmten Volumen steckt.",
  teile:[
    {h:"Formel",p:"<b>Dichte ρ = Masse m : Volumen V</b><br>Einheit: g/cm³ oder kg/dm³. Wasser hat die Dichte <b>1 g/cm³</b>.",bsp:"Ein Körper wiegt 270 g und hat 100 cm³ Volumen. ρ = 270 : 100 = <b>2,7 g/cm³</b> (das ist Aluminium)."},
    {h:"Umstellen",p:"Masse: <b>m = ρ · V</b>. Volumen: <b>V = m : ρ</b>.",bsp:"Eisen hat 7,8 g/cm³. 10 cm³ Eisen wiegen 7,8 · 10 = <b>78 g</b>."},
    {h:"Schwimmen oder sinken?",p:"Ein Körper schwimmt in Wasser, wenn seine Dichte kleiner als 1 g/cm³ ist. Holz schwimmt, Eisen sinkt. Ein Schiff schwimmt trotzdem, weil es innen viel Luft enthält."}
  ],
  merke:"Hohe Dichte = viel Masse auf wenig Platz.",
  fo:[
    {svg:sv2(`<rect x="40" y="40" width="80" height="80" fill="#cbd5e1" stroke="#241b4b" stroke-width="3"/>`+tx(80,85,"100 cm³",13)+tx(80,142,"270 g",14,"#dc2626")+P(1,tx(190,60,"ρ = m : V",18)+tx(190,95,"= 270 g : 100 cm³",14)+tx(190,128,"= 2,7 g/cm³",16,"#16a34a"))),txt:"Ein Würfel hat 100 Kubikzentimeter Volumen und wiegt 270 Gramm. Teile die Masse durch das Volumen: 2,7 g/cm³."},
    {svg:sv2(`<rect x="30" y="70" width="240" height="70" fill="#bae6fd" stroke="#241b4b" stroke-width="2"/><rect x="60" y="55" width="50" height="30" fill="#a16207" stroke="#241b4b" stroke-width="2"/><rect x="180" y="110" width="50" height="30" fill="#64748b" stroke="#241b4b" stroke-width="2"/>`+tx(85,40,"Holz schwimmt",12)+tx(205,100,"Eisen sinkt",12)),txt:"Holz hat eine kleinere Dichte als Wasser und schwimmt. Eisen hat eine größere Dichte und sinkt."}
  ],
  ue:[
    ["m = 270 g, V = 100 cm³. Wie groß ist die Dichte in g/cm³?","2.7","270 : 100."],
    ["Eisen hat 7,8 g/cm³. Wie viel wiegen 10 cm³ Eisen in g?","78","m = ρ · V."],
    ["Wie viel wiegen 500 cm³ Wasser (1 g/cm³) in g?","500","Wasser: 1 g pro cm³."],
    ["Ein Körper wiegt 120 g und hat 150 cm³. Schwimmt er in Wasser? (ja/nein)","ja","Dichte = 0,8 g/cm³."],
    ["Wie viel cm³ hat ein Körper mit 90 g und der Dichte 3 g/cm³?","30","V = m : ρ."]
  ]
});

/* ---- Physik: Ohmsches Gesetz ---- */
lbx("physik",8,"Spannung, Stromstärke und Widerstand (Ohmsches Gesetz)",{
  intro:"Im Stromkreis sind drei Größen wichtig: die <b>Spannung U</b> (in Volt, V), die <b>Stromstärke I</b> (in Ampere, A) und der <b>Widerstand R</b> (in Ohm, Ω). Sie hängen eng zusammen.",
  teile:[
    {h:"Das Ohmsche Gesetz",p:"<b>U = R · I</b><br>Umgestellt: <b>I = U : R</b> und <b>R = U : I</b>. Bei gleichem Widerstand fließt mit mehr Spannung mehr Strom.",svg:sv2(`<rect x="60" y="30" width="180" height="90" rx="6" fill="none" stroke="#241b4b" stroke-width="3"/><rect x="40" y="60" width="40" height="30" fill="#fff" stroke="#241b4b" stroke-width="3"/>`+tx(60,80,"12 V",11)+`<rect x="130" y="112" width="40" height="16" fill="#fde68a" stroke="#241b4b" stroke-width="2"/>`+tx(150,150,"R = 4 Ω",12)+tx(150,24,"I = ?",13,"#dc2626")),bsp:"U = 12 V, R = 4 Ω. I = 12 : 4 = <b>3 A</b>."},
    {h:"Reihen- und Parallelschaltung",p:"<b>Reihe:</b> Die Widerstände addieren sich: R = R₁ + R₂. Die Stromstärke ist überall gleich.<br><b>Parallel:</b> Die Spannung ist an jedem Zweig gleich. Der Gesamtwiderstand wird kleiner.",bsp:"Reihenschaltung: 20 Ω + 30 Ω = <b>50 Ω</b>."}
  ],
  merke:"Das Ohmsche Gesetz hilft dir, wenn zwei der drei Größen bekannt sind. Dreieck-Trick: U oben, R und I unten nebeneinander.",
  fo:[
    {svg:sv2(`<polygon points="150,20 90,120 210,120" fill="#e0e7ff" stroke="#241b4b" stroke-width="3"/>`+ln(100,85,200,85)+ln(150,85,150,120)+tx(150,72,"U",20)+tx(120,112,"R",18)+tx(180,112,"I",18)),txt:"Das Dreieck hilft beim Umstellen. Deckst du eine Größe ab, siehst du die Formel: U = R mal I, R = U durch I, I = U durch R."},
    {svg:sv2(tx(150,45,"U = 12 V und R = 4 Ω",17)+P(1,tx(150,85,"I = U : R",18))+P(2,tx(150,125,"I = 12 V : 4 Ω = 3 A",18,"#16a34a"))),txt:"Beispiel: Bei 12 Volt Spannung und 4 Ohm Widerstand fließen 3 Ampere."}
  ],
  ue:[
    ["R = 10 Ω, I = 0,5 A. Wie groß ist die Spannung U in V?","5","U = R · I."],
    ["U = 12 V, R = 4 Ω. Wie groß ist die Stromstärke in A?","3","I = U : R."],
    ["U = 230 V, I = 2 A. Wie groß ist der Widerstand in Ω?","115","R = U : I."],
    ["Zwei Widerstände (20 Ω und 30 Ω) hängen in Reihe. Wie groß ist der Gesamtwiderstand in Ω?","50","Bei Reihe addieren."],
    ["In welcher Einheit misst man die Stromstärke?","ampere",["ampere","a"]]
  ]
});

/* ---- Physik: Geschwindigkeit ---- */
lbx("physik",9,"Geschwindigkeit und gleichförmige Bewegung",{
  intro:"Die <b>Geschwindigkeit</b> sagt, wie schnell sich ein Körper bewegt. Gleichförmig heißt: Die Geschwindigkeit bleibt immer gleich.",
  teile:[
    {h:"Formel",p:"<b>v = s : t</b> (Geschwindigkeit = Strecke : Zeit)<br>Umgestellt: <b>s = v · t</b> und <b>t = s : v</b>.",bsp:"150 km in 2 h: v = 150 : 2 = <b>75 km/h</b>."},
    {h:"km/h und m/s",p:"Von <b>km/h in m/s</b> teilst du durch 3,6. Von <b>m/s in km/h</b> multiplizierst du mit 3,6.",bsp:"72 km/h = 72 : 3,6 = <b>20 m/s</b>."},
    {h:"Das Weg-Zeit-Diagramm",p:"Bei gleichförmiger Bewegung ist der Graph eine <b>Gerade</b>. Je steiler, desto schneller ist der Körper."}
  ],
  merke:"Achte auf die Einheiten: Strecke in km und Zeit in h ergibt km/h. Strecke in m und Zeit in s ergibt m/s.",
  fo:[
    {svg:sv2(ln(30,130,280,130)+ln(30,130,30,15)+tx(275,122,"t",12)+tx(40,22,"s",12)+P(1,ln(30,130,260,35,"#4f46e5",3))+P(2,tx(150,150,"Gerade = gleichbleibende Geschwindigkeit",12))),txt:"Im Weg-Zeit-Diagramm ist die Linie bei gleichförmiger Bewegung gerade. Die Steigung ist die Geschwindigkeit."},
    {svg:sv2(tx(150,45,"72 km/h",20)+P(1,tx(150,85,": 3,6",18,"#dc2626"))+P(2,tx(150,125,"= 20 m/s",20,"#16a34a"))),txt:"Zum Umrechnen von km/h in m/s teilst du durch 3,6. 72 km/h sind 20 Meter pro Sekunde."}
  ],
  ue:[
    ["150 km in 2 h. Wie groß ist die Geschwindigkeit in km/h?","75","150 : 2."],
    ["Rechne 72 km/h in m/s um.","20","Teile durch 3,6."],
    ["Ein Radfahrer fährt 15 km/h. Wie weit kommt er in 3 Stunden (km)?","45","s = v · t."],
    ["Ein Auto fährt 100 km/h. Wie lange braucht es für 250 km (Stunden)?","2.5","t = s : v."],
    ["Rechne 10 m/s in km/h um.","36","Mal 3,6."]
  ]
});

/* ---- Chemie: Reaktionsgleichungen ---- */
lbx("chemie",8,"Reaktionsgleichungen aufstellen",{
  intro:"Bei einer chemischen Reaktion entstehen aus <b>Edukten</b> (Ausgangsstoffen) neue <b>Produkte</b>. Mit einer Reaktionsgleichung beschreibst du das kurz. Wichtig: Es gehen keine Atome verloren. Das ist die <b>Massenerhaltung</b>.",
  teile:[
    {h:"Beispiel Wasser",p:"Wasserstoff reagiert mit Sauerstoff zu Wasser.<br><b>2 H₂ + O₂ → 2 H₂O</b><br>Links: 4 H-Atome und 2 O-Atome. Rechts: 4 H-Atome und 2 O-Atome. Die Gleichung stimmt.",bsp:"Magnesium verbrennt: <b>2 Mg + O₂ → 2 MgO</b>."},
    {h:"So gehst du vor",p:"1. Edukte und Produkte mit Formeln aufschreiben.<br>2. Atome auf beiden Seiten zählen.<br>3. Vor die Formeln <b>Koeffizienten</b> setzen (nie die kleinen Zahlen in den Formeln ändern!).<br>4. Zum Schluss alles nochmal zählen."},
    {h:"Beispiel Methan",p:"<b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b><br>Links: 1 C, 4 H, 4 O. Rechts: 1 C, 4 H, 2 + 2 = 4 O."}
  ],
  merke:"Zahlen vor der Formel (Koeffizienten) darfst du ändern. Die kleinen tiefgestellten Zahlen in der Formel nie.",
  fo:[
    {svg:sv2(tx(150,50,"H₂ + O₂ → H₂O",22)+P(1,tx(150,95,"links: 2 H, 2 O | rechts: 2 H, 1 O",13,"#dc2626"))+P(2,tx(150,130,"Sauerstoff passt noch nicht!",14,"#dc2626"))),txt:"Zuerst die Formeln aufschreiben und zählen. Rechts fehlt ein Sauerstoffatom. Die Gleichung stimmt noch nicht."},
    {svg:sv2(tx(150,50,"2 H₂ + O₂ → 2 H₂O",22)+P(1,tx(150,95,"links: 4 H, 2 O | rechts: 4 H, 2 O",13,"#16a34a"))+P(2,tx(150,130,"Jetzt stimmt es.",15,"#16a34a"))),txt:"Wir setzen eine 2 vor H₂O und eine 2 vor H₂. Jetzt sind auf beiden Seiten gleich viele Atome."}
  ],
  ue:[
    ["2 H₂ + O₂ → 2 H₂O: Wie viele Wasserstoffatome stehen insgesamt rechts?","4","2 mal H₂O, jedes mit 2 H."],
    ["2 Mg + O₂ → 2 ___ (Formel des Produkts)","mgo","Magnesiumoxid."],
    ["CH₄ + 2 O₂ → CO₂ + ? H₂O. Welche Zahl fehlt?","2","Es müssen 4 H-Atome rechts stehen."],
    ["4 g Wasserstoff reagieren mit 32 g Sauerstoff. Wie viel g Wasser entstehen?","36","Massenerhaltung."],
    ["Wie heißen die Ausgangsstoffe einer Reaktion? (ein Wort, Mehrzahl)","edukte",["edukte","reaktanten","ausgangsstoffe"]]
  ]
});

/* ---- Chemie: Säuren und Basen ---- */
lbx("chemie",9,"Säuren, Basen und der pH-Wert",{
  intro:"Zitronensaft schmeckt sauer, Seife fühlt sich glatt an. Das sind Beispiele für <b>Säuren</b> und <b>Laugen</b>. Mit dem <b>pH-Wert</b> misst man, wie sauer oder basisch eine Lösung ist.",
  teile:[
    {h:"Die pH-Skala",p:"<b>pH kleiner als 7:</b> sauer.<br><b>pH = 7:</b> neutral (reines Wasser).<br><b>pH größer als 7:</b> basisch (alkalisch).<br>Die Skala geht von 0 bis 14.",svg:sv2(`<defs><linearGradient id="phg" x1="0" x2="1"><stop offset="0" stop-color="#ef4444"/><stop offset=".5" stop-color="#22c55e"/><stop offset="1" stop-color="#3b82f6"/></linearGradient></defs><rect x="20" y="45" width="260" height="30" fill="url(#phg)" stroke="#241b4b" stroke-width="2"/>`+tx(20,100,"0",12)+tx(150,100,"7",12)+tx(280,100,"14",12)+tx(60,38,"sauer",12)+tx(150,38,"neutral",12)+tx(240,38,"basisch",12)+tx(150,130,"Zitrone ≈ 2 · Wasser = 7 · Seife ≈ 10",11)),bsp:"Salzsäure (HCl) hat einen pH-Wert von etwa 1, Natronlauge (NaOH) von etwa 14."},
    {h:"Indikatoren",p:"Ein <b>Indikator</b> zeigt durch seine Farbe, ob eine Lösung sauer oder basisch ist. <b>Universalindikator:</b> in Säuren rot bis orange, neutral grün, in Laugen blau bis violett."},
    {h:"Neutralisation",p:"Wenn du eine Säure und eine Lauge mischst, reagieren sie miteinander: <b>Säure + Lauge → Salz + Wasser</b>.",bsp:"HCl + NaOH → NaCl + H₂O (Kochsalz und Wasser)."}
  ],
  merke:"Vorsicht beim Experimentieren: Schutzbrille tragen. Säuren und Laugen können ätzen.",
  fo:[
    {svg:sv2(`<defs><linearGradient id="phg2" x1="0" x2="1"><stop offset="0" stop-color="#ef4444"/><stop offset=".5" stop-color="#22c55e"/><stop offset="1" stop-color="#3b82f6"/></linearGradient></defs><rect x="20" y="50" width="260" height="30" fill="url(#phg2)" stroke="#241b4b" stroke-width="2"/>`+P(1,tx(60,40,"sauer",13))+P(2,tx(150,40,"neutral",13))+P(3,tx(240,40,"basisch",13))+tx(20,102,"pH 0",11)+tx(150,102,"pH 7",11)+tx(280,102,"pH 14",11)),txt:"Die pH-Skala geht von 0 bis 14. Unter 7 ist sauer, bei 7 neutral, über 7 basisch."},
    {svg:sv2(bx(10,40,90,38,"Säure (HCl)",COL.d,12)+tx(112,65,"+",22)+bx(125,40,90,38,"Lauge (NaOH)",COL.f,11)+P(1,ar(220,59,245,59)+tx(268,55,"Salz",12)+tx(268,72,"+ Wasser",11))+P(2,tx(150,125,"Neutralisation",16,"#16a34a"))),txt:"Mischst du Säure und Lauge, entstehen Salz und Wasser. Das nennt man Neutralisation."}
  ],
  ue:[
    ["Ist eine Lösung mit pH 3 sauer, neutral oder basisch?","sauer",null],
    ["Wie lautet die chemische Formel von Salzsäure?","hcl",null],
    ["Wie lautet die Formel von Natronlauge?","naoh",null],
    ["Welche Farbe hat Universalindikator in einer sauren Lösung? (rot/blau)","rot",null],
    ["Säure + Lauge → Salz + ?","wasser",null]
  ]
});
