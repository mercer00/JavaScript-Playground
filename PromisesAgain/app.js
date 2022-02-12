const numBoyfriends = Math.floor(Math.random() * 10 + 1)
const numGirlfriends = Math.floor(Math.random() * 10 + 1)

function party(name , boyfriends , girlfriends) {
    return new Promise((resolve , reject) => {
        if (boyfriends > 4) {
            resolve({
                name,
                type: "Boyfriends",
                friends: boyfriends,
                remarks: "Homie material! , Invited!"
            })
        }
        else if (girlfriends > 4) {
            resolve({
                name,
                type: "Girlfriends",
                friends: girlfriends,
                remarks: "Girly material? , Invited!"
            })
        }
        else {
            reject({
                name,
                boyfriends,
                girlfriends,
                remarks: "Too introverted , Rejected!"
            })
        }
    })
}

party("Jojo", numBoyfriends , numGirlfriends).then((message) => {
    console.log(`${message.name} has ${message.friends} ${message.type} , ${message.remarks}`)
}).catch((message) => {
    console.log(`${message.name} has ${message.boyfriends} Boyfriends and ${message.girlfriends} Girlfriends , ${message.remarks}`)
})