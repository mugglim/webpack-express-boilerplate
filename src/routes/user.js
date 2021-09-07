import express from 'express';
import mySql from 'mysql2';
import dbConfig from '../../config/db.config.js';

const router = express.Router();
const dbConneciton = mySql.createConnection(dbConfig);

dbConneciton.connect();

router.get('/', (req, res, next) => {
    dbConneciton.query('SELECT * from student;', (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ', rows);
        res.send('User');
    });
});

export default router;
