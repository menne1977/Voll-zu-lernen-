/* ====== Lehrbuch Oberstufe, Klasse 10-13 ====== */
/* ---- Englisch: Indirekte Rede ---- */
lbx("englisch",10,"Reported Speech (indirekte Rede)",{
  intro:"Mit <b>Reported Speech</b> gibst du wieder, was jemand gesagt hat. Steht das Einleitungsverb in der Vergangenheit (said, told), rutschen die Zeiten eine Stufe zurück. Das heißt <b>Backshift</b>.",
  teile:[
    {h:"Zeiten zurückschieben",p:"Present Simple → <b>Past Simple</b><br>Present Progressive → <b>Past Progressive</b><br>Present Perfect / Past Simple → <b>Past Perfect</b><br>will → <b>would</b>, can → <b>could</b>",bsp:"„I am tired.“ → She said (that) she <b>was</b> tired.<br>„I will come.“ → He said he <b>would</b> come."},
    {h:"Pronomen und Zeitangaben anpassen",p:"I → he/she, my → his/her. now → <b>then</b>, today → <b>that day</b>, tomorrow → <b>the next day</b>, yesterday → <b>the day before</b>, here → <b>there</b>."}
  ],
  merke:"Say: he said (that) … Tell: he told <b>me</b> (that) … Nach tell steht immer eine Person.",
  fo:[
    {svg:sv2(bx(10,30,125,36,"am / is / are",COL.a,13)+ar(140,48,165,48)+bx(168,30,122,36,"was / were",COL.b,13)+P(1,bx(10,85,125,36,"will",COL.a,13)+ar(140,103,165,103)+bx(168,85,122,36,"would",COL.b,13))),txt:"Beim Backshift rutscht jede Zeit eine Stufe in die Vergangenheit: am wird was, will wird would."},
    {svg:sv2(tx(150,40,"„I am tired.“",17)+P(1,ar(150,55,150,80))+P(2,tx(150,115,"She said she was tired.",17,"#16a34a"))),txt:"Aus „I am tired“ wird in der indirekten Rede: She said she was tired. Das Pronomen wechselt und die Zeit rutscht zurück."}
  ],
  ue:[
    ["„I am tired.“ → She said she ___ tired.","was","am → was."],
    ["„I will come.“ → He said he ___ come. (ein Wort)","would","will → would."],
    ["„I have finished.“ → She said she ___ finished. (zwei Wörter)","had finished","Present Perfect → Past Perfect."],
    ["„We leave tomorrow.“ → They said they were leaving ___. (drei Wörter)","the next day",["the next day","the following day"]],
    ["Welches Verb braucht eine Person danach: say oder tell?","tell",null]
  ]
});

