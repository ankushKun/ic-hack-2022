import mysql from "mysql2";
import * as CONFIG from "../../config.js";
import hash from "../../utils/hash.js";

export default function handler(req, res) {
    const { email } = req.body;

    const con = mysql.createConnection({
        host: CONFIG.host,
        database: CONFIG.db,
        user: CONFIG.user,
        password: CONFIG.pass,
        port: CONFIG.port,
    });

    const QUERY = `SELECT * FROM mentee_auth WHERE email="${String(email).toLowerCase()}"`;

    con.query(QUERY, function (err, results, fields) {
        /* console.log("err", err); */
        /* console.log("results", results); */
        /* console.log("fields", fields); */
        con.end();
        if (err) {
            res.status(500).json({ code: err.code, name: err.name });
        } else if (results) {
            const queryRes = results[0];
            if (!queryRes) {
                res.status(404).json({ "error": "User doesnot exist" });
            }
            else {
                res.status(200).json({
                    name: queryRes.name,
                    phone: queryRes.phone,
                    year: queryRes.year,
                    college: queryRes.college,
                    leetcode_username: queryRes.leetcode_username,
                    github_username: queryRes.github_username,
                })
            }
        }
    });
}
