const express = require('express');
const server = express();

// acessar a db //

const db = require("./database/db")

// configurar pasta pública //

server.use(express.static("public"))

// habilitar o body na aplicação //

server.use(express.urlencoded({ extended: true}))

// utilizando template engine //

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// configurar caminhos da minha aplicação //

// página inicial //

server.get("/", (req, res) => {
   return res.render("index.html")
})

server.get("/create-point", (req, res) => {
   

    return res.render("create-point.html")
 })

 server.post("/savepoint", (req, res) => {

   // inserir dados no banco de dados //

       const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`

   const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
]

   function afterInsertData(err) {
           if(err) {
             console.log(err)
             return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
   }

    db.run(query, values, afterInsertData) 

    console.log("ok")
 })

 server.get("/search", (req, res) => {

  const search = req.query.search

  if(search == "") {
     // pesquisa vazia
     return res.render("search-results.html", { total: 0})
  }



    // pegar os dados na db //

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
          if(err) {
               return console.log(err)
           }
            const total = rows.length

         // exibir o html com os dados da database //

           return res.render("search-results.html", { places: rows, total})
      })   
 })

// Ligar o servidor //

server.listen(3000)