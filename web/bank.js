
/* ---------- Fragen-Bank (selbst geschrieben) ----------
   Auswahl: "Frage|richtig|falsch|falsch|?Tipp"   Eingabe: "T:Frage|antwort1/antwort2|?Tipp" */
const BANK=[];
function B(id,subj,name,ic,from,to,explain,items){BANK.push({id,subj,name,ic,from,to,explain:`<p>${explain}</p>`,items,bank:true});}

/* ===== DEUTSCH ===== */
B("d-laute","deutsch","Buchstaben, Laute und Silben","🔤",0,2,"Jedes Wort beginnt mit einem <b>Laut</b>. Sprich das Wort langsam und höre genau hin. Silben kannst du <b>klatschen</b>: Ba-na-ne.",[
"Mit welchem Buchstaben beginnt „Apfel“?|A|O|E|?Sprich das Wort langsam und höre auf den ersten Laut.",
"Mit welchem Buchstaben beginnt „Sonne“?|S|Z|N",
"Welches Wort beginnt mit M?|Maus|Haus|Laus",
"Wie viele Silben hat „Banane“?|3|2|4|?Klatsche mit: Ba-na-ne.",
"Wie viele Silben hat „Hund“?|1|2|3",
"Welches Wort reimt sich auf „Haus“?|Maus|Hand|Hund",
"Welcher Buchstabe fehlt? _und (ein Tier mit vier Pfoten, das bellt)|H|M|L",
"Welcher Buchstabe ist ein Vokal (Selbstlaut)?|E|T|M|?Vokale sind a, e, i, o, u.",
"Welches Wort wird mit großem Anfangsbuchstaben geschrieben?|Katze|laufen|schön|?Namen von Dingen, Tieren und Menschen schreibst du groß.",
"Wie viele Buchstaben hat das Wort „Ball“?|4|3|5"]);
B("d-bd","deutsch","b oder d? Buchstaben unterscheiden","🅱️",1,4,"Bei <b>b</b> steht erst der Strich, dann der Bauch, wie bei „<b>B</b>auch“. Bei <b>d</b> ist es umgekehrt: erst der Bauch, dann der Strich, wie bei „<b>D</b>ach“. Du kannst auch mit den Fäusten merken: Daumen hoch, beide Fäuste zeigen b und d.",[
"_all (Spielzeug zum Werfen)|B|D|?Ball beginnt mit B.",
"_ach (oben auf dem Haus)|D|B",
"_aum (wächst im Wald)|B|D",
"_aumen (der dicke Finger)|D|B",
"Kin_ (junger Mensch)|d|b",
"Le_en (am Leben sein)|b|d",
"Han_ (Körperteil)|d|b",
"O_st (Äpfel, Birnen)|b|d",
"_ose (Behälter aus Blech)|D|B",
"Bru_er (Sohn der gleichen Eltern)|d|b"]);
B("d-nomen","deutsch","Nomen, Artikel und Plural","📘",2,5,"Nomen schreibt man <b>groß</b>. Sie haben einen Artikel: <b>der, die oder das</b>. Beim Plural ändert sich oft das Wort: das Haus → die Häuser.",[
"___ Sonne|die|der|das",
"___ Mädchen|das|die|der|?„Mädchen“ endet auf -chen, darum steht „das“.",
"___ Löffel|der|die|das",
"Plural von „Haus“|Häuser|Hause|Hausen",
"Plural von „Kind“|Kinder|Kinds|Kindern",
"Plural von „Baum“|Bäume|Baums|Bäumer",
"Welches Wort ist ein Nomen?|Tisch|laufen|schnell|?Nomen kannst du anfassen oder dir vorstellen.",
"___ Tür|die|der|das",
"Welches Wort ist ein Nomen (Gefühl)?|Freude|fröhlich|freuen",
"Plural von „Auto“|Autos|Auten|Auter",
"___ Mond|der|die|das"]);
B("d-verb","deutsch","Verben und Zeitformen","🏃",3,6,"Verben sagen, was jemand <b>tut</b>. Zeitformen: Präsens (er geht), Präteritum (er ging), Perfekt (er ist gegangen), Futur (er wird gehen).",[
"Welches Wort ist ein Verb?|springen|Sprung|sprunghaft",
"Er ___ gestern ins Kino. (gehen, Präteritum)|ging|geht|gegangen",
"Ich ___ morgen kommen. (Futur)|werde|wurde|war",
"Wir haben gestern Fußball ___. (spielen, Perfekt)|gespielt|gespielen|spielte",
"Sie ___ ein Eis. (essen, Präsens, 3. Person Einzahl)|isst|esst|esse",
"Perfekt von „laufen“ (ich ...)|bin gelaufen|habe gelaufen|bin gelauft",
"Präteritum von „schreiben“ (er ...)|schrieb|schreibte|schreibt",
"Die Grundform von „sie spielten“ ist ...|spielen|spielte|gespielt",
"Welche Zeitform: „Ich habe gegessen.“|Perfekt|Präteritum|Futur",
"Welche Zeitform: „Wir werden schwimmen.“|Futur|Präsens|Perfekt"]);
B("d-wortart","deutsch","Adjektive und Wortarten","🎨",3,6,"<b>Adjektive</b> sagen, wie etwas ist (schnell, groß). Sie lassen sich steigern: schnell – schneller – am schnellsten. <b>Präpositionen</b> (auf, unter) zeigen Orte, <b>Konjunktionen</b> (und, weil) verbinden Sätze.",[
"Welches Wort ist ein Adjektiv?|schnell|Schnee|schneien",
"Steigere „klein“: klein – kleiner – ___|am kleinsten|am kleinesten|kleinster",
"Steigere „gut“: gut – besser – ___|am besten|am gutesten|am bessten",
"Das Gegenteil von „groß“ ist ...|klein|leicht|schwer",
"Welche Wortart ist „unter“?|Präposition|Verb|Adjektiv",
"Welche Wortart ist „und“?|Konjunktion|Nomen|Pronomen",
"Welches Wort ist ein Pronomen?|wir|Wald|laufen",
"Welche Wortart ist „schnelle“ in „der schnelle Hase“?|Adjektiv|Nomen|Verb",
"Ergänze: ein ___ Haus (groß)|großes|großer|große",
"Welches Wort ist eine Präposition?|auf|singen|bunt"]);
B("d-rs","deutsch","Rechtschreibung","✏️",2,8,"Merke dir typische Fälle: <b>ie</b> (Tier, Wiese), <b>Doppelkonsonant</b> nach kurzem Vokal (Mitte), <b>ß</b> nach langem Vokal (Fuß, Straße). <b>das</b> kannst du durch „dieses/welches“ ersetzen, <b>dass</b> nicht.",[
"Welches Wort ist richtig geschrieben?|Mitte|Mite|Mitthe",
"Richtig geschrieben:|Wiese|Wise|Wihse",
"Richtig geschrieben:|Straße|Strase|Strasße",
"Richtig geschrieben:|Fahrrad|Farrad|Fahrad",
"Richtig geschrieben:|Käfer|Kefer|Kaefer",
"Richtig geschrieben:|Bäcker|Beker|Bekker",
"Richtig geschrieben:|Tier|Tir|Thier",
"Richtig geschrieben:|Fuß|Fus|Fuhs",
"Richtig geschrieben:|Mädchen|Medchen|Mädschen",
"Richtig geschrieben:|vielleicht|filleicht|vieleicht",
"Ich weiß, ___ du kommst.|dass|das|daß|?Kannst du „dieses“ einsetzen? Nein → dass.",
"___ Auto ist rot.|Das|Dass|?„Dieses Auto ist rot“ geht, also „das“."]);
B("d-fall","deutsch","Satzglieder und Fälle","🧩",4,8,"Fragen: <b>Nominativ</b> Wer oder was? · <b>Genitiv</b> Wessen? · <b>Dativ</b> Wem? · <b>Akkusativ</b> Wen oder was? Das Subjekt steht im Nominativ, das Prädikat ist das Verb.",[
"Wie fragst du nach dem Nominativ?|Wer oder was?|Wem?|Wen oder was?",
"Wie fragst du nach dem Dativ?|Wem?|Wessen?|Wen oder was?",
"Wie fragst du nach dem Akkusativ?|Wen oder was?|Wer oder was?|Wessen?",
"Wie fragst du nach dem Genitiv?|Wessen?|Wem?|Wer oder was?",
"Der Hund jagt den Ball. Welches Satzglied ist „den Ball“?|Akkusativobjekt|Subjekt|Dativobjekt",
"Ich gebe dem Kind einen Apfel. In welchem Fall steht „dem Kind“?|Dativ|Akkusativ|Genitiv",
"Was ist das Subjekt in „Die Katze schläft auf dem Sofa.“?|Die Katze|auf dem Sofa|schläft",
"Welcher Fall folgt auf die Präposition „mit“?|Dativ|Akkusativ|Genitiv",
"Das Buch ___ Lehrers. (Genitiv)|des|dem|den",
"Was ist das Prädikat in „Lena singt ein Lied.“?|singt|Lena|ein Lied"]);
B("d-zeichen","deutsch","Zeichensetzung","❗",4,9,"Vor <b>aber, weil, dass, wenn</b> steht ein Komma. Bei <b>Aufzählungen</b> trennst du mit Komma, vor „und/oder“ steht keins. Wörtliche Rede steht in Anführungszeichen, davor ein Doppelpunkt.",[
"Welches Zeichen steht am Ende einer Frage?|?|.|!",
"Welcher Satz ist richtig?|Er sagte: „Ich komme gleich.“|Er sagte „Ich komme gleich.“|Er sagte: Ich komme gleich.",
"Vor welchem Wort steht ein Komma? Ich bleibe zu Hause, ___ es regnet.|weil|und|oder",
"Welcher Satz ist richtig?|Ich mag Äpfel, Birnen und Bananen.|Ich mag Äpfel Birnen, und Bananen.|Ich mag, Äpfel Birnen und Bananen.",
"Welcher Satz ist richtig?|Wenn es regnet, bleibe ich zu Hause.|Wenn es regnet bleibe ich, zu Hause.|Wenn, es regnet bleibe ich zu Hause.",
"Welches Zeichen passt nach einem Ausruf („Hilf mir“)?|!|?|,",
"Vor „aber“ steht ...|ein Komma|ein Punkt|kein Zeichen",
"Welcher Satz ist richtig?|Ich weiß, dass du kommst.|Ich weiß dass, du kommst.|Ich weiß dass du, kommst."]);
B("d-lit","deutsch","Literatur und Stilmittel","📖",7,13,"<b>Metapher</b>: Bild ohne „wie“. <b>Vergleich</b>: mit „wie“. <b>Personifikation</b>: Dinge handeln wie Menschen. <b>Alliteration</b>: gleiche Anfangslaute. Gattungen: <b>Lyrik, Epik, Dramatik</b>.",[
"Was ist eine Metapher?|Ein Bild ohne „wie“ („Zeit ist Geld“)|Ein Vergleich mit „wie“|Eine Übertreibung",
"„Er ist stark wie ein Bär.“ ist ein ...|Vergleich|Metapher|Ironie",
"„Der Wind flüstert durch die Bäume.“ ist eine ...|Personifikation|Alliteration|Anapher",
"„Milch macht müde Männer munter.“ ist eine ...|Alliteration|Metapher|Antithese",
"Welche Gattung hat Verse und Strophen?|Lyrik|Epik|Dramatik",
"Welche Gattung ist für die Bühne geschrieben?|Dramatik|Lyrik|Epik",
"Wer erzählt in einem Text mit „ich“?|Ich-Erzähler|Auktorialer Erzähler|Personaler Erzähler",
"Wiederholung desselben Wortes am Satzanfang heißt ...|Anapher|Antithese|Hyperbel",
"Eine starke Übertreibung heißt ...|Hyperbel|Euphemismus|Ironie",
"Was ist eine Fabel?|Eine Tiergeschichte mit Lehre|Ein Gedicht|Ein Theaterstück",
"Wer schrieb den „Faust“?|Johann Wolfgang von Goethe|Friedrich Schiller|Thomas Mann"]);

