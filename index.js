import express from "express"
const app = express()
const port = 3000

const pessoa1 = criarPessoa("Letícia Santana", 35, [
    "ler",
    "escrever",
    "cantar",
],  "lets@gmail.com",);

const pessoa2 = criarPessoa("Juliane Santos", 25, [
    "Fazer stories",
    "Cozinhar",
    "Organizar a casa",

], "juju@gmail.com");

const pessoa3 = criarPessoa("Kaíque Garcia", 28, [
    "Jogar vôlei",
    "Malhar",
    "Assistir séries",
], "kg@gmail.com");

function criarPessoa(nome, idade, hobbies, email){
    return {
        nome,
        idade,
        hobbies,
        email,
    };
}

app.get('/pessoa', (req, res) =>{
    const pessoaJson = JSON.stringify(pessoa1)
    res.setHeader("Content-Type","application/json")
    res.send(pessoaJson)


})

app.get('/pessoaLista', (req, res) =>{
    const pessoaJson = JSON.stringify([pessoa1, pessoa2, pessoa3])
    res.setHeader("Content-Type","application/json")
    res.send(pessoaJson)


})

app.listen(port,() => {
console.log("Server rodando com sucesso")
})