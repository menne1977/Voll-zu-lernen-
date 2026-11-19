
/* ======================================================================
   Endlos-Generatoren: Rechtschreibung, Grammatik, Vokabeln, Fakten
   Jede Aufgabe wird zufällig neu gebaut – es geht nie aus.
   ====================================================================== */
const W=s=>s.split(/[,\s]+/).filter(Boolean);
const mkC=(q,right,wrongs,hint,way)=>{wrongs=[...new Set(wrongs)].filter(x=>x!==right);return{q,type:"choice",choices:shuffle([right,...wrongs.slice(0,3)]),answer:right,hint:hint||DEFAULT_HINT,way:way||`Richtig ist: ${right}.`};};
const mkT=(q,ans,hint,strict,extra)=>Object.assign({q,type:"text",answers:[normT(ans)],answer:ans,show:ans,hint:hint||"Schreibe genau und achte auf jeden Buchstaben.",way:`Richtig ist: ${ans}.`,strict:!!strict},extra||{});
const GEN=[];
function G(id,subj,name,ic,from,to,explain,gen){const t={id,subj,name,ic,from,to,explain:`<p>${explain}</p>`,gen,gens:true,reset(){}};GEN.push(t);ALL.push(t);return t;}
const others=(arr,right,n)=>shuffle(arr.filter(x=>x!==right)).slice(0,n);

/* ---------- Rechtschreibung ---------- */
const L_DOPP=W("Kette Mitte Sonne Wasser Treppe Klasse Mutter Futter Butter Bett Ball Affe Suppe Tasse Mann Stamm Brille Kasse Fall Hammer Kamm Kanne Gummi Pappe Puppe Rolle Schiff Wetter Zettel Sommer Teller Keller Koffer Löffel Messer Pinsel Schüssel Zimmer Brunnen Himmel Lippe Muffin Sattel Spinne Wolle Rakete Roller Tonne Tanne Donner Nummer Mittag Kappe Pfanne Schatten Bürger");
const L_IE=W("Biene Tier Spiegel Wiese Ziege Fliege Brief Lied Ziel Spiel Tiger Liebe Dieb Krieg Sieb Riese Fieber Bier Ziegel Wiege Mieter Schiene Papier Kiefer Fries Ferien Dienstag Sieger Lieferung Medizin");
const L_EI=W("Eis Seite Zeit Reise Leiter Eimer Seil Kleid Bein Stein Wein Schwein Eiche Eisen Meister Weide Heimat Kreide Geist Seife Freiheit Zeitung Teil Reifen Eier Leib Feier Fleisch Weihnachten");
const L_H=W("Sahne Bahn Zahl Zahn Mohn Lohn Uhr Wahl Stuhl Huhn Kuh Fahrrad fahren Mehl Lehrer Ohr Jahr Bohne Sohn zehn Wahrheit Nahrung Rahmen Höhle Fehler Bühne Strohhalm Befehl Gefahr Kohle Möhre Verkehr Ruhe");
const L_SS=W("Straße Fuß heiß groß weiß Spaß Gruß Füße Soße draußen Fußball beißen reißen süß außen Strauß Kloß fleißig schließen genießen gießen Größe Grüße");
const L_SSD=W("Wasser Tasse essen müssen Fluss Kuss Schloss Messer wissen Kissen vergessen Biss Nuss Pass Fass nass Hass Schüssel küssen Flüssigkeit lassen Schlüssel");
const L_CK=W("Zucker Rock Block Dackel Hecke Decke Jacke Brücke Glück Ecke Mücke Stück Zwerg Bäcker Drucker Rücken Locke Socke Stecker Wecker Packung Schnecke Wicke");
const L_TZ=W("Katze Platz Satz Mütze Spitze Kratzer Tatze Netz Pfütze Witz Schmutz Blitz Sitz Glatze Hitze Katzen Ritze Pilz Fratze Schatz Tatze Schutz Kreuz");
const L_EU=W("Freude Heu Leute Teufel neu Feuer Eule Zeug heute Beutel euch Reue Beule Streuner Deutsch ");
const L_AEU=W("Bäume Häuser Mäuse Träume Läufer Säule Räuber Käufer Gebäude Läuse Kräuter Zäune Bräute Säugetier Mäuschen Gräuel Träumer Käuze");
const N_NOMEN=W("Tisch Hund Baum Haus Auto Buch Kind Schule Straße Freund Garten Wasser Brot Katze Fenster Lehrer Sonne Mond Blume Löffel Schrank Bett Stuhl Handy Wald Berg Fluss Apfel Schiff Uhr Tasche Jacke Brille Computer Musik Freude Angst Liebe Zeit Stadt Dorf");
const N_VERB=W("laufen springen essen trinken schlafen lesen schreiben malen singen tanzen lachen weinen spielen kochen backen fahren fliegen schwimmen sehen hören sagen fragen denken lernen arbeiten helfen kaufen warten wohnen bauen suchen finden");
const N_ADJ=W("schnell langsam groß klein rot blau grün schön hässlich laut leise warm kalt hell dunkel alt jung neu stark schwach lustig traurig freundlich süß sauer lang kurz dick dünn gesund müde");
const ART={m:W("Tisch Stuhl Hund Baum Apfel Löffel Vogel Fisch Berg Mond Regen Schnee Winter Sommer Kuchen Wald Arzt Koch Bus Zug Hafen Schrank Computer Becher"),f:W("Katze Sonne Blume Tür Lampe Schule Straße Uhr Tasche Kuh Maus Nase Hand Jacke Banane Flasche Küche Woche Stadt Zeit Gabel Bluse Wiese Wolke"),n:W("Haus Auto Buch Kind Fahrrad Mädchen Bett Brot Ei Fenster Messer Heft Wasser Obst Schaf Pferd Boot Eis Licht Spiel Telefon Gras Hemd Bild")};
const PLU=[["Haus","Häuser"],["Kind","Kinder"],["Baum","Bäume"],["Buch","Bücher"],["Auto","Autos"],["Katze","Katzen"],["Hand","Hände"],["Maus","Mäuse"],["Apfel","Äpfel"],["Vogel","Vögel"],["Tisch","Tische"],["Stuhl","Stühle"],["Blume","Blumen"],["Bett","Betten"],["Fuß","Füße"],["Mann","Männer"],["Frau","Frauen"],["Kuh","Kühe"],["Hund","Hunde"],["Ei","Eier"],["Glas","Gläser"],["Dach","Dächer"],["Wald","Wälder"],["Zahn","Zähne"],["Nacht","Nächte"],["Stadt","Städte"],["Bild","Bilder"],["Lied","Lieder"],["Bus","Busse"],["Foto","Fotos"],["Garten","Gärten"],["Schrank","Schränke"],["Ball","Bälle"],["Rad","Räder"],["Wurm","Würmer"],["Fisch","Fische"],["Schüler","Schüler"],["Lehrer","Lehrer"],["Kuchen","Kuchen"],["Fenster","Fenster"]];
const VERBF=[["gehen","ging","gegangen"],["laufen","lief","gelaufen"],["essen","aß","gegessen"],["trinken","trank","getrunken"],["sehen","sah","gesehen"],["fahren","fuhr","gefahren"],["schreiben","schrieb","geschrieben"],["lesen","las","gelesen"],["singen","sang","gesungen"],["schlafen","schlief","geschlafen"],["kommen","kam","gekommen"],["geben","gab","gegeben"],["nehmen","nahm","genommen"],["sitzen","saß","gesessen"],["finden","fand","gefunden"],["helfen","half","geholfen"],["sprechen","sprach","gesprochen"],["bringen","brachte","gebracht"],["denken","dachte","gedacht"],["wissen","wusste","gewusst"],["schwimmen","schwamm","geschwommen"],["fliegen","flog","geflogen"],["rufen","rief","gerufen"],["tragen","trug","getragen"],["stehen","stand","gestanden"],["liegen","lag","gelegen"],["beginnen","begann","begonnen"],["bleiben","blieb","geblieben"]];
const SYL=W("Ba-na-ne Ap-fel Son-ne Scho-ko-la-de Fahr-rad E-le-fant Kro-ko-dil Te-le-fon Fens-ter Ta-sche Blu-me Schu-le Kin-der-gar-ten Com-pu-ter Ka-nin-chen Schmet-ter-ling Re-gen-bo-gen Ge-burts-tag Kar-tof-fel Ge-mü-se Ho-se Ja-cke Kat-ze Zi-tro-ne To-ma-te Ku-chen Pa-pier Fa-mi-li-e Ge-schich-te Ro-bo-ter Spiel-platz Haus-tür Win-ter Som-mer Frei-heit Wör-ter-buch Bü-cher-re-gal Mu-sik Ge-sund-heit");
const sylN=w=>w.split("-").length;
const plain=w=>w.replace(/-/g,"");
const ALLWORDS=[].concat(L_DOPP,L_IE,L_EI,L_H,L_SS,L_SSD,L_CK,L_TZ,L_EU,L_AEU,N_NOMEN,SYL.map(plain));
const cap=w=>w[0].toUpperCase()+w.slice(1);
const rep=(w,a,b)=>w.replace(new RegExp(a,"i"),m=>m[0]!==m[0].toLowerCase()?cap(b):b);