/* ===== ENGLISCH ===== */
B("e-vok1","englisch","Vokabeln: Alltag","🇬🇧",3,6,"Schreibe das englische Wort. Groß- und Kleinschreibung ist egal. Tipp: Sprich das Wort laut und merke dir ein Bild dazu.",[
"T:Hund|dog|?Ein Haustier, das bellt.",
"T:Katze|cat",
"T:Haus|house|?Hier wohnst du.",
"T:Schule|school",
"T:Apfel|apple",
"T:Wasser|water",
"T:Buch|book",
"T:Freund|friend",
"T:rot|red",
"T:Mutter|mother/mum/mom",
"T:Tisch|table",
"T:Auto|car",
"T:Lehrer|teacher/the teacher",
"T:Brot|bread",
"T:Fenster|window"]);
B("e-vok2","englisch","Vokabeln: Zeit und Zahlen","📅",3,6,"Die Wochentage und Monate schreibt man im Englischen <b>immer groß</b>: Monday, January.",[
"T:Montag|Monday",
"T:Dienstag|Tuesday",
"T:Mittwoch|Wednesday",
"T:Donnerstag|Thursday",
"T:Freitag|Friday",
"T:zwölf|twelve",
"T:zwanzig|twenty",
"T:Frühling|spring",
"T:Sommer|summer",
"T:Winter|winter"]);
B("e-sp","englisch","to be und Simple Present","🔤",5,7,"<b>I am, you are, he/she/it is, we/you/they are.</b> Im Simple Present bekommt he/she/it ein <b>-s</b> (plays). Frage und Verneinung mit <b>do/does</b> und <b>don't/doesn't</b>.",[
"I ___ twelve years old.|am|is|are",
"She ___ a teacher.|is|are|am",
"They ___ at home.|are|is|am",
"He ___ football every day. (play)|plays|play|playing",
"We ___ TV in the evening. (watch)|watch|watches|watching",
"___ you like pizza?|Do|Does|Are",
"She ___ not like tea.|does|do|is",
"I ___ speak French. (Verneinung)|don't|doesn't|am not",
"How ___ you?|are|is|do",
"My brother ___ two dogs. (have)|has|have|haves"]);
B("e-past","englisch","Simple Past und unregelmäßige Verben","⏪",6,9,"Regelmäßige Verben bekommen <b>-ed</b> (walked). Viele wichtige Verben sind <b>unregelmäßig</b>: go – went – gone, see – saw – seen, buy – bought – bought.",[
"Simple Past von „go“|went|goed|gone",
"Simple Past von „see“|saw|seen|seed",
"Simple Past von „buy“|bought|buyed|boughten",
"Yesterday I ___ to school. (walk)|walked|walk|walking",
"She ___ a letter last week. (write)|wrote|written|writed",
"Did you ___ the film? (like)|like|liked|likes",
"Simple Past von „eat“|ate|eaten|eated",
"He ___ not at home yesterday.|was|were|is",
"Past Participle von „take“|taken|took|taked",
"Simple Past von „make“|made|maked|make"]);
B("e-perf","englisch","Present Perfect und if-Sätze","⏯️",7,10,"<b>Present Perfect</b> = have/has + Partizip (I have seen). Signalwörter: already, yet, ever, never, since, for. <b>If-Sätze</b>: Typ 1 will, Typ 2 would, Typ 3 would have + Partizip.",[
"I have ___ my homework. (do)|done|did|do",
"She ___ lived here since 2010.|has|have|is",
"Welches Signalwort passt zum Present Perfect?|already|yesterday|last week",
"If it rains, we ___ at home. (stay)|will stay|would stay|stayed",
"If I were rich, I ___ a big house. (buy)|would buy|will buy|bought",
"If she had studied, she ___ the test.|would have passed|will pass|passed",
"Welcher Satz ist richtig?|I have never seen him.|I have never saw him.|I seen never him.",
"He has ___ finished his work.|already|yet|ago",
"When I ___ home, I will call you. (get)|get|will get|got",
"Present Perfect von „write“ (she ...)|has written|wrote|has wrote"]);
B("e-passiv","englisch","Passiv, indirekte Rede und Gerund","🔁",9,13,"<b>Passiv</b>: be + Partizip (The cake was baked). <b>Indirekte Rede</b>: Zeitstufe rückt zurück (am → was). Nach enjoy, suggest, avoid folgt das <b>Gerund (-ing)</b>, nach want, decide der Infinitiv mit <b>to</b>.",[
"The cake ___ by my mother. (bake, Past Passive)|was baked|baked|was baking",
"English ___ all over the world. (speak, Present Passive)|is spoken|speaks|is speaking",
"The window ___ yesterday. (break)|was broken|broke|is broken",
"He said, „I am tired.“ → He said that he ___ tired.|was|is|were",
"She asked, „Where do you live?“ → She asked me where I ___.|lived|live|do live",
"The letters ___ already.|have been written|have written|has been written",
"I enjoy ___ music. (listen)|listening|to listen|listen",
"He wants ___ a doctor. (become)|to become|becoming|become",
"She suggested ___ to the cinema. (go)|going|to go|go",
"You ___ smoke here. (nicht erlaubt)|mustn't|don't have to|can"]);
B("e-land","englisch","Landeskunde: Großbritannien und USA","🗽",7,13,"Das Vereinigte Königreich besteht aus England, Schottland, Wales und Nordirland. Die USA haben 50 Bundesstaaten und Washington, D.C. als Hauptstadt.",[
"Hauptstadt von Großbritannien|London|Dublin|Edinburgh",
"Hauptstadt von Schottland|Edinburgh|Cardiff|Belfast",
"Hauptstadt von Wales|Cardiff|Belfast|Dublin",
"Hauptstadt der USA|Washington, D.C.|New York|Los Angeles",
"Wie heißt der britische Regierungschef?|Prime Minister|President|Chancellor",
"Wie viele Bundesstaaten haben die USA?|50|48|52",
"Welcher Fluss fließt durch London?|Themse (Thames)|Severn|Mersey",
"Wo steht die Freiheitsstatue?|New York|Washington|Boston",
"Wer war der erste Präsident der USA?|George Washington|Abraham Lincoln|Thomas Jefferson",
"Welche Länder gehören zum Vereinigten Königreich?|England, Schottland, Wales, Nordirland|England, Irland, Wales|Nur England und Schottland"]);

