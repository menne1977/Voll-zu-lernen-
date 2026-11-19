/* ====== Lehrbuch Gesellschaft, Geographie, Musik ====== */
/* ---- Geschichte: Römer ---- */
lbx("geschichte",6,"Die Römer und das Römische Reich",{
  intro:"Rom war zuerst eine kleine Stadt am Fluss Tiber in Italien. Nach der Überlieferung wurde sie <b>753 v. Chr.</b> gegründet. Daraus wurde das mächtigste Reich der Antike.",
  teile:[
    {h:"Von der Republik zum Kaiserreich",p:"Zuerst regierten Könige, dann die <b>Republik</b>: Der Senat und gewählte Beamte (Konsuln) lenkten den Staat. Nach Bürgerkriegen wurde <b>Augustus</b> im Jahr 27 v. Chr. der erste Kaiser. Davor wurde Julius Caesar 44 v. Chr. ermordet."},
    {h:"Das Leben der Römer",p:"Straßen, Wasserleitungen (Aquädukte), Thermen und das Kolosseum zeigen die Baukunst. Die Römer brachten ihre Sprache (Latein), ihr Recht und ihre Städte bis nach Germanien. Der <b>Limes</b> war die befestigte Grenze zwischen dem Römischen Reich und Germanien."},
    {h:"Das Ende",p:"Das Westreich ging im Jahr <b>476 n. Chr.</b> unter. Das Ostreich (Byzanz) bestand bis 1453."}
  ],
  merke:"Viele römische Städte in Deutschland gibt es heute noch: Köln, Trier, Mainz, Augsburg, Regensburg.",
  fo:[
    {svg:sv2(ln(20,80,280,80,"#241b4b",3)+P(0,tx(38,65,"753 v. Chr.",10)+tx(38,100,"Gründung",10)+`<circle cx="40" cy="80" r="6" fill="#dc2626"/>`)+P(1,tx(112,65,"27 v. Chr.",10)+tx(112,100,"Augustus",10)+`<circle cx="120" cy="80" r="6" fill="#dc2626"/>`)+P(2,tx(190,65,"9 n. Chr.",10)+tx(190,100,"Varus",10)+`<circle cx="190" cy="80" r="6" fill="#dc2626"/>`)+P(3,tx(258,65,"476 n. Chr.",10)+tx(258,100,"Ende West",10)+`<circle cx="258" cy="80" r="6" fill="#dc2626"/>`)),txt:"Der Zeitstrahl zeigt wichtige Daten: 753 v. Chr. Gründung Roms, 27 v. Chr. Augustus wird Kaiser, 9 n. Chr. die Varusschlacht und 476 n. Chr. das Ende des Weströmischen Reiches."},
    {svg:sv2(`<path d="M30 130 Q150 20 270 130" fill="none" stroke="#a16207" stroke-width="10"/>`+ln(30,130,270,130,"#241b4b",2)+tx(150,150,"Aquädukt (Wasserleitung)",12)),txt:"Die Römer bauten Aquädukte. Das sind Brücken mit einer Wasserleitung. Sie brachten frisches Wasser in die Städte."}
  ],
  ue:[
    ["Wie heißt die Hauptstadt des Römischen Reiches?","rom",null],
    ["Wie hieß der erste römische Kaiser?","augustus",null],
    ["Wie heißt die befestigte Grenze zwischen dem Römischen Reich und Germanien?","limes",null],
    ["In welchem Jahr ging das Weströmische Reich unter? (nach Christus)","476",null],
    ["Wie nennt man römische Wasserleitungen? (Wort mit A)","aquädukt",["aquädukt","aquädukte","aquaedukt","aquädukte"]]
  ]
});

