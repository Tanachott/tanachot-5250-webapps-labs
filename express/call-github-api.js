import axios from 'axios';
import express from 'express';

let app = express();

axios.get('https://api.github.com/users/tanachott', {
    headers: {
        'Authorization': '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'
    }
})

.then(response => {
    app.get('/', (req, res) => {
        res.send('Guthub user name is ' + response.data.name + ' who lives in '+ response.data.location);
    });
    
    app.listen(3000, () => {
        console.log('Server running on port 3000');
        console.log('Guthub user name is '+ response.data.name + ' who lives in '+ response.data.location);
    }); 
    
})