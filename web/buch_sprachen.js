/* ====== Lehrbuch Sprachen, Klasse 5-10 ====== */
/* ---- Deutsch: Zeitformen ---- */
(function(){
  const line=ln(20,80,280,80,"#241b4b",3);
  lbx("deutsch",5,"Die Zeitformen des Verbs",{
    intro:"Mit dem Verb sagst du, <b>wann</b> etwas passiert. Es gibt Gegenwart, Vergangenheit und Zukunft. Im Deutschen hast du dafür vier wichtige Zeitformen.",
    teile:[
      {h:"Die vier Zeitformen",p:"<b>Präsens</b> (Gegenwart): ich lache, er geht.<br><b>Präteritum</b> (erzählende Vergangenheit): ich lachte, er ging.<br><b>Perfekt</b> (gesprochene Vergangenheit): ich habe gelacht, er ist gegangen.<br><b>Futur I</b> (Zukunft): ich werde lachen, er wird gehen.",bsp:"Heute <b>lese</b> ich (Präsens). Gestern <b>las</b> ich (Präteritum). Ich <b>habe</b> gestern ein Buch <b>gelesen</b> (Perfekt). Morgen <b>werde</b> ich lesen (Futur)."},
      {h:"haben oder sein im Perfekt?",p:"Die meisten Verben bilden das Perfekt mit <b>haben</b>. Verben der Bewegung und der Zustandsänderung nehmen <b>sein</b>: ich <b>bin</b> gelaufen, er <b>ist</b> eingeschlafen."}
    ],
    merke:"Starke Verben ändern den Stamm (gehen – ging – gegangen). Schwache Verben bekommen -te und ge-…-t (lachen – lachte – gelacht).",
    fo:[
      {svg:sv2(line+`<circle cx="150" cy="80" r="7" fill="#dc2626"/>`+tx(150,105,"jetzt",13,"#dc2626")+tx(150,40,"Präsens: ich lache",14)),txt:"Der rote Punkt ist jetzt. Was jetzt passiert, steht im Präsens: ich lache."},
      {svg:sv2(line+`<circle cx="150" cy="80" r="7" fill="#dc2626"/>`+P(0,`<rect x="20" y="60" width="115" height="40" rx="8" fill="#fde68a" opacity=".7"/>`)+P(1,tx(78,45,"Präteritum",13)+tx(78,120,"ich lachte",13))+P(2,tx(150,155,"Perfekt: ich habe gelacht",12))),txt:"Links vom Punkt ist die Vergangenheit. Zum Erzählen nimmst du das Präteritum: ich lachte. Beim Sprechen sagst du meistens das Perfekt: ich habe gelacht."},
      {svg:sv2(line+`<circle cx="150" cy="80" r="7" fill="#dc2626"/>`+P(0,`<rect x="165" y="60" width="115" height="40" rx="8" fill="#bbf7d0" opacity=".8"/>`)+P(1,tx(222,45,"Futur I",13)+tx(222,120,"ich werde lachen",13))),txt:"Rechts vom Punkt ist die Zukunft. Du nimmst werden und den Infinitiv: ich werde lachen."}
    ],
    ue:[
      ["Setze ins Präteritum: ich gehe → ich ___","ging","Starkes Verb: der Stamm ändert sich."],
      ["Setze ins Perfekt: wir lesen → wir haben ___","gelesen","Partizip II von lesen."],
      ["Setze ins Futur I: er singt → er wird ___","singen","werden + Infinitiv."],
      ["Präteritum von „sie lacht“: sie ___","lachte","Schwaches Verb: Stamm + te."],
      ["Perfekt: ich laufe → ich ___ gelaufen (haben oder sein?)","bin","Laufen ist eine Bewegung."]
    ]
  });
})();

