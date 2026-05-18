const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
let shallow_copy={...user}
shallow_copy.name='laasya'
shallow_copy.preferences.theme='light'
console.log(user)
console.log(shallow_copy)
