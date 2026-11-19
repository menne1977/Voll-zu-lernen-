#!/usr/bin/env python3
"""Baut die komplette Web-App (eine Datei) in das Android-Projekt.
Aufruf:  python3 web/build.py"""
import os
here=os.path.dirname(os.path.abspath(__file__))
def r(n): return open(os.path.join(here,n),encoding="utf-8").read()
html=r("head.html")+r("core.js")+r("bank.js")+r("catalog.js")+r("ui.js")+r("extra.js")+r("data.js")+r("more.js")+"\nhome();\n</script>\n</body>\n</html>\n"
out=os.path.join(here,"..","app","src","main","assets","index.html")
os.makedirs(os.path.dirname(out),exist_ok=True)
open(out,"w",encoding="utf-8").write(html)
print("geschrieben:",os.path.normpath(out),len(html),"Zeichen")
