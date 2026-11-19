/* ====== Lehrbuch Mathematik, Klasse 5-10 ====== */
/* ---- Brüche erweitern und kürzen ---- */
lbx("mathe",5,"Brüche erweitern und kürzen",{
  intro:"Ein Bruch kann viele Gesichter haben. <b>1/2</b>, <b>2/4</b> und <b>3/6</b> sind gleich viel wert. Du schneidest nur feiner. Das nennt man <b>Erweitern</b>. Das Gegenteil heißt <b>Kürzen</b>.",
  teile:[
    {h:"Erweitern",p:"Du multiplizierst Zähler <b>und</b> Nenner mit derselben Zahl. Der Wert bleibt gleich.",svg:sv2(pie(55,70,40,1,2)+pie(245,70,40,2,4)+ar(105,70,195,70)+tx(150,60,"· 2",16)+tx(55,132,"1/2")+tx(245,132,"2/4")),bsp:"2/3 mit 4 erweitern: (2·4)/(3·4) = <b>8/12</b>."},
    {h:"Kürzen",p:"Du teilst Zähler <b>und</b> Nenner durch dieselbe Zahl, am besten durch den größten gemeinsamen Teiler (ggT). Dann ist der Bruch so einfach wie möglich.",bsp:"12/18: Beide Zahlen lassen sich durch 6 teilen. 12:6 = 2 und 18:6 = 3. Ergebnis: <b>2/3</b>."}
  ],
  merke:"Erweitern und Kürzen ändern nur die Schreibweise, nie den Wert. Zähler und Nenner immer mit <b>derselben</b> Zahl malnehmen oder teilen.",
  fo:[
    {svg:sv2(pie(150,70,50,1,2)+tx(150,142,"1/2",18)),txt:"Hier ist ein Kreis in 2 gleiche Teile geteilt. Ein Teil ist gefärbt: das ist 1/2."},
    {svg:sv2(pie(60,70,42,1,2)+P(1,tx(150,78,"=",26))+P(2,pie(240,70,42,2,4))+tx(60,140,"1/2")+P(2,tx(240,140,"2/4"))),txt:"Teilen wir jedes Stück noch einmal in der Mitte, hat der Kreis 4 Teile und 2 sind gefärbt. Das ist 2/4. Es ist gleich viel wie 1/2."},
    {svg:sv2(pie(55,70,40,1,2)+P(1,pie(150,70,40,2,4))+P(2,pie(245,70,40,3,6))+tx(55,132,"1/2")+P(1,tx(150,132,"2/4"))+P(2,tx(245,132,"3/6"))+tx(150,157,"alle drei sind gleich viel wert",12,"#6b6590")),txt:"Mit 3 erweitern: 1/2 wird zu 3/6. So kannst du den Bruch immer feiner schneiden. Du rechnest 1·3 und 2·3."},
    {svg:sv2(pie(60,70,42,6,8)+P(1,ar(110,70,190,70))+P(1,tx(150,58,": 2",16))+P(2,pie(240,70,42,3,4))+tx(60,140,"6/8")+P(2,tx(240,140,"3/4"))),txt:"Kürzen geht rückwärts: 6/8 durch 2 geteilt ergibt 3/4. Zähler und Nenner werden beide durch 2 geteilt. Das Bild bleibt gleich groß gefärbt."}
  ],
  ue:[
    ["Erweitere 2/3 mit 4. Schreibe das Ergebnis als Bruch, zum Beispiel 3/5.","8/12","Rechne 2·4 und 3·4."],
    ["Kürze 12/18 so weit wie möglich.","2/3","Teile beide Zahlen durch 6."],
    ["Welche Zahl fehlt? 3/5 = ?/20","12","Von 5 auf 20 ist mal 4. Also auch 3 mal 4."],
    ["Kürze 45/60 so weit wie möglich.","3/4","Der ggT von 45 und 60 ist 15."],
    ["Erweitere 5/6 so, dass der Nenner 30 ist.","25/30","6 mal 5 gibt 30. Dann auch 5 mal 5."]
  ]
});

