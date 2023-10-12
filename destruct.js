const user = {
    name: "italo",
    age: 29,
    addres: "rua tal"
}


function showAge({age}){
    return age;
}

const { addres, age, name } = user
document.body.innerText = JSON.stringify({ addres, age })