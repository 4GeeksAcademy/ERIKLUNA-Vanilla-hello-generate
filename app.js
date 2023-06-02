let pronoun = ["the", "our", "your"];
let adj = ["great", "big", "best", "brave"];
let noun = ["jogger", "racoon", "Juan", "ball", "cat"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let dominio = `${pronoun[i]}${adj[j]}${noun[k]}`;
      let extensiones = [".com", ".net", ".org", ".io"];
      for (let l = 0; l < extensiones.length; l++) {
        let dominioTotal = `${dominio}${extensiones[l]}`;
        console.log(dominioTotal);
      }
    }
  }
}
