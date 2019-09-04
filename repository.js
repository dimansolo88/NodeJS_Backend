// let users = [
//     {"id": 1, "name": "vovchik" },
//     {"id": 2, "name": "vovchik3" },
// ]






let {reedFile, writeFile} = require('./fs-utills')


const addUser = async (name) => {
    let users = await getUsers();
    users.push({ name: name });

    return writeFile ("users.json", users)

    // return new Promise((resolve, reject) => {
    //     fs.writeFile("users.json", JSON.stringify(users), (err) => {
    //         if(err) reject(err)
            
    //         resolve()
            
           
    //     } )


    // })


}


const getUsers = async() => {
    // return users   
    
    return reedFile("users.json")

    // return new Promise((resolve, reject) => {
    //     fs.readFile("users.json", function (err, buf) {
    //         if(err) {
    //             reject(err)
    //         }
    //         else{
    //         resolve(JSON.parse(buf.toString()));
    //         }
    //     })

    // })

}


exports.addUser = addUser;
exports.getUsers = getUsers;


// let fs = require('fs');


// const addUser = async (name) => {
//     let users = await getUsers();
//     users.push({ name: name });



//     return new Promise((resolve, reject) => {
//         fs.writeFile("users.json", JSON.stringify(users), (err) => {
//             if(err) reject(err)
            
//             resolve()
            
           
//         } )


//     })


// }


// const getUsers = async() => {
//     // return users    

//     return new Promise((resolve, reject) => {
//         fs.readFile("users.json", function (err, buf) {
//             if(err) {
//                 reject(err)
//             }
//             else{
//             resolve(JSON.parse(buf.toString()));
//             }
//         })

//     })

// }


// exports.addUser = addUser;
// exports.getUsers = getUsers;

