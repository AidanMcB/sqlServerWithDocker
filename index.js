const { SlowBuffer } = require('buffer');
const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'super_duper_password',
    server: 'localhost',
    databasse: 'testdb1',
    options: {
        enableArithAbort: true
    }
}

const run = async () => {
    let pool;
    try {
        console.log('Connection opening...');
        pool = await sql.connect(config)
        const { recordset } = await sql.query`select * from users;`;

        console.log(recordset);
    } catch (error) {
        console.log(error)
    } finally {
        await pool.close()
        console.log('Connection closed');
    }
}

run()