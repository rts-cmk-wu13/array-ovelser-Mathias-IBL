document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]
    
    // --- Løs opgaverne herunder --- 

    // Opgave 1

    let newNumbers = numbersArray.filter(function(number){
        return number > 20;
    })
    console.log("Opgave 1", newNumbers);

    // Opgave 2

    catsArray.push("Sniffles")
    console.log("Opgave 2", catsArray);

    // Opgave 3

    let checkDog1 = dogsArray.includes("Trixie")
    console.log("Opgave 3", checkDog1);

    let checkDog2 = dogsArray.some((dog) => dog == "Baxter")
    console.log("Opgave 3", checkDog2);
    

    // Opgave 4

    let find = catsArray.find(cat => cat == "Bagheera")
    console.log("Opgave 4", find);
    
    let find2 = catsArray.find(cat => cat == "Salem")
    console.log("Opgave 4", find2);

    // Opgave 5

    let multip = numbersArray.map((number) => number * 3)
    console.log("Opgave 5", multip);

    
    // Opgave 6
    
    let doggies = dogsArray.join(" - ")
    console.log("Opgave 5", doggies);
    
    



    
    
    

}) // ends DOMContentLoaded