
// class job
//     name
//     industry
//     requiresDegree
//     field
//     certifications
//     salary

// getName .. getFieldAndIndustry .. other option

class Job {
    constructor(name, industry, requiresDegree, field, certifications, salary) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.certifications = certifications;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getFieldAndIndustry () {
        return this.field,
               this.industry;
    }
    getSalary() {
        return this.salary;
    }
}

class YearsOfSchool extends Job {
    constructor(name, industry, requiresDegree, field, certifications,salary, training, major) {
        super(name,industry, requiresDegree, field, certifications,salary); 
        this.training = training;
        this.major = major;
        }
    
        getTraining() {
            return "It takes " + this.training + " years of training to be a " + this.name + ".";
         }

         getMajor() {
            return "A " + this.name + " requires a major in " + this.major + ".";
         }
}    

const jobObject = new Job("Cybersecurity Analyst", "Tehnology", "Associates Degree", "Security", "Security+ (at minimum)", "$130,000 Per Year")  
const jobObject2 = new Job("Journalist", "Media", "Bacherlor's Degree", "Sports", "None","$80,000" )
const jobObject3 = new Job("Doctor", "Healthcare", "Medical Doctor Degree", "Internal", "Pass MCATS", "$200,000 Per Year")

let experience = new YearsOfSchool("Pilot", "Aviation", "None", "Commercial", "$95,000","Airline Pilot License", "2 years");

let train = new YearsOfSchool("Software Engineer", "Technology", "Bachelor's Degree", "Programming", "None", "$95,000", "18 months")
let majorName = new YearsOfSchool("Software Engineer", "Technology", "Bachelor's Degree", "Programming", "None", "$95,000", "18 months", "Computer Science")

console.log(jobObject, jobObject2, jobObject3, '\n');
console.log(jobObject.getName(),'\n');
console.log(jobObject3.getFieldAndIndustry(), '\n');
console.log(jobObject2.getSalary(), '\n');

console.log(experience, '\n');

console.log(train.getTraining(), '\n');
console.log(majorName.getMajor());