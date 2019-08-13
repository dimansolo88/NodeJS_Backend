
let http = require("http");
// let {getUsers,addUser} = require('./repository')

let {usersController} = require('./usersController')


// let users = [
//     {"id": 1, "name": "vovchik" },
//     {"id": 2, "name": "vovchik3" },
// ]




let cors = (req, res) => {

    // Set CORS headers
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Request-Method', '*');
res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
res.setHeader('Access-Control-Allow-Headers', '*');
if ( req.method === 'OPTIONS' ) {
    res.writeHead(200);
    res.end();
    return(tue);
}
return(false);

}

let server = http.createServer((req, res) => {

   if(cors(req,res)) return;


    console.log("some request")

    switch(req.url) {
        case '/users': 

        usersController(req,res);
           
            // if(req.method === "POST") {
                

            //     addUser('IGNAT2')
            //     res.write(JSON.stringify({success: true}))
            // }
            // else {
            //     res.write(JSON.stringify(getUsers()))
            // }

        
        break;

        case '/lessons': {
            res.write("TASKS")
        }
        break;
        default:
            res.write("PAGE IS NOT FOUND")

    }

    // res.end()

}  )

server.listen(7742)
console.log(http)







