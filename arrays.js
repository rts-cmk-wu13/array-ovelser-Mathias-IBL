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
    
    // Opgave 7

    let mango = fruitsArray.indexOf("Mango")
    console.log("Opgave 7", mango);

    let blueberry = fruitsArray.indexOf("Blåbær")
    console.log("Opgave 7", blueberry);

    // Opgave 8
    
    let removedog = dogsArray.indexOf("Polly")
    if (removedog > -1) dogsArray.splice(removedog, 1)
    console.log("Opgave 8", dogsArray);

    // Ekstraopgave

    let sumOf1 = numbersArray.reduce(function(result, number){
        return result + number
    })

    console.log("Ekstraopgave", sumOf1);

    let sumOf2 = numbersArray.reduce( (result, number) => result + number, 500)
    console.log("Ekstraopgave", sumOf2);
    
    
    



    
    
    

}) // ends DOMContentLoaded