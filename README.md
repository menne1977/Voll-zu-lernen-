# Voll zu lernen

Lern-App für Android (APK) für alle Schulfächer, von der Vorschule bis Klasse 13.

## Was die App kann
- **Lernen:** 79 Themen in 15 Fächern, Erklärung, Übungen mit Tipp und zweitem Versuch, Sterne. Mathe-Aufgaben werden zufällig neu erzeugt.
- **Üben ohne Ende:** Alles-Mix, Fach-Mix, Endlos-Üben in jedem Thema, 23 Aufgaben-Generatoren (Rechtschreibung, Silben, Artikel, Plural, Vokabeln, Hauptstädte, Elemente …), Übungen aus dem Internet (Lückentexte aus Klexikon und Wikipedia), gut lesbare Schrift und Vorlesen.
- **Lesen und Schreiben:** Deutsch von A bis Z in 8 Stufen, 21 Lesebücher (6 Stufen, leicht bis schwer, mit Silbenfarben, Tippen zum Vorlesen und Fragen), 3 Manga-Folgen mit viel Text, Tagesplan und 8 Methoden (aus „D lern“), Fehlerkartei.
- **Schulbuch (Klasse 5–13):** Kapitel wie in einem Buch mit Text, Bildern (SVG), Beispielen, 🎬 animierten Erklär-Folien (offline) und ✏️ Übungsaufgaben mit Prüfen, Tipp und Lösung. Aktuell 39 Kapitel in Mathe, Deutsch, Englisch, Französisch, Spanisch, Latein, Biologie, Physik, Chemie, Geschichte, Geographie und Musik. Neue Kapitel: `lbx(fach, klasse, titel, {intro, teile, merke, fo, ue})` in `web/buch_*.js` (Oberstufe: `buch_ober.js`).
- **Offline-Bibliothek:** gelesene Wiki-Texte werden gespeichert und sind ohne Internet lesbar.
- **Mathe-Wissen:** Erklärungen, Beispiele, Tricks, typische Fehler und Bilder zu jedem Thema.
- **Suche:** Thema oder Frage eingeben, dann Treffer im Lernstoff und online Videos (YouTube, Planet Schule, ARD alpha) und Erklärungen (Wikipedia, Klexikon, Wikibooks, Wikiversity) direkt in der App.
- **Katalog:** Lehrplan-Überblick aller Fächer und Klassen, jedes Thema führt zu Videos und Erklärungen.
- **Schule:** Lehrplan, Prüfungen, Schulamt und Schulbücher für Bundesland und Schulform suchen.
- **Merkliste und Notizen:** Themen und Texte merken, Notizen mit Foto.
- **Vorlesen** der Erklärungen, eingebauter Browser mit gespeicherten Anmeldungen.
- Übungen funktionieren auch ohne Internet.

## APK bekommen
Bei jedem Push auf `main` baut GitHub Actions die APK:
- unter **Releases** die Datei `VollZuLernen.apk` herunterladen und auf dem Handy installieren, oder
- im Tab **Actions** beim letzten Lauf das Artefakt `VollZuLernen-APK` laden.

## Aufbau
- `web/` – Quellen der App (HTML, JavaScript). `python3 web/build.py` setzt daraus `app/src/main/assets/index.html` zusammen.
- `app/` – Android-Projekt (WebView, eingebauter Browser, Vorlesen).
- `web/buch2.js` – Schulbuch-Technik (Folien-Player, Übungen); `web/buch_mathe.js`, `buch_sprachen.js`, `buch_natur.js`, `buch_gesell.js` – Kapitel.
- `web/bank.js` – Fragen für die Fächer außer Mathe. Neue Fragen: `"Frage|richtig|falsch|falsch|?Tipp"`.
- `web/catalog.js` – Lehrplan-Katalog.

Die Fragen und Aufgaben sind selbst geschrieben. Online-Texte stammen aus freien Wikis (CC BY-SA) und werden mit Quelle angezeigt.
