// PARENT CLASS INSURED PERSON
class InsuredPerson {
    name: string;
    gender: string;
    age: number;
    occupation: string;
    insuranceType: string;
    img: any;

    constructor(name: string, gender: string, age: number, occupation: string, insuranceType: string, img: any) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.occupation = occupation;
        this.insuranceType = insuranceType;
        this.img = img;
        insuredPersons.push(this);
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
            <h6 class = "cart-title bg-${this.insuranceType ? "success" : "danger"} text-center text-white p-2">Insurance Type: ${this.insuranceType}</h6>
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

// CHILD CLASS LIFE INSURANCE
class LifeInsurance extends InsuredPerson {
    policyTerm: number;
    coverageAmount: number;

    constructor(name: string, gender: string, age: number, occupation: string, insuranceType: string, img: any, policyTerm: number, coverageAmount: number) {
        super(name, gender, age, occupation, insuranceType, img);
        this.policyTerm = policyTerm;
        this.coverageAmount = coverageAmount;
    }

    displayTop() {
        return `
            ${super.displayTop()}
            <h6 class = "cart-title">Policy Term: ${this.policyTerm} years</h6>
            <h6 class = "cart-title">Coverage Amount: $${this.coverageAmount}</h6>`;
    }
}

// CHILD CLASS HEALTH INSURANCE
class HealthInsurance extends InsuredPerson {
    policyTerm: number;
    coverageType: string;

    constructor(name: string, gender: string, age: number, occupation: string, insuranceType: string, img: any, policyTerm: number, coverageType: string) {
        super(name, gender, age, occupation, insuranceType, img);
        this.policyTerm = policyTerm;
        this.coverageType = coverageType;
    }

    displayTop() {
        return `
            ${super.displayTop()}
            <h6 class = "cart-title">Policy Term: ${this.policyTerm} years</h6>
       
