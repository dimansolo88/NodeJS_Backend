const express = require('express');


const users = require("./users-Router")
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();




app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);




app.get('/tasks', async (req, res) => {
    res.send("TASKS");

});


app.use((req, res) => {
    res.send(404)
});




app.listen(7743,  () => {
    console.log('Example app listening on port 7743!');
});






// let http = require("http");
// // let {getUsers,addUser} = require('./repository')

// let {usersController} = require('./usersController')


// // let users = [
// //     {"id": 1, "name": "vovchik" },
// //     {"id": 2, "name": "vovchik3" },
// // ]




// let cors = (req, res) => {

//     // Set CORS headers
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Request-Method', '*');
// res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
// res.setHeader('Access-Control-Allow-Headers', '*');
// if ( req.method === 'OPTIONS' ) {
//     res.writeHead(200);
//     res.end();
//     return(tue);
// }
// return(false);

// }

// let server = http.createServer((req, res) => {

//    if(cors(req,res)) return;


//     console.log("some request")

//     switch(req.url) {
//         case '/users': 

//         usersController(req,res);
           
//             // if(req.method === "POST") {
                

//             //     addUser('IGNAT2')
//             //     res.write(JSON.stringify({success: true}))
//             // }
//             // else {
//             //     res.write(JSON.stringify(getUsers()))
//             // }

        
//         break;

//         case '/lessons': {
//             res.write("TASKS")
//         }
//         break;
//         default:
//             res.write("PAGE IS NOT FOUND")

//     }

//     // res.end()

// }  )

// server.listen(7742)
// console.log(http)