/* Wort-Varianten: richtig + typische Fehler */
function spellQ(list,mkWrongs,rule,gaps){
  const w=pick(list),wr=mkWrongs(w).filter(x=>x!==w);
  const mode=Math.random();
  if(gaps&&mode<.35){
    const g=gaps(w);
    if(g)return mkT(`Welche Buchstaben fehlen?<br><b style="font-size:1.7rem;letter-spacing:.08em">${esc(g.shown)}</b>`,g.missing,rule,true,{say:w});
  }
  if(mode<.55&&wr.length)return mkC(`Welches Wort ist richtig geschrieben?`,w,wr,rule);
  const q=`Hör zu und wähle die richtige Schreibweise.<br><button class="btn small ghost" onclick="speak('${w}')">🔊 Wort anhören</button>`;
  return wr.length?mkC(q,w,wr,rule):mkT(`Schreibe das Wort richtig.<br><button class="btn small" onclick="speak('${w}')">🔊 Wort anhören</button>`,w,rule,true,{say:w});
}
const gapOf=(re)=>w=>{const m=w.match(re);if(!m)return null;return{shown:w.slice(0,m.index)+"_".repeat(m[0].length)+w.slice(m.index+m[0].length),missing:m[0]};};
const GAP_DOPP=w=>{const m=w.match(/([bcdfghklmnprstvwz])\1/);return m?{shown:w.replace(m[0],"__"),missing:m[0]}:null;};
G("lrs-dopp","deutsch","Doppelte Mitlaute (tt, ll, mm …)","✏️",1,13,"Nach einem <b>kurzen Selbstlaut</b> (a, e, i, o, u) steht oft ein <b>doppelter Mitlaut</b>: Ke<b>tt</b>e, So<b>nn</b>e. Nach einem <b>langen</b> Selbstlaut steht nur einer: Bote, Hase. Tipp: Sprich das Wort langsam in Silben. Hörst du den Selbstlaut kurz, schreibe zwei Mitlaute.",()=>spellQ(L_DOPP,w=>[w.replace(/([^aeiouäöüy])\1/,"$1")],"Der Selbstlaut vor dem Mitlaut ist kurz. Dann schreibt man den Mitlaut doppelt.",GAP_DOPP));
G("lrs-ie","deutsch","ie oder ei?","👂",1,13,"Ein <b>langes i</b> schreibt man meistens <b>ie</b>: B<b>ie</b>ne, Sp<b>ie</b>gel. Wenn du „ai“ hörst, schreibst du <b>ei</b>: <b>Ei</b>mer, Z<b>ei</b>t. Merke: ie klingt wie „i“, ei klingt wie „ai“.",()=>{
  if(Math.random()<.5){const w=pick(L_IE);return spellQ([w],x=>[rep(x,"ie","ei"),rep(x,"ie","i")],"Hörst du ein langes „i“? Dann schreibst du meistens ie.",gapOf(/ie/i));}
  const w=pick(L_EI);return spellQ([w],x=>[rep(x,"ei","ie"),rep(x,"ei","ai")],"Hörst du „ai“? Dann schreibst du ei.",gapOf(/ei/i));});
