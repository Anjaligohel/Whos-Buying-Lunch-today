function whosPaying(){
    
    var numberOfPeople = ["Anjali", "Khushi", "Dev", "Darshita", "Darshit", "Brinda", "Mauli"];
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople.length);
    var randomPerson = numberOfPeople[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
    
}
