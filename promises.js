let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve('Success')
    } else {
        reject ('failed')
    }
});

// .then is for the resolve ^^ portion
// .catch is for the reject part

p.then((message) => {
    console.log('This is in the then' + message)
}).catch((message) => {
    console.log('This is in the catch' + message)
})