
/* ---------- Themenkatalog: Lehrplan-Überblick (Themennamen als Suchbegriffe) ----------
   Zeile: Fach|von-bis|Thema   (optional Unterthemen nach "::" getrennt mit ";") */
const CATALOG_RAW=`
mathe|1-2|Größen und Einheiten: Längen, Datum, Uhrzeit, Geld
mathe|1-2|Zahlenräume und Rechnen: Addition, Subtraktion, Multiplikation, Division
mathe|1-2|Geometrie: Körper, Flächen, Symmetrien
mathe|1-2|Daten und Zufall: Diagramme, Wahrscheinlichkeit, Kombinatorik
mathe|3-4|Zahlenräume und Rechnen::Zahlenraum bis 1000;Zahlenraum bis 1 Million;Addieren und Subtrahieren großer Zahlen;Halbschriftlich und schriftlich addieren und subtrahieren;Erstes Multiplizieren und Dividieren;Kleines Einmaleins;Halbschriftlich und schriftlich dividieren;Halbschriftlich und schriftlich multiplizieren
mathe|3-4|Größen und Einheiten::Uhrzeit und Kalender;Geld;Längen und Distanzen;Gewichte;Hohlmaße Liter und Milliliter
mathe|3-4|Geometrie::Geodreieck: Geraden, Strecken und Winkel;Flächen zeichnen und berechnen;Geometrische Körper, Schrägbilder und Netze;Geometrische Formen und Muster;Symmetrie spiegeln und drehen
mathe|3-4|Daten und Zufall::Skizzen und Tabellen;Diagramme;Zufall und Wahrscheinlichkeit
mathe|5-6|Geometrie – Flächen, Körper und Symmetrie
mathe|5-6|Brüche und Dezimalzahlen – Grundrechenarten und Umwandlung
mathe|5-6|Natürliche Zahlen – Grundrechenarten, Rechenregeln und Teilbarkeit
mathe|5-6|Terme, Gleichungen und Variablen
mathe|5-6|Größen und Einheiten
mathe|5-6|Prozentrechnung
mathe|5-6|Diagramme, Häufigkeit und Wahrscheinlichkeit
mathe|5-6|Dreisatz und Zuordnungen
mathe|5-6|Ganze Zahlen – negative Zahlen und Grundrechenarten
mathe|7-8|Terme, Gleichungen und Potenzen
mathe|7-8|Geometrie – Figuren und Körper
mathe|7-8|Rationale Zahlen – negative Zahlen, Brüche und Dezimalzahlen
mathe|7-8|Funktionen – Dreisatz, Proportionalität und lineare Funktionen
mathe|7-8|Prozentrechnung und Zinsrechnung
mathe|7-8|Daten und Zufall
mathe|7-8|Lineare Gleichungssysteme und lineare Ungleichungssysteme
mathe|9-13|Funktionen
mathe|9-13|Geometrie
mathe|9-13|Zahlen, Rechnen und Größen
mathe|9-13|Terme und Gleichungen
mathe|9-13|Wahrscheinlichkeitsrechnung und Stochastik
mathe|9-13|Lineare Algebra und Analytische Geometrie
deutsch|1-2|Erstes Schreiben
deutsch|1-2|Richtig schreiben und Sprache untersuchen
deutsch|1-2|Lesen und verstehen
deutsch|1-2|Erstes Lesen
deutsch|1-2|Eigene Texte schreiben
deutsch|1-2|Miteinander sprechen
deutsch|1-2|Sprechen und zuhören
deutsch|1-2|Richtig lernen, vorbereiten und präsentieren
deutsch|3-4|Rechtschreibung und Grammatik::Vokale, Konsonanten, Umlaute und Doppellaute;Ähnliche Laute und besondere Buchstaben;Wortarten und Wortfamilien;Nomen, Pronomen und Artikel;Verben und ihre Zeitformen;Adjektive;Präpositionen und Konjunktionen;Satzarten und Zeichensetzung;Satzglieder und Fälle;Wörterbücher und Rechtschreibhilfen
deutsch|3-4|Texte lesen und verstehen::Texte verstehen;Kinderliteratur kennenlernen
deutsch|3-4|Texte schreiben::Schreibtraining für Geschichten;Gedichte und Wortspiele
deutsch|3-4|Lernen, planen, präsentieren::Lernen und vorbereiten;Vortragen und präsentieren
deutsch|3-4|Sprechen und zuhören::Erzählen
deutsch|5-6|Grammatik, Rechtschreibung und Zeichensetzung
deutsch|5-6|Texte selbst schreiben
deutsch|5-6|Literatur entdecken und untersuchen
deutsch|5-6|Methoden und Arbeitstechniken im Unterricht
deutsch|7-8|Sprache gebrauchen und untersuchen – Grammatik, Rechtschreibung und Zeichensetzung
deutsch|7-8|Literatur entdecken und Texte untersuchen
deutsch|7-8|Schriftliche Texte verfassen
deutsch|7-8|Arbeitstechniken und Methoden im Unterricht
deutsch|9-13|Sprache untersuchen – Grammatik
deutsch|9-13|Literatur entdecken, interpretieren und analysieren
deutsch|9-13|Richtig schreiben – Rechtschreibung und Zeichensetzung
deutsch|9-13|Eigene Texte erstellen und schriftlich argumentieren
deutsch|9-13|Methoden im Deutschunterricht
deutsch|9-13|Sprechen und zuhören – alles über Kommunikation
englisch|5-13|Irland und Nordirland – Geschichte und Geographie
englisch|5-13|Das politische System und Kultur Großbritanniens
englisch|5-13|Außenpolitik Großbritanniens
englisch|5-13|Berühmte Persönlichkeiten Großbritanniens
englisch|5-13|Das Schulleben in Großbritannien
englisch|5-13|Other English-speaking countries
englisch|5-13|US-amerikanische Städte
englisch|5-13|US-amerikanische Persönlichkeiten und Geschichte
englisch|5-13|Analysing Fictional Texts
englisch|5-13|Writing
englisch|5-13|Methoden
englisch|5-13|Phrasal and Prepositional Verbs
englisch|5-13|Present Participle und Past Participle
englisch|5-13|Modal Verbs: shall / should
englisch|5-13|Adverbien – Bildung und Gebrauch
englisch|5-13|Komplexe Präpositionen
englisch|5-13|Simple Past
englisch|5-13|Past Perfect
englisch|5-13|Future Perfect
englisch|5-13|Future Progressive
englisch|5-13|Weitere Futur-Formen
englisch|5-13|Zeitformen im Vergleich
englisch|5-13|Indirekte Rede
englisch|5-13|Passiv
englisch|5-13|Gerund
englisch|5-13|Infinitiv
englisch|5-13|Infinitiv oder Gerund
englisch|5-13|Betonung durch Inversion
englisch|5-13|Partizipialkonstruktionen
englisch|5-13|Adverbialsätze und Konjunktionen
englisch|5-13|Aussprache von Vokalen und Doppellauten
englisch|5-13|Aussprache von Konsonanten
englisch|5-13|Betonung und Intonation
englisch|5-13|Public, safety, crime
englisch|5-13|Shopping
englisch|5-13|Talking and presenting
englisch|5-13|False friends
englisch|5-13|Typical mistakes
englisch|5-13|Word choice
englisch|5-13|Prepositional Phrases
biologie|5-6|Körper und Entwicklung des Menschen
biologie|5-6|Vielfalt und Angepasstheit der Samenpflanzen
biologie|5-6|Wirbeltiere: Fische, Amphibien und Reptilien
biologie|5-6|Wirbeltiere: Vögel
biologie|5-6|Wirbeltiere: Säugetiere
biologie|5-6|Merkmale und Systematik der Wirbeltiere und wirbellose Tiere
biologie|5-8|Biologie: Das Leben erforschen
biologie|7-8|Zellen und Stoffwechsel
biologie|7-8|Der Mensch: Atmung, Blut und Herz-Kreislaufsystem
biologie|7-8|Der Mensch: Sexualität und Entwicklung
biologie|7-8|Der Mensch: Körperbau und Immunsystem
biologie|7-8|Der Mensch: Ernährung, Verdauung und Energiegewinnung
biologie|7-8|Der Mensch: Sinnesorgane, Nerven- und Hormonsystem, Verhalten, Sucht und Drogen
biologie|7-8|Ökosysteme und Umwelt
biologie|7-8|Die Vielfalt der Wirbellosen
biologie|9-13|Biologie des Menschen
biologie|9-13|Genetik und Entwicklungsbiologie
biologie|9-13|Biologie der Pflanzen und Pilze
biologie|9-13|Ökologie
biologie|9-13|Zellbiologie und biochemische Grundlagen
biologie|9-13|Evolutionsbiologie
biologie|9-13|Neurobiologie und Verhalten
biologie|9-13|Biologie der Tiere
physik|5-8|Elektrizität und Magnetismus – Ladung, Spannung und Stromkreise
physik|5-8|Licht, Farben, optische Instrumente und Abbildungen
physik|5-8|Energie und Bewegung – Geschwindigkeit und Beschleunigung
physik|5-8|Temperatur, Wärme und thermische Energie
physik|5-8|Kraft und Masse, Druck und Auftrieb
physik|5-8|Sonnensystem, Sterne und Weltall
physik|5-8|Schall und akustische Phänomene
physik|5-8|Physik – eine Naturwissenschaft: experimentieren, auswerten und berechnen
physik|9-13|Elektrizität und Magnetismus
physik|9-13|Mechanik
physik|9-13|Optik
physik|9-13|Wärmelehre
physik|9-13|Aufbau und Struktur der Materie
physik|9-13|Akustik
physik|9-13|Experimentieren und Auswerten
chemie|7-8|Stoffe und Stoffeigenschaften: Gemische, Teilchen und Aggregatzustände
chemie|7-8|Atommodelle und Periodensystem der Elemente
chemie|7-8|Chemie – eine Naturwissenschaft: experimentieren und untersuchen
chemie|7-8|Chemische Reaktionen und Reaktionsgleichungen: Verbrennung und mehr
chemie|7-8|Moleküle und Elektronenpaarbindung – Luft, Wasser und mehr
chemie|7-8|Metalle und Redoxreaktionen
chemie|7-8|Salze – Verbindungen aus Ionen
chemie|9-13|Modelle, Formeln und Konzepte
chemie|9-13|Anorganische Verbindungen – Eigenschaften und Reaktionen
chemie|9-13|Experimentieren und Auswerten von Experimenten
chemie|9-13|Organische Verbindungen – Eigenschaften und Reaktionen
chemie|9-13|Physikalische Eigenschaften, Energie und Geschwindigkeit bei Reaktionen
geschichte|5-13|Vorgeschichte und Antike – von der Steinzeit bis zum Römischen Reich
geschichte|5-13|Mittelalter – Herrschaft und Religion
geschichte|5-13|Neuzeit – von der Reformation bis zur Industrialisierung
geschichte|5-13|Geschichte ab dem 20. Jahrhundert – Weltkriege und geteiltes Deutschland
geschichte|5-13|Methoden- und Medientraining
geographie|5-13|Deutschland
geographie|5-13|Europa
geographie|5-13|Geozonen der Erde
geographie|5-13|Grundlagen der Geografie und Orientierung
geographie|5-13|Klima, Vegetation, Umwelt und Ressourcen
geographie|5-13|Kontinente, Wirtschaftsräume und Globalisierung
geographie|5-13|Lebensraum Erde
geographie|5-13|Unsere Erde – Aufbau, Jahreszeiten, Plattentektonik
sachunterricht|1-2|Zeit und Geschichte
sachunterricht|1-2|Umwelt, Pflanzen und Tiere
sachunterricht|1-2|Im Straßenverkehr
sachunterricht|1-2|Zusammen leben und arbeiten
sachunterricht|1-2|Wetter, Wasser und Luft
sachunterricht|1-2|Körper und Ernährung
sachunterricht|3-4|Körper, Gesundheit und Ernährung::Der Körper;Krankheiten behandeln und vorbeugen;Im Notfall;Die Pubertät;Die Ernährung;Obst, Gemüse, Getreide
sachunterricht|3-4|Zeit und Geschichte::Unsere Uhr;Unser Kalender;Dinosaurier;Antike – Zeit der alten Römer und Griechen;Mittelalter – Zeit der Ritter;Abenteurer und Entdecker;Geschichte des Menschen;Geschichte Amerikas
sachunterricht|3-4|Umwelt, Pflanzen und Tiere::Umgang mit Müll;Haustiere;Lebensraum Wasser;Tiere auf dem Bauernhof;Im Wald;Hecke, Feld und Wiese;Insekten und Vögel;Igel, Eichhörnchen und andere Kleinsäuger;Tiere und Pflanzen im ganzen Jahr;Produktion von Lebensmitteln;Wale und andere Meeressäuger;Menschenaffen;Ponys und andere Huftiere
sachunterricht|3-4|Forschen und experimentieren: Erde, Wasser, Luft und Licht::Grundlagen zum Forschen;Das Wasser und seine Zustände;Die Luft;Das Feuer;Das Wetter;Das Sonnensystem, die Erde und andere Planeten;Optik – die Lehre vom Licht
sachunterricht|3-4|Im Straßenverkehr::Mein Fahrrad;Sicher im Verkehr;Landkarten und Orientierung
sachunterricht|3-4|Leben, lernen und arbeiten::Flucht und Migration;Andere Kulturen kennenlernen;Demokratie und Kinderrechte;Zusammen leben und älter werden;Kultur erleben: Musik, Film und Kunst;Gefühle;Die Arbeit von Feuerwehr und Polizei;Feste, Bräuche und Traditionen
sachunterricht|3-4|Deutschland und Europa::Deutschland;Europa;Demokratie und Kinderrechte;Landkarten und Orientierung
sachunterricht|3-4|Medien und Technik::Medien;Elektrizität und Energie;Erfindungen und technische Entwicklungen;Holz und Glas
musik|3-13|Instrumentenkunde
musik|3-13|Musikgeschichte
musik|3-13|Musiktheorie
musik|3-13|Popularmusik
lern|1-13|Besser lernen in der Grundschule
lern|1-13|Lernstrategien und -methoden
lern|1-13|Medienkonsum
lern|1-13|Stark fürs Leben
lern|1-13|Sozialkompetenzen
kreativ|0-6|Basteln
kreativ|0-6|Bewegung
kreativ|0-6|Experimentieren
kreativ|0-6|Malen
kreativ|0-6|Zaubern
franzoesisch|5-13|Aussprache und Alltagsfranzösisch
franzoesisch|5-13|Grammatik: Verben, Zeiten und Satzbau
latein|6-13|Formenlehre: Deklination und Konjugation
latein|6-13|Übersetzen und Textarbeit
spanisch|6-13|Aussprache und Alltagsspanisch
spanisch|6-13|Grammatik: Verben, Zeiten und Satzbau
`;
const CATALOG=CATALOG_RAW.trim().split("\n").map(l=>{
  const [subj,rng,rest]=l.split("|");const [a,b]=rng.split("-").map(Number);
  const [title,subs]=rest.split("::");
  return{subj,from:a,to:b,title,subs:subs?subs.split(";"):[]};
});
