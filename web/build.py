#!/usr/bin/env python3
"""Baut die komplette Web-App (eine Datei) in das Android-Projekt.
Aufruf:  python3 web/build.py"""
import os
here=os.path.dirname(os.path.abspath(__file__))
def r(n): return open(os.path.join(here,n),encoding="utf-8").read()
html=r("head.html")+r("core.js")+r("bank.js")+r("catalog.js")+r("ui.js")+r("extra.js")+r("data.js")+r("mathegen.js")+r("mathekb.js")+r("more.js")+r("optionen.js")+r("dlern_data.js")+r("books.js")+r("manga.js")+r("visuals.js")+r("offline.js")+r("lesen.js")+r("schulbuch.js")+r("buch2.js")+r("buch_mathe.js")+r("buch_sprachen.js")+r("buch_natur.js")+r("buch_gesell.js")+"\nhome();\n</script>\n</body>\n</html>\n"
out=os.path.join(here,"..","app","src","main","assets","index.html")
os.makedirs(os.path.dirname(out),exist_ok=True)
open(out,"w",encoding="utf-8").write(html)
print("geschrieben:",os.path.normpath(out),len(html),"Zeichen")
