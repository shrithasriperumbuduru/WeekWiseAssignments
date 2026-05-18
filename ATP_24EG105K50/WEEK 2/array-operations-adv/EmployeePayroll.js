const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
  const filter_It=employees.filter(element=>element.department=='IT')
  const map_netSalary=employees.map(element=>element.salary+(0.1*element.salary))
  const netSalary=employees.reduce((acc,element)=>(acc+element.salary),0)
  const find_30000=employees.find(element=>element.salary==30000)
  const find_Index=employees.findIndex(element=>element.name=='Neha')
  console.log(`filter() employees from IT department: `)
  console.log(filter_It)
  console.log(`map() to add: netSalary: `)
  console.log(map_netSalary)
  console.log(`reduce() to calculate total salary payout : ${netSalary}`)
  console.log(`find() employee with salary 30000: `)
  console.log(find_30000)
  console.log(`findIndex() of employee "Neha": ${find_Index}`)
