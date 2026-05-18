const temperatures = [32, 35, 28, 40, 38, 30, 42];
    const filter_res=temperatures.filter(element=>element>35)
    const map_fahernheit=temperatures.map(element=>(element*(9/5))+32)
    const average=temperatures.reduce((acc,element)=>
                                                    {
                                                        return (acc+element)/7
                                                    })
    const find_res=temperatures.find(element=>element>40)
    const find_index=temperatures.findIndex(element=>element==28)
console.log("filter() temperatures above 35 : "+filter_res)
console.log("map() to convert all temperatures from Celsius → Fahrenheit: ")
console.log(map_fahernheit)
console.log("reduce() to calculate average temperature: ",average)
console.log("find() first temperature above 40: ",find_res)
console.log("findIndex() of temperature 28: ",find_index)