/* ---- Deutsch: Kommaregeln ---- */
lbx("deutsch",6,"Kommaregeln: Aufzählung und Nebensatz",{
  intro:"Das Komma gliedert den Satz. Du brauchst nur wenige feste Regeln, dann sitzen fast alle Kommas richtig.",
  teile:[
    {h:"Regel 1: Aufzählung",p:"Gleichrangige Wörter werden durch Komma getrennt. Vor <b>und</b> und <b>oder</b> steht kein Komma.",bsp:"Ich kaufe Äpfel<b>,</b> Birnen<b>,</b> Bananen und Trauben."},
    {h:"Regel 2: Nebensatz",p:"Ein Nebensatz wird vom Hauptsatz mit Komma getrennt. Du erkennst ihn oft an Wörtern wie <b>dass, weil, wenn, obwohl, als, damit</b>. Das Verb steht dort am Ende.",bsp:"Ich weiß<b>,</b> dass du kommst.<br>Wir bleiben zu Hause<b>,</b> weil es regnet."},
    {h:"Regel 3: Gegensatz und Einschub",p:"Vor <b>aber, sondern, doch</b> steht ein Komma. Einschübe (zum Beispiel Beifügungen zu einem Namen) stehen in zwei Kommas.",bsp:"Ich komme<b>,</b> aber nur kurz.<br>Anna<b>,</b> die Lehrerin<b>,</b> ist nett."}
  ],
  merke:"Frage dich: Kann ich den Satzteil weglassen und der Satz bleibt ganz? Dann ist es oft ein Einschub und braucht zwei Kommas.",
  fo:[
    {svg:sv2(tx(150,60,"Äpfel, Birnen, Bananen und Trauben",14)+P(1,tx(150,95,"Kommas trennen die Wörter.",12,"#dc2626"))+P(2,tx(150,115,"Vor „und“ steht keins.",12,"#dc2626"))),txt:"Bei einer Aufzählung steht zwischen den Wörtern ein Komma. Vor „und“ steht keines."},
    {svg:sv2(bx(10,35,120,40,"Hauptsatz",COL.a)+P(1,tx(145,62,",",30,"#dc2626"))+P(1,bx(160,35,130,40,"Nebensatz",COL.b))+P(2,tx(150,120,"Ich weiß, dass du kommst.",15))),txt:"Hauptsatz und Nebensatz trennst du immer mit einem Komma. Der Nebensatz beginnt hier mit „dass“."},
    {svg:sv2(tx(150,60,"Anna, die Lehrerin, ist nett.",16)+P(1,tx(150,100,"Der Einschub steht zwischen zwei Kommas.",13,"#dc2626"))),txt:"Ein Einschub braucht Kommas davor und danach. Du kannst ihn weglassen: „Anna ist nett.“ bleibt ein ganzer Satz."}
  ],
  ue:[
    ["Wie viele Kommas gehören in den Satz: „Ich weiß dass du kommst“?","1","Vor „dass“ beginnt ein Nebensatz."],
    ["Wie viele Kommas gehören hinein: „Ich kaufe Äpfel Birnen Bananen und Trauben“?","2","Vor „und“ kommt kein Komma."],
    ["Wie viele Kommas gehören hinein: „Er sagte dass er müde sei weil er schlecht geschlafen hatte“?","2","Zwei Nebensätze."],
    ["Wie viele Kommas gehören hinein: „Anna die Lehrerin ist nett“?","2","Der Einschub steht in zwei Kommas."],
    ["Wie viele Kommas gehören hinein: „Ich komme aber nur kurz“?","1","Vor „aber“."]
  ]
});

