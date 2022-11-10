const mongoose = require('mongoose')

//COM A IMPORTAÇÃO DO MÓDULO EXTERNO DO MONGOOSE, PODEMOS CHAMAR A PARTIR DA VARIÁVEL, MONGOOSE, 
//O MÉTODO connect() QUE RECEBE COMO PARÂMETRO A STRING DE CONEXÃO DO BANCO, NESTE CASO, O MONGO ATLAS.


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://andrefelipe:andre1986@cluster0.z43hilq.mongodb.net/node_mongo')
}






//A VARIÁVEL DB RECEBE A CONEXÃO DO BANCO E VAMOS EXPORTA-LA
let db = mongoose.connection



//EXPORTA A CONEXÃO COM O MONGO( ATLAS OU LOCAL, DEPENDENDO DA STRING DE CONEXÃO)
module.exports = db