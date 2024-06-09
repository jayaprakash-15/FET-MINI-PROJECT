"use strict";

// PARENT CLASS PERSON
class Person {
    constructor(name, gender, age, occupation, insuranceType, img) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.occupation = occupation;
        this.insuranceType = insuranceType;
        this.img = img;
        persons.push(this);
    }
    displayTop() {
        return `
            <div class = "col">
            <div class="card h-100 shadow mb-5 bg-body rounded" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class = "cart-title text-center text-light bg-dark"> ${this.name}</h4>
            <h6 class = "cart-title">Gender: ${this.gender}</h6> 
            <h6 class = "cart-title">Age: ${this.age}</h6>
            <h6 class = "cart-title">Occupation: ${this.occupation}</h6>
            <h6 class = "cart-title bg-${this.insuranceType ? "success" : "danger"} text-center text-white p-2">Insurance: ${this.insuranceType}</h6>
            `;
    }
    displayBottom() {
        return `        
            </div>
            </div>
            </div>`;
    }
    display() {
        return this.displayTop() + this.displayBottom();
    }
}

// ARRAY
let persons = [];
new Person("Jayaprakash", "Male", 35, "Engineer", "Life Insurance", "img/person1.jpg");
new Person("Jeya balaji", "Male", 45, "Doctor", "Health Insurance", "img/person2.jpg");
new Person("Pradeep", "Male", 28, "Teacher", "Car Insurance", "img/person3.jpg");

// Function to display persons
function displayPersons() {
    persons.forEach((person) => {
        document.getElementById("container").innerHTML += person.display();
    });
}

// Display persons initially
displayPersons();