G("lrs-h","deutsch","Das Dehnungs-h","🌬️",2,13,"Manchmal steht nach einem langen Selbstlaut ein <b>stummes h</b>: Sah<b>ne</b>, Uh<b>r</b>, Zah<b>n</b>. Du hörst es nicht, aber es steht im Wort. Hilfe: Finde ein verwandtes Wort, in dem man das h hört: fahren – die Fahrt, sehen – er sieht.",()=>spellQ(L_H,w=>[w.replace(/([aeiouäöü])h/,"$1")],"Verwandtes Wort suchen: oft hört man das h in einem anderen Wort (fahren – Fahrt).",gapOf(/h/)));
G("lrs-ss","deutsch","ß oder ss?","🔡",3,13,"Nach einem <b>langen</b> Selbstlaut oder Doppellaut (au, ei, eu) schreibt man <b>ß</b>: Stra<b>ß</b>e, hei<b>ß</b>. Nach einem <b>kurzen</b> Selbstlaut schreibt man <b>ss</b>: Wa<b>ss</b>er, e<b>ss</b>en. Sprich den Selbstlaut: lang oder kurz?",()=>Math.random()<.5?spellQ(L_SS,w=>[w.replace("ß","ss"),w.replace("ß","s")],"Der Selbstlaut davor ist lang (oder au/ei/eu). Dann schreibt man ß.",gapOf(/ß/)):spellQ(L_SSD,w=>[w.replace("ss","ß"),w.replace("ss","s")],"Der Selbstlaut davor ist kurz. Dann schreibt man ss.",gapOf(/ss/)));
G("lrs-ck","deutsch","ck und tz","🧱",2,13,"Nach einem <b>kurzen Selbstlaut</b> schreibt man statt kk <b>ck</b>: Ja<b>ck</b>e. Statt zz schreibt man <b>tz</b>: Ka<b>tz</b>e. Nach Mitlauten (Herz, Zwerg) und langen Selbstlauten steht nur k oder z.",()=>Math.random()<.5?spellQ(L_CK,w=>[w.replace("ck","kk"),w.replace("ck","k")],"Nach kurzem Selbstlaut: ck statt kk.",gapOf(/ck/)):spellQ(L_TZ,w=>[w.replace("tz","zz"),w.replace("tz","z")],"Nach kurzem Selbstlaut: tz statt zz.",gapOf(/tz/)));
G("lrs-eu","deutsch","eu oder äu?","🌳",3,13,"Wenn es ein verwandtes Wort mit <b>au</b> gibt, schreibt man <b>äu</b>: H<b>äu</b>ser (Haus), B<b>äu</b>me (Baum). Sonst schreibt man <b>eu</b>: Fr<b>eu</b>de, F<b>eu</b>er.",()=>Math.random()<.5?spellQ(L_AEU,w=>[rep(w,"äu","eu")],"Gibt es ein verwandtes Wort mit au? Haus – Häuser. Dann äu.",gapOf(/äu/i)):spellQ(L_EU,w=>[rep(w,"eu","äu")],"Kein verwandtes Wort mit au? Dann schreibt man eu.",gapOf(/eu/i)));
G("lrs-gk","deutsch","Groß oder klein schreiben?","🔠",1,13,"<b>Nomen</b> (Namenwörter) schreibt man <b>groß</b>: der Tisch, die Freude. <b>Verben</b> (tun-Wörter) und <b>Adjektive</b> (Wie-Wörter) schreibt man <b>klein</b>: laufen, schnell. Probe: Kannst du „der, die, das“ davorsetzen? Dann ist es ein Nomen.",()=>{
  const r=Math.random(),w=r<.4?pick(N_NOMEN):r<.7?pick(N_VERB):pick(N_ADJ);const isN=N_NOMEN.includes(w);
  const right=isN?w:w.toLowerCase(),wrong=isN?w.toLowerCase():cap(w);
  return mkC("Wie schreibt man das Wort richtig?",right,[wrong],isN?"Du kannst „der, die oder das“ davorsetzen: Es ist ein Nomen, also groß.":"Man kann kein „der, die, das“ davorsetzen: klein schreiben.");});
G("lrs-dikt","deutsch","Hören und schreiben (Diktat)","🎧",1,13,"Drücke auf <b>🔊</b>, höre das Wort genau an und schreibe es auf. Achte auf Groß- und Kleinschreibung und auf jeden Buchstaben. Du darfst das Wort so oft anhören, wie du willst.",()=>{
  const w=pick(ALLWORDS);return mkT(`Höre das Wort und schreibe es auf.<br><button class="btn small" onclick="speak('${w}')">🔊 Wort anhören</button>`,w,`Das Wort hat ${w.length} Buchstaben und beginnt mit „${w[0]}“.`,true,{say:w});});
G("lrs-silben","deutsch","Silben erkennen und trennen","👏",1,6,"Jedes Wort besteht aus <b>Silben</b>. Du kannst sie <b>klatschen</b>: Ba-na-ne (3 Silben). In jeder Silbe steckt ein Selbstlaut oder Umlaut. Beim Trennen hilft: Sprich das Wort langsam.",()=>{
  const s=pick(SYL),p=plain(s);
  if(Math.random()<.5)return mkC(`Wie viele Silben hat „${p}“?`,String(sylN(s)),[String(sylN(s)+1),String(Math.max(1,sylN(s)-1)),String(sylN(s)+2)].filter(x=>x!=="0"),"Klatsche das Wort langsam mit.");
  const parts=s.split("-");const wrong=[];
  if(parts.length>=2){const i=rnd(0,parts.length-2);const a=parts.slice();a.splice(i,2,a[i]+a[i+1]);wrong.push(a.join("-"));
    const b=parts.map(x=>x.length>3?x.slice(0,2)+"-"+x.slice(2):x);if(b.join("-")!==s)wrong.push(b.join("-"));}
  wrong.push(p.split("").join("-").slice(0,10));
  return mkC(`Wie trennt man „${p}“ richtig in Silben?`,s,wrong,"Sprich langsam und klatsche bei jeder Silbe.");});