/* ---- Deutsch: Satzglieder ---- */
lbx("deutsch",7,"Satzglieder und Satzgliedtests",{
  intro:"Ein Satz besteht aus <b>Satzgliedern</b>. Ein Satzglied kann aus einem oder mehreren Wörtern bestehen. Du erkennst es mit der <b>Umstellprobe</b>: Was beim Umstellen zusammenbleibt, ist ein Satzglied.",
  teile:[
    {h:"Wichtige Satzglieder",p:"<b>Prädikat</b> (das Verb): Was geschieht?<br><b>Subjekt</b> (Satzgegenstand): Wer oder was …? (Nominativ)<br><b>Akkusativobjekt:</b> Wen oder was …?<br><b>Dativobjekt:</b> Wem …?<br><b>Adverbiale Bestimmung:</b> Wann? Wo? Wie? Warum?",bsp:"<b>Der Hund</b> (Subjekt) <b>jagt</b> (Prädikat) <b>die Katze</b> (Akkusativobjekt) <b>im Garten</b> (Ort)."},
    {h:"Umstellprobe",p:"Du stellst die Wörter um. Zusammen bleibende Wörter sind ein Satzglied.",bsp:"Am Montag spielt Tim im Garten Fußball. → Im Garten spielt Tim am Montag Fußball. Das sind <b>5 Satzglieder</b>: Am Montag | spielt | Tim | im Garten | Fußball."}
  ],
  merke:"Das Prädikat steht im Aussagesatz immer an zweiter Stelle. Vor ihm steht genau ein Satzglied.",
  fo:[
    {svg:sv2(bx(5,50,60,36,"Der Hund",COL.a,11)+bx(70,50,44,36,"jagt",COL.d,11)+bx(119,50,70,36,"die Katze",COL.b,11)+bx(194,50,100,36,"im Garten",COL.c,11)+P(1,tx(35,110,"Subjekt",10)+tx(92,110,"Prädikat",10)+tx(154,110,"Objekt",10)+tx(244,110,"Ort",10))),txt:"Dieser Satz hat vier Satzglieder: Subjekt, Prädikat, Akkusativobjekt und eine Ortsangabe."},
    {svg:sv2(bx(5,30,100,34,"Im Garten",COL.c,12)+bx(110,30,60,34,"jagt",COL.d,12)+bx(175,30,50,34,"der",COL.a,12)+bx(5,90,100,34,"Hund",COL.a,12)+P(1,tx(150,150,"Umstellen: „Der Hund“ bleibt zusammen",12))),txt:"Bei der Umstellprobe verschiebst du Wörter. „Der Hund“ lässt sich nur zusammen verschieben. Das ist ein Satzglied."}
  ],
  ue:[
    ["Wie viele Satzglieder hat: „Am Montag spielt Tim im Garten Fußball.“?","5","Am Montag | spielt | Tim | im Garten | Fußball."],
    ["Nenne das Subjekt: „Der Hund jagt die Katze.“","der hund","Wer oder was jagt?"],
    ["Nenne das Akkusativobjekt: „Der Hund jagt die Katze.“","die katze","Wen oder was jagt der Hund?"],
    ["An welcher Stelle steht das Prädikat im Aussagesatz? (Zahl)","2","Es steht immer an zweiter Stelle."],
    ["Welche Frage stellst du nach dem Dativobjekt? (ein Wort)","wem","Ich gebe dem Kind ein Buch: …?"]
  ]
});

/* ---- Deutsch: Sprachliche Mittel ---- */
lbx("deutsch",8,"Sprachliche Mittel in Gedichten und Texten",{
  intro:"Autoren nutzen <b>sprachliche Mittel</b>, damit ihre Texte lebendig wirken. Wenn du sie erkennst, kannst du Gedichte und Geschichten besser verstehen und beschreiben.",
  teile:[
    {h:"Die wichtigsten Mittel",p:"<b>Vergleich:</b> Etwas wird mit „wie“ verglichen (stark wie ein Bär).<br><b>Metapher:</b> Bildhafte Ausdrucksweise ohne „wie“ (ein Meer von Tränen).<br><b>Personifikation:</b> Dinge handeln wie Menschen (der Wind flüstert).<br><b>Alliteration:</b> Gleicher Anfangsbuchstabe (Milch macht müde Männer munter).<br><b>Wiederholung:</b> Wörter oder Sätze kommen mehrmals vor.<br><b>Übertreibung (Hyperbel):</b> Ich habe tausendmal gerufen.",bsp:"„Die Sonne lacht.“ Die Sonne kann nicht lachen. Es ist eine <b>Personifikation</b>."},
    {h:"Wirkung beschreiben",p:"In der Analyse reicht es nicht, das Mittel zu nennen. Du erklärst auch die <b>Wirkung</b>.",bsp:"Die Personifikation „Die Sonne lacht“ wirkt freundlich und lebendig. Sie zeigt eine fröhliche Stimmung."}
  ],
  merke:"Satzmuster zur Analyse: Mittel nennen – Textstelle zitieren – Wirkung erklären.",
  fo:[
    {svg:sv2(tx(150,50,"stark wie ein Bär",20)+P(1,bx(100,80,100,36,"Vergleich",COL.b,15))),txt:"Hier steht das Wort „wie“. Etwas wird mit etwas anderem verglichen. Das ist ein Vergleich."},
    {svg:sv2(tx(150,50,"ein Meer von Tränen",20)+P(1,bx(100,80,100,36,"Metapher",COL.e,15))),txt:"Hier fehlt das Wort „wie“. Tränen sind kein richtiges Meer, aber das Bild zeigt: sehr viele. Das ist eine Metapher."},
    {svg:sv2(tx(150,50,"Der Wind flüstert.",20)+P(1,bx(85,80,130,36,"Personifikation",COL.c,14))),txt:"Der Wind kann nicht flüstern. Er bekommt eine menschliche Eigenschaft. Das ist eine Personifikation."}
  ],
  ue:[
    ["„Der Wind flüstert.“ Wie heißt das sprachliche Mittel?","personifikation","Ein Ding handelt wie ein Mensch."],
    ["„Er ist stark wie ein Bär.“ Wie heißt das Mittel?","vergleich","Das Wort „wie“ ist ein Hinweis."],
    ["„Ein Meer von Tränen.“ Wie heißt das Mittel?","metapher","Bild ohne „wie“."],
    ["„Milch macht müde Männer munter.“ Wie heißt das Mittel?","alliteration","Alle Wörter beginnen mit M."],
    ["Was musst du in der Analyse außer dem Namen des Mittels noch erklären? (ein Wort)","wirkung","Was bewirkt das Mittel beim Leser?"]
  ]
});