/* ---- Flächen und Umfang ---- */
lbx("mathe",5,"Umfang und Fläche",{
  intro:"Der <b>Umfang</b> ist die Länge des Randes, wie ein Zaun um ein Grundstück. Die <b>Fläche</b> sagt, wie viel Platz drinnen ist, wie der Rasen im Garten.",
  teile:[
    {h:"Rechteck",p:"Umfang <b>u = 2 · (a + b)</b>, Fläche <b>A = a · b</b>.",svg:sv2(`<rect x="70" y="35" width="160" height="90" fill="#c7d2fe" stroke="#241b4b" stroke-width="3"/>`+tx(150,28,"a = 8 cm")+tx(236,85,"b = 5 cm",12,"#241b4b","start")+tx(150,85,"A = 40 cm²",15)),bsp:"a = 8 cm, b = 5 cm. A = 8 · 5 = <b>40 cm²</b>. u = 2 · 13 = <b>26 cm</b>."},
    {h:"Dreieck",p:"Fläche <b>A = (Grundseite · Höhe) : 2</b>. Das Dreieck ist ein halbes Rechteck.",bsp:"g = 10 cm, h = 6 cm. A = 10 · 6 : 2 = <b>30 cm²</b>."},
    {h:"Kreis",p:"Mit Radius <b>r</b> gilt: Umfang <b>u = 2 · π · r</b>, Fläche <b>A = π · r · r</b>. Für π nimmst du 3,14.",bsp:"r = 3 cm. A = 3,14 · 3 · 3 = <b>28,26 cm²</b>."}
  ],
  merke:"Der Umfang wird in cm oder m gemessen, die Fläche in cm² oder m².",
  fo:[
    {svg:sv2(`<rect x="60" y="30" width="180" height="100" fill="#fff" stroke="#241b4b" stroke-width="3"/>`+P(0,tx(150,22,"a = 8"))+P(0,tx(252,85,"b = 5",13,"#241b4b","start"))+P(1,ln(60,30,240,30,"#dc2626",5)+ln(240,30,240,130,"#dc2626",5)+ln(240,130,60,130,"#dc2626",5)+ln(60,130,60,30,"#dc2626",5))+P(1,tx(150,85,"Umfang: Rand",15,"#dc2626"))),txt:"Der Umfang ist der ganze Rand. Du gehst einmal rundherum: 8 + 5 + 8 + 5 = 26 cm."},
    {svg:sv2(`<rect x="60" y="30" width="180" height="100" fill="#c7d2fe" stroke="#241b4b" stroke-width="3"/>`+[1,2,3,4,5,6,7].map(i=>ln(60+i*22.5,30,60+i*22.5,130,"#7c3aed",1)).join("")+[1,2,3,4].map(i=>ln(60,30+i*20,240,30+i*20,"#7c3aed",1)).join("")+P(1,tx(150,157,"8 Spalten · 5 Reihen = 40 Kästchen",13))),txt:"Die Fläche zählt die Kästchen im Inneren. 8 Kästchen in jeder Reihe, 5 Reihen. 8 mal 5 sind 40 Quadratzentimeter."},
    {svg:sv2(`<polygon points="60,130 240,130 150,30" fill="#bbf7d0" stroke="#241b4b" stroke-width="3"/>`+ln(150,30,150,130,"#dc2626",2.5)+tx(150,150,"g = 10")+tx(160,85,"h = 6",13,"#dc2626","start")),txt:"Beim Dreieck brauchst du die Grundseite g und die Höhe h. Sie steht senkrecht auf der Grundseite. A = 10 · 6 : 2 = 30 cm²."},
    {svg:sv2(`<circle cx="150" cy="75" r="55" fill="#fde68a" stroke="#241b4b" stroke-width="3"/>`+ln(150,75,205,75,"#dc2626",3)+tx(178,68,"r",14,"#dc2626")+tx(150,157,"A = π · r · r",13)),txt:"Beim Kreis misst du den Radius r, vom Mittelpunkt zum Rand. Der Durchmesser ist doppelt so lang wie der Radius."}
  ],
  ue:[
    ["Ein Rechteck ist 8 cm lang und 5 cm breit. Wie groß ist die Fläche in cm²?","40","Länge mal Breite."],
    ["Dasselbe Rechteck: Wie groß ist der Umfang in cm?","26","2 mal (8 + 5)."],
    ["Ein Dreieck hat die Grundseite 10 cm und die Höhe 6 cm. Wie groß ist die Fläche in cm²?","30","Grundseite mal Höhe, dann durch 2."],
    ["Ein Kreis hat den Radius 3 cm. Berechne die Fläche in cm² mit π = 3,14.","28.26","3,14 mal 3 mal 3."],
    ["Ein Kreis hat den Durchmesser 10 cm. Wie groß ist der Umfang in cm (π = 3,14)?","31.4","Umfang = π mal Durchmesser."]
  ]
});

