const marks = [78, 92, 35, 88, 40, 67];
    let filter_res=marks.filter(element=>element>=40)
    let map_5=marks.map(element=>element+5)
    let highest=marks.reduce((acc,element)=>acc>element?acc:element)
    let find_lessthan40=marks.find(element=>element<40)
    let find_index=marks.findIndex(element=>element===92)
console.log(`filter() marks ≥ 40 (pass marks): ${filter_res}`)
console.log(`map() to add 5 grace marks to each student: ${map_5}`)
console.log(`reduce() to find highest mark: ${highest}`)
console.log(`find() first mark below 40: ${find_lessthan40}`)
console.log(`findIndex() of mark 92: ${find_index}`)

