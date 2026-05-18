const cart = 
[
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
     let filter_stock=cart.filter(element=>element.inStock===true)
     let map_totalprice=cart.map(element=>({
                                    name:element.name,
                                    totalprice: element.price*element.quantity
                                  })
                      )
      let totalPrice=cart.reduce((acc,element)=>acc+element.price*element.quantity,0)
      let find_mouse=cart.find(element=>element.name==='Mouse');
      let find_Index=cart.findIndex(element=>element.name==='Keyboard');
console.log(`Use filter() to get only inStock products: `)
console.log(filter_stock)
console.log(`Use map() to create a new array with:  { name, totalPrice }: `)
console.log(map_totalprice)
console.log(`Use reduce() to calculate grand total cart value: ${totalPrice}`)
console.log(`Use find() to get details of Mouse:`)
console.log(find_mouse)
console.log(`Use findIndex() to find the position of Keyboard: ${find_Index}`)