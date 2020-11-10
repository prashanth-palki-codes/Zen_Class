var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var PetsAvailability = /** @class */ (function () {
    function PetsAvailability() {
        this.pets = [];
    }
    PetsAvailability.prototype.insertPet = function (petInfo) {
        this.pets.push(petInfo);
    };
    PetsAvailability.prototype.listOfAvailablePets = function () {
        return this.pets;
    };
    return PetsAvailability;
}());
var RequestPets = /** @class */ (function () {
    function RequestPets() {
        this.requestedPets = [];
        this.firstFiveEnquiries = [];
    }
    RequestPets.prototype.enquirePets = function (reqPets) {
        this.requestedPets.push(reqPets);
    };
    RequestPets.prototype.listOfEnqueries = function () {
        return this.requestedPets;
    };
    RequestPets.prototype.firstFiveEnquires = function (petsCheck) {
        var availablePets = petsCheck.listOfAvailablePets();
        for (var i = 0; i < 5; i++) {
            this.firstFiveEnquiries.push(this.requestedPets[i]);
        }
        var j = 1;
        this.firstFiveEnquiries.forEach(function (query) {
            for (var i = 0; i < availablePets.length; i++) {
                if (query.name == availablePets[i].name) {
                    if (query.count < availablePets[i].count) {
                        console.log("Query" + j + "---> Request successful of " + query.count + " - " + query.name + ". We are happy for your adaption. That's so kind of you!!!");
                    }
                    else {
                        console.log("Query" + j + "---> Can't fulfill " + query.name + " as requested number of " + query.name + " exceeds actual available number of " + query.name + " - " + availablePets[i].count);
                    }
                    j++;
                }
            }
        });
    };
    RequestPets.prototype.finalCountOfPets = function (petsCheck) {
        var petsLeft = petsCheck.listOfAvailablePets();
        var queriesArray = __spreadArrays(this.firstFiveEnquiries);
        queriesArray.forEach(function (query) {
            for (var i = 0; i < petsLeft.length; i++) {
                if (query.name == petsLeft[i].name) {
                    if (query.count <= petsLeft[i].count) {
                        petsLeft[i].count = petsLeft[i].count - query.count;
                    }
                }
            }
        });
        return petsLeft;
    };
    return RequestPets;
}());
var petsCheck = new PetsAvailability();
petsCheck.insertPet({ name: "Dog", count: 90, history: "Honest Dog" });
petsCheck.insertPet({ name: "Cat", count: 45, history: "Doesn't drink milk without permission" });
petsCheck.insertPet({ name: "Bird", count: 70, history: "Flies back to the owner within no time" });
petsCheck.insertPet({ name: "Fish", count: 4, history: "Swims in a Stylish fashion" });
console.log("<------Available Pets------>");
console.log(petsCheck.listOfAvailablePets());
var request = new RequestPets();
request.enquirePets({ name: "Dog", count: 10 });
request.enquirePets({ name: "Fish", count: 10 });
request.enquirePets({ name: "Cat", count: 10 });
request.enquirePets({ name: "Dog", count: 10 });
request.enquirePets({ name: "Bird", count: 10 });
request.enquirePets({ name: "Dog", count: 10 });
request.enquirePets({ name: "Cat", count: 10 });
console.log("<------List of Enquiries------>");
console.log(request.listOfEnqueries());
console.log("<---------------RESULTS OF USER ENQUIRES (Only five queries are allowed)--------------->");
request.firstFiveEnquires(petsCheck);
console.log("<------Remaining number of pets are------>");
console.log(request.finalCountOfPets(petsCheck));