/* ---- Geschichte: Französische Revolution ---- */
lbx("geschichte",8,"Die Französische Revolution (1789)",{
  intro:"In Frankreich herrschte der König mit absoluter Macht. Die Bevölkerung war in drei <b>Stände</b> eingeteilt. Als der Staat Geld brauchte, wurden die einfachen Leute hoch besteuert und Brot wurde teuer. Das führte 1789 zur Revolution.",
  teile:[
    {h:"Die drei Stände",p:"<b>1. Stand:</b> Geistliche (Kirche).<br><b>2. Stand:</b> Adel.<br><b>3. Stand:</b> Bauern, Handwerker, Bürger. Das waren rund 97 % der Menschen. Sie zahlten fast alle Steuern und hatten kaum Rechte."},
    {h:"Der Verlauf",p:"<b>Mai 1789:</b> König Ludwig XVI. ruft die Generalstände ein.<br><b>Juni 1789:</b> Der 3. Stand erklärt sich zur Nationalversammlung.<br><b>14. Juli 1789:</b> Sturm auf die Bastille (Gefängnis in Paris), heute Nationalfeiertag.<br><b>August 1789:</b> Erklärung der Menschen- und Bürgerrechte: Freiheit, Gleichheit, Brüderlichkeit.<br><b>1793:</b> Der König wird hingerichtet.<br><b>1799/1804:</b> Napoleon übernimmt die Macht und krönt sich 1804 zum Kaiser."},
    {h:"Folgen",p:"Die Ideen der Revolution (Menschenrechte, Gleichheit vor dem Gesetz, Volkssouveränität) beeinflussten viele Länder, auch Deutschland."}
  ],
  merke:"„Liberté, Égalité, Fraternité“ (Freiheit, Gleichheit, Brüderlichkeit) wurde zum Motto der Revolution.",
  fo:[
    {svg:sv2(bx(60,10,180,34,"1. Stand: Geistliche",COL.b,12)+bx(60,50,180,34,"2. Stand: Adel",COL.e,12)+bx(10,92,280,40,"3. Stand: Bauern, Bürger (97 %)",COL.c,13)+tx(150,155,"Der 3. Stand zahlt fast alle Steuern",12,"#dc2626")),txt:"Frankreich bestand aus drei Ständen. Der dritte Stand war am größten, hatte aber kaum Rechte und zahlte fast alle Steuern."},
    {svg:sv2(ln(20,80,280,80,"#241b4b",3)+P(0,tx(40,65,"Mai 1789",11)+tx(40,100,"Generalstände",10)+`<circle cx="40" cy="80" r="6" fill="#dc2626"/>`)+P(1,tx(120,65,"14. Juli 1789",11)+tx(120,100,"Bastille",11)+`<circle cx="120" cy="80" r="6" fill="#dc2626"/>`)+P(2,tx(200,65,"1793",11)+tx(200,100,"Hinrichtung",10)+`<circle cx="200" cy="80" r="6" fill="#dc2626"/>`)+P(3,tx(262,65,"1804",11)+tx(262,100,"Napoleon",10)+`<circle cx="262" cy="80" r="6" fill="#dc2626"/>`)),txt:"Auf dem Zeitstrahl siehst du: Am 14. Juli 1789 stürmen die Pariser die Bastille. Die Revolution endet damit, dass sich Napoleon 1804 zum Kaiser krönt."}
  ],
  ue:[
    ["In welchem Jahr begann die Französische Revolution?","1789",null],
    ["Wie viele Stände gab es in Frankreich? (Zahl)","3","Geistliche, Adel und …"],
    ["Welches Gefängnis wurde am 14. Juli 1789 gestürmt?","bastille",null],
    ["Welcher Stand war der größte?","dritter stand",["dritter stand","3. stand","dritte stand","3 stand","der dritte stand","der 3. stand"]],
    ["Wer krönte sich 1804 zum Kaiser der Franzosen?","napoleon",["napoleon","napoleon bonaparte"]]
  ]
});

/* ---- Geographie: Maßstab ---- */
lbx("geographie",6,"Karten und Maßstab",{
  intro:"Eine Karte zeigt die Erde stark verkleinert. Der <b>Maßstab</b> sagt, um wie viel die Wirklichkeit verkleinert wurde. Bei <b>1 : 50 000</b> entspricht 1 cm auf der Karte 50 000 cm in der Wirklichkeit.",
  teile:[
    {h:"Umrechnen",p:"50 000 cm sind 500 m. Also bedeutet 1 : 50 000: <b>1 cm auf der Karte = 500 m</b> in der Natur.",bsp:"Maßstab 1 : 50 000. Auf der Karte sind es 4 cm. In Wirklichkeit: 4 · 500 m = 2000 m = <b>2 km</b>."},
    {h:"Großer und kleiner Maßstab",p:"1 : 10 000 ist ein <b>großer</b> Maßstab (viele Einzelheiten, kleiner Ausschnitt). 1 : 1 000 000 ist ein <b>kleiner</b> Maßstab (wenig Einzelheiten, großer Ausschnitt)."},
    {h:"Weitere Kartenhilfen",p:"<b>Legende:</b> erklärt die Zeichen. <b>Nordpfeil:</b> zeigt, wo Norden ist. <b>Höhenlinien:</b> verbinden Punkte gleicher Höhe. Liegen sie dicht beieinander, ist es steil."}
  ],
  merke:"Karte → Wirklichkeit: mal die Maßstabszahl. Wirklichkeit → Karte: geteilt durch die Maßstabszahl.",
  fo:[
    {svg:sv2(`<rect x="30" y="50" width="240" height="14" fill="#fff" stroke="#241b4b" stroke-width="2"/><rect x="30" y="50" width="60" height="14" fill="#241b4b"/><rect x="150" y="50" width="60" height="14" fill="#241b4b"/>`+tx(30,85,"0",12)+tx(90,85,"1 cm",12)+tx(150,85,"2 cm",12)+tx(270,85,"4 cm",12)+P(1,tx(30,115,"0",12)+tx(90,115,"500 m",12)+tx(150,115,"1 km",12)+tx(270,115,"2 km",12))+tx(150,145,"Maßstab 1 : 50 000",13)),txt:"Bei einem Maßstab von 1 zu 50 000 ist 1 Zentimeter auf der Karte 500 Meter in der Wirklichkeit. 4 Zentimeter sind also 2 Kilometer."}
  ],
  ue:[
    ["Maßstab 1 : 50 000, auf der Karte 4 cm. Wie viele km sind das in Wirklichkeit?","2","1 cm = 0,5 km."],
    ["Maßstab 1 : 25 000, auf der Karte 8 cm. Wie viele km sind das?","2","1 cm = 250 m."],
    ["Maßstab 1 : 100 000. Eine Strecke ist 3 km lang. Wie viele cm sind das auf der Karte?","3","1 cm = 1 km."],
    ["Ist 1 : 10 000 ein großer oder kleiner Maßstab?","groß",["groß","gross","großer","grosser","großer maßstab"]],
    ["Wie heißt die Erklärung der Kartenzeichen? (ein Wort)","legende",null]
  ]
});

