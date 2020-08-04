// //import * as mysql from 'mysql'
// // import Chirps from './chirps'
// // import Users from './users' 



// const app = 'express'
// export const Connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'chirpr',
//     password: 'hQzr@1981',
//     database: 'chirprapp'
// })//hook up connection 

// // app.get('/users', (req, res) =>{
// //     const sql = 'SELECT * FROM users'
// //     Connection.query(sql)
// // })


// export const Query = (query:string, values?: Array<string | number>) => {

//     return new Promise<Array<any>>((resolve, reject) =>{
// Connection.query(query,values, (err, results) =>{
//     if(err)return reject(err);
//     resolve(results)
// });
//     })
//     }



// export default {
// Chirps,
// Users
// }

import { Router } from 'express'
import chirpsRouter from './chirps'
const router = Router()

router.use('/chirps', chirpsRouter)

export default router