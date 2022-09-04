import mysql from "mysql2";
import * as CONFIG from "../../../config.js";
import hash from "../../../utils/hash.js";

export default function handler(req, res) {
  const { email, name, pass, phone } = req.body;

  const con = mysql.createConnection({
    host: CONFIG.host,
    database: CONFIG.db,
    user: CONFIG.user,
    password: CONFIG.pass,
    port: CONFIG.port,
  });

  const QUERY = `INSERT INTO mentee_auth values("0", "${name}",  "${String(email).toLowerCase()}", "${hash(pass)}", "${phone}", NULL, NULL, "1st", "Chandigarh University");`;

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
