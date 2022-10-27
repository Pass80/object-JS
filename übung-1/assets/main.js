console.log('=============1================');

let unsereHaustiere = [
    {
        tiertyp: 'Katze',

        names: ['Gipsy', 'Nala', 'Dinky'],
    },
    {
        tiertyp: 'Hunde',
        names: ['Knöpfchen', 'Pinselchen', 'Droopy'],
    },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

unsereHaustiere[1].names.map((name) => console.log(name));

// addieren ein methode zum Objekt
unsereHaustiere.namenÄnderen = function (name, index) {
    this[1].names[index] = name;
};

// name des ersten element in Hunden array ändern
unsereHaustiere.namenÄnderen('Max', 0);

console.log(unsereHaustiere);

console.log('=============2================');

let person = {
    name: 'Feras',
    alter: 41,
    sagNameAlter: function () {
        alert(
            `Mein Name ist ${this.name} und ich bin ${this.alter} jahre alt `
        );
    },
};
console.log(person.name, person.alter);

person.sagNameAlter();

console.log('================3=============');

let unserLager = {
    schreibtisch: {
        schublade: 'Hefter',
    },
    schrank: {
        'Obere Schublade': {
            Ordner1: 'Dokumente',
            Ordner2: 'Geheimnisse',
        },
        'Untere Schublade': 'Cola',
    },
};

console.log(
    unserLager.schrank['Obere Schublade'].Ordner2,
    unserLager.schrank['Untere Schublade'],
    unserLager.schreibtisch.schublade
);

console.log('================4=============');

let myMusic = [
    {
        kunstler: 'The Beatles',
        title: 'Abbey Road',
        release_jahr: 1969,
        formate: ['LP', 'CD', 'MC', 'Download'],
        gold: true,
    },
    {
        kunstler: 'Pink Floyd',
        title: 'Dark Side of the Moon',
        release_jahr: 1978,
        formate: ['CS', 'CD', 'LP', 'Download'],
        gold: true,
    },
    {
        kunstler: 'Led Zeppelin',
        title: 'Led Zeppelin IV',
        release_jahr: 1971,
        formate: ['CS', 'LP', 'Download'],
        gold: true,
    },
    {
        kunstler: 'Metallica',
        title: 'Kill ’Em All und Ride the Lightning',
        release_jahr: 1983,
        formate: ['LP', 'CD', 'MC', 'Download'],
        gold: true,
    },
];

console.log(myMusic[0].kunstler);
console.log(myMusic[0].formate[3]);
console.log(myMusic[1].gold);
console.log(myMusic[2].release_jahr);
console.log(myMusic[3].release_jahr);
console.log(myMusic[3].formate[2]);
console.log(myMusic[3].title.split(' ')[4]);
console.log(myMusic[2].title.split(' ')[2]);
console.log(myMusic[1].kunstler.split(' ')[1]);

console.log('================5=============');

let person1 = {
    vorname: 'Anton',
    nachname: 'Fish',
    fullName: function () {
        return this.vorname + ' ' + this.nachname;
    },
};
console.log(person1.fullName());

console.log('================6=============');

let person2 = {
    vorname: 'Anton',
    nachname: 'Nüssler',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function () {
        return ` Mein Name ist ${this.vorname} ${this.nachname} und ich bin ${this.alter} jahre alt, ${this.familienstand}, und ${this.groesse} groß.`;
    },
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById('person').innerHTML = person2.profil();