/* ===== SACHUNTERRICHT ===== */
B("s-koerper","sachunterricht","Körper und Ernährung","🍎",1,4,"Unser Körper braucht <b>gesundes Essen, Wasser, Bewegung und Schlaf</b>. Mit den fünf Sinnen nehmen wir die Welt wahr: sehen, hören, riechen, schmecken, fühlen.",[
"Welches Organ pumpt Blut durch den Körper?|Herz|Magen|Lunge",
"Womit atmen wir?|Lunge|Herz|Magen",
"Was gehört zu gesunder Ernährung?|Obst und Gemüse|Nur Süßigkeiten|Nur Fleisch",
"Wie viele Sinne hat der Mensch (klassisch)?|5|3|7",
"Womit riechen wir?|Nase|Ohr|Zunge",
"Wie viele Milchzähne hat ein Kind?|20|32|28",
"Was solltest du nach dem Toilettengang tun?|Hände waschen|Nichts|Sofort essen",
"Welches Lebensmittel liefert viel Calcium?|Milch|Zucker|Chips",
"Was trinkst du am besten?|Wasser|Cola|Limonade"]);
B("s-tiere","sachunterricht","Tiere und Pflanzen","🐞",1,4,"Pflanzen brauchen <b>Licht, Wasser und Erde</b>. Tiere kann man ordnen: Säugetiere, Vögel, Fische, Insekten (6 Beine), Spinnen (8 Beine).",[
"Welches Tier legt Eier?|Huhn|Kuh|Hund",
"Welches Tier ist ein Säugetier?|Delfin|Hai|Frosch",
"Aus einer Raupe wird ein ...|Schmetterling|Käfer|Frosch",
"Was brauchen Pflanzen zum Wachsen?|Licht, Wasser, Erde|Nur Dunkelheit|Nur Zucker",
"Wie heißt das Junge vom Pferd?|Fohlen|Kalb|Ferkel",
"Wie heißt das Junge von der Kuh?|Kalb|Fohlen|Lamm",
"Welches Tier hält Winterschlaf?|Igel|Hase|Reh",
"Welcher Teil der Pflanze steckt in der Erde?|Wurzel|Blüte|Blatt",
"Welches Tier lebt im Wasser und atmet mit Kiemen?|Fisch|Frosch|Ente",
"Insekten haben ... Beine.|6|8|4",
"Spinnen haben ... Beine.|8|6|10"]);
B("s-zeit","sachunterricht","Zeit, Uhr und Kalender","📆",1,4,"Eine Woche hat <b>7 Tage</b>, ein Jahr <b>12 Monate</b> und <b>365 Tage</b>. Eine Stunde hat 60 Minuten, eine Minute 60 Sekunden.",[
"Wie viele Tage hat eine Woche?|7|5|10",
"Wie viele Monate hat ein Jahr?|12|10|11",
"Wie viele Minuten hat eine Stunde?|60|100|30",
"Welcher Monat kommt nach März?|April|Mai|Februar",
"Wie viele Tage hat ein normales Jahr?|365|360|366",
"In welcher Jahreszeit fallen die Blätter?|Herbst|Frühling|Sommer",
"Welcher Wochentag kommt nach Mittwoch?|Donnerstag|Freitag|Dienstag",
"Wie viele Sekunden hat eine Minute?|60|100|30",
"Der kürzeste Monat ist der ...|Februar|Juni|April"]);
B("s-verkehr","sachunterricht","Verkehr und Fahrrad","🚲",1,4,"Vor dem Überqueren der Straße: <b>stehen bleiben, links, rechts, links schauen</b>. Am Fahrrad braucht man Licht, Klingel, Bremsen und einen Helm.",[
"Welche Ampelfarbe bedeutet „Halt“?|Rot|Grün|Gelb",
"Wo gehst du am sichersten über die Straße?|Am Zebrastreifen|Hinter einem Auto|Zwischen parkenden Autos",
"Was tust du vor dem Überqueren?|Links, rechts, links schauen|Rennen|Die Augen zumachen",
"Welche Farbe hat das Licht vorne am Fahrrad?|Weiß|Blau|Grün",
"Was trägst du beim Radfahren zum Schutz?|Helm|Mütze|Schal",
"Was bedeutet ein dreieckiges Schild mit rotem Rand?|Gefahr / Warnung|Parken erlaubt|Vorfahrt",
"Ein rundes blaues Schild ist ein ...|Gebotsschild|Verbotsschild|Warnschild"]);
B("s-wetter","sachunterricht","Wetter, Wasser und Luft","🌦️",1,4,"Wasser kann <b>fest (Eis), flüssig und gasförmig (Dampf)</b> sein. Im Wasserkreislauf verdunstet Wasser, bildet Wolken und fällt als Regen zurück.",[
"Wie nennt man Wasser als Gas?|Wasserdampf|Eis|Tau",
"Wasser gefriert bei ...|0 °C|10 °C|100 °C",
"Was misst ein Thermometer?|Temperatur|Regen|Wind",
"Was entsteht, wenn Wasser in Wolken zu schwer wird?|Regen|Wind|Nebel",
"Wie heißt der Kreislauf des Wassers?|Wasserkreislauf|Luftkreislauf|Windkreislauf",
"Was misst ein Regenmesser?|Niederschlag|Temperatur|Luftdruck",
"Luft besteht zum großen Teil aus ...|Stickstoff|Wasserstoff|Helium",
"Welches Gas brauchen wir zum Atmen?|Sauerstoff|Kohlenstoffdioxid|Stickstoff",
"Was ist Wind?|Bewegte Luft|Heißes Wasser|Kalte Erde"]);
B("s-technik","sachunterricht","Technik und Medien","💡",2,4,"Strom fließt durch <b>Leiter</b> wie Metall, <b>Isolatoren</b> wie Holz oder Plastik leiten nicht. Im Internet gibst du nie Passwörter oder deine Adresse preis.",[
"Was braucht eine Lampe zum Leuchten?|Strom|Wind|Wasser",
"Welches Material leitet Strom?|Metall|Holz|Plastik",
"Was erfand Gutenberg?|Buchdruck|Fernseher|Telefon",
"Was solltest du im Internet nicht verraten?|Passwörter und Adresse|Lieblingsfarbe|Lieblingstier",
"Wie heißt die Energie aus Sonnenlicht?|Solarenergie|Windenergie|Kohle",
"Energie aus Wind heißt ...|Windenergie|Solarenergie|Atomkraft",
"Woraus wird Glas hauptsächlich gemacht?|Sand|Holz|Ton"]);

