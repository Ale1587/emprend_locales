import { Pool } from 'pg';
import dotenv from 'dotenv';

// Configuración de dotenv
dotenv.config({path: '.env' })

const config = {

    user: process.env.BD_USER,
    host: process.env.BD_HOST,
    password: process.env.BD_PASS,
    database: process.env.BD_NOMBRE,
    port: process.env.BD_PORT,
    max:20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000,
}

const pool = new Pool(config)

export default pool