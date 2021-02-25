
//En fonction du prénom (firstName) et du genre de l'utilisateur(gender) lui afficher le message correspondant. Vous devrez utiliser un ternary operator pour cela.
//La variable firstName contiendra le prénom de l'utilisateur.
//la variable gender contiendra le genre de l'utilisateur avec comme valeur male ou female.
//Vous devrez afficher par exemple pour un homme prénommé Bob:

//Bonjour Bob, vous êtes entré sur le chan
//Vous devrez afficher pour une femme prénommée Alice:

//Bonjour Alice, vous êtes entrée sur le chan

//////
let firstName1 = 'Bob' 
let firstName2 = 'Alice'
//Let say Alice :
let gender = 'Female'
let msg = gender === 'Male' ? `Bonjour ${firstName1}, vous êtes entré sur le chan` : `Bonjour ${firstName2} vous êtes entrée sur le chan`
console.log(msg)