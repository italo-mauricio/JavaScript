//const somaDoisNumeros = (a, b) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve(a + b);
//        }, 2000);
//    })
//}

//somaDoisNumeros(1, 2)
//    .then(soma => {
//        console.log(soma)
//    })


// fetch('https://api.github.com/users/italo-mauricio')
//     .then(response => {
//         response.json().then(body => {
//             console.log(body);
//         })
//     } )
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("ok");
//     })

async function buscaDadosGithub(){
    try {
        const response = await fetch('https://api.github.com/users/italo-mauricio')
        const body = await response.json();
        console.log(body);
    }
    catch (err) {
        console.log(err);
    }
}
buscaDadosGithub();