G("d-wortart","deutsch","Wortarten (Nomen, Verb, Adjektiv)","🏷️",2,10,"<b>Nomen</b> sagen, wie etwas heißt (Tisch, Freude). <b>Verben</b> sagen, was man tut (laufen, denken). <b>Adjektive</b> sagen, wie etwas ist (schnell, rot).",()=>{
  const r=Math.random(),w=r<.4?pick(N_NOMEN):r<.7?pick(N_VERB):pick(N_ADJ);const a=N_NOMEN.includes(w)?"Nomen":N_VERB.includes(w)?"Verb":"Adjektiv";
  return mkC(`Welche Wortart ist „${w}“?`,a,["Nomen","Verb","Adjektiv"],a==="Nomen"?"Mit „der, die, das“ davor ergibt es Sinn.":a==="Verb"?"Man kann „ich … “ davor sagen (ich laufe).":"Man kann es vor ein Nomen setzen (ein ... Auto).");});
G("d-artikel","deutsch","der, die oder das?","🎯",1,8,"Jedes Nomen hat einen Artikel: <b>der</b> (männlich), <b>die</b> (weiblich) oder <b>das</b> (sächlich). Lerne das Nomen immer zusammen mit dem Artikel, zum Beispiel: <b>der</b> Tisch, <b>die</b> Lampe, <b>das</b> Buch.",()=>{
  const g=pick(["m","f","n"]),w=pick(ART[g]);const a={m:"der",f:"die",n:"das"}[g];
  return mkC(`___ ${w}`,a,["der","die","das"],"Lies das Wort laut mit jedem Artikel. Was klingt richtig?");});
G("d-plural","deutsch","Mehrzahl (Plural) bilden","🔢",2,8,"Die Mehrzahl heißt <b>Plural</b>. Meist bekommt das Wort eine Endung (-e, -en, -er, -s) und manchmal einen Umlaut: Haus – Häuser, Baum – Bäume.",()=>{
  const [s,p]=pick(PLU);if(Math.random()<.4)return mkT(`Schreibe die Mehrzahl von „${s}“.`,p,"Denke an Endungen: -e, -en, -er, -s und an Umlaute (ä, ö, ü).",true);
  const ws=[s+"e",s+"en",s+"er",s+"s",s.replace(/a/,"ä")+"e",s.replace(/u/,"ü")+"e"];return mkC(`Mehrzahl von „${s}“`,p,ws,"Sprich die Mehrzahl in einem Satz: Ich sehe viele …");});
G("d-verbform","deutsch","Verbformen (ging, lief, gegangen …)","🏃",3,10,"Starke Verben ändern ihren Stamm: gehen – er <b>ging</b> – er ist <b>gegangen</b>. Schwache Verben bekommen -te: machen – er mach<b>te</b> – gemach<b>t</b>. Diese Formen musst du auswendig lernen.",()=>{
  const v=pick(VERBF);if(Math.random()<.5)return mkC(`Gestern … er (Präteritum von „${v[0]}“)`,v[1],VERBF.map(x=>x[1]),"Sage: Gestern ging er … Was passt zum Verb?");
  const aux=["gehen","laufen","fahren","kommen","schwimmen","fliegen","bleiben","stehen","liegen","sitzen","schlafen"].includes(v[0])&&!["stehen","liegen","sitzen","schlafen"].includes(v[0])?"ist":"hat";
  return mkC(`Er ${aux} … (Partizip von „${v[0]}“)`,v[2],VERBF.map(x=>x[2]),"Das Partizip steht nach „hat“ oder „ist“.");});