/* ---- Prozentrechnung ---- */
lbx("mathe",6,"Prozentrechnung",{
  intro:"<b>Prozent</b> heißt „von hundert“. 25 % bedeutet 25 von 100, also 25/100 = 1/4. Bei jeder Prozentaufgabe gibt es drei Größen: den <b>Grundwert G</b> (das Ganze, 100 %), den <b>Prozentwert P</b> (der Teil) und den <b>Prozentsatz p</b> (die Zahl mit dem %-Zeichen).",
  teile:[
    {h:"Die drei Formeln",p:"<b>P = G · p : 100</b><br><b>p = P : G · 100</b><br><b>G = P : p · 100</b>",bsp:"15 % von 80 €: P = 80 · 15 : 100 = <b>12 €</b>."},
    {h:"Rabatt und Mehrwertsteuer",p:"Bei einem Rabatt rechnest du den Prozentwert aus und ziehst ihn ab. Bei der Mehrwertsteuer (19 %) rechnest du ihn aus und zählst ihn dazu.",bsp:"Jacke 60 €, 20 % Rabatt. 20 % von 60 € = 12 €. Neuer Preis: 60 − 12 = <b>48 €</b>.<br>Schneller: Du bezahlst 80 % und rechnest 60 · 0,8 = 48 €."}
  ],
  merke:"Das Ganze ist immer 100 %. Finde zuerst heraus, was G, P und p in der Aufgabe sind.",
  fo:[
    {svg:sv2(`<rect x="30" y="50" width="240" height="40" fill="#fff" stroke="#241b4b" stroke-width="3"/>`+P(1,`<rect x="30" y="50" width="60" height="40" fill="#818cf8" stroke="#241b4b" stroke-width="3"/>`)+tx(30,40,"0 %",12)+tx(270,40,"100 %",12)+P(1,tx(60,115,"25 %",14))+tx(150,145,"Der ganze Balken = Grundwert G",13)),txt:"Der ganze Balken ist 100 %, das Ganze. Ein Viertel davon sind 25 %."},
    {svg:sv2(`<rect x="30" y="40" width="240" height="36" fill="#fff" stroke="#241b4b" stroke-width="3"/><rect x="30" y="40" width="36" height="36" fill="#818cf8" stroke="#241b4b" stroke-width="3"/>`+tx(48,95,"15 %",13)+tx(150,95,"100 % = 80 €",13)+P(1,tx(150,130,"1 % sind 80 : 100 = 0,80 €",14))+P(2,tx(150,155,"15 % sind 15 · 0,80 = 12 €",14,"#16a34a"))),txt:"Beispiel: 15 % von 80 €. Erst rechnest du 1 %: 80 € geteilt durch 100 sind 0,80 €. Dann mal 15: Das sind 12 €."},
    {svg:sv2(P(0,bx(20,40,110,40,"Preis 60 €",COL.a))+P(1,bx(170,40,110,40,"− 20 % = 12 €",COL.d))+P(2,ar(150,100,150,125))+P(2,bx(80,128,140,34,"Neu: 48 €",COL.c,15))),txt:"Rabatt: 20 % von 60 € sind 12 €. Das ziehst du vom Preis ab. Der neue Preis ist 48 €."}
  ],
  ue:[
    ["Berechne 15 % von 80 € (Ergebnis in €).","12","80 mal 15 geteilt durch 100."],
    ["Wie viel Prozent sind 25 von 200?","12.5","25 geteilt durch 200 mal 100."],
    ["30 % einer Zahl sind 45. Wie groß ist die ganze Zahl?","150","G = 45 : 30 · 100."],
    ["Ein Pullover kostet 60 €. Es gibt 20 % Rabatt. Was kostet er danach (in €)?","48","Du zahlst nur noch 80 %."],
    ["Ein Fahrrad kostet netto 50 €. Dazu kommen 19 % Mehrwertsteuer. Wie hoch ist der Bruttopreis in €?","59.5","50 mal 1,19."]
  ]
});

