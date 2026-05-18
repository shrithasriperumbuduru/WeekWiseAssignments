const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
  const filter_marks=students.filter(element=>element.marks>=40)
  const grade_studentMarks=students.map(element=>{
                                                let Grade
                                                if(element.marks>=90)
                                                {
                                                    Grade='A';
                                                }
                                                else if(element.marks>=75)
                                                {
                                                    Grade='B';
                                                }
                                                else if(element.marks>=60)
                                                {
                                                    Grade='C';
                                                }
                                                else
                                                {
                                                    Grade='D';
                                                }
                                                return {name:element.name,Grade:Grade}
                                              })
  const totalMarks=students.reduce((acc,element)=>(acc+element.marks),0)
  const averageMarks=totalMarks/students.length
  const find_s92=students.find(element=>element.marks===92)
  const find_Index=students.findIndex(element=>element.name==='Kiran');
console.log("filter() students who passed (marks ≥ 40): ")
console.log(filter_marks)
console.log(`map() to add a grade field : `)
console.log(grade_studentMarks)
console.log(`reduce() to calculate average marks : ${averageMarks}`)
console.log(`find() the student who scored 92: `)
console.log(find_s92)
console.log(`findIndex() of student "Kiran": ${find_Index}`)