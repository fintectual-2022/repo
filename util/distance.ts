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
    static fiveKm = new Set<String>();
    static tenKm = new Set<String>();
    static twentyFiveKm = new Set<String>();
    static fiftyKm = new Set<String>();
    static hundredKm = new Set<String>();

    public getLocations(distance: Distances): Set<String> {
        var returnable = new Set<String>();
        switch (distance) {
            case Distances.fiveKm:
                returnable = Prague.fiveKm;
                break;
            case Distances.tenKm:
                returnable = Prague.tenKm;
                break;
            case Distances.twentyFiveKm:
                returnable = Prague.twentyFiveKm;
                break;
            case Distances.fiftyKm:
                returnable = Prague.fiftyKm;
                break;
            case Distances.hundredKm:
                returnable = Prague.hundredKm;
                break;
            default:
                break;
        }
        return returnable
    }
}
enum Distances {
    fiveKm,
    tenKm,
    twentyFiveKm,
    fiftyKm,
    hundredKm,
}
function withinDistance (address: Address, distance: Distances): Boolean {
    let prague = new Prague();
    let set = prague.getLocations(distance);
    return set.has(address.city);
}

function calculateDistance(a: Address, b: Address) {
    
}