/* ---- Dreisatz ---- */
lbx("mathe",7,"Dreisatz",{
  intro:"Beim <b>Dreisatz</b> kennst du einen Wert und suchst einen anderen. Du rechnest in drei Schritten: Mehrheit → Einheit → Mehrheit. Es gibt zwei Arten: <b>proportional</b> (mehr gibt mehr) und <b>antiproportional</b> (mehr gibt weniger).",
  teile:[
    {h:"Proportional: je mehr, desto mehr",p:"Erst auf <b>1</b> zurückrechnen (teilen), dann auf die gesuchte Menge hochrechnen (malnehmen).",bsp:"3 kg Äpfel kosten 6 €. Was kosten 5 kg?<br>3 kg = 6 € → 1 kg = 6 : 3 = 2 € → 5 kg = 2 · 5 = <b>10 €</b>."},
    {h:"Antiproportional: je mehr, desto weniger",p:"Hier rechnest du zuerst mal, dann geteilt. Die Gesamtarbeit bleibt gleich.",bsp:"6 Arbeiter brauchen 10 Tage. Wie lange brauchen 4 Arbeiter?<br>6 Arbeiter: 10 Tage → 1 Arbeiter: 10 · 6 = 60 Tage → 4 Arbeiter: 60 : 4 = <b>15 Tage</b>."}
  ],
  merke:"Frage dich immer: Wird die gesuchte Größe größer, wenn die andere größer wird? Ja = proportional (: dann ·). Nein = antiproportional (· dann :).",
  fo:[
    {svg:sv2(bx(20,30,100,36,"3 kg",COL.a)+bx(180,30,100,36,"6 €",COL.b)+ln(120,48,180,48)+tx(150,100,"gegeben",12,"#6b6590")),txt:"Gegeben: 3 kg Äpfel kosten 6 €. Gesucht: der Preis für 5 kg."},
    {svg:sv2(bx(20,20,100,32,"3 kg",COL.a)+bx(180,20,100,32,"6 €",COL.b)+P(1,bx(20,75,100,32,"1 kg",COL.a)+bx(180,75,100,32,"2 €",COL.b)+ar(70,52,70,75)+ar(230,52,230,75)+tx(40,68,": 3",12,"#dc2626","end")+tx(260,68,": 3",12,"#dc2626","start"))),txt:"Schritt 1: Auf eine Einheit zurückrechnen. Beide Seiten durch 3: 1 kg kostet 2 €."},
    {svg:sv2(bx(20,5,100,28,"3 kg",COL.a,12)+bx(180,5,100,28,"6 €",COL.b,12)+bx(20,50,100,28,"1 kg",COL.a,12)+bx(180,50,100,28,"2 €",COL.b,12)+P(1,bx(20,95,100,28,"5 kg",COL.c,12)+bx(180,95,100,28,"10 €",COL.c,12)+ar(70,78,70,95)+ar(230,78,230,95)+tx(40,90,"· 5",12,"#dc2626","end")+tx(260,90,"· 5",12,"#dc2626","start"))),txt:"Schritt 2: Auf die gesuchte Menge hochrechnen. Beide Seiten mal 5. 5 kg kosten 10 €."},
    {svg:sv2(tx(150,35,"6 Arbeiter → 10 Tage",15)+P(1,tx(150,75,"1 Arbeiter → 10 · 6 = 60 Tage",15))+P(2,tx(150,115,"4 Arbeiter → 60 : 4 = 15 Tage",15,"#16a34a"))),txt:"Antiproportional: Weniger Arbeiter brauchen länger. Du rechnest erst mal 6 und dann geteilt durch 4."}
  ],
  ue:[
    ["4 Hefte kosten 6 €. Was kosten 10 Hefte (in €)?","15","Erst 1 Heft: 6 : 4 = 1,50 €."],
    ["5 Stifte kosten 2,50 €. Was kosten 8 Stifte (in €)?","4","1 Stift = 0,50 €."],
    ["Ein Auto fährt in 1,5 Stunden 120 km. Wie viele km fährt es in 3 Stunden?","240","In 3 Stunden doppelt so weit."],
    ["6 Arbeiter brauchen 10 Tage für eine Arbeit. Wie viele Tage brauchen 4 Arbeiter?","15","Antiproportional: erst mal 6, dann durch 4."],
    ["12 Eimer Farbe reichen für 3 Wände. Wie viele Eimer braucht man für 5 Wände?","20","1 Wand = 4 Eimer."]
  ]
});

