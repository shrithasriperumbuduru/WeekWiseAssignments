import {addTask,completeTask,getAllTasks}from './task.js'
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again


console.log(addTask("light","high","2024-09-05"))
console.log(addTask("dark","low","2024-05"))
console.log(addTask("gold","high","2025-01-06"))
console.log(`Display all tasks: `)
let result=getAllTasks()
console.log(result)
console.log(completeTask("light"))
console.log(`Again Display:`)
console.log(getAllTasks())
