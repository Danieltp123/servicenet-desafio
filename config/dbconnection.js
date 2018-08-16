const express = require('express');
const Knex = require('knex');
const crypto = require('crypto');

const app = express();
app.enable('trust proxy');

const knex = connect();

function connect () {
  const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
  };

  if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    config.host = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }

  // Connect to the database
  const knex = Knex({
    client: 'pg',
    connection: config
  });

  return knex;
}