/* ---------- Vokabeln ---------- */
const VOC={
 englisch:[[1,"Hund=dog Katze=cat Haus=house Baum=tree Buch=book Schule=school Wasser=water Brot=bread Milch=milk Apfel=apple Ball=ball Vogel=bird Fisch=fish Mutter=mother Vater=father Bruder=brother Schwester=sister Freund=friend rot=red blau=blue grün=green gelb=yellow schwarz=black weiß=white eins=one zwei=two drei=three vier=four fünf=five sechs=six sieben=seven acht=eight neun=nine zehn=ten Tisch=table Stuhl=chair Tür=door Fenster=window Sonne=sun Mond=moon Auto=car Bett=bed Hand=hand Kopf=head Nase=nose Auge=eye Ohr=ear Mund=mouth groß=big klein=small gut=good schlecht=bad heiß=hot kalt=cold"],
  [3,"Hase=rabbit Pferd=horse Kuh=cow Schwein=pig Schaf=sheep Ente=duck Maus=mouse Löwe=lion Elefant=elephant Affe=monkey Banane=banana Orange=orange Kuchen=cake Käse=cheese Ei=egg Fleisch=meat Suppe=soup Frühstück=breakfast Mittagessen=lunch Abendessen=dinner Lehrer=teacher Schüler=student Stift=pen Heft=notebook Tasche=bag Zimmer=room Küche=kitchen Garten=garden Straße=street Stadt=city Dorf=village Montag=Monday Dienstag=Tuesday Mittwoch=Wednesday Donnerstag=Thursday Freitag=Friday Samstag=Saturday Sonntag=Sunday Frühling=spring Sommer=summer Herbst=autumn Winter=winter Regen=rain Schnee=snow Wind=wind laufen=run springen=jump schwimmen=swim spielen=play lesen=read schreiben=write singen=sing tanzen=dance essen=eat trinken=drink schlafen=sleep"],
  [5,"Hausaufgaben=homework Klassenzimmer=classroom Pause=break Fußball=football Geschenk=present Geburtstag=birthday Urlaub=holiday Strand=beach Berg=mountain Fluss=river Wald=forest Wolke=cloud Himmel=sky Gesundheit=health Krankenhaus=hospital Arzt=doctor Bahnhof=station Flughafen=airport Flugzeug=plane Zug=train Fahrrad=bicycle Geschäft=shop Markt=market Geld=money billig=cheap teuer=expensive schnell=fast langsam=slow müde=tired glücklich=happy traurig=sad ängstlich=afraid wütend=angry fragen=ask antworten=answer helfen=help kaufen=buy verkaufen=sell öffnen=open schließen=close verstehen=understand vergessen=forget erinnern=remember brauchen=need wollen=want können=can müssen=must"],
  [7,"Umwelt=environment Regierung=government Gesellschaft=society Erfahrung=experience Unterschied=difference Entscheidung=decision Gelegenheit=opportunity Verantwortung=responsibility Wissenschaft=science Erfindung=invention Verbesserung=improvement Beziehung=relationship Zukunft=future Vergangenheit=past Gegenwart=present Ergebnis=result Ursache=cause Wirkung=effect Vorteil=advantage Nachteil=disadvantage erreichen=achieve entwickeln=develop entscheiden=decide verbessern=improve vermeiden=avoid vorschlagen=suggest zustimmen=agree ablehnen=refuse erklären=explain beschreiben=describe vergleichen=compare wichtig=important schwierig=difficult gefährlich=dangerous möglich=possible notwendig=necessary"]],
 franzoesisch:[[5,"Hund=le chien Katze=le chat Haus=la maison Schule=l'école Buch=le livre Wasser=l'eau Brot=le pain Milch=le lait Apfel=la pomme Mutter=la mère Vater=le père Bruder=le frère Schwester=la sœur Freund=l'ami rot=rouge blau=bleu grün=vert gelb=jaune schwarz=noir weiß=blanc eins=un zwei=deux drei=trois vier=quatre fünf=cinq zehn=dix Hallo=bonjour Tschüss=au revoir danke=merci bitte=s'il vous plaît ja=oui nein=non Tisch=la table Stuhl=la chaise Tür=la porte Fenster=la fenêtre Auto=la voiture Stadt=la ville Straße=la rue Sonne=le soleil"],],
 spanisch:[[5,"Hund=el perro Katze=el gato Haus=la casa Schule=la escuela Buch=el libro Wasser=el agua Brot=el pan Milch=la leche Apfel=la manzana Mutter=la madre Vater=el padre Bruder=el hermano Schwester=la hermana Freund=el amigo rot=rojo blau=azul grün=verde gelb=amarillo schwarz=negro weiß=blanco eins=uno zwei=dos drei=tres vier=cuatro fünf=cinco zehn=diez Hallo=hola Tschüss=adiós danke=gracias bitte=por favor ja=sí nein=no Tisch=la mesa Stuhl=la silla Tür=la puerta Fenster=la ventana Auto=el coche Stadt=la ciudad Straße=la calle Sonne=el sol"],],
 latein:[[6,"Haus=domus Wasser=aqua Mutter=mater Vater=pater Freund=amicus Herr=dominus Frau=femina Mann=vir Kind=puer Stadt=urbs Land=terra Krieg=bellum Friede=pax Liebe=amor Zeit=tempus Tag=dies Nacht=nox Licht=lux Gott=deus loben=laudare lieben=amare sehen=videre hören=audire sagen=dicere laufen=currere kommen=venire geben=dare haben=habere sein=esse groß=magnus klein=parvus gut=bonus schlecht=malus"],]
};
function vocPairs(subj,k){
  const out=[];
  VOC[subj].forEach(([lv,s])=>{
    if(lv>Math.max(k,VOC[subj][0][0]))return;
    s.split(/\s+(?=[^=\s]+=)/).forEach(p=>{const i=p.indexOf("=");if(i>0)out.push([p.slice(0,i),p.slice(i+1)]);});
  });
  return out;
}
const VOCNAME={englisch:["Englisch-Vokabeln","🔤",3],franzoesisch:["Französisch-Vokabeln","🥖",5],spanisch:["Spanisch-Vokabeln","💃",5],latein:["Latein-Vokabeln","🏺",6]};
Object.keys(VOC).forEach(sj=>{
  const [nm,ic,from]=VOCNAME[sj];
  G("voc-"+sj,sj,nm+" (endlos)",ic,from,13,"Lerne die Wörter in kleinen Runden. Sprich jedes Wort laut: Du kannst dir das Wort <b>anhören</b> mit dem Lautsprecher. Wörter, die du falsch hast, kommen immer wieder vor. So bleiben sie im Kopf.",k=>{
    const P=vocPairs(sj,k);const p=pick(P);const m=Math.random();
    if(m<.4)return mkC(`Was heißt „${p[0]}“?`,p[1],others(P.map(x=>x[1]),p[1],3),"Denke an ein Bild zu dem Wort.");
    if(m<.7)return mkC(`Was heißt „${p[1]}“ auf Deutsch?`,p[0],others(P.map(x=>x[0]),p[0],3),"Sprich das Wort laut aus.");
    return mkT(`Schreibe auf ${sj==="englisch"?"Englisch":sj==="franzoesisch"?"Französisch":sj==="spanisch"?"Spanisch":"Latein"}: „${p[0]}“`,p[1].replace(/^(the|a) /,""),`Das Wort hat ${p[1].length} Buchstaben und beginnt mit „${p[1][0]}“.`,false);
  });
});

