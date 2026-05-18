const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
let deep_copy=structuredClone(order);
deep_copy.customer.address.city='Bengaluru'
deep_copy.items[0].price=50000
console.log(order)
console.log(deep_copy)