/* ---- Englisch: Present Progressive ---- */
lbx("englisch",6,"Present Progressive (I am playing)",{
  intro:"Das <b>Present Progressive</b> benutzt du für Dinge, die <b>gerade jetzt</b> passieren. Du bildest es mit <b>am / is / are</b> und dem Verb mit <b>-ing</b>.",
  teile:[
    {h:"Bildung",p:"<b>I am</b> playing<br><b>he / she / it is</b> playing<br><b>you / we / they are</b> playing",bsp:"She <b>is reading</b> a book now. – Sie liest gerade ein Buch."},
    {h:"Verneinung und Frage",p:"Verneinung: am/is/are + <b>not</b>. Frage: am/is/are <b>vor</b> das Subjekt.",bsp:"He <b>is not</b> sleeping. – <b>Is</b> he sleeping?"},
    {h:"Die -ing-Form",p:"Meistens hängst du -ing an: play → playing. Endet das Verb auf stummes -e, fällt es weg: make → making. Nach kurzem Vokal wird der Endkonsonant verdoppelt: run → running, sit → sitting."}
  ],
  merke:"Signalwörter: now, at the moment, look!, listen!",
  fo:[
    {svg:sv2(P(0,bx(10,40,60,36,"I",COL.a))+P(0,bx(75,40,60,36,"am",COL.b))+P(1,bx(140,40,150,36,"playing",COL.c))+P(2,tx(150,110,"I am playing football now.",15))),txt:"Du brauchst zwei Teile: eine Form von „to be“ (am, is, are) und das Verb mit -ing."},
    {svg:sv2(tx(150,40,"He is sleeping.",16)+P(1,tx(150,80,"He is not sleeping.",16,"#dc2626"))+P(2,tx(150,120,"Is he sleeping?",16,"#16a34a"))),txt:"Für die Verneinung setzt du not hinter is. Für die Frage tauschst du is und he."},
    {svg:sv2(tx(150,40,"make → making",16)+tx(150,80,"run → running",16)+tx(150,120,"play → playing",16)),txt:"Merke die Schreibweise: Das stumme e fällt weg, kurze Vokale verdoppeln den Konsonanten."}
  ],
  ue:[
    ["She ___ (read) a book now.","is reading","Form von be + Verb mit -ing."],
    ["They are ___ (play) football.","playing","Nur -ing anhängen."],
    ["I ___ watching TV. (Verneinung, zwei Wörter)","am not","I → am."],
    ["___ he sleeping? (Fragewort)","is","is steht vor he."],
    ["Bilde die -ing-Form von „run“.","running","Kurzer Vokal: Konsonant verdoppeln."]
  ]
});

