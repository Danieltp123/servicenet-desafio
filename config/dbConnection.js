const { Client } = require('pg')
const connectionString = 'postgresql://daniel:23032013@database.server.com:5432/snet'
const client = new Client({
  connectionString: connectionString,
})
client.connect()


module.exports =function(){
    return client;
}