/* ---- Lineare Funktionen ---- */
(function(){
  const O=[60,130],U=18;
  const X=x=>O[0]+x*U,Y=y=>O[1]-y*U;
  const axes=ln(20,O[1],290,O[1])+ln(O[0],160,O[0],10)+tx(285,O[1]-6,"x",12)+tx(O[0]+10,16,"y",12)+[1,2,3,4,5,6].map(i=>ln(X(i),O[1]-3,X(i),O[1]+3)+tx(X(i),O[1]+15,i,10)).join("")+[1,2,3,4,5,6].map(i=>ln(O[0]-3,Y(i),O[0]+3,Y(i))+tx(O[0]-8,Y(i)+4,i,10,"#241b4b","end")).join("");
  const dot=(x,y)=>`<circle cx="${X(x)}" cy="${Y(y)}" r="5" fill="#dc2626"/>`;
  lbx("mathe",8,"Lineare Funktionen",{
    intro:"Eine <b>lineare Funktion</b> hat die Form <b>y = m · x + b</b>. Ihr Graph ist immer eine gerade Linie. <b>m</b> ist die <b>Steigung</b>, <b>b</b> ist der <b>y-Achsenabschnitt</b>: Hier schneidet die Gerade die y-Achse.",
    teile:[
      {h:"Steigung und Achsenabschnitt",p:"Die Steigung m sagt: Gehe 1 nach rechts und m nach oben (bei negativem m nach unten). Der Punkt (0 | b) ist dein Startpunkt.",svg:sv2(axes+ln(X(-0.5),Y(0),X(2.5),Y(6),"#4f46e5",3)+dot(0,1)+dot(1,3)+dot(2,5)+tx(X(2.7),Y(5.8),"y = 2x + 1",12,"#4f46e5","start")),bsp:"y = 2x + 1: Start bei (0 | 1). m = 2: 1 nach rechts, 2 nach oben → (1 | 3) → (2 | 5)."},
      {h:"Nullstelle",p:"Die Nullstelle ist der x-Wert, bei dem y = 0 ist. Du setzt y = 0 und löst nach x auf.",bsp:"y = 2x − 6. 0 = 2x − 6 → 6 = 2x → x = <b>3</b>."},
      {h:"Steigung aus zwei Punkten",p:"<b>m = (y₂ − y₁) : (x₂ − x₁)</b>",bsp:"Punkte (0 | 1) und (2 | 5): m = (5 − 1) : (2 − 0) = 4 : 2 = <b>2</b>."}
    ],
    merke:"y = m·x + b. m: Steigung. b: Schnittpunkt mit der y-Achse. Ist m positiv, steigt die Gerade. Ist m negativ, fällt sie.",
    fo:[
      {svg:sv2(axes),txt:"Das ist ein Koordinatensystem mit einer x-Achse und einer y-Achse. Hier zeichnen wir y = 2x + 1."},
      {svg:sv2(axes+P(0,dot(0,1))+P(0,tx(X(0)+10,Y(1)+16,"b = 1",12,"#dc2626","start"))),txt:"Zuerst b: Das ist 1. Wir setzen einen Punkt auf der y-Achse bei 1."},
      {svg:sv2(axes+dot(0,1)+P(0,ln(X(0),Y(1),X(1),Y(1),"#16a34a",3)+tx(X(0.5),Y(1)+14,"1",12,"#16a34a"))+P(1,ln(X(1),Y(1),X(1),Y(3),"#16a34a",3)+tx(X(1)+8,Y(2)+4,"2",12,"#16a34a","start"))+P(2,dot(1,3))),txt:"Jetzt m = 2: Vom Punkt 1 nach rechts und 2 nach oben. So kommst du zum nächsten Punkt (1 | 3)."},
      {svg:sv2(axes+dot(0,1)+dot(1,3)+P(0,dot(2,5))+P(1,ln(X(-0.5),Y(0),X(2.5),Y(6),"#4f46e5",3))),txt:"Verbinde die Punkte mit einem Lineal und verlängere die Linie. Fertig ist der Graph von y = 2x + 1."}
    ],
    ue:[
      ["Wie groß ist die Steigung m bei y = 3x − 2?","3","m steht vor dem x."],
      ["Wie groß ist b bei y = 3x − 2?","-2","b ist die Zahl ohne x, mit Vorzeichen."],
      ["Berechne y für x = 4 bei y = 2x + 1.","9","2 mal 4 plus 1."],
      ["Eine Gerade geht durch (0 | 1) und (2 | 5). Wie groß ist die Steigung?","2","(5 − 1) : (2 − 0)."],
      ["Wo liegt die Nullstelle von y = 2x − 6? (x-Wert)","3","Setze y = 0: 2x = 6."]
    ]
  });
})();