/* ---- Englisch: Conditional I ---- */
lbx("englisch",8,"If-Sätze (Conditional Sentences)",{
  intro:"Mit <b>if-Sätzen</b> sagst du, was passiert, wenn eine Bedingung erfüllt ist. Es gibt drei Typen. In Klasse 8 lernst du meistens Typ I und Typ II.",
  teile:[
    {h:"Typ I: möglich und wahrscheinlich",p:"<b>If + Present Simple, will + Infinitiv</b>",bsp:"If it <b>rains</b>, we <b>will stay</b> at home. – Wenn es regnet, bleiben wir zu Hause."},
    {h:"Typ II: unwahrscheinlich oder erfunden",p:"<b>If + Past Simple, would + Infinitiv</b>",bsp:"If I <b>had</b> a car, I <b>would drive</b> to school. – Wenn ich ein Auto hätte, würde ich zur Schule fahren."},
    {h:"Tipp",p:"Nach <b>if</b> steht nie <i>will</i> oder <i>would</i>. Steht der if-Satz vorne, kommt ein Komma. Steht er hinten, kommt keins: We will stay at home if it rains."}
  ],
  merke:"Typ I: if + Present → will. Typ II: if + Past → would.",
  fo:[
    {svg:sv2(bx(10,40,130,40,"If it rains,",COL.a,14)+P(1,bx(160,40,130,40,"we will stay home.",COL.b,12))+P(2,tx(150,115,"If + Present  →  will + Verb",14,"#16a34a"))),txt:"Typ I: Im if-Satz steht das Present Simple. Im Hauptsatz steht will plus Verb."},
    {svg:sv2(bx(10,40,130,40,"If I had a car,",COL.a,13)+P(1,bx(160,40,130,40,"I would drive.",COL.b,13))+P(2,tx(150,115,"If + Past  →  would + Verb",14,"#16a34a"))),txt:"Typ II: Im if-Satz steht das Past Simple. Im Hauptsatz steht would plus Verb. Das ist eine Situation, die es gerade nicht gibt."}
  ],
  ue:[
    ["If it ___ (rain), we will stay at home.","rains","Present Simple, 3. Person: -s."],
    ["If I see him, I ___ (tell) him. (zwei Wörter)","will tell","Typ I: will + Verb."],
    ["She will pass the test if she ___ (study) hard.","studies","y wird zu ies."],
    ["If I ___ (have) a car, I would drive to school.","had","Typ II: Past Simple."],
    ["If we won, we ___ (be) happy. (Typ II, zwei Wörter)","would be","would + Infinitiv."]
  ]
});

/* ---- Englisch: Passiv ---- */
lbx("englisch",9,"Das Passiv (The Passive)",{
  intro:"Im <b>Passiv</b> ist wichtig, <b>was</b> mit etwas geschieht, nicht, wer es tut. Du bildest es mit einer Form von <b>to be</b> und dem <b>Partizip Perfekt</b> (3. Verbform).",
  teile:[
    {h:"Bildung",p:"<b>Present:</b> am / is / are + Partizip: English <b>is spoken</b> here.<br><b>Past:</b> was / were + Partizip: The window <b>was broken</b>.<br><b>Future:</b> will be + Partizip: It will be done.",bsp:"Aktiv: Tom writes a letter.<br>Passiv: A letter <b>is written</b> by Tom."},
    {h:"Aktiv in Passiv umwandeln",p:"1. Das Objekt des Aktivsatzes wird zum Subjekt.<br>2. be in der gleichen Zeit + Partizip Perfekt.<br>3. Das alte Subjekt kommt mit <b>by</b> dazu (oder entfällt)."}
  ],
  merke:"Das Passiv wählst du, wenn der Täter unbekannt oder unwichtig ist.",
  fo:[
    {svg:sv2(tx(150,40,"Tom writes a letter.",16)+P(1,ar(150,55,150,80))+P(2,tx(150,110,"A letter is written by Tom.",16,"#16a34a"))),txt:"Das Objekt „a letter“ wird zum Subjekt. Du nimmst is und das Partizip written. Tom steht jetzt hinten mit by."},
    {svg:sv2(tx(150,40,"Present: is / are + 3. Form",15)+P(1,tx(150,80,"Past: was / were + 3. Form",15))+P(2,tx(150,120,"Future: will be + 3. Form",15))),txt:"Die Zeit erkennst du an der Form von be. Das Partizip bleibt immer gleich."}
  ],
  ue:[
    ["The window ___ (break) by Tom yesterday. (zwei Wörter)","was broken","Vergangenheit + Partizip von break."],
    ["English ___ (speak) in many countries. (zwei Wörter)","is spoken","Gegenwart, Singular."],
    ["Tom writes a letter. → A letter ___ by Tom. (zwei Wörter)","is written","Gegenwart."],
    ["Cars ___ (make) in Germany. (zwei Wörter)","are made","Plural: are."],
    ["Die 3. Verbform von „write“ lautet:","written","write – wrote – written."]
  ]
});

