// importar o sqlite3 //

const sqlite3 = require("sqlite3").verbose()

// criar o objeto de operações na database // 

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto da database para as operações // 

db.serialize(() => {
    // criar uma tabela com SQL//
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // inserir os dados na tabela com SQL //
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `

//    const values = [
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do sul",
//     "Resíduos Eletrônicos, Lâmpadas" 
// ]

//    function afterInsertData(err) {
//            if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//    }

//     db.run(query, values, afterInsertData) 
    
    // consultar os dados na tabela com SQL// 

    // db.all(`SELECT name FROM places`, function(err, rows) {
    //     if(err) {
    //          return console.log(err)
    //      }
        
    //     console.log("Aqui estão os registros: ")
    //      console.log(rows)
    // })

    // Deletar um dado na tabela com SQL //

    // db.run("DELETE FROM places WHERE id = ?", [1], function (err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })


})