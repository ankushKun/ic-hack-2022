import mysql from "mysql2";
import * as CONFIG from "../../../../config";
import hash from "../../../../utils/hash";

export default function handler(req, res) {
    const { updateEmail, githubUname } = req.body;

    const con = mysql.createConnection({
        host: CONFIG.host,
        database: CONFIG.db,
        user: CONFIG.user,
        password: CONFIG.pass,
        port: CONFIG.port,
    });

    const QUERY = `UPDATE mentee_auth SET github_username = "${githubUname}" WHERE email = "${updateEmail}"`;

    con.query(QUERY, function (err, results, fields) {
        /* console.log("err", err); */
        /* console.log("results", results); */
        /* console.log("fields", fields); */
        con.end();
        if (err) {
            console.log(err);
            res.status(500).json({ code: err.code, name: err.name });
        } else if (results) {
            res.status(200).json({ status: "OK" });
        }
    });
    /* res.status(200).json({ status: `${name} signed up` }); */
    /* res.status(500).json({ code: err.code, sqlMessage: err.sqlMessage }); */
    /* console.log(result); */
}
