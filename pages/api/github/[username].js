import axios from "axios";

export default async function handler(req, res) {
    const { username } = req.query;
    // console.log(username);
    const header = {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36' }
    };
    const data = await axios.get("https://api.github.com/users/" + username);

    res.status(200).json(data.data);
}
