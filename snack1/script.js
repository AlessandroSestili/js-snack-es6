// Creare un array di oggetti:
//   Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const listaBici = [
    {
        nome: "montain-bike",
        peso: 7
    },

    {
        nome: "cross",
        peso: 10
    },

    {
        nome: "track",
        peso: 12
    },

    {
        nome: "Bmx",
        peso: 5
    },

    {
        nome: "Downhill",
        peso: 8
    }
];

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
var listaPesoBici = [];

for (let i = 0; i < listaBici.length; i++) {
    let pesoBici = listaBici[i].peso;
    
    listaPesoBici.push(pesoBici)
}

console.log(
`Ecco il peso della bici più leggera: ${Math.min(...listaPesoBici)}`);




