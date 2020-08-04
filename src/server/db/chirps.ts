import * as express from 'express';
import config from "../config";
import * as mysql from 'mysql' //JOSH! what is * as for? Is it importing every export or is it something else? 
// modules don't have a default export. * as gives modules w/out default exports a name. requiring the same as importing
//import give more control 
const router = express.Router()

const Connection = mysql.createConnection(config.mysql)//hook up connection 

Connection.connect()

//ROUTES
router.get('/', (req, res) => {
    const sql = 'SELECT chirps.*, users.name FROM chirps JOIN users ON users.id = chirps.userid '
    Connection.query(sql, (err, results, fields) => {
        if (err) throw err
        res.send(results)
    })
})

router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM chirps WHERE chirps.id = ?'
    Connection.query(sql,[req.params.id], (err, results, fields) => {
        if (err) throw err
        res.send(results)
    })
})

router.put('/:id', (req, res) => {
    //creates update router that makes updates to current chirps
    const sql = 'UPDATE chirps SET content = ? , location = ? WHERE chirps.id = ?';
    Connection.query(sql, [req.body.content, req.body.location, req.params.id], (err, results, fields) => {
        if (err) throw err
        res.send(results)
    })
})

  // Create Delete route
router.delete('/:id', (req, res) => {
    Connection.query(
      'DELETE FROM chirps WHERE chirps.id = ?',
      [req.params.id],
      (err, results, fields) => {
        if (err) throw err;
        res.send(results);
      }
    );
  });
  //Create Post Route -- 
  router.post('/', (req, res) => {
    Connection.query(
        'INSERT INTO chirps (userid,content,location) VALUES (?,?,?)',
        [req.body.userid, req.body.content, req.body.location],(err, results, fields) =>{
            if(err) throw err;
            res.send(results)
        }
    )


  })
  
export default router 