/* ===== BIOLOGIE ===== */
B("b-wirbel","biologie","Wirbeltiere","🐟",5,6,"Wirbeltiere haben eine <b>Wirbelsäule</b>. Fünf Klassen: Fische (Kiemen, Schuppen), Amphibien (feuchte Haut), Reptilien (trockene Schuppenhaut), Vögel (Federn), Säugetiere (Fell, säugen Junge).",[
"Welche Tiergruppe legt Eier und hat Federn?|Vögel|Säugetiere|Reptilien",
"Welche Wirbeltiere atmen mit Kiemen?|Fische|Reptilien|Vögel",
"Welche Tiere säugen ihre Jungen?|Säugetiere|Vögel|Amphibien",
"Welche Tiere haben eine feuchte, nackte Haut und leben an Land und im Wasser?|Amphibien|Reptilien|Fische",
"Schlangen gehören zu den ...|Reptilien|Amphibien|Säugetieren",
"Wale sind ...|Säugetiere|Fische|Amphibien",
"Welche Tiere sind wechselwarm?|Fische, Amphibien, Reptilien|Vögel und Säugetiere|Nur Säugetiere",
"Wie heißt die Jungform eines Frosches?|Kaulquappe|Raupe|Puppe",
"Welches Tier ist kein Wirbeltier?|Regenwurm|Frosch|Eidechse",
"Womit ist der Körper der Fische bedeckt?|Schuppen|Federn|Fell"]);
B("b-pflanze","biologie","Pflanzen und Photosynthese","🌱",5,8,"Bei der <b>Photosynthese</b> bilden Pflanzen aus Wasser und Kohlenstoffdioxid mit Hilfe von <b>Licht</b> Zucker und Sauerstoff. Sie läuft in den <b>Chloroplasten</b> ab.",[
"Welcher Pflanzenteil nimmt Wasser aus dem Boden auf?|Wurzel|Blatt|Blüte",
"Wofür sind Blüten wichtig?|Fortpflanzung|Wasseraufnahme|Photosynthese",
"Was brauchen Pflanzen für die Photosynthese?|Licht, Wasser und Kohlenstoffdioxid|Sauerstoff und Zucker|Nur Wasser",
"Welches Gas geben Pflanzen bei der Photosynthese ab?|Sauerstoff|Kohlenstoffdioxid|Stickstoff",
"Wo findet die Photosynthese statt?|In den Chloroplasten|Im Zellkern|In der Zellwand",
"Welcher Stoff macht Blätter grün?|Chlorophyll|Zucker|Stärke",
"Welcher Teil der Blüte enthält die Pollen?|Staubblatt|Stempel|Kelchblatt",
"Wie nennt man die Übertragung von Pollen auf die Narbe?|Bestäubung|Keimung|Photosynthese"]);
B("b-mensch","biologie","Der Mensch: Körper und Organe","🫀",5,8,"Das <b>Herz</b> pumpt Blut durch Arterien und Venen, in der <b>Lunge</b> findet der Gasaustausch statt, im <b>Dünndarm</b> werden Nährstoffe aufgenommen, die <b>Niere</b> filtert das Blut.",[
"Welches Organ pumpt das Blut?|Herz|Lunge|Leber",
"Wo findet der Gasaustausch statt?|In den Lungenbläschen|Im Magen|Im Dünndarm",
"Welches Organ filtert das Blut und bildet Urin?|Niere|Leber|Milz",
"Wo werden die meisten Nährstoffe aufgenommen?|Im Dünndarm|Im Magen|In der Speiseröhre",
"Wie viele Zähne hat ein Erwachsener (mit Weisheitszähnen)?|32|28|36",
"Welche Blutzellen transportieren Sauerstoff?|Rote Blutkörperchen|Weiße Blutkörperchen|Blutplättchen",
"Welche Blutzellen bekämpfen Krankheitserreger?|Weiße Blutkörperchen|Rote Blutkörperchen|Blutplättchen",
"Welches Organ steuert den Körper?|Gehirn|Herz|Magen",
"Wie heißen Blutgefäße, die vom Herzen wegführen?|Arterien|Venen|Kapillaren",
"Wie viele Knochen hat ein Erwachsener ungefähr?|206|106|306"]);
B("b-zelle","biologie","Zelle und Stoffwechsel","🔬",7,10,"Tierische und pflanzliche Zellen haben <b>Zellkern, Zellmembran und Mitochondrien</b>. Pflanzenzellen haben zusätzlich <b>Zellwand, Chloroplasten und Vakuole</b>. In den Mitochondrien läuft die Zellatmung.",[
"Welcher Zellbestandteil enthält die Erbinformation?|Zellkern|Vakuole|Zellwand",
"Welches Zellorganell stellt Energie bereit?|Mitochondrium|Chloroplast|Ribosom",
"Welche Zellen haben eine Zellwand?|Pflanzenzellen|Tierzellen|Rote Blutkörperchen",
"Wofür sind Ribosomen zuständig?|Eiweißherstellung|Photosynthese|Zellteilung",
"Welche Stoffe werden bei der Zellatmung verbraucht?|Glucose und Sauerstoff|Wasser und Licht|Stärke und Stickstoff",
"Welche Aufgabe hat die Zellmembran?|Sie begrenzt die Zelle und regelt den Stoffaustausch|Sie speichert Erbgut|Sie bildet Zucker",
"Enzyme sind ...|Biokatalysatoren|Zellkerne|Vitamine",
"Was entsteht bei der Zellatmung?|Kohlenstoffdioxid, Wasser und Energie|Sauerstoff und Zucker|Stärke",
"Was ist Diffusion?|Teilchenbewegung vom hohen zum niedrigen Konzentrationsbereich|Zellteilung|Verdauung"]);
B("b-gen","biologie","Genetik, Evolution und Ökologie","🧬",9,13,"Die Erbinformation steckt in der <b>DNA</b> (Basen A-T und G-C). Mendel entdeckte die Vererbungsregeln, Darwin die <b>Selektion</b>. In Ökosystemen gibt es <b>Produzenten, Konsumenten und Destruenten</b>.",[
"Wie viele Chromosomen hat der Mensch in einer Körperzelle?|46|23|44",
"Wie heißt die Erbsubstanz?|DNA|ATP|NADH",
"Welche Basen paaren sich in der DNA?|A-T und G-C|A-G und T-C|A-C und T-G",
"Wer begründete die Vererbungsregeln?|Gregor Mendel|Charles Darwin|Louis Pasteur",
"Wer begründete die Theorie der natürlichen Selektion?|Charles Darwin|Gregor Mendel|Robert Koch",
"Ein Organismus mit zwei gleichen Allelen heißt ...|homozygot|heterozygot|dominant",
"Was ist ein Ökosystem?|Lebensgemeinschaft und ihr Lebensraum|Eine einzelne Art|Ein Futternetz",
"Pflanzen sind im Ökosystem ...|Produzenten|Konsumenten|Destruenten",
"Wer Pflanzen frisst, ist ein ...|Konsument 1. Ordnung|Produzent|Destruent",
"Pilze und Bakterien, die Totes zersetzen, sind ...|Destruenten|Produzenten|Konsumenten"]);