/* ---------- Fakten ---------- */
const CAPS="Deutschland=Berlin Frankreich=Paris Italien=Rom Spanien=Madrid Portugal=Lissabon Österreich=Wien Schweiz=Bern Niederlande=Amsterdam Belgien=Brüssel Polen=Warschau Tschechien=Prag Ungarn=Budapest Dänemark=Kopenhagen Schweden=Stockholm Norwegen=Oslo Finnland=Helsinki Griechenland=Athen Irland=Dublin Türkei=Ankara Russland=Moskau Ukraine=Kiew Rumänien=Bukarest Kroatien=Zagreb Japan=Tokio China=Peking Ägypten=Kairo Brasilien=Brasília Argentinien=Buenos_Aires Kanada=Ottawa Australien=Canberra Mexiko=Mexiko-Stadt Kenia=Nairobi Marokko=Rabat Indien=Neu-Delhi".split(" ").map(x=>x.split("=").map(y=>y.replace("_"," ")));
G("geo-hauptstadt","geographie","Hauptstädte der Welt (endlos)","🏙️",4,13,"Jedes Land hat eine <b>Hauptstadt</b>. Dort sitzt meistens die Regierung. Zum Beispiel: Frankreich – Paris, Italien – Rom. Such die Länder auf einer Karte, dann merkst du dir die Städte besser.",()=>{
  const p=pick(CAPS);return Math.random()<.65?mkC(`Was ist die Hauptstadt von ${p[0]}?`,p[1],others(CAPS.map(x=>x[1]),p[1],3),"Suche das Land auf der Karte."):mkC(`${p[1]} ist die Hauptstadt von …`,p[0],others(CAPS.map(x=>x[0]),p[0],3),"Welches Land gehört zu dieser Stadt?");});
const BL="Baden-Württemberg=Stuttgart Bayern=München Berlin=Berlin Brandenburg=Potsdam Bremen=Bremen Hamburg=Hamburg Hessen=Wiesbaden Mecklenburg-Vorpommern=Schwerin Niedersachsen=Hannover Nordrhein-Westfalen=Düsseldorf Rheinland-Pfalz=Mainz Saarland=Saarbrücken Sachsen=Dresden Sachsen-Anhalt=Magdeburg Schleswig-Holstein=Kiel Thüringen=Erfurt".split(" ").map(x=>x.split("="));
G("geo-bundesland","geographie","Bundesländer und Landeshauptstädte","🗺️",3,13,"Deutschland hat <b>16 Bundesländer</b>. Jedes hat eine Landeshauptstadt, zum Beispiel Nordrhein-Westfalen – Düsseldorf, Bayern – München.",()=>{
  const p=pick(BL);return Math.random()<.6?mkC(`Landeshauptstadt von ${p[0]}?`,p[1],others(BL.map(x=>x[1]),p[1],3),"Suche das Bundesland auf der Karte."):mkC(`${p[1]} ist die Hauptstadt von …`,p[0],others(BL.map(x=>x[0]),p[0],3),"Welches Bundesland ist es?");});
const ELM="H=Wasserstoff He=Helium Li=Lithium C=Kohlenstoff N=Stickstoff O=Sauerstoff Na=Natrium Mg=Magnesium Al=Aluminium Si=Silicium S=Schwefel Cl=Chlor K=Kalium Ca=Calcium Fe=Eisen Cu=Kupfer Zn=Zink Ag=Silber Au=Gold Hg=Quecksilber Pb=Blei Sn=Zinn Ne=Neon F=Fluor P=Phosphor".split(" ").map(x=>x.split("="));
G("chem-elemente","chemie","Elemente und ihre Zeichen (endlos)","⚗️",7,13,"Jedes chemische <b>Element</b> hat ein Kurzzeichen aus ein oder zwei Buchstaben: O = Sauerstoff, Fe = Eisen (von „Ferrum“), Au = Gold (von „Aurum“). Sie stehen im <b>Periodensystem</b>.",()=>{
  const p=pick(ELM);return Math.random()<.5?mkC(`Welches Zeichen hat ${p[1]}?`,p[0],others(ELM.map(x=>x[0]),p[0],3),"Schau ins Periodensystem."):mkC(`Wofür steht „${p[0]}“?`,p[1],others(ELM.map(x=>x[1]),p[1],3),"Schau ins Periodensystem.");});
const TIER="Hund=Säugetier Katze=Säugetier Delfin=Säugetier Fledermaus=Säugetier Pferd=Säugetier Adler=Vogel Pinguin=Vogel Spatz=Vogel Strauß=Vogel Eule=Vogel Forelle=Fisch Hai=Fisch Karpfen=Fisch Hering=Fisch Frosch=Amphib Kröte=Amphib Salamander=Amphib Schlange=Reptil Eidechse=Reptil Schildkröte=Reptil Krokodil=Reptil Biene=Insekt Ameise=Insekt Schmetterling=Insekt Marienkäfer=Insekt Fliege=Insekt Spinne=Spinnentier Skorpion=Spinnentier Zecke=Spinnentier".split(" ").map(x=>x.split("="));
G("bio-tierklassen","biologie","Tiere in Gruppen einteilen (endlos)","🐾",3,13,"Tiere gehören zu Gruppen: <b>Säugetiere</b> (säugen ihre Jungen), <b>Vögel</b> (Federn), <b>Fische</b> (Kiemen), <b>Amphibien</b> (an Land und im Wasser), <b>Reptilien</b> (Schuppen), <b>Insekten</b> (6 Beine) und <b>Spinnentiere</b> (8 Beine).",()=>{
  const p=pick(TIER);return mkC(`Zu welcher Gruppe gehört: ${p[0]}?`,p[1],["Säugetier","Vogel","Fisch","Amphib","Reptil","Insekt","Spinnentier"],"Denke an Körperbau, Beine und Haut.");});
const UNIT="Meter=Länge Kilogramm=Masse Sekunde=Zeit Newton=Kraft Volt=Spannung Ampere=Stromstärke Watt=Leistung Joule=Energie Hertz=Frequenz Pascal=Druck Ohm=Widerstand Liter=Volumen".split(" ").map(x=>x.split("="));
G("phy-einheiten","physik","Einheiten und Größen (endlos)","📏",5,13,"Jede physikalische <b>Größe</b> hat eine <b>Einheit</b>: Länge in Meter, Masse in Kilogramm, Zeit in Sekunde, Kraft in Newton, Spannung in Volt, Energie in Joule.",()=>{
  const p=pick(UNIT);return Math.random()<.5?mkC(`In welcher Einheit misst man ${p[1]}?`,p[0],others(UNIT.map(x=>x[0]),p[0],3),"Überlege, wo du die Einheit schon gesehen hast."):mkC(`Was misst man in „${p[0]}“?`,p[1],others(UNIT.map(x=>x[1]),p[1],3),"Überlege, wo du die Einheit schon gesehen hast.");});
