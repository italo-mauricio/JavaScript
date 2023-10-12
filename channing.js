const user = {
    name: "italo",
    age: 25,
    address: {
       street: "rua tal",
       number: 23,
       zip: {
           code: "3212312312",
            city: "caicó"
        }
    }
}

console.log(user.address?.zip?.code ?? "Não informado")