/* ===== PHYSIK ===== */
B("p-strom","physik","Strom und Magnetismus","⚡",5,8,"<b>Spannung U</b> (Volt), <b>Stromstärke I</b> (Ampere), <b>Widerstand R</b> (Ohm). Ohmsches Gesetz: <b>U = R · I</b>. Gleiche Magnetpole stoßen sich ab, verschiedene ziehen sich an.",[
"Welche Einheit hat die elektrische Spannung?|Volt|Ampere|Ohm",
"Welche Einheit hat die Stromstärke?|Ampere|Volt|Watt",
"Welche Einheit hat der Widerstand?|Ohm|Volt|Joule",
"Wie lautet das Ohmsche Gesetz?|U = R · I|U = R : I|I = U · R",
"Welche Magnetpole ziehen sich an?|Nord und Süd|Nord und Nord|Süd und Süd",
"Welches Material leitet Strom gut?|Kupfer|Gummi|Glas",
"Welche Schaltung teilt den Strom auf?|Parallelschaltung|Reihenschaltung|Kettenschaltung",
"Bei einer Reihenschaltung ist die Stromstärke ...|überall gleich|überall verschieden|null",
"Die elektrische Leistung berechnet man mit ...|P = U · I|P = U + I|P = I : U"]);
B("p-licht","physik","Licht, Optik und Schall","🔦",5,9,"Licht breitet sich geradlinig aus (etwa <b>300 000 km/s</b>). Am Spiegel gilt: <b>Einfallswinkel = Ausfallswinkel</b>. Schall braucht ein Medium. Die Frequenz misst man in Hertz.",[
"Wie schnell ist Licht ungefähr?|300 000 km/s|300 km/s|30 000 km/h",
"Was entsteht, wenn Licht auf einen undurchsichtigen Körper trifft?|Schatten|Spiegelbild|Regenbogen",
"Beim Spiegel gilt: Einfallswinkel = ...|Ausfallswinkel|Brechungswinkel|Nullwinkel",
"Welche Linse sammelt Licht?|Sammellinse|Zerstreuungslinse|Planspiegel",
"Wie nennt man das Zerlegen weißen Lichts in Farben?|Dispersion|Reflexion|Absorption",
"Schall braucht zur Ausbreitung ...|ein Medium (z. B. Luft)|ein Vakuum|Licht",
"Die Einheit der Frequenz ist ...|Hertz|Dezibel|Newton",
"Die Einheit der Lautstärke ist ...|Dezibel|Hertz|Watt",
"Hohe Töne haben eine ...|hohe Frequenz|niedrige Frequenz|geringe Lautstärke"]);
B("p-kraft","physik","Kraft, Energie und Bewegung","🚀",6,10,"<b>v = s : t</b>, <b>F = m · g</b> (g ≈ 9,8 m/s²), <b>p = F : A</b>, <b>W = F · s</b>. Energie geht nie verloren, sie wird nur <b>umgewandelt</b>.",[
"Welche Einheit hat die Kraft?|Newton|Joule|Watt",
"Welche Einheit hat die Energie?|Joule|Newton|Pascal",
"Geschwindigkeit berechnet man mit ...|v = s : t|v = s · t|v = t : s",
"Ein Auto fährt 120 km in 2 Stunden. Seine Geschwindigkeit?|60 km/h|240 km/h|120 km/h",
"Druck berechnet man mit ...|p = F : A|p = F · A|p = A : F",
"Was besagt der Energieerhaltungssatz?|Energie wird nur umgewandelt|Energie verschwindet bei Reibung|Energie entsteht aus nichts",
"Die Gewichtskraft berechnet man mit ...|F = m · g|F = m : g|F = g : m",
"Wie groß ist g auf der Erde ungefähr?|9,8 m/s²|98 m/s²|0,98 m/s²",
"Mechanische Arbeit berechnet man mit ...|W = F · s|W = F : s|W = s : F"]);
B("p-waerme","physik","Wärme und Atome","🌡️",6,10,"Wasser gefriert bei <b>0 °C</b> und siedet bei <b>100 °C</b>. Wärme fließt immer von <b>warm nach kalt</b>. Atome bestehen aus <b>Protonen (+), Neutronen (0) und Elektronen (−)</b>.",[
"Bei wie viel °C gefriert Wasser?|0 °C|100 °C|−10 °C",
"Bei wie viel °C siedet Wasser (normaler Druck)?|100 °C|90 °C|120 °C",
"Wie heißt der Übergang fest → flüssig?|Schmelzen|Verdampfen|Erstarren",
"Wie heißt der Übergang flüssig → gasförmig?|Verdampfen|Kondensieren|Sublimieren",
"Der absolute Nullpunkt liegt bei ...|−273,15 °C|0 °C|−100 °C",
"Wärme fließt von ... nach ...|warm nach kalt|kalt nach warm|ist egal",
"Welche gehört zu den Arten der Wärmeübertragung?|Wärmeleitung|Schallleitung|Lichtleitung",
"Aus welchen Bausteinen besteht ein Atom?|Protonen, Neutronen, Elektronen|Nur Protonen|Molekülen",
"Welche Ladung hat ein Elektron?|negativ|positiv|keine"]);