/* ---- Deutsch: Erörterung ---- */
lbx("deutsch",11,"Erörterung und Argumentieren",{
  intro:"Bei einer <b>Erörterung</b> gehst du einer Frage oder These nach und kommst zu einem begründeten Ergebnis. Gutes Argumentieren folgt einem festen Muster.",
  teile:[
    {h:"Das Argument in drei Schritten",p:"1. <b>Behauptung (These):</b> Was ist meine Aussage?<br>2. <b>Begründung:</b> Warum ist das so?<br>3. <b>Beispiel:</b> Woran sieht man es?",bsp:"Handys gehören in der Schule eingeschränkt (These), weil sie vom Unterricht ablenken (Begründung). In einer Studie zeigten Klassen ohne Handy bessere Konzentration (Beispiel)."},
    {h:"Aufbau",p:"<b>Einleitung:</b> Hinführung und Fragestellung.<br><b>Hauptteil:</b> Argumente. Bei der <b>linearen</b> Erörterung reihst du Argumente nur für ein Thema auf. Bei der <b>dialektischen</b> Erörterung stellst du Pro und Kontra gegenüber und steigerst: schwächstes Argument zuerst, stärkstes zuletzt.<br><b>Schluss:</b> Fazit und eigene Stellungnahme."}
  ],
  merke:"Jedes Argument braucht die drei Teile. Eine Behauptung allein überzeugt nicht.",
  fo:[
    {svg:sv2(bx(10,40,85,38,"These",COL.a,14)+ar(97,59,108,59)+bx(110,40,85,38,"Grund",COL.b,14)+ar(197,59,208,59)+bx(210,40,80,38,"Beispiel",COL.c,14)+P(1,tx(150,115,"Behauptung → Begründung → Beispiel",13))),txt:"Ein Argument besteht aus drei Teilen: These, Begründung und Beispiel."},
    {svg:sv2(bx(60,10,180,32,"Einleitung",COL.a,13)+bx(60,52,180,32,"Hauptteil: Argumente",COL.b,13)+bx(60,94,180,32,"Schluss: Fazit",COL.c,13)+tx(150,150,"Steigerung: stärkstes Argument zuletzt",11)),txt:"Die Erörterung hat drei Teile. Im Hauptteil ordnest du die Argumente so, dass das stärkste am Schluss steht."}
  ],
  ue:[
    ["Aus wie vielen Teilen besteht ein vollständiges Argument? (Zahl)","3","These, Begründung, …"],
    ["Welcher Begriff steht für „Behauptung“?","these",null],
    ["Wie nennt man die Erörterung mit Pro und Kontra? (… Erörterung)","dialektische",["dialektische","dialektisch"]],
    ["Welches Argument steht bei der Steigerung zuletzt: das stärkste oder das schwächste?","stärkste",["stärkste","das stärkste","staerkste"]],
    ["Wie heißt der Teil am Ende, in dem du dein Ergebnis zusammenfasst?","schluss",["schluss","fazit"]]
  ]
});

/* ---- Mathe: Ableitung ---- */
(function(){
  const X=x=>150+45*x,Y=y=>125-25*y;
  let pts=[];for(let x=-2;x<=2.01;x+=0.2)pts.push(X(x).toFixed(1)+","+Y(x*x).toFixed(1));
  const ax=ln(20,Y(0),290,Y(0))+ln(150,150,150,10);
  const par=`<polyline points="${pts.join(" ")}" fill="none" stroke="#4f46e5" stroke-width="3"/>`;
  const tan=ln(X(-0.4),Y(-0.8),X(2),Y(3),"#dc2626",2.5);
  lbx("mathe",11,"Ableitung: Steigung in einem Punkt",{
    intro:"Die <b>Ableitung</b> f′(x) einer Funktion gibt die Steigung des Graphen an der Stelle x an, also die Steigung der <b>Tangente</b>. Sie zeigt, wie schnell sich der Funktionswert gerade ändert.",
    teile:[
      {h:"Potenzregel und Co.",p:"<b>f(x) = xⁿ → f′(x) = n · xⁿ⁻¹</b><br>Faktor bleibt: <b>(a·xⁿ)′ = a·n·xⁿ⁻¹</b><br>Konstante fällt weg: <b>(c)′ = 0</b>, Summen leitest du einzeln ab.",svg:sv2(ax+par+tan+`<circle cx="${X(1)}" cy="${Y(1)}" r="5" fill="#dc2626"/>`+tx(X(1)+8,Y(1)+16,"f′(1) = 2",12,"#dc2626","start")),bsp:"f(x) = x³ → f′(x) = 3x². Bei x = 2: f′(2) = 3 · 4 = <b>12</b>.<br>f(x) = x² − 4x → f′(x) = 2x − 4."},
      {h:"Extremstellen",p:"Hoch- und Tiefpunkte findest du dort, wo die Steigung null ist: <b>f′(x) = 0</b>. Danach prüfst du mit dem Vorzeichenwechsel von f′ oder mit f″, ob es ein Hoch- oder Tiefpunkt ist.",bsp:"f(x) = x² − 4x. f′(x) = 2x − 4 = 0 → x = <b>2</b>. Tiefpunkt, weil f″(x) = 2 &gt; 0."}
    ],
    merke:"Ableitung = Steigung. f′(x) = 0 ist die Bedingung für mögliche Extremstellen.",
    fo:[
      {svg:sv2(ax+par),txt:"Hier ist die Parabel f(x) = x². Wir fragen: Wie steil ist sie an einer bestimmten Stelle?"},
      {svg:sv2(ax+par+P(0,tan)+P(0,`<circle cx="${X(1)}" cy="${Y(1)}" r="5" fill="#dc2626"/>`)+P(1,tx(X(1)+8,Y(1)+16,"Steigung = 2",12,"#dc2626","start"))),txt:"Die Tangente berührt den Graphen in einem Punkt. Ihre Steigung ist die Ableitung an dieser Stelle. Bei x = 1 ist sie 2."},
      {svg:sv2(tx(150,45,"f(x) = x³",20)+P(1,tx(150,85,"f′(x) = 3 · x²",20))+P(2,tx(150,125,"f′(2) = 3 · 4 = 12",20,"#16a34a"))),txt:"Potenzregel: Der Exponent wird zum Faktor, und der Exponent sinkt um eins."}
    ],
    ue:[
      ["f(x) = x³. Berechne f′(2).","12","f′(x) = 3x²."],
      ["f(x) = 5x². Berechne f′(3).","30","f′(x) = 10x."],
      ["f(x) = x² + 3x. Wie groß ist die Steigung bei x = 1?","5","f′(x) = 2x + 3."],
      ["f(x) = x² − 4x. Bei welchem x liegt die Extremstelle?","2","f′(x) = 0."],
      ["f(x) = 7. Wie lautet f′(x)?","0","Die Ableitung einer Konstanten ist 0."]
    ]
  });
})();

