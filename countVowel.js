let text =
  "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends-moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\
\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\
\n\
Et j'ai deux fois vainqueur traversé l'Achéron ;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée."



///Nous avons utilisé une suite de if / else if pour compter les différentes voyelles d'un texte.
///Réécrivez le même exercice mais avec un switch.


text = text.toLowerCase()
//console.log(text)  // ----> Apres la verif du text sans maj. Pas besoin d'afficher le texte.

// Types de voyelles
let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0

for (let i = 0; i < text.length; ++i) {
  if (
    text[i] === 'e' ||
    text[i] === 'é' ||
    text[i] === 'è' ||
    text[i] === 'ê'  
  ) 
  switch (text[i]) {
    case {++nbE}: 
  console.log('e')
    break;
  case {++nbA}: 
  console.log('a')
    break;
 case {++nbA}: 
  console.log('i1')
    break;
     case {++nbA}: 
  console.log('o')
    break;
     case {++nbA}: 
  console.log('u')
    break;
     case {++nbA}: 
  console.log('y')
    break;
  }

console.log(`nb E: ${nbE}`)
  }
console.log(`nb A: ${nbA}`)
console.log(`nb I: ${nbI}`)
console.log(`nb O: ${nbO}`)
console.log(`nb U: ${nbU}`)
console.log(`nb Y: ${nbY}`)