/* ===== CHEMIE ===== */
B("c-stoff","chemie","Stoffe und Gemische","🧪",7,8,"<b>Reinstoffe</b> (Elemente und Verbindungen) haben feste Eigenschaften. <b>Gemische</b> trennt man durch Filtrieren, Eindampfen oder Destillieren.",[
"Salzwasser ist ein ...|Gemisch|Reinstoff|Element",
"Wie trennt man Sand und Wasser?|Filtrieren|Destillieren|Eindampfen",
"Wie gewinnt man Salz aus Salzwasser?|Eindampfen|Filtrieren|Mit einem Magneten",
"Welcher Stoff ist ein Element?|Sauerstoff|Wasser|Kochsalz",
"Wasser ist ...|eine Verbindung|ein Element|ein Gemisch",
"Kochsalz hat die Formel ...|NaCl|KCl|CaCl",
"Wie nennt man den Übergang gasförmig → fest?|Resublimieren|Kondensieren|Erstarren",
"Welches Trennverfahren nutzt unterschiedliche Siedepunkte?|Destillation|Filtration|Sedimentation",
"Gold ist ein ...|Metall|Nichtmetall|Gas"]);
B("c-atom","chemie","Atome und Periodensystem","⚛️",7,10,"Die <b>Ordnungszahl</b> gibt die Zahl der Protonen an. Im Periodensystem stehen die <b>Alkalimetalle in der 1. Hauptgruppe</b>, die <b>Edelgase in der 8.</b>",[
"Wie viele Protonen hat Kohlenstoff (C)?|6|12|8",
"Das Symbol für Sauerstoff ist ...|O|S|Ox",
"Das Symbol für Eisen ist ...|Fe|Ei|Ir",
"Das Symbol für Natrium ist ...|Na|N|Nm",
"Das Symbol für Kalium ist ...|K|Ka|P",
"Edelgase stehen in der ...|8. Hauptgruppe|1. Hauptgruppe|7. Hauptgruppe",
"Alkalimetalle stehen in der ...|1. Hauptgruppe|2. Hauptgruppe|8. Hauptgruppe",
"Wo befinden sich die Elektronen im Atom?|In der Hülle|Im Kern|Gar nicht",
"Die Ordnungszahl gibt an ...|die Anzahl der Protonen|die Anzahl der Neutronen|die Masse",
"Das Symbol für Wasserstoff ist ...|H|W|Ws"]);
B("c-reakt","chemie","Reaktionen, Säuren und Basen","💥",8,13,"pH 7 ist <b>neutral</b>, kleiner als 7 <b>sauer</b>, größer als 7 <b>basisch</b>. Säure + Base → <b>Neutralisation</b>. Bei der <b>Oxidation</b> werden Elektronen abgegeben.",[
"Was entsteht bei der Verbrennung von Kohlenstoff mit Sauerstoff?|Kohlenstoffdioxid|Methan|Ozon",
"Ein pH-Wert von 3 ist ...|sauer|neutral|basisch",
"Ein pH-Wert von 7 ist ...|neutral|sauer|basisch",
"Welche Farbe hat Universalindikator in saurer Lösung?|rot|blau|grün",
"Die Formel von Wasser ist ...|H₂O|H₂O₂|HO₂",
"Die Formel von Kohlenstoffdioxid ist ...|CO₂|CO|C₂O",
"Wie heißt die Reaktion von Säure mit Base?|Neutralisation|Oxidation|Reduktion",
"Bei einer Oxidation werden Elektronen ...|abgegeben|aufgenommen|nicht verändert",
"Salzsäure hat die Formel ...|HCl|NaCl|H₂SO₄",
"Die Formel von Methan ist ...|CH₄|C₂H₆|CO₂"]);

/* ===== GESCHICHTE ===== */
B("g-antike","geschichte","Vorgeschichte und Antike","🏛️",5,13,"Steinzeit → Bronzezeit → Eisenzeit. In <b>Athen</b> entstand die Demokratie, <b>Rom</b> wurde unter <b>Augustus</b> Kaiserreich, in Ägypten herrschten die <b>Pharaonen</b>.",[
"Welches Material gab der Steinzeit ihren Namen?|Stein|Eisen|Bronze",
"Wo entstand die Demokratie?|Im antiken Athen|In Rom|In Ägypten",
"Wer war der erste römische Kaiser?|Augustus|Cäsar|Nero",
"Wie hießen die Herrscher im alten Ägypten?|Pharaonen|Sultane|Zaren",
"Wo stand das Kolosseum?|Rom|Athen|Alexandria",
"Wann endete das Weströmische Reich?|476 n. Chr.|1492|800 n. Chr.",
"Was bedeutet „Demokratie“ wörtlich?|Herrschaft des Volkes|Herrschaft der Wenigen|Herrschaft eines Königs",
"Wie hieß die Schrift im alten Ägypten?|Hieroglyphen|Keilschrift|Runen",
"Wo fanden die Olympischen Spiele der Antike statt?|Olympia|Athen|Sparta"]);
B("g-mittel","geschichte","Mittelalter","🏰",5,13,"Im Mittelalter prägten <b>Lehnswesen, Burgen, Klöster und Städte</b> das Leben. <b>Karl der Große</b> wurde im Jahr 800 zum Kaiser gekrönt. Um 1350 wütete die <b>Pest</b>.",[
"Wer wurde im Jahr 800 zum Kaiser gekrönt?|Karl der Große|Otto der Große|Friedrich Barbarossa",
"Wie nennt man das System aus Land gegen Dienst?|Lehnswesen|Kapitalismus|Merkantilismus",
"Wer lebte in einer Burg?|Ritter und Adel|Bauern|Handwerker",
"Was waren die Kreuzzüge?|Kriegszüge ins Heilige Land|Pilgerreisen nach Rom|Bauernaufstände",
"Wann wütete die Pest in Europa besonders stark?|Um 1350|Um 800|Um 1700",
"Wer erfand den Buchdruck mit beweglichen Lettern?|Johannes Gutenberg|Martin Luther|Albrecht Dürer",
"Wo lebten Handwerker und Kaufleute?|In Städten|In Burgen|In Klöstern"]);
B("g-neuzeit","geschichte","Neuzeit","⚙️",6,13,"<b>1492</b> Kolumbus, <b>1517</b> Reformation, <b>1789</b> Französische Revolution, <b>1848</b> Märzrevolution, <b>1871</b> Kaiserreich. Die <b>Industrialisierung</b> begann mit der Dampfmaschine.",[
"Wer löste 1517 die Reformation aus?|Martin Luther|Thomas Müntzer|Papst Leo X.",
"Wann entdeckte Kolumbus Amerika?|1492|1392|1592",
"Wann begann die Französische Revolution?|1789|1689|1848",
"Wann wurde das Deutsche Kaiserreich gegründet?|1871|1848|1918",
"Was war die Industrialisierung?|Umstellung auf Maschinen und Fabriken|Entdeckung Amerikas|Ein Krieg",
"Welche Erfindung stand am Anfang der Industrialisierung?|Dampfmaschine|Radio|Fernseher",
"Der Dreißigjährige Krieg endete mit dem ...|Westfälischen Frieden (1648)|Wiener Kongress|Versailler Vertrag",
"Wer war Napoleon?|Französischer Kaiser|Preußischer König|Russischer Zar",
"Wann war die Märzrevolution?|1848|1789|1871"]);
B("g-20jh","geschichte","Das 20. Jahrhundert","🕊️",8,13,"<b>1914–1918</b> Erster Weltkrieg, <b>1933</b> NS-Machtübernahme, <b>1939–1945</b> Zweiter Weltkrieg, <b>1949</b> Gründung von BRD und DDR, <b>1961</b> Mauerbau, <b>1989</b> Mauerfall, <b>1990</b> Wiedervereinigung.",[
"Wann begann der Erste Weltkrieg?|1914|1939|1918",
"Wann endete der Zweite Weltkrieg in Europa?|1945|1939|1949",
"Wann kamen die Nationalsozialisten an die Macht?|1933|1923|1939",
"Wann wurde die Berliner Mauer gebaut?|1961|1949|1989",
"Wann fiel die Berliner Mauer?|1989|1990|1961",
"Wann wurde Deutschland wiedervereinigt?|1990|1989|1991",
"Wann wurde die Bundesrepublik gegründet?|1949|1945|1955",
"Welcher Vertrag beendete den Ersten Weltkrieg für Deutschland?|Versailler Vertrag|Potsdamer Abkommen|Westfälischer Friede",
"Wie nennt man die Konfrontation der Machtblöcke nach 1945?|Kalter Krieg|Dreißigjähriger Krieg|Siebenjähriger Krieg"]);

