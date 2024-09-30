document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.getElementById("form");
    const list = document.getElementById("employees");
    
    let employees = [];
    
    function Employee(firstName, lastName, email, birthDate, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = birthDate;
        this.jobTitle = jobTitle;
        
        this.info = function() {
            return `${this.firstName} ${this.lastName} - ${this.jobTitle}`;
        }
    }
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const birthDate = document.getElementById("birth-date").value;
        const jobTitle = document.getElementById("job-title").value;
    
        const newEmployee = new Employee(firstName, lastName, email, birthDate, jobTitle);
    
        employees.push(newEmployee);
    
        list.innerHTML = "";
        for (employee of employees) {
            let p = document.createElement("p");
            p.textContent = employee.info();
            list.appendChild(p);
        }
    })
});