/* ---- Geographie: Plattentektonik ---- */
lbx("geographie",9,"Plattentektonik: Erdbeben und Vulkane",{
  intro:"Die Erde besteht aus Schichten. Die äußerste, die <b>Erdkruste</b>, ist in große Stücke zerbrochen, die <b>Erdplatten</b>. Sie schwimmen auf dem zähflüssigen <b>Erdmantel</b> und bewegen sich einige Zentimeter pro Jahr, etwa so schnell, wie Fingernägel wachsen.",
  teile:[
    {h:"Aufbau der Erde",p:"<b>Erdkruste</b> (dünn, 5 bis 70 km), <b>Erdmantel</b> (rund 2900 km, heiß und zähflüssig), <b>äußerer Kern</b> (flüssig) und <b>innerer Kern</b> (fest, rund 5000 bis 6000 °C)."},
    {h:"Was an den Plattengrenzen passiert",p:"<b>Platten stoßen zusammen:</b> Eine Platte taucht unter die andere (Subduktion). Es entstehen Gebirge, Tiefseegräben, Erdbeben und Vulkane (zum Beispiel Anden, Himalaya).<br><b>Platten driften auseinander:</b> Magma steigt auf, neuer Meeresboden entsteht (Mittelatlantischer Rücken, Island).<br><b>Platten gleiten aneinander vorbei:</b> Spannungen führen zu Erdbeben (San-Andreas-Graben)."},
    {h:"Kontinentalverschiebung",p:"Alfred <b>Wegener</b> schlug 1912 vor, dass die Kontinente früher zusammenhingen. Der Superkontinent hieß <b>Pangäa</b>. Er zerbrach vor etwa 200 Millionen Jahren."}
  ],
  merke:"Die meisten Erdbeben und Vulkane liegen an den Rändern der Erdplatten, zum Beispiel am „Pazifischen Feuerring“.",
  fo:[
    {svg:sv2(`<circle cx="150" cy="85" r="75" fill="#fecaca" stroke="#241b4b" stroke-width="3"/><circle cx="150" cy="85" r="56" fill="#fdba74" stroke="#241b4b" stroke-width="2"/><circle cx="150" cy="85" r="26" fill="#fde047" stroke="#241b4b" stroke-width="2"/>`+tx(150,90,"Kern",12)+tx(150,56,"Mantel",12)+tx(150,25,"Kruste",11)),txt:"Die Erde hat Schichten wie ein Pfirsich. Außen die dünne Kruste, darunter der Mantel, innen der Kern."},
    {svg:sv2(`<rect x="20" y="60" width="120" height="14" fill="#bbf7d0" stroke="#241b4b" stroke-width="2"/><rect x="160" y="60" width="120" height="14" fill="#fde68a" stroke="#241b4b" stroke-width="2"/>`+P(1,ar(70,100,110,100)+ar(230,100,190,100))+P(2,tx(150,135,"Platten stoßen zusammen",14))+P(2,tx(150,155,"→ Gebirge, Erdbeben, Vulkane",12,"#dc2626"))),txt:"Stoßen zwei Platten zusammen, schiebt sich eine unter die andere. Dabei entstehen Gebirge, Erdbeben und Vulkane."},
    {svg:sv2(`<rect x="20" y="60" width="120" height="14" fill="#bbf7d0" stroke="#241b4b" stroke-width="2"/><rect x="160" y="60" width="120" height="14" fill="#fde68a" stroke="#241b4b" stroke-width="2"/>`+P(1,ar(110,100,60,100)+ar(190,100,240,100))+P(2,tx(150,135,"Platten driften auseinander",14))+P(2,tx(150,155,"→ neuer Meeresboden entsteht",12,"#16a34a"))),txt:"Driften zwei Platten auseinander, steigt Magma aus dem Erdmantel auf. Es entsteht neuer Meeresboden, zum Beispiel im Atlantik."}
  ],
  ue:[
    ["Wie heißt die äußerste Schicht der Erde?","erdkruste",["erdkruste","kruste"]],
    ["Wie hieß der Superkontinent, der vor etwa 200 Millionen Jahren zerbrach?","pangäa",["pangäa","pangaea","pangaia"]],
    ["Wer schlug 1912 die Theorie der Kontinentalverschiebung vor?","wegener",["wegener","alfred wegener"]],
    ["Wo entstehen die meisten Erdbeben und Vulkane: an den … der Platten?","grenzen",["grenzen","rändern","plattengrenzen","rand","ränder"]],
    ["Wie heißt die Schicht unter der Erdkruste?","erdmantel",["erdmantel","mantel"]]
  ]
});

