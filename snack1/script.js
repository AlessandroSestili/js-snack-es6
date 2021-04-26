// Creare un array di oggetti:
//   Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const listaBici = [
    {
        nome: "Montain-bike",
        peso: 7
    },

    {
        nome: "Cross",
        peso: 10
    },

    {
        nome: "Track",
        peso: 12
    },

    {
        nome: "Bmx",
        peso: 5
    },

    {
        nome: "Downhill",
        peso: 8
    },

    {
        nome: "Faleriana",
        peso: 3
    }
];

// Creo un Array dove ci saranno i pesi di tutte le biciclette 
const listaPesoBici = [];

// Ciclo su tutti gli oggetti nell' Array per recuperare il peso di ognuno e metterlo nell' Array sopra dichiarato
for (let i = 0; i < listaBici.length; i++) {
    let pesoBicicletta = listaBici[i].peso;

    // Pusho i pesi nell' Array 
    listaPesoBici.push(pesoBicicletta);
}

// Ciclo di nuovo su tutte le bici per confrontare la bici piu leggera 
for (let i = 0; i < listaBici.length; i++) {
    let pesoBicicletta = listaBici[i].peso;
    let nomeBicicletta = listaBici[i].nome;

    let biciPiuLeggera = Math.min(...listaPesoBici);
    let biciPiuPesante = Math.max(...listaPesoBici)

    if (pesoBicicletta === biciPiuLeggera) {
        console.log(`La ${nomeBicicletta} è la bicicletta più leggera al mondo! Pesa solamente ${pesoBicicletta}kg.`);
    }
    
    if (pesoBicicletta === biciPiuPesante) {
        console.log(`La ${nomeBicicletta} è bici più ciotta sul mercato, arriva a pesare fino a ${pesoBicicletta}kg.`);
    }
}






