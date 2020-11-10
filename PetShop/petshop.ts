type petname = "Dog" | "Bird" | "Cat" | "Fish";

interface PetDetails {
    name: petname;
    count: number;
    history:string;
}

class PetsAvailability{
    pets:PetDetails[];
    constructor() {
        this.pets = [];
    }
    insertPet(petInfo: PetDetails) {
        this.pets.push(petInfo);
    }
    listOfAvailablePets() {
        return this.pets;
    }
}

class RequestPets{
    requestedPets: PetDetails[];
    firstFiveEnquiries: PetDetails[];
  
    constructor() {
      this.requestedPets = [];
      this.firstFiveEnquiries = [];
    }
    enquirePets(reqPets) {
      this.requestedPets.push(reqPets);
    }
    listOfEnqueries() {
      return this.requestedPets;
    }

    firstFiveEnquires(petsCheck) {
        let availablePets = petsCheck.listOfAvailablePets();
        for (let i = 0; i < 5; i++) {
          this.firstFiveEnquiries.push(this.requestedPets[i]);
        }
        let j=1;
        this.firstFiveEnquiries.forEach((query) => {
            for(let i=0;i<availablePets.length;i++){
                if (query.name == availablePets[i].name) {
                    if (query.count < availablePets[i].count) {
                      console.log(`Query${j}---> Request successful of ${query.count} - ${query.name}. We are happy for your adaption. That's so kind of you!!!`);
                    }else{
                        console.log(`Query${j}---> Can't fulfill ${query.name} as requested number of ${query.name} exceeds actual available number of ${query.name} - ${availablePets[i].count}`)
                    }
                    j++;
                }
            }
        });
    }

    finalCountOfPets(petsCheck){
        let petsLeft = petsCheck.listOfAvailablePets();
        let queriesArray = [...this.firstFiveEnquiries];
         queriesArray.forEach((query)=>{
                for(let i=0;i<petsLeft.length;i++){
                    if(query.name==petsLeft[i].name ){
                        if(query.count<=petsLeft[i].count){
                        petsLeft[i].count = petsLeft[i].count - query.count;
                    }            
                }
            }
        })
        return petsLeft;
    }
}


let petsCheck = new PetsAvailability();
petsCheck.insertPet({ name: "Dog", count: 90 , history:"Honest Dog"});
petsCheck.insertPet({ name: "Cat", count: 45 , history:"Doesn't drink milk without permission"});
petsCheck.insertPet({ name: "Bird", count: 70 , history:"Flies back to the owner within no time"});
petsCheck.insertPet({ name: "Fish", count: 4 , history:"Swims in a Stylish fashion"});

console.log("<------Available Pets------>")
console.log(petsCheck.listOfAvailablePets());

let request = new RequestPets();
request.enquirePets({ name: "Dog", count: 10 });
request.enquirePets({ name: "Fish", count: 10 });
request.enquirePets({ name: "Cat", count: 10 });
request.enquirePets({ name: "Dog", count: 10 });
request.enquirePets({ name: "Bird", count: 10 });
request.enquirePets({ name: "Dog", count: 10 });
request.enquirePets({ name: "Cat", count: 10 });

console.log("<------List of Enquiries------>")
console.log(request.listOfEnqueries());
console.log("<---------------RESULTS OF USER ENQUIRES (Only five queries are allowed)--------------->")
request.firstFiveEnquires(petsCheck);
console.log("<------Remaining number of pets are------>")
console.log(request.finalCountOfPets(petsCheck))
