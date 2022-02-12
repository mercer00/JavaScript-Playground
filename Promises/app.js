let myPromise = new Promise((resolve , reject) => {
    let random = Math.floor(Math.random() * 10 + 1)
    if (random < 6) {
        resolve(`Successful , The number was ${random}`)
    } else {
        reject(`Failed , The number was ${random}`)
    }
})

myPromise.then((success) => {console.log(`Yoohoo! , ${success}`)}).catch((failure) => {console.log(`Damn.. , ${failure}`)})