/* ---- Musik: Notenwerte und Takt ---- */
lbx("musik",6,"Notenwerte, Pausen und Takt",{
  intro:"Jede Note hat einen Wert. Er sagt, wie lange der Ton klingt. Die Noten werden in <b>Takte</b> eingeteilt, die durch Taktstriche getrennt sind. Die Taktart (zum Beispiel 4/4) steht am Anfang.",
  teile:[
    {h:"Notenwerte (im 4/4-Takt)",p:"<b>Ganze Note:</b> 4 Schläge<br><b>Halbe Note:</b> 2 Schläge<br><b>Viertelnote:</b> 1 Schlag<br><b>Achtelnote:</b> ½ Schlag (zwei Achtel = ein Schlag)<br>Zu jeder Note gibt es eine Pause mit der gleichen Länge.",bsp:"Eine Halbe und zwei Viertel ergeben zusammen 2 + 1 + 1 = <b>4 Schläge</b> und füllen einen 4/4-Takt."},
    {h:"Taktarten",p:"Die obere Zahl sagt, wie viele Schläge ein Takt hat. Die untere sagt, welche Note einen Schlag bekommt. <b>4/4:</b> vier Viertel pro Takt. <b>3/4:</b> drei Viertel pro Takt (Walzer). <b>2/4:</b> zwei Viertel (Marsch)."},
    {h:"Dur und Moll",p:"Dur klingt meist fröhlich, Moll eher traurig oder ernst. Der Unterschied liegt in der dritten Stufe der Tonleiter: Sie ist bei Moll einen Halbton tiefer."}
  ],
  merke:"Die untere Zahl der Taktart zeigt die Zählzeit: 4 = Viertel, 8 = Achtel.",
  fo:[
    {svg:sv2(bx(10,20,280,32,"Ganze Note = 4 Schläge",COL.a,14)+P(1,bx(10,60,138,32,"Halbe = 2",COL.b,14)+bx(152,60,138,32,"Halbe = 2",COL.b,14))+P(2,bx(10,100,66,32,"1/4",COL.c,13)+bx(80,100,66,32,"1/4",COL.c,13)+bx(152,100,66,32,"1/4",COL.c,13)+bx(222,100,66,32,"1/4",COL.c,13))+P(3,tx(150,152,"Alle Reihen sind gleich lang: 4 Schläge",12))),txt:"Eine ganze Note dauert so lang wie zwei halbe oder vier Viertelnoten. Jede Reihe ist gleich lang."},
    {svg:sv2(tx(150,60,"3 ∕ 4",40)+P(1,tx(150,100,"3 Schläge pro Takt, jeder ein Viertel",13))+P(2,tx(150,130,"Beispiel: Walzer",13,"#16a34a"))),txt:"Beim Dreivierteltakt zählst du eins, zwei, drei. Das ist der Rhythmus des Walzers."}
  ],
  ue:[
    ["Wie viele Viertelnoten ergeben eine ganze Note?","4",null],
    ["Wie viele Schläge hat der 3/4-Takt?","3",null],
    ["Wie viele Achtelnoten sind so lang wie eine Viertelnote?","2",null],
    ["Wie viele Schläge dauern eine halbe Note und eine Viertelnote zusammen?","3","2 + 1."],
    ["Welche Tonart klingt meist fröhlich: Dur oder Moll?","dur",null]
  ]
});
