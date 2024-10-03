import mysql from 'mysql2/promise'

let pool

pool = mysql.createPool({
  host:'localhost',
  user:'usuarioDespesas',
  password: '4321',
  database:'despesasdb'
})

export default pool