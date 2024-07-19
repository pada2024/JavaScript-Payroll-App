// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function () {
  const employeesList = [];
  let isAddingEmployees = true;
  while (isAddingEmployees) {
    const firstName = prompt('Please input employee\'s First Name');
    const lastName = prompt('Please input employee\'s Last Name');
    const salary = prompt('Please input employee\'s Salary');
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }

    console.log(newEmployee);
    employeesList.push(newEmployee);
    isAddingEmployees = confirm('Would you like to add more employee\'s?');
  }

  return employeesList;

  //Collect added Employee Information

  const firstName = "firstName";
  const lastName = "lastName";
  const salary = "salary";

  //Selecting table from provided HTML
  const table = document.getElementById("employee-table");

  //Create New Row for newly inputted employee data
  const row = table.insertRow();

  // Create cells and add data
  const cell1 = row.insertCell(0);
  cell1.textContent = firstName;

  const cell2 = row.insertCell(1);
  cell2.textContent = lastName;

  const cell3 = row.insertCell(1);
  cell2.textContent = salary;



}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // salaries array
let salaries = [50000, 60000, 70000];

// Calculation for the total sum of inputted salaries
let totalSum = salaries.reduce((acc, curr) => acc + curr, 0);

// Calculate the average salary
let averageSalary = totalSum / salaries.length;

// Display the average salary
console.log(`The average employee salary is $${averageSalary.toFixed(2)}`);
  
}

console.log('displayAvergeSalary');

// Select a random employee
const getRandomEmployee = function (employeesArray) {

  // Array of employee objects
let employees = [
  { firstName: 'John', lastName: 'Doe', salary: 50000 },
  { firstName: 'Jane', lastName: 'Smith', salary: 60000 },
  { firstName: 'Alice', lastName: 'Johnson', salary: 70000 }
];

// Generate a random index
let randomIndex = Math.floor(Math.random() * employees.length);

// Access the random employee object
let randomEmployee = employees[randomIndex];

// Display the random employee information
console.log('Random Employee:');
console.log('First Name:', randomEmployee.firstName);
console.log('Last Name:', randomEmployee.lastName);
console.log('Salary:', randomEmployee.salary);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