/* ---- Mathe: Integral ---- */
(function(){
  const X=x=>60+70*x,Y=y=>130-50*y;
  const ax=ln(30,130,290,130)+ln(60,150,60,10);
  lbx("mathe",12,"Integralrechnung: Fläche unter dem Graphen",{
    intro:"Das <b>Integral</b> ist das Gegenstück zur Ableitung. Es berechnet die <b>Fläche</b> zwischen dem Graphen und der x-Achse. Dafür brauchst du eine <b>Stammfunktion</b> F(x). Ihre Ableitung ist die Funktion f(x).",
    teile:[
      {h:"Stammfunktion",p:"<b>f(x) = xⁿ → F(x) = xⁿ⁺¹ : (n+1)</b>. Ein Faktor bleibt stehen. Zur Stammfunktion gehört eigentlich ein „+ C“, bei bestimmten Integralen fällt es weg.",bsp:"f(x) = x² → F(x) = x³ : 3. f(x) = 2x → F(x) = x²."},
      {h:"Bestimmtes Integral",p:"<b>∫ von a bis b f(x) dx = F(b) − F(a)</b>",svg:sv2(ax+`<polygon points="${X(0)},${Y(0)} ${X(2)},${Y(0)} ${X(2)},${Y(2)}" fill="#bbf7d0" stroke="#241b4b" stroke-width="2"/>`+ln(X(0),Y(0),X(2),Y(2),"#4f46e5",3)+tx(X(1.4),Y(0.5),"A = 2",14)+tx(X(2),145,"2",11)),bsp:"∫ von 0 bis 2 von x dx: F(x) = x²:2. F(2) − F(0) = 2 − 0 = <b>2</b>."}
    ],
    merke:"Aufleiten, Grenzen einsetzen, subtrahieren: F(oben) − F(unten). Liegt die Fläche unter der x-Achse, ist das Integral negativ.",
    fo:[
      {svg:sv2(ax+`<polygon points="${X(0)},${Y(0)} ${X(2)},${Y(0)} ${X(2)},${Y(2)}" fill="#bbf7d0" stroke="#241b4b" stroke-width="2"/>`+ln(X(0),Y(0),X(2),Y(2),"#4f46e5",3)),txt:"Gesucht ist die Fläche unter der Geraden f(x) = x zwischen x = 0 und x = 2."},
      {svg:sv2(tx(150,40,"f(x) = x",18)+P(1,tx(150,80,"F(x) = x² : 2",18))+P(2,tx(150,120,"F(2) − F(0) = 2 − 0 = 2",18,"#16a34a"))),txt:"Du suchst die Stammfunktion, setzt die obere Grenze 2 und die untere Grenze 0 ein und rechnest die Differenz. Ergebnis: Die Fläche ist 2."}
    ],
    ue:[
      ["Berechne das Integral von 0 bis 2 über x dx.","2","F(x) = x²:2."],
      ["Berechne das Integral von 0 bis 3 über x² dx.","9","F(x) = x³:3."],
      ["Berechne das Integral von 0 bis 1 über 4x³ dx.","1","F(x) = x⁴."],
      ["Berechne das Integral von 0 bis 2 über 3 dx.","6","F(x) = 3x."],
      ["Stammfunktion von f(x) = 2x ohne C, Wert bei x = 3?","9","F(x) = x²."]
    ]
  });
})();

