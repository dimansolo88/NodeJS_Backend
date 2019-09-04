let fs = require('fs');

exports.reedFile = (pathFile) => {
    return  new Promise((resolve, reject) => {
        fs.readFile(pathFile, function (err, buf) {
            if(err) {
                reject(err)
            }
            else{
            resolve(JSON.parse(buf.toString()));
            }
        })

    })
    

}


exports.writeFile = (pathFile, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(pathFile, JSON.stringify(data), (err) => {
            if(err) reject(err)
            
            resolve()
            
           
        } )


    })
}


