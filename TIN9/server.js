const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/calculate', (req, res) => {
    var x = parseFloat(req.body.x);
    var y = parseFloat(req.body.y);
    var operation = req.body.operation;
    if (operation === 'add') {
        res.json({ result: (x + y) });
    } else if (operation === 'sub') {
        res.json({ result: (x - y) });
    } else if (operation === 'mul') {
        res.json({ result: (x * y) });
    } else if (operation === 'div') {
        if (y === 0){
          res.json(null);
        }else{
          res.json({ result: (x / y) });
        }
    }
});

app.listen(3000, () => {
    console.log('Listening at port 3000');
});