const GESCH=[["Kolumbus erreicht Amerika",1492],["Beginn der Reformation (Luthers Thesen)",1517],["Ende des Dreißigjährigen Krieges",1648],["Beginn der Französischen Revolution",1789],["Gründung des Deutschen Kaiserreichs",1871],["Beginn des Ersten Weltkriegs",1914],["Ende des Ersten Weltkriegs",1918],["Beginn des Zweiten Weltkriegs",1939],["Ende des Zweiten Weltkriegs in Europa",1945],["Gründung der Bundesrepublik Deutschland",1949],["Bau der Berliner Mauer",1961],["Erste Mondlandung",1969],["Fall der Berliner Mauer",1989],["Deutsche Wiedervereinigung",1990]];
G("ge-daten","geschichte","Wichtige Jahreszahlen (endlos)","📜",5,13,"Mit <b>Jahreszahlen</b> ordnest du Ereignisse auf der Zeitleiste. Merke dir die wichtigsten Ankerpunkte: 1492 Amerika, 1789 Revolution, 1914–1918 Erster Weltkrieg, 1939–1945 Zweiter Weltkrieg, 1989/1990 Mauerfall und Einheit.",()=>{
  const p=pick(GESCH);const ys=GESCH.map(x=>String(x[1]));return Math.random()<.6?mkC(`In welchem Jahr: ${p[0]}?`,String(p[1]),others(ys,String(p[1]),3),"Ordne das Ereignis auf der Zeitleiste ein."):mkC(`Was geschah ${p[1]}?`,p[0],others(GESCH.map(x=>x[0]),p[0],3),"Ordne das Jahr auf der Zeitleiste ein.");});

/* ---------- Biologie (endlos) ---------- */
const pairG=(id,name,ic,from,to,explain,pairs,q1,q2)=>G(id,"biologie",name,ic,from,to,explain,()=>{
  const p=pick(pairs);return Math.random()<.55?mkC(q1(p),p[1],others(pairs.map(x=>x[1]),p[1],3),"Überlege, was du darüber schon gelernt hast."):mkC(q2(p),p[0],others(pairs.map(x=>x[0]),p[0],3),"Überlege, was du darüber schon gelernt hast.");});
pairG("bio-organe","Organe und ihre Aufgaben (endlos)","🫀",3,13,"Jedes <b>Organ</b> hat eine Aufgabe: Das <b>Herz</b> pumpt Blut, die <b>Lunge</b> nimmt Sauerstoff auf, die <b>Niere</b> filtert das Blut. Alle Organe arbeiten zusammen.",
 [["Herz","pumpt das Blut durch den Körper"],["Lunge","nimmt Sauerstoff auf und gibt Kohlenstoffdioxid ab"],["Niere","filtert das Blut und bildet Urin"],["Leber","entgiftet das Blut und bildet Gallenflüssigkeit"],["Magen","verdaut die Nahrung mit Magensäure"],["Dünndarm","nimmt Nährstoffe ins Blut auf"],["Dickdarm","entzieht dem Nahrungsbrei Wasser"],["Gehirn","steuert den Körper und verarbeitet Reize"],["Haut","schützt den Körper und spürt Berührung"],["Zwerchfell","ist der wichtigste Atemmuskel"],["Speiseröhre","transportiert die Nahrung zum Magen"],["Schneidezähne","beißen die Nahrung ab"],["Backenzähne","zermahlen die Nahrung"]],
 p=>`Welche Aufgabe hat: ${p[0]}?`,p=>`Welches Organ oder Körperteil ${p[1]}?`);
pairG("bio-pflanze","Teile der Pflanze (endlos)","🌱",2,13,"Die <b>Wurzel</b> nimmt Wasser auf und hält die Pflanze fest. Der <b>Stängel</b> leitet Wasser und Nährstoffe. Im <b>Blatt</b> findet die Photosynthese statt. Aus der <b>Blüte</b> entstehen Früchte und Samen.",
 [["Wurzel","nimmt Wasser und Mineralstoffe auf"],["Stängel","leitet Wasser und Nährstoffe weiter"],["Blatt","bildet mit Licht Zucker (Photosynthese)"],["Blüte","dient der Fortpflanzung"],["Frucht","schützt die Samen und hilft bei der Verbreitung"],["Samen","enthält den Keimling einer neuen Pflanze"],["Spaltöffnung","regelt den Gasaustausch des Blattes"],["Chlorophyll","ist der grüne Farbstoff, der Licht einfängt"]],
 p=>`Welche Aufgabe hat bei Pflanzen: ${p[0]}?`,p=>`Welcher Pflanzenteil ${p[1]}?`);
pairG("bio-zelle","Die Zelle und ihre Teile (endlos)","🔬",7,13,"Die <b>Zelle</b> ist der kleinste lebende Baustein. Der <b>Zellkern</b> speichert die Erbinformation, die <b>Mitochondrien</b> liefern Energie, die <b>Chloroplasten</b> machen Photosynthese (nur Pflanzen), die <b>Zellwand</b> gibt Stabilität (nur Pflanzen).",
 [["Zellkern","enthält die Erbinformation (DNA)"],["Mitochondrium","setzt Energie aus Nährstoffen frei"],["Chloroplast","führt die Photosynthese durch"],["Zellwand","gibt der Pflanzenzelle Halt"],["Zellmembran","umgibt die Zelle und regelt den Stoffaustausch"],["Vakuole","speichert Wasser und Stoffe"],["Ribosom","baut Eiweiße zusammen"]],
 p=>`Welche Aufgabe hat: ${p[0]}?`,p=>`Welcher Zellbestandteil ${p[1]}?`);
