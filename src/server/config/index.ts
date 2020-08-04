import * as dotenv from 'dotenv'

const env = dotenv.config();

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: 3306,
        database: process.env.DB_NAME
    }
}