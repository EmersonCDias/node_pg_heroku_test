require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
                          postgres://pdqyvwdxqwsnaw:25c5f3241788e2a61ba8ab687579429e63543b3a9db41c47807e70f96f1bff17@ec2-3-228-75-39.compute-1.amazonaws.com:5432/deu558mlevhl5a
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
})

module.exports = { pool }