/* ---- Mathe: Binomialverteilung ---- */
lbx("mathe",13,"Wahrscheinlichkeit und Binomialverteilung",{
  intro:"Ein <b>Bernoulli-Versuch</b> hat nur zwei Ausgänge: Treffer (Wahrscheinlichkeit p) oder Niete (1 − p). Wiederholst du ihn <b>n-mal</b> unabhängig, zählt die <b>Binomialverteilung</b> die Treffer.",
  teile:[
    {h:"Formel",p:"<b>P(X = k) = (n über k) · pᵏ · (1 − p)ⁿ⁻ᵏ</b><br>(n über k) ist der Binomialkoeffizient: n! : (k! · (n − k)!). Für den Erwartungswert gilt <b>E(X) = n · p</b>.",bsp:"Münze, 3 Würfe, genau 2-mal Kopf: (3 über 2) · 0,5² · 0,5¹ = 3 · 0,125 = <b>0,375</b>."},
    {h:"Wichtige Regeln",p:"Alle Pfade im Baumdiagramm: Wahrscheinlichkeiten entlang des Pfades multiplizieren (<b>Produktregel</b>), Pfade mit gleichem Ergebnis addieren (<b>Summenregel</b>)."}
  ],
  merke:"Typische Frage: „Mindestens ein Treffer“ = 1 − P(kein Treffer).",
  fo:[
    {svg:sv2(bx(10,50,70,36,"n = 3",COL.a,14)+bx(115,50,70,36,"p = 0,5",COL.b,14)+bx(220,50,70,36,"k = 2",COL.c,14)+P(1,tx(150,125,"(3 über 2) · 0,5² · 0,5¹",16))),txt:"Du brauchst drei Zahlen: die Anzahl der Versuche n, die Trefferwahrscheinlichkeit p und die gesuchte Trefferzahl k."},
    {svg:sv2(tx(150,45,"(3 über 2) = 3",17)+P(1,tx(150,85,"0,5² · 0,5 = 0,125",17))+P(2,tx(150,125,"3 · 0,125 = 0,375",19,"#16a34a"))),txt:"Es gibt drei Möglichkeiten, wo die zwei Treffer liegen. Jede hat die Wahrscheinlichkeit 0,125. Zusammen sind das 0,375."}
  ],
  ue:[
    ["Wie groß ist (5 über 2)?","10","5! : (2! · 3!)."],
    ["Münze, 2 Würfe. Wie groß ist die Wahrscheinlichkeit für 2-mal Kopf?","0.25","0,5 · 0,5."],
    ["Münze, 3 Würfe. Wie groß ist P(genau 2-mal Kopf)?","0.375","3 · 0,125."],
    ["n = 10, p = 0,3. Wie groß ist der Erwartungswert?","3","n · p."],
    ["Wie nennt man einen Versuch mit nur zwei Ausgängen? (… -Versuch)","bernoulli",["bernoulli","bernoulli-versuch"]]
  ]
});