/* ===== GEOGRAPHIE ===== */
B("geo-d","geographie","Deutschland","🇩🇪",3,8,"Deutschland hat <b>16 Bundesländer</b> und die Hauptstadt <b>Berlin</b>. Im Norden liegen Nord- und Ostsee, im Süden die Alpen mit der <b>Zugspitze</b> (höchster Berg).",[
"Hauptstadt von Deutschland?|Berlin|Bonn|Hamburg",
"Wie viele Bundesländer hat Deutschland?|16|14|12",
"Welches Bundesland hat die größte Fläche?|Bayern|Niedersachsen|Nordrhein-Westfalen",
"Der höchste Berg Deutschlands ist ...|Zugspitze|Brocken|Feldberg",
"Welcher Fluss fließt durch Köln?|Rhein|Elbe|Donau",
"Hauptstadt von Bayern?|München|Nürnberg|Augsburg",
"Welche Meere liegen im Norden Deutschlands?|Nordsee und Ostsee|Mittelmeer|Schwarzes Meer",
"Hauptstadt von Nordrhein-Westfalen?|Düsseldorf|Köln|Dortmund",
"Welche Stadt gehört zum Ruhrgebiet?|Gelsenkirchen|Freiburg|Rostock"]);
B("geo-eu","geographie","Europa","🇪🇺",4,9,"Europa hat viele Staaten mit eigenen Hauptstädten. Die <b>EU</b> hat 27 Mitgliedstaaten. Der Ural trennt Europa von Asien.",[
"Hauptstadt von Frankreich?|Paris|Lyon|Marseille",
"Hauptstadt von Italien?|Rom|Mailand|Neapel",
"Hauptstadt von Spanien?|Madrid|Barcelona|Sevilla",
"Hauptstadt von Polen?|Warschau|Krakau|Danzig",
"Hauptstadt von Österreich?|Wien|Salzburg|Graz",
"Hauptstadt der Schweiz?|Bern|Zürich|Genf",
"Welcher Fluss ist der längste Europas?|Wolga|Donau|Rhein",
"Welches Gebirge trennt Europa und Asien?|Ural|Alpen|Pyrenäen",
"Hauptstadt von Griechenland?|Athen|Thessaloniki|Rom",
"Wie viele Mitgliedstaaten hat die EU?|27|28|25"]);
B("geo-erde","geographie","Erde, Klima und Geozonen","🌍",5,13,"Die Erde hat <b>7 Kontinente</b> und 5 Ozeane. Der <b>Äquator</b> liegt bei 0° Breite. Jahreszeiten entstehen durch die <b>geneigte Erdachse</b>. Klimazonen: Tropen, Subtropen, gemäßigte Zone, Polarzone.",[
"Wie viele Kontinente gibt es (üblich)?|7|5|9",
"Welcher ist der größte Ozean?|Pazifik|Atlantik|Indischer Ozean",
"Wo liegt der Äquator?|Bei 0° Breite|Bei 0° Länge|Bei 90° Nord",
"Welche Klimazone liegt am Äquator?|Tropen|Subtropen|Polarzone",
"Warum gibt es Jahreszeiten?|Die Erdachse ist geneigt|Die Erde ist unterschiedlich weit von der Sonne entfernt|Der Mond bewegt sich",
"Welche ist die größte Hitzewüste?|Sahara|Gobi|Kalahari",
"Worauf liegen die Kontinente?|Lithosphärenplatten|Eisschollen|Magmakammern",
"Welcher Kontinent ist am größten?|Asien|Afrika|Nordamerika",
"Welcher Berg ist der höchste der Erde?|Mount Everest|K2|Mont Blanc",
"Welche Gase verstärken den Treibhauseffekt?|Kohlenstoffdioxid und Methan|Stickstoff und Argon|Wasserstoff und Helium"]);

/* ===== MUSIK ===== */
B("m-instr","musik","Instrumente","🎻",3,8,"Instrumentengruppen: <b>Streicher</b> (Geige), <b>Holzbläser</b> (Klarinette), <b>Blechbläser</b> (Trompete), <b>Schlagzeug</b> (Pauke), <b>Tasteninstrumente</b> (Klavier).",[
"Welches Instrument hat Saiten und wird mit einem Bogen gespielt?|Geige|Trompete|Flöte",
"Welches ist ein Blechblasinstrument?|Trompete|Klarinette|Querflöte",
"Welches ist ein Schlaginstrument?|Pauke|Oboe|Harfe",
"Welches Instrument hat Tasten und Hämmer?|Klavier|Gitarre|Geige",
"Wie viele Saiten hat eine normale Gitarre?|6|4|8",
"Welches Instrument gehört zu den Holzblasinstrumenten?|Klarinette|Posaune|Tuba",
"Wie heißt das größte Streichinstrument im Orchester?|Kontrabass|Cello|Bratsche",
"Welches Instrument spielt man mit Drumsticks?|Schlagzeug|Harfe|Fagott"]);
B("m-theorie","musik","Noten und Musiktheorie","🎼",4,13,"Das Notensystem hat <b>5 Linien</b>. Im 4/4-Takt: ganze Note = 4 Schläge, halbe = 2, Viertel = 1. Die Töne heißen C D E F G A H. <b>forte</b> = laut, <b>piano</b> = leise.",[
"Wie viele Linien hat ein Notensystem?|5|4|6",
"Wie viele Schläge hat eine ganze Note im 4/4-Takt?|4|2|1",
"Wie viele Schläge hat eine halbe Note im 4/4-Takt?|2|1|4",
"Welcher Schlüssel steht für hohe Töne?|Violinschlüssel|Bassschlüssel|Taktschlüssel",
"Wie heißen die Töne der C-Dur-Tonleiter?|C D E F G A H|C D E F G A B|A B C D E F G",
"Was zeigt ein Kreuz (♯) vor einer Note an?|Erhöhung um einen Halbton|Erniedrigung|Pause",
"Was bedeutet „forte“?|laut|leise|schnell",
"Was bedeutet „piano“?|leise|laut|langsam",
"Wie viele Töne hat ein Dreiklang?|3|2|4",
"Wie heißt ein Abstand von acht Tönen?|Oktave|Terz|Quinte"]);
B("m-gesch","musik","Musikgeschichte","🎹",7,13,"Epochen: <b>Barock</b> (Bach, Händel, Vivaldi) → <b>Klassik</b> (Haydn, Mozart, Beethoven) → <b>Romantik</b> (Schubert, Wagner). Jazz entstand um 1900 in den USA.",[
"Wer komponierte die „Zauberflöte“?|Mozart|Beethoven|Bach",
"Wer komponierte die 9. Sinfonie mit „Ode an die Freude“?|Beethoven|Mozart|Schubert",
"Welche Epoche kam zuerst?|Barock|Klassik|Romantik",
"Wer schrieb die Brandenburgischen Konzerte?|J. S. Bach|Händel|Vivaldi",
"Aus welcher Epoche stammt Mozart?|Klassik|Barock|Romantik",
"Wer komponierte „Die vier Jahreszeiten“?|Vivaldi|Haydn|Wagner",
"Welche Musikrichtung entstand um 1900 in den USA?|Jazz|Barock|Minnesang",
"Wer war Mitglied der Beatles?|John Lennon|Mick Jagger|Elvis Presley"]);

