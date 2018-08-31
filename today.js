const express = require('express');
const path = require('path');
const search = express();
search.use(express.static('./www'))
search.get('/',(req,res) => {
    res.sendFile(path.resolve('./index.php'));
})
search.listen(80);