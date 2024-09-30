import axios from 'axios';
import express from 'express';

let app = express();

async function ip() {
    try {
        const response = await axios.get('https://httpbin.org/ip');
        // return response.data;
        let result = {};
        result.ip = response.data.origin;
        return result;
    } catch (error) {
        console.error(error);
        return 'Error fetching IP address';
    }
}

app.get('/ip',async (req, res) => {
    res.send(await ip());
});

app.listen(8082, () => {
    console.log('Server running on port 8082');
}); 
