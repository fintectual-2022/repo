function withinDistance (address: Address, radius: number): Boolean | undefined {
    if (isPrague(address)) {
        return true
    }
    if (Prague.locations.has(address.city)) {
        let distance: number = Prague.locations.get(address.city)! * 0.8;
        if (distance <= radius)
        {
            return true;
        }
        else {
            return false;
        }
    }
    return undefined;
}
function getDistance (address: Address): number | undefined {
    if (isPrague(address)) {
        return 4;
    }
    if (Prague.locations.has(address.city)) {
        let distance: number = Prague.locations.get(address.city)! * 0.8;
        return distance;
    }
    return undefined;
}
function isPrague(address: Address) {
    return address.city.includes("Prague")
}
class Address {
    city: String;
    street: String;
    postcode: String
    country: String

    constructor(city: String, street: String, postcode: String, country: String) {
        this.city = city;
        this.street = street;
        this.postcode = postcode;
        this.country = country;
    }
}
class Prague {
    static locations = new Map <String, number> ([
        ["Brno", 205],
        ["Ostrava", 370],
        ["Plzeň", 95],
        ["Liberec", 110],
        ["Olomouc", 280],
        ["České Budějovice", 150],
        ["Hradec Králové", 115],
        ["Ústí nad Labem", 90],
        ["Pardubice", 120],
        ["Zlín", 300],
        ["Havířov", 380], 
        ["Kladno", 30],
        ["Most", 70],
        ["Opava", 370],
        ["Frýdek-Místek", 370],
        ["Jihlava", 130],
        ["Karviná", 390],
        ["Teplice", 90],
        ["Děčín", 115],
        ["Chomutov", 100],
        ["Karlovy Vary", 125],
        ["Jablonec nad Nisou", 110],
        ["Prostějov", 260],
        ["Mladá Boleslav", 65],
        ["Přerov", 290],
        ["Třinec", 400],
        ["Beroun", 30],
        ["Blansko", 230],
        ["Mělník", 50],
        ["Náchod", 155],
        ["Jirkov", 105],
        ["Brandýs nad Labem-Stará Boleslav", 30],
        ["Žatec", 80],
        ["Kralupy nad Vltavou", 30],
        ["Louny", 65],
        ["Kadaň", 110],
        ["Hranice", 320],
        ["Otrokovice", 290],
        ["Benešov", 45],
        ["Svitavy", 175],
        ["Uherský Brod", 290],
        ["Říčany", 25],
        ["Rožnov pod Radhoštěm", 360],
        ["Jičín", 95],
        ["Slaný", 40],
        ["Neratovice", 30],
        ["Ostrov", 135],
        ["Pelhřimov", 115],
        ["Bruntál", 335],
        ["Dvůr Králové nad Labem", 140],
        ["Rakovník", 60],
        ["Česká Třebová", 170],
        ["Nymburk", 50],
        ["Varnsdorf", 125],
        ["Bílina", 90],
        ["Poděbrady", 55],
        ["Klášterec nad Ohří", 115],
        ["Turnov", 90],
        ["Ústí nad Orlicí", 170],
        ["Rokycany", 80],
        ["Hlučín", 380],
        ["Zábřeh", 230],
        ["Šternberk", 300],
        ["Chodov", 10],
        ["Tachov", 155],
        ["Roudnice nad Labem", 50],
        ["Aš", 190],
        ["Český Krumlov", 175],
        ["Milovice", 50],
        ["Krupka", 100],
        ["Jaroměř", 135],
        ["Mariánské Lázně", 175],
        ["Čelákovice", 35],
        ["Vysoké Mýto", 145],
        ["Vrchlabí", 130],
        ["Boskovice", 240],
        ["Nový Bor", 100],
        ["Holešov", 280],
        ["Vlašim", 70],
        ["Velké Meziříčí", 150],
        ["Uničov", 230],
        ["Kyjov", 250],
        ["Kuřim", 205],
        ["Domažlice", 145],
        ["Humpolec", 100],
        ["Rychnov nad Kněžnou", 150],
        ["Rumburk", 130],
        ["Sušice", 130],
        ["Jeseník", 240],
        ["Prachatice", 145],
        ["Veselí nad Moravou", 295],
        ["Frenštát pod Radhoštěm", 365],
        ["Čáslav", 95],
        ["Česká Lípa", 90],
        ["Třebíč", 165],
        ["Tábor", 90],
        ["Znojmo", 200],
        ["Kolín", 70],
        ["Příbram", 60],
        ["Cheb", 170],
        ["Písek", 110],
        ["Trutnov", 160],
        ["Orlová", 385],
        ["Kroměříž", 270],
        ["Vsetín", 320],
        ["Šumperk", 220],
        ["Uherské Hradiště", 280],
        ["Břeclav", 260],
        ["Hodonín", 270],
        ["Český Těšín", 395],
        ["Litoměřice", 70],
        ["Havlíčkův Brod", 120],
        ["Nový Jičín", 340],
        ["Chrudim", 125],
        ["Krnov", 360],
        ["Litvínov", 110],
        ["Strakonice", 115],
        ["Sokolov", 145],
        ["Valašské Meziříčí", 345],
        ["Klatovy", 130],
        ["Kopřivnice", 360],
        ["Jindřichův Hradec", 135],
        ["Kutná Hora", 80],
        ["Bohumín", 380],
        ["Žďár nad Sázavou", 150],
        ["Vyškov", 240],

    ])
}
// enum Distances {
//     fiveKm,
//     tenKm,
//     twentyFiveKm,
//     fiftyKm,
//     hundredKm,
// }
    // public getLocations(distance: Distances): Set<String> {
    //     var returnable = new Set<String>();
    //     switch (distance) {
    //         case Distances.fiveKm:
    //             returnable = Prague.fiveKm;
    //             break;
    //         case Distances.tenKm:
    //             returnable = Prague.tenKm;
    //             break;
    //         case Distances.twentyFiveKm:
    //             returnable = Prague.twentyFiveKm;
    //             break;
    //         case Distances.fiftyKm:
    //             returnable = Prague.fiftyKm;
    //             break;
    //         case Distances.hundredKm:
    //             returnable = Prague.hundredKm;
    //             break;
    //         default:
    //             break;
    //     }
    //     return returnable
    // }

// function withinDistance (address: Address, distance: Distances): Boolean {
//     let prague = new Prague();
//     let set = prague.getLocations(distance);
//     return set.has(address.city);
// }

// function getDistance(address: Address) {
    
// }