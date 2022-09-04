import mysql from "mysql2";
import * as CONFIG from "../../../config.js";
import hash from "../../../utils/hash.js";

export default function handler(req, res) {
  const { email, pass } = req.body;

  const con = mysql.createConnection({
    host: CONFIG.host,
    database: CONFIG.db,
    user: CONFIG.user,
    password: CONFIG.pass,
    port: CONFIG.port,
  });

  const QUERY = `SELECT * FROM mentor_auth WHERE email = "${String(
    email
  ).toLowerCase()}"`;

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
      if (hash(pass) === queryRes.pass_hash || pass === queryRes.pass_hash) {
        res.status(200).json(queryRes);
      } else {
        res.status(401).json({ error: "Incorrect Password" });
      }
    }
  });
}