/* ---- Physik: Schwingungen und Wellen ---- */
lbx("physik",11,"Schwingungen und Wellen",{
  intro:"Eine <b>Schwingung</b> ist eine regelmäßige Hin-und-Her-Bewegung, zum Beispiel ein Pendel. Breitet sie sich im Raum aus, entsteht eine <b>Welle</b>.",
  teile:[
    {h:"Wichtige Größen",p:"<b>Periodendauer T</b> (in s): Zeit für eine volle Schwingung.<br><b>Frequenz f</b> (in Hz): Schwingungen pro Sekunde. <b>f = 1 : T</b>.<br><b>Amplitude:</b> größte Auslenkung.<br><b>Wellenlänge λ</b> (in m): Abstand zweier gleicher Wellenpunkte.",bsp:"Netzspannung: f = 50 Hz. T = 1 : 50 = <b>0,02 s</b>."},
    {h:"Wellengleichung",p:"<b>c = λ · f</b> (Ausbreitungsgeschwindigkeit = Wellenlänge · Frequenz). Schall in Luft: etwa 340 m/s. Licht im Vakuum: etwa 300 000 km/s.",bsp:"f = 170 Hz, c = 340 m/s: λ = 340 : 170 = <b>2 m</b>."}
  ],
  merke:"Je höher die Frequenz, desto höher der Ton. Je größer die Amplitude, desto lauter der Ton.",
  fo:[
    {svg:sv2(ln(10,80,290,80,"#9ca3af",1)+`<path d="M10 80 Q55 10 100 80 T190 80 T280 80" fill="none" stroke="#4f46e5" stroke-width="3"/>`+P(1,ln(100,80,190,80,"#dc2626",3)+tx(145,102,"λ",14,"#dc2626"))+P(2,ln(55,80,55,45,"#16a34a",3)+tx(70,28,"Amplitude",11,"#16a34a","start"))),txt:"Die Welle hat eine Wellenlänge λ (Abstand zweier gleicher Punkte) und eine Amplitude (größte Auslenkung)."},
    {svg:sv2(tx(150,45,"f = 50 Hz",19)+P(1,tx(150,85,"T = 1 : f",19))+P(2,tx(150,125,"T = 1 : 50 = 0,02 s",19,"#16a34a"))),txt:"Frequenz und Periodendauer sind Kehrwerte. 50 Schwingungen pro Sekunde bedeuten 0,02 Sekunden für eine Schwingung."}
  ],
  ue:[
    ["f = 50 Hz. Wie groß ist T in s?","0.02","T = 1 : f."],
    ["T = 0,5 s. Wie groß ist f in Hz?","2","f = 1 : T."],
    ["f = 2 Hz, λ = 3 m. Wie groß ist c in m/s?","6","c = λ · f."],
    ["Schall (340 m/s) hat die Frequenz 170 Hz. Wie groß ist λ in m?","2","λ = c : f."],
    ["In welcher Einheit misst man die Frequenz?","hertz",["hertz","hz"]]
  ]
});

/* ---- Chemie: Alkane ---- */
lbx("chemie",11,"Organische Chemie: Alkane",{
  intro:"Die <b>organische Chemie</b> beschäftigt sich mit Kohlenstoffverbindungen. Die einfachste Stoffgruppe sind die <b>Alkane</b>. Sie bestehen nur aus Kohlenstoff (C) und Wasserstoff (H) mit Einfachbindungen.",
  teile:[
    {h:"Allgemeine Formel",p:"<b>CₙH₂ₙ₊₂</b>. Jedes Kohlenstoffatom hat vier Bindungen.",bsp:"n = 3: C₃H₈ (Propan). Bei n = 5: 2 · 5 + 2 = <b>12 H-Atome</b> (Pentan, C₅H₁₂)."},
    {h:"Die ersten Alkane",p:"1 C: <b>Methan</b> CH₄<br>2 C: <b>Ethan</b> C₂H₆<br>3 C: <b>Propan</b> C₃H₈<br>4 C: <b>Butan</b> C₄H₁₀<br>5 C: <b>Pentan</b> C₅H₁₂<br>6 C: <b>Hexan</b> C₆H₁₄<br>Alle enden auf <b>-an</b>."},
    {h:"Eigenschaften",p:"Alkane sind unpolar, lösen sich nicht in Wasser, brennen gut und sind Bestandteile von Erdgas und Benzin. Mit zunehmender Kettenlänge steigt die Siedetemperatur."}
  ],
  merke:"Isomere haben dieselbe Summenformel, aber eine andere Struktur, zum Beispiel n-Butan und Isobutan (C₄H₁₀).",
  fo:[
    {svg:sv2(tx(150,35,"Methan   CH₄",16)+P(1,tx(150,65,"Ethan   C₂H₆",16))+P(2,tx(150,95,"Propan   C₃H₈",16))+P(3,tx(150,125,"Butan   C₄H₁₀",16))),txt:"Die ersten vier Alkane heißen Methan, Ethan, Propan und Butan. Bei jedem kommt ein Kohlenstoffatom und zwei Wasserstoffatome dazu."},
    {svg:sv2(tx(150,45,"CₙH₂ₙ₊₂",24)+P(1,tx(150,90,"n = 5: C₅H₁₂ = Pentan",17))+P(2,tx(150,125,"H = 2 · 5 + 2 = 12",17,"#16a34a"))),txt:"Die allgemeine Formel sagt dir, wie viele Wasserstoffatome ein Alkan hat: zweimal die Zahl der C-Atome plus zwei."}
  ],
  ue:[
    ["Wie viele H-Atome hat Pentan (5 C-Atome)?","12","2 · 5 + 2."],
    ["Wie lautet die Summenformel von Hexan? (zum Beispiel C2H6)","c6h14","n = 6."],
    ["Wie viele H-Atome hat ein Alkan mit 8 C-Atomen?","18","2 · 8 + 2."],
    ["Wie heißt das Alkan C₂H₆?","ethan",null],
    ["Auf welche Silbe enden alle Alkane? (zum Beispiel -on)","an",["an","-an"]]
  ]
});

