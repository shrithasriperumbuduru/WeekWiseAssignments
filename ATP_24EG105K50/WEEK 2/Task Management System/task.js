import { validateTitle,validatePriority,validateDueDate } from './validator.js';
let tasks=[];
function addTask(title, priority, dueDate)
{
    if(!validateDueDate(dueDate)||!validatePriority(priority)||!validateTitle(title))
    {
        return 'Invaild task'
    }
    tasks.push({title,priority,dueDate});
    return 'Task Added'
}
function getAllTasks()
{
    return tasks;
}
function completeTask(taskId) 
{
    let complete=tasks.find(element=>element.title==taskId)
    if(complete)
    {
        tasks=tasks.filter(element=>element.title!=taskId)
        return "complete task"
    }
    else
    {
        return "task not found"
    }
}
export {addTask,completeTask,getAllTasks}