pairG("bio-sinne","Sinne und Sinnesorgane (endlos)","👁️",1,13,"Wir haben fünf Sinne: <b>sehen</b> (Auge), <b>hören</b> (Ohr), <b>riechen</b> (Nase), <b>schmecken</b> (Zunge) und <b>tasten</b> (Haut).",
 [["Auge","sehen"],["Ohr","hören und das Gleichgewicht halten"],["Nase","riechen"],["Zunge","schmecken"],["Haut","tasten, fühlen und Wärme spüren"]],
 p=>`Wofür ist das ${p[0]} da?`,p=>`Mit welchem Organ kann man ${p[1]}?`);
pairG("bio-naehr","Nährstoffe und Vitamine (endlos)","🥦",4,13,"Der Körper braucht <b>Kohlenhydrate</b> (Energie), <b>Fette</b> (Energiespeicher), <b>Eiweiße</b> (Aufbau von Muskeln und Zellen), <b>Vitamine</b> und <b>Mineralstoffe</b> sowie Wasser.",
 [["Kohlenhydrate","liefern schnell Energie"],["Fette","speichern Energie und schützen Organe"],["Eiweiße","bauen Muskeln und Zellen auf"],["Vitamin C","stärkt die Abwehr"],["Calcium","macht Knochen und Zähne stabil"],["Eisen","hilft beim Sauerstofftransport im Blut"],["Ballaststoffe","fördern die Verdauung"],["Wasser","ist Lösungsmittel und Transportmittel im Körper"]],
 p=>`Wofür braucht der Körper: ${p[0]}?`,p=>`Welcher Stoff ${p[1]}?`);
const CHAINS=[["Gras","Hase","Fuchs"],["Eiche","Raupe","Meise","Sperber"],["Alge","Kleinkrebs","Fisch","Reiher"],["Getreide","Maus","Eule"],["Salat","Schnecke","Igel","Uhu"]];
G("bio-kette","biologie","Nahrungsketten (endlos)","🔗",4,13,"In einer <b>Nahrungskette</b> wird gezeigt, wer wen frisst: Gras → Hase → Fuchs. Pflanzen sind <b>Produzenten</b> (sie bauen Nahrung auf). Tiere, die Pflanzen fressen, sind <b>Konsumenten 1. Ordnung</b>, Tiere, die diese fressen, <b>Konsumenten 2. Ordnung</b>.",()=>{
  const c=pick(CHAINS);const all=[].concat(...CHAINS);const m=Math.random();
  if(m<.35)return mkC(`In der Kette ${c.join(" → ")}: Wer ist der Produzent?`,c[0],others(c.slice(1),c[0],3),"Der Produzent ist die Pflanze am Anfang der Kette.");
  if(m<.7){const i=rnd(1,c.length-1);return mkC(`In der Kette ${c.join(" → ")}: Wer frisst „${c[i-1]}“?`,c[i],others(c.filter(x=>x!==c[i-1]),c[i],3),"Der Pfeil zeigt, wer gefressen wird und wer frisst.");}
  const i=rnd(1,c.length-1);const lv=["","Konsument 1. Ordnung","Konsument 2. Ordnung","Konsument 3. Ordnung"][i];
  return mkC(`In der Kette ${c.join(" → ")}: Welche Rolle hat „${c[i]}“?`,lv,["Produzent","Konsument 1. Ordnung","Konsument 2. Ordnung","Konsument 3. Ordnung"].filter(x=>x!==lv||true),"Zähle ab dem Produzenten: Wer frisst die Pflanze, ist Konsument 1. Ordnung.");});
const ENTW=[["Schmetterling",["Ei","Raupe","Puppe","Schmetterling"]],["Frosch",["Laich","Kaulquappe","Jungfrosch","Frosch"]],["Pflanze",["Samen","Keimling","junge Pflanze","blühende Pflanze"]],["Huhn",["Ei","Küken","Junghenne","Henne"]]];
G("bio-entw","biologie","Entwicklung und Lebenszyklus (endlos)","🦋",1,13,"Viele Tiere verändern sich beim Wachsen. Der Schmetterling macht eine <b>Verwandlung</b>: Ei → Raupe → Puppe → Schmetterling. Beim Frosch: Laich → Kaulquappe → Jungfrosch → Frosch.",()=>{
  const [n,st]=pick(ENTW);const i=rnd(0,st.length-2);
  return mkC(`Entwicklung beim ${n==="Pflanze"?"Pflanzenwachstum":n}: Was kommt nach „${st[i]}“?`,st[i+1],others([].concat(...ENTW.map(x=>x[1])).filter(x=>!st.includes(x)).concat(st.filter((x,j)=>j!==i+1&&j!==i)),st[i+1],3),"Denke an die Reihenfolge von klein nach groß.");});
G("bio-mendel","biologie","Vererbung nach Mendel (endlos)","🧬",9,13,"Jedes Merkmal hat zwei Erbanlagen (Allele). <b>Großbuchstabe</b> = dominant (setzt sich durch), <b>Kleinbuchstabe</b> = rezessiv. <b>Aa × Aa</b>: Nachkommen sind zu 25 % AA, 50 % Aa und 25 % aa. Das rezessive Merkmal zeigt sich nur bei <b>aa</b>.",()=>{
  const cs=[["Aa","Aa","aa",25],["Aa","Aa","dominant sichtbar (AA oder Aa)",75],["Aa","aa","aa",50],["AA","aa","Aa",100],["Aa","AA","aa",0],["AA","AA","AA",100],["aa","aa","aa",100]];
  const c=pick(cs);const t=c[2];
  const q=`Eltern: ${c[0]} × ${c[1]}. Wie viel Prozent der Nachkommen haben ${t.startsWith("dominant")?"das dominante Merkmal":"den Erbtyp "+t}?`;
  return mkC(q,c[3]+" %",["0 %","25 %","50 %","75 %","100 %"],"Zeichne ein Kreuzungsquadrat (Punnett-Quadrat) mit den Erbanlagen der Eltern.");});