/* ===== FREMDSPRACHEN ===== */
B("fr-vok","franzoesisch","Französisch: Grundwortschatz","🇫🇷",5,10,"Schreibe das französische Wort. Akzente und Artikel darfst du weglassen, wenn du unsicher bist.",[
"T:Hallo|bonjour/salut",
"T:Danke|merci",
"T:Bitte (höflich)|s'il vous plait/s'il te plait",
"T:Haus|maison/la maison",
"T:Schule|ecole/l'ecole",
"T:Katze|chat/le chat",
"T:Hund|chien/le chien",
"T:Ja|oui",
"T:Nein|non",
"T:Brot|pain/le pain",
"T:Wasser|eau/l'eau",
"T:Freund|ami/un ami/l'ami"]);
B("la-vok","latein","Latein: Grundwortschatz","🏺",6,13,"Übersetze das lateinische Wort ins Deutsche. Tipp: Viele Fremdwörter helfen dir, zum Beispiel „Aquarium“ (aqua) oder „Terrain“ (terra).",[
"T:amicus|Freund",
"T:aqua|Wasser",
"T:terra|Erde/Land",
"T:puella|Mädchen",
"T:puer|Junge/Knabe",
"T:dominus|Herr",
"T:servus|Sklave/Diener",
"T:rex|König",
"T:urbs|Stadt",
"T:bellum|Krieg",
"T:pax|Frieden",
"T:vita|Leben"]);
B("sp-vok","spanisch","Spanisch: Grundwortschatz","🇪🇸",6,13,"Schreibe das spanische Wort. Akzente darfst du weglassen. Viele Wörter sind dem Lateinischen, Italienischen und Französischen ähnlich.",[
"T:Hallo|hola",
"T:Danke|gracias",
"T:Bitte|por favor",
"T:Haus|casa/la casa",
"T:Wasser|agua/el agua",
"T:Freund|amigo/el amigo",
"T:Schule|escuela/la escuela/colegio",
"T:Katze|gato/el gato",
"T:Hund|perro/el perro",
"T:Brot|pan/el pan",
"T:Ja|si",
"T:Nein|no"]);

/* ===== LERNTECHNIKEN & KREATIVITÄT ===== */
B("l-lernen","lern","Besser lernen","🧠",1,13,"Gutes Lernen: <b>kurze Einheiten mit Pausen</b>, Wiederholen in Abständen, Handy weglegen, Gelerntes <b>erklären</b>, genug schlafen.",[
"Was hilft beim Merken?|Wiederholen in Abständen|Alles am Abend vorher lernen|Nur durchlesen",
"Wie lange lernst du am Stück konzentriert (Kinder)?|20 bis 30 Minuten, dann Pause|3 Stunden|5 Minuten",
"Was ist eine Mindmap?|Ein Bild mit Hauptthema und Ästen|Eine Rechenaufgabe|Ein Diktat",
"Was hilft bei der Konzentration?|Handy weglegen|Fernseher an|Musik mit Text",
"Was bringt viel beim Vokabellernen?|Karteikarten|Nur lesen|Gar nichts",
"Was ist die Pomodoro-Technik?|25 Min. lernen, 5 Min. Pause|1 Std. lernen, 1 Std. Pause|Nur nachts lernen",
"Wie prüfst du, ob du etwas verstanden hast?|Du erklärst es jemandem|Du schreibst es nochmal ab|Du markierst alles",
"Was hilft dem Gedächtnis?|Ausreichend Schlaf|Möglichst wenig Schlaf|Nur 3 Stunden Schlaf",
"Was machst du zuerst bei einem Text?|Überschriften und Bilder anschauen|Sofort auswendig lernen|Nur den letzten Satz lesen"]);
B("k-farbe","kreativ","Farben und Malen","🎨",0,6,"Aus den Grundfarben <b>Rot, Gelb und Blau</b> mischst du alle anderen: Blau + Gelb = Grün, Rot + Gelb = Orange, Rot + Blau = Lila. Weiß macht heller, Schwarz dunkler.",[
"Welche Farbe entsteht aus Blau und Gelb?|Grün|Orange|Lila",
"Rot und Gelb ergibt ...|Orange|Grün|Braun",
"Rot und Blau ergibt ...|Lila|Grün|Grau",
"Welche sind die Grundfarben beim Malen?|Rot, Gelb, Blau|Rot, Grün, Blau|Schwarz, Weiß, Grau",
"Welche Farbe hellt eine Farbe auf?|Weiß|Schwarz|Braun",
"Welche Farbe macht dunkler?|Schwarz|Weiß|Gelb",
"Welche Farben nennt man warm?|Rot, Orange, Gelb|Blau, Grün, Lila|Weiß, Grau, Schwarz",
"Womit malst du mit Wasserfarben?|Pinsel|Schere|Kleber"]);
B("k-bewegung","kreativ","Bewegung und Basteln","⚽",1,6,"Vor dem Sport wärmst du dich auf. Beim Basteln gehst du <b>vorsichtig</b> mit Schere und Kleber um. Origami ist die japanische Kunst des Papierfaltens.",[
"Was machst du zum Aufwärmen vor dem Sport?|Dehnen und leichtes Laufen|Gar nichts|Schwer heben",
"Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?|11|9|7",
"Was brauchst du zum Basteln mit Papier?|Schere und Kleber|Hammer und Nägel|Bohrmaschine",
"Was beachtest du beim Schneiden mit der Schere?|Von dir weg schneiden und vorsichtig sein|Schnell rennen|Mit geschlossenen Augen schneiden",
"Wie nennt man Papierfalten aus Japan?|Origami|Ikebana|Manga",
"Welcher Sport wird im Wasser gemacht?|Schwimmen|Turnen|Fußball",
"Was trinkst du am besten beim Sport?|Wasser|Cola|Kaffee"]);

/* Bank-Einträge zu Themen machen */
const DEFAULT_HINT="Lies die Frage nochmal genau und schließe zuerst Antworten aus, die sicher falsch sind.";
const normT=s=>String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[’`´]/g,"'").replace(/\s+/g," ").trim();
function parseItem(s){
  const f=s.split("|");
  if(f[0].startsWith("T:")){
    const alts=f[1].split("/");
    const hint=(f[2]||"").replace(/^\?/,"")||"Schreibe das Wort so, wie du es gelernt hast.";
    return{q:f[0].slice(2),type:"text",answers:alts.map(normT),answer:alts[0],show:alts[0],hint,way:`Richtig ist: ${alts[0]}.`};
  }
  let hint=DEFAULT_HINT;
  if(f.length>3&&f[f.length-1].startsWith("?")){hint=f.pop().slice(1);}
  const [q,right,...wrong]=f;
  return{q,type:"choice",choices:shuffle([right,...wrong]),answer:right,hint,way:`Richtig ist: ${right}.`};
}
BANK.forEach(b=>{
  b.deck=[];
  b.gen=function(){
    if(!b.deck.length)b.deck=shuffle(b.items);
    return parseItem(b.deck.pop());
  };
  b.reset=()=>{b.deck=[];};
});
