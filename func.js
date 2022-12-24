var x = 5;  // global


function teste(){
    var y = 10;  // escopo da função
    for (var z = 1; z < 10; z++){
        // z tem escopo de função
        let b = z + 1;
        console.log(b);
    }
}

teste();