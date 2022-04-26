const express = require('express')
const app = express();
const port = 8000;

//rota
app.get('/', (req , res) =>{
    res.send('ok!')

})


app.listen(port, () => {
    console.log('Server Working!')
})