/* ---- Quadratische Gleichungen ---- */
(function(){
  const px=x=>30+40*x,py=y=>110-14*y;
  let pts=[];for(let x=0.5;x<=5.51;x+=0.25){pts.push(px(x).toFixed(1)+","+py((x-2)*(x-4)).toFixed(1));}
  const axes=ln(20,110,290,110)+ln(30,150,30,15)+[1,2,3,4,5].map(i=>ln(px(i),107,px(i),113)+tx(px(i),125,i,10)).join("");
  const par=`<polyline points="${pts.join(" ")}" fill="none" stroke="#4f46e5" stroke-width="3"/>`;
  const nz=`<circle cx="${px(2)}" cy="110" r="5" fill="#dc2626"/><circle cx="${px(4)}" cy="110" r="5" fill="#dc2626"/>`;
  lbx("mathe",9,"Quadratische Gleichungen und die pq-Formel",{
    intro:"Eine <b>quadratische Gleichung</b> enthält x². Der Graph ist eine <b>Parabel</b>. Die Lösungen sind die Stellen, wo die Parabel die x-Achse schneidet. Es kann <b>zwei</b>, <b>eine</b> oder <b>keine</b> Lösung geben.",
    teile:[
      {h:"Normalform und pq-Formel",p:"Bringe die Gleichung auf die Form <b>x² + p·x + q = 0</b>. Dann gilt:<br><b>x = −p/2 ± √((p/2)² − q)</b><br>Der Term unter der Wurzel heißt <b>Diskriminante D</b>. D &gt; 0: zwei Lösungen. D = 0: eine Lösung. D &lt; 0: keine Lösung.",svg:sv2(axes+par+nz+tx(px(2),98,"x₁ = 2",11,"#dc2626")+tx(px(4),98,"x₂ = 4",11,"#dc2626")),bsp:"x² − 6x + 8 = 0. Hier ist p = −6 und q = 8.<br>x = 3 ± √(9 − 8) = 3 ± 1.<br>Also <b>x₁ = 2</b> und <b>x₂ = 4</b>."},
      {h:"Probe",p:"Setze die Lösungen in die Gleichung ein.",bsp:"x = 2: 4 − 12 + 8 = 0 ✓. x = 4: 16 − 24 + 8 = 0 ✓."}
    ],
    merke:"Achte auf die Vorzeichen von p und q. Die pq-Formel funktioniert nur, wenn vor x² keine Zahl steht (sonst erst durch diese Zahl teilen).",
    fo:[
      {svg:sv2(tx(150,60,"x² − 6x + 8 = 0",22)+P(1,tx(150,100,"p = −6 und q = 8",18,"#dc2626"))),txt:"Zuerst liest du p und q ab. Vor x steht −6, das ist p. Die Zahl hinten ist 8, das ist q."},
      {svg:sv2(tx(150,50,"x = −p/2 ± √((p/2)² − q)",16)+P(1,tx(150,90,"x = 3 ± √(3² − 8)",16))+P(2,tx(150,130,"x = 3 ± √1 = 3 ± 1",16,"#16a34a"))),txt:"Setze in die Formel ein: −p/2 ist 3. (p/2)² ist 9. 9 − 8 = 1. Die Wurzel aus 1 ist 1."},
      {svg:sv2(axes+par+P(0,nz)+P(1,tx(px(2),98,"2",13,"#dc2626")+tx(px(4),98,"4",13,"#dc2626"))),txt:"Mit plus und minus bekommst du zwei Lösungen: 3 + 1 = 4 und 3 − 1 = 2. Das sind genau die Punkte, wo die Parabel die x-Achse schneidet."}
    ],
    ue:[
      ["Löse x² − 5x + 6 = 0. Wie lautet die kleinere Lösung?","2","p = −5, q = 6: 2,5 ± 0,5."],
      ["Löse x² − 7x + 10 = 0. Wie lautet die größere Lösung?","5","p = −7, q = 10: 3,5 ± 1,5."],
      ["Löse x² + 2x − 8 = 0. Wie lautet die kleinere Lösung?","-4","−1 ± √(1 + 8) = −1 ± 3."],
      ["Löse x² − 4 = 0. Wie lautet die positive Lösung?","2","p = 0, q = −4. Oder: x² = 4."],
      ["Wie viele Lösungen hat x² + 2x + 5 = 0?","0","D = 1 − 5 = −4 ist negativ."]
    ]
  });
})();

