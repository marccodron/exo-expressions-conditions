//Ce programme est incorrect: il l'est toujours... je n'ai pas trouvé la solution.

let list = "'Alice', 'Bob', 'Charlie', 'Craig', 'Eva'"
for (let j = 0; j <= list.length; ++i) {
  list[i] = list[i].toLowerCase()
  
  switch (list[i]) {
    case 'Alice':
      consol.log('Alice want to exchange with Bob');
      break;
    case 'Bob': 
      console.log('Bob want to exchange with Alice');
      break;
    case 'Charlie':
      console.log('Charlie is a generic third participant');
      break;
    case 'Craig':
      console.log('Craig is a password cracker');
      break;
    case 'Eva':
      console.log('Eve is an eavesdropper');
  }
}