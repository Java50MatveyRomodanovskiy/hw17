const employees = [
    createEmployee(123,"Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124,"David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125,"Sarah", 1985, 15000, "New York", "USA"),
    createEmployee(126,"Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127,"Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128,"Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129,"Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130,"Victor", 2003, 10000, "Arad", "Israel")
]
console.log(getEmployee(employees, 129));
getEmployeesBySalary(employees, 15000, 25000).forEach(element => {
  console.log(element);
});
getEmployeesByCity(employees, "London").forEach(element => {
    console.log(element);
  });
getEmployeesNames(employees).forEach(element => {
    console.log(element);
  });
sortEmployeesByAge(employees).forEach(element => {
    console.log(element);
  });
console.log(`Total salary is ${computeSalaryBudget(employees)}`);
function createEmployee(id, name, birthYear, salary, city, country){
    return{id, name, birthYear, salary, address:{city, country}}
}
function getEmployee(employees, id){
        return employees.find(function(employee){
            return employee.id == id;
});
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo){
        return employees.filter(empl=>(empl.salary>=salaryFrom && empl.salary <= salaryTo))
}
function getEmployeesByCity(employees, city){
    return employees.filter(empl=>(empl.address.city === city));
}
function getEmployeesNames(employees){
    return employees.map(empl=> (empl.name))
}
function sortEmployeesByAge(employees){
    return employees.sort((e1,e2) =>(e2.birthYear - e1.birthYear))
}
function computeSalaryBudget(employees){
    return employees.reduce(function(sum, empl){
       return sum + empl.salary;
},0);
}