/* ---- Biologie: DNA ---- */
lbx("biologie",11,"DNA und Proteinbiosynthese",{
  intro:"Die <b>DNA</b> im Zellkern trägt die Erbinformation. Sie hat die Form einer Doppelhelix (verdrillte Strickleiter). Die Sprossen der Leiter bestehen aus je zwei <b>Basen</b>.",
  teile:[
    {h:"Basenpaarung",p:"Vier Basen: <b>A</b> (Adenin), <b>T</b> (Thymin), <b>G</b> (Guanin), <b>C</b> (Cytosin).<br>Es paaren sich immer <b>A mit T</b> und <b>G mit C</b>. In der RNA steht statt T die Base <b>U</b> (Uracil).",bsp:"Strang: A–T–G–C. Gegenstrang: T–A–C–G."},
    {h:"Vom Gen zum Protein",p:"1. <b>Transkription</b> (im Zellkern): Ein Stück DNA wird in mRNA abgeschrieben.<br>2. Die mRNA wandert zum Ribosom.<br>3. <b>Translation</b>: Das Ribosom liest die mRNA in Dreierschritten (<b>Triplets, Codons</b>). Jedes Triplet codiert eine Aminosäure. Die Aminosäurekette faltet sich zum Protein."},
    {h:"Replikation",p:"Vor jeder Zellteilung wird die DNA verdoppelt. Sie ist <b>semikonservativ</b>: Jeder neue Doppelstrang besteht aus einem alten und einem neuen Strang."}
  ],
  merke:"Mutationen sind Veränderungen der Basenfolge. Sie können keine, kleine oder große Folgen haben.",
  fo:[
    {svg:sv2(tx(60,30,"A",16)+tx(150,30,"—",16)+tx(240,30,"T",16)+P(1,tx(60,70,"G",16)+tx(150,70,"—",16)+tx(240,70,"C",16))+P(2,tx(60,110,"C",16)+tx(150,110,"—",16)+tx(240,110,"G",16))+tx(150,150,"A–T und G–C",13,"#dc2626")),txt:"Die beiden DNA-Stränge passen wie Schlüssel und Schloss zusammen: A mit T und G mit C."},
    {svg:sv2(bx(10,40,80,38,"DNA",COL.a,14)+P(1,ar(92,59,112,59)+bx(114,40,80,38,"mRNA",COL.b,14))+P(2,ar(196,59,216,59)+bx(218,40,72,38,"Protein",COL.c,13))+P(1,tx(100,100,"Transkription",11))+P(2,tx(205,100,"Translation",11))),txt:"Zuerst wird die DNA in mRNA abgeschrieben (Transkription). Dann liest das Ribosom die mRNA und baut ein Protein (Translation)."}
  ],
  ue:[
    ["Welche Base paart sich in der DNA mit A?","t",["t","thymin"]],
    ["Welche Base paart sich mit G?","c",["c","cytosin"]],
    ["Welche Base steht in der RNA statt T? (ein Buchstabe)","u",["u","uracil"]],
    ["Wie viele Basen bilden ein Triplet? (Zahl)","3",null],
    ["Wie viele Basen codieren 4 Aminosäuren? (Zahl)","12","4 mal 3."]
  ]
});

