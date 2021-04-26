// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const serieA = [
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Hellas",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Benevento",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Sampdoria",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Crotone",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Sassuolo",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Udinese",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    }
]

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

const listaSquadreFallose = [];
for (let i = 0; i < serieA.length; i++) {
    let squadra = serieA[i];

    squadra.puntiFatti = Math.ceil(Math.random() * 100);
    squadra.falliSubiti = Math.ceil(Math.random() * 100);

    listaSquadreFallose.push(squadra.nome, squadra.falliSubiti)
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

console.log(serieA);
console.log(listaSquadreFallose);