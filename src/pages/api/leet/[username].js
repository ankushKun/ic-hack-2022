import axios from "axios";
var JSSoup = require('jssoup').default;

export default async function handler(req, res) {
  const { username } = req.query;
  // console.log(username);
  const header = {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36' }
  };
  const data = await axios.get("https://leetcode-stats-api.herokuapp.com/" + username);
  // const data = await axios.get("https://leetcode.com/" + username, header);
  // const data = await axios.get("https://www.hackerrank.com/" + username + "?hr_r=1", header);
  // const soup = new JSSoup(data.data);
  // var fundamental = soup.findAll("span");
  // console.log(fundamental);
  // fundamental.forEach(span => {
  //   console.log(span.prettify());
  // });
  res.status(200).json(data.data);
}
