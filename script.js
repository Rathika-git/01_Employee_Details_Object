const employees = [
  {
    id: "C101",
    name: "Varun",
    role: "Junior Web Developer",
    experience: "2 Years",
    payout: "25000",
  },
  {
    id: "C102",
    name: "Srinika",
    role: "Junior Web Developer",
    experience: "1 Year",
    payout: "20000",
  },
  {
    id: "C103",
    name: "Rakshitha",
    role: "Front End Developer",
    experience: "3 Years",
    payout: "30000",
  },
  {
    id: "C104",
    name: "Hema",
    role: "Junior Web Developer",
    experience: "3 Years",
    payout: "25000",
  },
  {
    id: "C105",
    name: "Deepak",
    role: "Front End Developer",
    experience: "4 Years",
    payout: "35000",
  },
  {
    id: "C106",
    name: "Sakthi",
    role: "Back End Developer",
    experience: "2 Years",
    payout: "30000",
  },
  {
    id: "C107",
    name: "Dakshan",
    role: "Senior Front End Developer",
    experience: "5 Years",
    payout: "45000",
  },
  {
    id: "C108",
    name: "Ananth",
    role: "BDE",
    experience: "2 Years",
    payout: "20000",
  },
  {
    id: "C109",
    name: "Sharaddha",
    role: "Business Associate",
    experience: "1 Year",
    payout: "15000",
  },
  {
    id: "C110",
    name: "Dinesh",
    role: "Tech Lead",
    experience: "4 Years",
    payout: "65000",
  },
];


//First Method:
/*const employeeNames = employees.map(employee => employee.name);
console.log(employeeNames);

//Second Method:
const employeeNames = [];

for (let i = 0; i < employees.length; i++) {
  employeeNames.push(employees[i].name);
}
console.log(employeeNames);*/

//Third Method:
// Function to display employee names on the web page
function displayEmployeeNames() {
  const employeeNames = employees.map(employee => employee.name);
  const employeeList = document.getElementById('employeeList');

  // Create list items and append them to the unordered list
  employeeNames.forEach(name => {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      //Added styles to the list
      listItem.style.fontFamily = 'Arial';
      listItem.style.fontSize = '16px';
      listItem.style.color = 'blue';
      employeeList.appendChild(listItem);
  });
}

// Calling the function to display employee names when the page loads
window.addEventListener('load', displayEmployeeNames);