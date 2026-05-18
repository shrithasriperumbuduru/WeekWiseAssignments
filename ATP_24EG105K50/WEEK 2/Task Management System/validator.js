function validateTitle(title) 
{
    if(!title)
    {
        return "title required"
    }
    if(title.length<3)
    {
        return 'Minimun 3 Charracters required'
    }
    return "Title is valid"
} 
function validatePriority(priority) 
{
    //includes

    let priorties=['high','low','medium']
    let result=priorties.includes(priority)
    if(!result)
    {
        return false;
    }
    return true;
}
function validateDueDate(date)
{
    // 3. Validate due date (must be future date)
    let today = new Date('2024-06-01');
    let dueDate = new Date(date)
    if(dueDate <= today)
    {
        return false
    }
    return true
}
export {validateTitle,validatePriority,validateDueDate}