/* ---- Trigonometrie ---- */
(function(){
  const tri=`<polygon points="20,130 200,130 200,40" fill="#bbf7d0" stroke="#241b4b" stroke-width="3"/><path d="M200 112 L182 112 L182 130" fill="none" stroke="#241b4b" stroke-width="2"/><path d="M55 130 A35 35 0 0 0 51.3 114.3" fill="none" stroke="#dc2626" stroke-width="2.5"/>`+tx(70,124,"α",15,"#dc2626");
  lbx("mathe",10,"Trigonometrie: Sinus, Kosinus, Tangens",{
    intro:"Im <b>rechtwinkligen Dreieck</b> hängen die Seitenlängen und die Winkel zusammen. Das beschreiben <b>Sinus</b>, <b>Kosinus</b> und <b>Tangens</b>. Du brauchst die Namen der Seiten, gesehen vom Winkel α: die <b>Hypotenuse</b> (gegenüber dem rechten Winkel, die längste Seite), die <b>Gegenkathete</b> (gegenüber von α) und die <b>Ankathete</b> (liegt an α an).",
    teile:[
      {h:"Die drei Formeln",p:"<b>sin α = Gegenkathete : Hypotenuse</b><br><b>cos α = Ankathete : Hypotenuse</b><br><b>tan α = Gegenkathete : Ankathete</b><br>Eselsbrücke: <b>GAGA-HAHA-GAAG</b> (Gegen/Hypotenuse, Anliegend/Hypotenuse, Gegen/Anliegend).",svg:sv2(tri+tx(110,150,"Ankathete")+tx(206,90,"Gegenkathete",11,"#241b4b","start")+tx(80,68,"Hypotenuse",12)),bsp:"Hypotenuse = 10 cm, α = 30°. sin 30° = 0,5. Gegenkathete = 10 · 0,5 = <b>5 cm</b>."},
      {h:"Wichtige Werte",p:"sin 30° = 0,5 · cos 60° = 0,5 · tan 45° = 1 · sin 90° = 1. Für andere Winkel nimmst du den Taschenrechner (Modus DEG, also Grad).",bsp:"tan α = 3/4 = 0,75. Mit der Taste tan⁻¹ bekommst du α ≈ 36,9°."}
    ],
    merke:"Zuerst die Seiten beschriften. Dann die passende Formel wählen: Welche zwei Seiten kommen in der Aufgabe vor?",
    fo:[
      {svg:sv2(tri+P(0,tx(110,150,"Ankathete"))+P(1,tx(206,90,"Gegenkathete",11,"#241b4b","start"))+P(2,tx(80,68,"Hypotenuse",12))),txt:"Gesehen vom Winkel α heißen die Seiten: Ankathete (liegt an α), Gegenkathete (liegt gegenüber) und Hypotenuse (gegenüber vom rechten Winkel)."},
      {svg:sv2(tx(150,45,"sin α = Gegenkathete : Hypotenuse",15)+P(1,tx(150,85,"cos α = Ankathete : Hypotenuse",15))+P(2,tx(150,125,"tan α = Gegenkathete : Ankathete",15))),txt:"Drei Formeln, drei Verhältnisse. Merke dir: GAGA-HAHA-GAAG."},
      {svg:sv2(tx(150,40,"Gegeben: Hypotenuse = 10 cm, α = 30°",14)+P(1,tx(150,80,"sin 30° = Gegenkathete : 10",15))+P(2,tx(150,115,"0,5 = Gegenkathete : 10",15))+P(3,tx(150,150,"Gegenkathete = 5 cm",17,"#16a34a"))),txt:"Beispiel: Du kennst die Hypotenuse und den Winkel und suchst die Gegenkathete. Die Formel mit Gegenkathete und Hypotenuse ist der Sinus."}
    ],
    ue:[
      ["Hypotenuse = 10 cm, α = 30°. Wie lang ist die Gegenkathete in cm?","5","sin 30° = 0,5."],
      ["Wie groß ist tan 45°?","1","Gegenkathete und Ankathete sind gleich lang."],
      ["Gegenkathete 3 cm, Ankathete 4 cm. Wie groß ist tan α?","0.75","3 geteilt durch 4."],
      ["Wie groß ist cos 60°?","0.5","Das ist ein wichtiger Wert zum Merken."],
      ["Ankathete 4 cm, Gegenkathete 3 cm. Wie lang ist die Hypotenuse in cm? (Pythagoras)","5","3² + 4² = 25."]
    ]
  });
})();
