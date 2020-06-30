const { Client } = require('pg');

const client = new Client('postgress://localhost:5432/linkerator-dev');

module.exports = {
  client,
}