/* ---- Geschichte: Weimarer Republik und NS-Zeit ---- */
lbx("geschichte",10,"Von der Weimarer Republik zum Zweiten Weltkrieg",{
  intro:"Nach dem Ersten Weltkrieg endete 1918 die Monarchie. Deutschland wurde die erste parlamentarische Demokratie: die <b>Weimarer Republik</b> (1919 bis 1933).",
  teile:[
    {h:"Die Republik und ihre Krisen",p:"<b>1919:</b> Weimarer Verfassung, Friedensvertrag von Versailles (Gebietsverluste, Reparationen, „Kriegsschuld“).<br><b>1923:</b> Hyperinflation und Ruhrbesetzung.<br><b>1924 bis 1929:</b> Erholung (die „Goldenen Zwanziger“).<br><b>1929:</b> Weltwirtschaftskrise, Massenarbeitslosigkeit. Viele Menschen wählten radikale Parteien."},
    {h:"Das Ende der Demokratie",p:"<b>30. Januar 1933:</b> Reichspräsident Hindenburg ernennt Adolf Hitler zum Reichskanzler. Innerhalb weniger Monate wurden Grundrechte abgeschafft, Parteien verboten und die Demokratie zerstört (Reichstagsbrandverordnung, Ermächtigungsgesetz)."},
    {h:"Diktatur, Krieg und Völkermord",p:"Die Nationalsozialisten verfolgten Juden, Sinti und Roma, politische Gegner und andere Gruppen. <b>1938:</b> Novemberpogrome. <b>1. September 1939:</b> Überfall auf Polen, Beginn des Zweiten Weltkriegs. Die Nationalsozialisten ermordeten rund sechs Millionen Juden (Holocaust). <b>8. Mai 1945:</b> bedingungslose Kapitulation."}
  ],
  merke:"Aus der Geschichte lernen: Demokratie braucht Menschen, die sie schützen. Das Grundgesetz von 1949 zog Lehren aus Weimar.",
  fo:[
    {svg:sv2(ln(15,80,285,80,"#241b4b",3)+P(0,tx(30,62,"1919",11)+tx(30,102,"Verträge",9)+`<circle cx="30" cy="80" r="5" fill="#dc2626"/>`)+P(1,tx(90,62,"1923",11)+tx(90,102,"Inflation",9)+`<circle cx="90" cy="80" r="5" fill="#dc2626"/>`)+P(2,tx(150,62,"1929",11)+tx(150,102,"Krise",9)+`<circle cx="150" cy="80" r="5" fill="#dc2626"/>`)+P(3,tx(210,62,"1933",11)+tx(210,102,"Hitler",9)+`<circle cx="210" cy="80" r="5" fill="#dc2626"/>`)+P(4,tx(268,62,"1939",11)+tx(268,102,"Krieg",9)+`<circle cx="268" cy="80" r="5" fill="#dc2626"/>`)),txt:"Wichtige Stationen: 1919 Verfassung, 1923 Inflation, 1929 Wirtschaftskrise, 1933 Machtübernahme, 1939 Beginn des Zweiten Weltkriegs."}
  ],
  ue:[
    ["Wie hieß die erste Demokratie in Deutschland (1919 bis 1933)? (… Republik)","weimarer",["weimarer","weimarer republik","weimar"]],
    ["In welchem Jahr wurde Hitler Reichskanzler?","1933",null],
    ["An welchem Datum begann der Zweite Weltkrieg? (Jahr)","1939",null],
    ["In welchem Jahr endete der Zweite Weltkrieg in Europa?","1945",null],
    ["Welcher Vertrag beendete 1919 offiziell den Ersten Weltkrieg mit Deutschland? (Ort)","versailles",["versailles","vertrag von versailles"]]
  ]
});
