import { Pool } from 'pg';

const pool= new Pool({
    user:'ChatApp',
    host:'localhost',
    database:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    port:5432,    
})


export default pool