/* ---- Französisch ---- */
lbx("franzoesisch",7,"être und avoir",{
  intro:"<b>être</b> (sein) und <b>avoir</b> (haben) sind die wichtigsten Verben im Französischen. Du brauchst sie in fast jedem Satz und später für die Vergangenheit (passé composé).",
  teile:[
    {h:"être (sein)",p:"je <b>suis</b> · tu <b>es</b> · il/elle <b>est</b><br>nous <b>sommes</b> · vous <b>êtes</b> · ils/elles <b>sont</b>",bsp:"Je suis Anna. Nous sommes en classe."},
    {h:"avoir (haben)",p:"j’<b>ai</b> · tu <b>as</b> · il/elle <b>a</b><br>nous <b>avons</b> · vous <b>avez</b> · ils/elles <b>ont</b>",bsp:"J’ai un frère. Ils ont un chien."},
    {h:"Aussprache-Tipp",p:"Das s am Ende bleibt meist stumm: tu es [ü ä], tu as [ü a]. Bei der Bindung (liaison) klingt es: nous avons [nu-za-wõ]."}
  ],
  merke:"Vor Vokalen wird je zu j’: j’ai (nicht je ai).",
  fo:[
    {svg:sv2(tx(70,35,"être",16,"#4f46e5")+P(0,tx(70,62,"je suis",14))+P(1,tx(70,84,"tu es",14))+P(2,tx(70,106,"il est",14))+tx(230,35,"avoir",16,"#4f46e5")+P(0,tx(230,62,"j’ai",14))+P(1,tx(230,84,"tu as",14))+P(2,tx(230,106,"il a",14))),txt:"Links siehst du être, rechts avoir. Beide sind unregelmäßig: Du musst sie auswendig lernen."},
    {svg:sv2(tx(70,35,"être",16,"#4f46e5")+tx(70,62,"nous sommes",13)+P(1,tx(70,84,"vous êtes",13))+P(2,tx(70,106,"ils sont",13))+tx(230,35,"avoir",16,"#4f46e5")+tx(230,62,"nous avons",13)+P(1,tx(230,84,"vous avez",13))+P(2,tx(230,106,"ils ont",13))),txt:"Die Mehrzahl: nous sommes, vous êtes, ils sont. Und: nous avons, vous avez, ils ont."}
  ],
  ue:[
    ["nous ___ (être)","sommes","Die nous-Form von être."],
    ["tu ___ (avoir)","as","tu as."],
    ["ils ___ (avoir)","ont","ils ont."],
    ["je ___ (être)","suis","je suis."],
    ["vous ___ (être)","êtes",null]
  ]
});

/* ---- Spanisch ---- */
lbx("spanisch",7,"ser und estar (beides „sein“)",{
  intro:"Im Spanischen gibt es zwei Verben für „sein“: <b>ser</b> und <b>estar</b>. Du nutzt <b>ser</b> für feste Eigenschaften und <b>estar</b> für Orte und Zustände.",
  teile:[
    {h:"Wann ser?",p:"Name, Herkunft, Beruf, Eigenschaften, Uhrzeit: Soy alemán. Ella es profesora. Es lunes.<br><b>soy · eres · es · somos · sois · son</b>"},
    {h:"Wann estar?",p:"Ort und vorübergehender Zustand: Madrid está en España. Estamos cansados.<br><b>estoy · estás · está · estamos · estáis · están</b>"},
    {h:"Merkhilfe",p:"<b>PLACE</b> für estar (Position, Location, Action, Condition, Emotion) und <b>DOCTOR</b> für ser (Description, Occupation, Characteristic, Time, Origin, Relationship)."}
  ],
  merke:"Wie jemand ist (Charakter): ser. Wo oder wie es jemandem gerade geht: estar.",
  fo:[
    {svg:sv2(bx(10,30,130,45,"ser",COL.a,18)+bx(160,30,130,45,"estar",COL.c,18)+P(1,tx(75,100,"Herkunft, Beruf,",11)+tx(75,116,"Eigenschaften",11)+tx(225,100,"Ort, Zustand,",11)+tx(225,116,"Gefühle",11))),txt:"Zwei Verben, zwei Aufgaben. Ser beschreibt, was feststeht. Estar beschreibt, wo etwas ist oder wie es gerade ist."},
    {svg:sv2(tx(75,35,"soy",14)+tx(75,58,"eres",14)+tx(75,81,"es",14)+tx(75,104,"somos",14)+tx(75,127,"son",14)+tx(225,35,"estoy",14)+tx(225,58,"estás",14)+tx(225,81,"está",14)+tx(225,104,"estamos",14)+tx(225,127,"están",14)),txt:"Hier die Formen: links ser, rechts estar, jeweils für yo, tú, él, nosotros und ellos."}
  ],
  ue:[
    ["Yo ___ (ser) alemán.","soy","yo + ser."],
    ["Madrid ___ (estar) en España.","está","Ort: estar."],
    ["Nosotros ___ (estar) cansados.","estamos","Zustand: estar."],
    ["Ella ___ (ser) profesora.","es","Beruf: ser."],
    ["Ellos ___ (ser) mis amigos.","son","ellos + ser."]
  ]
});

