const array = [1,2,3,4,5,6,7]


const novoArray = array.map(item => {
    if (item % 2 === 0){
        return item * 10;
    }
    return item
})

console.log(novoArray)


// posso adicionar condicionais ao map