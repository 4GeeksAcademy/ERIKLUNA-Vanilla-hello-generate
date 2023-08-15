let pronoun = ["the", "our"];
let adj = ["great", "big",];
let noun = ["jogger", "racoon"];
let extensiones = [".com", ".net", ".org"];

let generarDominio = [];
pronoun.forEach(pronounElement => {
    adj.forEach(adjElement => {
        noun.forEach(nounElement => {
            extensiones.forEach(extensionElement  => {
              generarDominio.push(`${pronounElement }${adjElement }${nounElement}${extensionElement }`);
            });
        });
    });
});

console.log(generarDominio);