/* ---- Latein ---- */
lbx("latein",7,"Die a-Deklination (puella)",{
  intro:"Im Lateinischen verraten die <b>Endungen</b>, welche Aufgabe ein Wort im Satz hat. Die <b>a-Deklination</b> gehört zu Wörtern wie <i>puella</i> (Mädchen), <i>rosa</i> (Rose) und <i>terra</i> (Erde). Die meisten sind weiblich.",
  teile:[
    {h:"Die Endungen",p:"<b>Singular:</b> puella · puellae · puellae · puellam · puella<br><b>Plural:</b> puellae · puellarum · puellis · puellas · puellis<br>Reihenfolge: Nominativ (wer?), Genitiv (wessen?), Dativ (wem?), Akkusativ (wen?), Ablativ (wodurch/wo?).",bsp:"Puella rosam amat. – Das Mädchen liebt die Rose. (<i>puella</i> = Nominativ, <i>rosam</i> = Akkusativ)"},
    {h:"Lerntipp",p:"Lerne die Endungen als Reihe auswendig: -a, -ae, -ae, -am, -a. Im Plural: -ae, -arum, -is, -as, -is."}
  ],
  merke:"Der Nominativ Plural und der Genitiv/Dativ Singular enden beide auf -ae. Der Satz zeigt dir, welcher Fall gemeint ist.",
  fo:[
    {svg:sv2(tx(60,26,"Fall",12,"#6b6590")+tx(150,26,"Singular",12,"#6b6590")+tx(240,26,"Plural",12,"#6b6590")+tx(60,52,"Nom.",12)+tx(150,52,"puella",13)+tx(240,52,"puellae",13)+P(1,tx(60,76,"Gen.",12)+tx(150,76,"puellae",13)+tx(240,76,"puellarum",13))+P(2,tx(60,100,"Dat.",12)+tx(150,100,"puellae",13)+tx(240,100,"puellis",13))+P(3,tx(60,124,"Akk.",12)+tx(150,124,"puellam",13)+tx(240,124,"puellas",13))+P(4,tx(60,148,"Abl.",12)+tx(150,148,"puella",13)+tx(240,148,"puellis",13))),txt:"Hier siehst du alle Formen von puella. Die Endungen sind fest. Lerne sie Zeile für Zeile."},
    {svg:sv2(bx(10,40,90,38,"Puella",COL.a,14)+bx(110,40,90,38,"rosam",COL.b,14)+bx(210,40,80,38,"amat",COL.d,14)+P(1,tx(55,100,"Subjekt",11)+tx(155,100,"Objekt",11)+tx(250,100,"Prädikat",11))+P(2,tx(150,135,"Das Mädchen liebt die Rose.",14,"#16a34a"))),txt:"Die Endung -am zeigt den Akkusativ: rosam ist das Objekt. Deshalb kann das Wort im lateinischen Satz an einer anderen Stelle stehen."}
  ],
  ue:[
    ["Akkusativ Singular von puella:","puellam","Endung -am."],
    ["Genitiv Plural von puella:","puellarum","Endung -arum."],
    ["Nominativ Plural von puella:","puellae","Endung -ae."],
    ["Dativ Plural von puella:","puellis","Endung -is."],
    ["Akkusativ Plural von rosa:","rosas","Endung -as."]
  ]
});
